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


  tablaTipoUsuario: string = "CREATE TABLE IF NOT EXISTS tipo_usuario(id_tipousuario INTEGER PRIMARY KEY  , tipo_nombre VARCHAR (30) NOT NULL);";
  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY  , username VARCHAR (20)  , clave VARCHAR (15)  , correo  VARCHAR (30)  , telefono INTEGER , foto VARCHAR(30) , estado VARCHAR(20) , fk_id_tipousuario INTEGER ,FOREIGN KEY(fk_id_tipousuario) REFERENCES tipo_usuario(id_tipousuario));";
  tablaAuto: string = "CREATE TABLE IF NOT EXISTS auto( patente VARCHAR PRIMARY KEY   , marca VARCHAR (20) ,  modelo VARCHAR (30)  , puesto INTEGER  ,fk_id_usuario INTEGER ,FOREIGN KEY(fk_id_usuario) REFERENCES usuario(id_usuario)) ;";
  tablaViaje: string = "CREATE TABLE IF NOT EXISTS viaje(id_viaje INTEGER PRIMARY KEY , inicio VARCHAR (50) , destino VARCHAR (50)  , asientos INTEGER , costo_viaje INTEGER  , fecha_viaje VARCHAR(30)  , hora_partida INTEGER , hora_llegada INTEGER , fk_patente INTEGER , fk_id_usuario INTEGER );";
  


  // USUARIO INSERTAR TIPO //
  
  registro1: string = "INSERT or IGNORE INTO usuario(id_usuario, username, clave, fk_id_tipousuario) VALUES (1, 'v.rosendo','J.12mm8', 1);";
  registro2: string = "INSERT or IGNORE INTO usuario(id_usuario, username, clave, fk_id_tipousuario) VALUES (2, 'j.baez','B.34vf8', 2);";
  registro3: string = "INSERT or IGNORE INTO usuario(id_usuario, username, clave, fk_id_tipousuario) VALUES (3, 'a.diaz','C.54yt78', 2);";
  registroauto1: string = "INSERT or IGNORE INTO auto(patente, marca ,fk_id_usuario) VALUES ('FF-HH-22','Audi',1);";
  registroauto2: string = "INSERT or IGNORE INTO auto(patente, marca ,fk_id_usuario) VALUES ('GG-11-RR','BMW',1);";
  TipoUsuarioC: string = "INSERT or IGNORE INTO tipo_usuario(id_tipousuario, tipo_nombre) VALUES (1, 'Conductor');";
  TipoUsuarioP: string = "INSERT or IGNORE INTO tipo_usuario(id_tipousuario, tipo_nombre) VALUES (2, 'Pasajero');";
  //OBSERVABLES //

  listausuario = new BehaviorSubject([]);

  listauto = new BehaviorSubject([]);

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(public NativeStorage : NativeStorage ,private sqlite: SQLite, private platform: Platform, public alertController:AlertController) {
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
        name: 'usuario.db',
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
      await this.database.executeSql(this.tablaTipoUsuario,[]);
      
      await this.database.executeSql(this.TipoUsuarioP,[]);
      
      await this.database.executeSql(this.TipoUsuarioC,[]);
      
      await this.database.executeSql(this.tablaUsuario,[]);

      
      await this.database.executeSql(this.registro1,[]);

      await this.database.executeSql(this.registro2,[]);

      await this.database.executeSql(this.registro3,[]);
     
      await this.database.executeSql(this.tablaAuto,[]);

      await this.database.executeSql(this.registroauto1,[]);

      await this.database.executeSql(this.registroauto2,[]);
      
      await this.database.executeSql(this.tablaViaje,[]);
      

      this.buscarUsuario();
      
      this.login('','');
      
      this.buscarAuto();
      
      this.isDbReady.next(true);
    } catch (err) {
      this.presentAlert("error al crear tablas"  + err);

    }


  }

  buscarUsuario() {
    return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idUsuario: res.rows.item(i).id_usuario,
            username: res.rows.item(i).username,
            clave: res.rows.item(i).clave,
            correo: res.rows.item(i).correo,
            telefono: res.rows.item(i).telefono,
            foto: res.rows.item(i).foto,
            nombre: res.rows.item(i).nombre,
            tipouser: res.rows.item(i).fk_id_tipousuario
          });
        }
      }
      this.listausuario.next(items);
    });
  }


  login(VfUsuario, VfContra) {
    let data = [VfUsuario, VfContra]
    return this.database.executeSql('SELECT * FROM usuario WHERE username=? AND clave=? ', [data[0],data[1]]).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idUsuario: res.rows.item(i).id_usuario,
            username: res.rows.item(i).username,
            clave: res.rows.item(i).clave,
            correo: res.rows.item(i).correo,
            telefono: res.rows.item(i).telefono,
            foto: res.rows.item(i).foto,
            nombre: res.rows.item(i).nombre,
            tipouser: res.rows.item(i).fk_id_tipousuario
          });
        }
      }
      this.listausuario.next(items);
    });
  }
    

  fetchUser(): Observable<Usuario[]> {
    return this.listausuario.asObservable();
  }

  deleteUsuario(id_usuario) {
    return this.database.executeSql('DELETE FROM usuario WHERE id_usuario = ?', [id_usuario]).then(res => {
      this.buscarUsuario();
    });
  }
  agregarUsuario(id_usuario,username, clave, correo, telefono, foto , estado , fk_id_tipousuario) {
    let data = [id_usuario,username, clave, correo, telefono, foto , estado , fk_id_tipousuario];
    return this.database.executeSql('INSERT INTO usuario (id_usuario,username , clave , correo , telefono , foto , estado , fk_id_tipousuario) VALUES (? , ?, ?, ?, ?, ? , ? , ?)', data).then(res => {
      this.buscarUsuario();
    });
  }
  updateUsuario(id_usuario,username, clave, correo, telefono , foto , estado , fk_id_tipousuario ) {
    let data = [id_usuario,username, clave, correo, telefono , foto , estado , fk_id_tipousuario];
    return this.database.executeSql('UPDATE usuario SET username = ? , clave = ? , correo = ? , telefono = ? , foto = ? , estado = ? , fk_id_tipousuario  = ? where = id_usuario ', data).then(res => {
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
            iduser: res.rows.item(i).fk_id_usuario
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

  agregarAuto(patente, modelo, marca , puestos , estado , fk_id_usuario) {
    let data = [patente , modelo , marca, puestos , estado , fk_id_usuario];
    return this.database.executeSql('INSERT INTO auto (  patente , modelo , marca , puestos , estado , fk_id_usuario) VALUES (? , ? , ? , ? , ? , ?)', data).then(res => {
      this.buscarAuto();
    });
  }
  updateAuto( patente ,  modelo,  marca , puestos, estado , fk_id_usuario) {
    let data = [ patente,   modelo ,  marca ,puestos, estado , fk_id_usuario];
    return this.database.executeSql('UPDATE auto  SET    modelo = ? ,  marca = ? , puestos = ?, estado = ? ,fk_id_usuario = ?  where = patente ', data).then(res => {
      this.buscarAuto();
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

