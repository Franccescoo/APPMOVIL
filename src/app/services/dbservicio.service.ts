import { Injectable } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auto } from './auto';
import { Comuna } from './comuna';
import { DetalleViaje } from './detalleviaje';
import { Rol } from './rol';
import { Usuario } from './Usuario';
import { Viaje } from './viaje';
import { ViajeComuna } from './viajecomuna';

@Injectable({
  providedIn: 'root'
})
export class DbservicioService {

  public database: SQLiteObject;


  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(idrol INTEGER PRIMARY KEY , nombrerol VARCHAR (30) NOT NULL);";
  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(idusuario INTEGER PRIMARY KEY  , nombre VARCHAR (20)  , clave VARCHAR (15), foto VARCHAR(30) ,fk_id_rol INTEGER ,FOREIGN KEY(fk_id_rol) REFERENCES rol(idrol));";
  tablaAuto: string = "CREATE TABLE IF NOT EXISTS auto( patente VARCHAR(30) PRIMARY KEY   , marca VARCHAR (20) ,  modelo VARCHAR (30)  , puesto INTEGER  ,fk_id_usuario INTEGER ,FOREIGN KEY(fk_id_usuario) REFERENCES usuario(idusuario)) ;";
  tablaViaje: string = "CREATE TABLE IF NOT EXISTS viaje(idviaje INTEGER PRIMARY KEY , inicio VARCHAR (50) , destino VARCHAR (50)  , asientos INTEGER , costo_viaje INTEGER  , fecha_viaje VARCHAR(30)  , hora_partida INTEGER , hora_llegada INTEGER , fk_patente INTEGER , fk_idusuario INTEGER );";
  


  // INSERTS //
  
  usuario1: string = "INSERT or IGNORE INTO usuario(idusuario, nombre, clave, fk_id_rol) VALUES (1, 'v.rosendo','J.12mm8', 1);";
  usuario2: string = "INSERT or IGNORE INTO usuario(idusuario, nombre, clave, fk_id_rol) VALUES (2, 'j.baez','B.34vf8', 2);";
  usuario3: string = "INSERT or IGNORE INTO usuario(idusuario, nombre, clave, fk_id_rol) VALUES (3, 'a.diaz','C.54yt78', 2);";


  auto1: string = "INSERT or IGNORE INTO auto(patente, marca ,fk_id_usuario) VALUES ('FF-HH-22','Audi',1);";
  auto2: string = "INSERT or IGNORE INTO auto(patente, marca ,fk_id_usuario) VALUES ('GG-11-RR','BMW',1);";


  conductor: string = "INSERT or IGNORE INTO rol(idrol, nombrerol) VALUES (1, 'Conductor');";
  pasajero: string = "INSERT or IGNORE INTO rol(idrol, nombrerol) VALUES (2, 'Pasajero');";
  //OBSERVABLES //

  listausuario = new BehaviorSubject([]);

  listauto = new BehaviorSubject([]);

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(public NativeStorage : NativeStorage ,private sqlite: SQLite, private platform: Platform, public alertController:AlertController,public Storage: Storage) {
    //Crear base de datos//
    this.CrearBD();
  }


  //Estado base de datos //
  dbState() {
    return this.isDbReady.asObservable();
  }

  CrearBD() {

    this.platform.ready().then(() => {
      //creación de la BD
      this.sqlite.create({
        name: 'miauto.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        //crear las tablas
        this.crearTablas();
      }).catch(e => {
        this.presentAlert("Creación de BD" + e);
      })

    })
  }

  //método para crear tablas
  async crearTablas() {
    try {
      //Tipos Usuario Crear e Insertar//
      await this.database.executeSql(this.tablaRol,[]);  
      //this.presentAlert("error tabla 1")
      await this.database.executeSql(this.pasajero,[]);
      //this.presentAlert("error tabla 2")
      await this.database.executeSql(this.conductor,[]);
      //this.presentAlert("error tabla 3")
      await this.database.executeSql(this.tablaUsuario,[]);   
      //this.presentAlert("error tabla 4")
      await this.database.executeSql(this.usuario1,[]);
      //this.presentAlert("error tabla 5")
      await this.database.executeSql(this.usuario2,[]);
      //this.presentAlert("error tabla 6")
      await this.database.executeSql(this.usuario3,[]);
      //this.presentAlert("error tabla 7")
      await this.database.executeSql(this.tablaAuto,[]);
      //this.presentAlert("error tabla 8")
      await this.database.executeSql(this.auto1,[]);
      //this.presentAlert("error tabla 9")
      await this.database.executeSql(this.auto2,[]);
      //this.presentAlert("error tabla 10")
      await this.database.executeSql(this.tablaViaje,[]);
      //this.presentAlert("error tabla 11")

      this.buscarUsuario();
      
      this.login('','');
      
      this.buscarAuto();
      
      this.isDbReady.next(true);
    } catch (e) {
      this.presentAlert("error al crear tablas"  + e);

    }


  }

  buscarUsuario() {
    return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idUsuario: res.rows.item(i).idusuario,
            nombre: res.rows.item(i).nombre,
            clave: res.rows.item(i).clave,
            foto: res.rows.item(i).foto,
            idrol: res.rows.item(i).rol,
          });
        }
      }
      this.listausuario.next(items);
    });
  }


  login(nombre, clave) {
    let data = [nombre, clave]
    return this.database.executeSql('SELECT * FROM usuario WHERE nombre=? AND clave=? ', [data[0],data[1]]).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idUsuario: res.rows.item(i).idusuario,
            nombre: res.rows.item(i).nombre,
            clave: res.rows.item(i).clave,
            foto: res.rows.item(i).foto,
            idrol: res.rows.item(i).fk_id_tipousuario
          });
        }
        this.Storage.set('logeado', nombre)
        this.Storage.get('logeado')
        return true;
      }
      else{
        return false;
      }
      
    });
  }
    

  fetchUser(): Observable<Usuario[]> {
    return this.listausuario.asObservable();
  }

  deleteUsuario(idusuario) {
    return this.database.executeSql('DELETE FROM usuario WHERE idusuario = ?', [idusuario]).then(res => {
      this.buscarUsuario();
    });
  }
  agregarUsuario(idusuario,nombre, clave,foto,fk_id_rol) {
    let data = [idusuario,nombre, clave,foto,fk_id_rol];
    return this.database.executeSql('INSERT INTO usuario (idusuario,nombre , clave, foto, fk_id_rol) VALUES (?, ?, ?, ?, ?)', data).then(res => {
      this.buscarUsuario();
    });
  }
  updateUsuario(idusuario,nombre,foto,fk_id_rol ) {
    let data = [idusuario,nombre,foto ,fk_id_rol];
    return this.database.executeSql('UPDATE usuario SET nombre = ? , clave = ? ,foto = ? ,fk_id_rol  = ? where = idusuario ', data).then(res => {
      this.buscarUsuario();
    });

  }
  buscarAuto() {
    return this.database.executeSql('SELECT * FROM auto', []).then(res => {
      let items: Auto[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            patente: res.rows.item(i).patente,
            modelo: res.rows.item(i).modelo,
            marca: res.rows.item(i).marca,
            puestos: res.rows.item(i).puestos,          
            annio: res.rows.item(i).annio,                                                                                                                                                                                                                 
            iduser: res.rows.item(i).fk_idusuario
          });
        }
      }
      this.listauto.next(items);
    });
  }

  fetchauto(): Observable<Auto[]> {
    return this.listauto.asObservable();
  }
  deleteAuto(patente) {
    return this.database.executeSql('DELETE FROM auto WHERE patente = ?', [patente]).then(res => {
      this.buscarAuto();
    });
  }

  agregarAuto(patente, modelo, marca , puestos , fk_idusuario) {
    let data = [patente , modelo , marca, puestos , fk_idusuario];
    return this.database.executeSql('INSERT INTO auto (  patente , modelo , marca , puestos , fk_idusuario) VALUES (? , ? , ? , ? , ?)', data).then(res => {
      this.buscarAuto();
    });
  }
  updateAuto( patente ,  modelo,  marca , puestos,  fk_idusuario) {
    let data = [ patente,   modelo ,  marca ,puestos,  fk_idusuario];
    return this.database.executeSql('UPDATE auto  SET    modelo = ? ,  marca = ? , puestos = ?, fk_idusuario = ?  where = patente ', data).then(res => {
      this.buscarAuto();
    });

  }

  id(idusuario) {
    let data = [idusuario]
    return this.database.executeSql('SELECT * FROM usuario WHERE idusuario = ? ', [data[0],data[1]]).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idUsuario: res.rows.item(i).idusuario,
            nombre: res.rows.item(i).nombre,
            clave: res.rows.item(i).clave,
            foto: res.rows.item(i).foto,
            idrol: res.rows.item(i).rol
          });
        }
      }
      this.listausuario.next(items);
    });
  }






  //ALERTAS //
  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
}

