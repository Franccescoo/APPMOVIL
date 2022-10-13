import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auto } from './auto';
import { Comuna } from './comuna';
import { DetalleViaje } from './detalleviaje';
import { Rol } from './rol';
import { Usuario } from './usuario';
import { Viaje } from './viaje';
import { ViajeComuna } from './viajecomuna';

@Injectable({
  providedIn: 'root'
})
export class DbservicioService {
//variable para guardar y manipular la BD
  public database: SQLiteObject;
  //observable para validar si la BD esta disponible o no
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  
//variables para crear tablas e insertar registros por defecto en tablas
  //tablaAuto:         string = "CREATE TABLE IF NOT EXISTS Auto(patente VARCHAR(10) NOT NULL, color VARCHAR(20) NOT NULL, modelo VARCHAR(100) NOT NULL, annio INTEGER NOT NULL);";
  //tablaViaje:        string = "CREATE TABLE IF NOT EXISTS viaje(id_viaje INTEGER PRIMARY KEY autoincrement, fechaViaje VARCHAR(20) NOT NULL, horaSalida INTEGER NOT NULL, asientos INTEGER NOT NULL, monto INTEGER NOT NULL);";
  tablaUsuario:      string = "CREATE TABLE IF NOT EXISTS Usuario(idUsuario INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(100) NOT NULL,clave VARCHAR(100) NOT NULL);";
  // tablaViajeComuna:  string = "CREATE TABLE IF NOT EXISTS ViajeComuna(idViajeComuna INTEGER PRIMARY KEY autoincrement);";
  // tablaDetalleViaje: string = "CREATE TABLE IF NOT EXISTS DetalleViaje(idDetalle INTEGER PRIMARY KEY autoincrement, status VARCHAR(100) NOT NULL);";
  // tablaComuna:       string = "CREATE TABLE IF NOT EXISTS Comuna(idComuna INTEGER PRIMARY KEY autoincrement, nombreComuna VARCHAR(50) NOT NULL);";

  // tablaRol:          string = "CREATE TABLE IF NO EXISTS Rol(idRol INTEGER PRIMARY KEY autoincrement, nombreRol VARCHAR(20) NOT NULL);";

//Variable para insertar datos
 //  EJEMPLO registroNoticias: string ="INSERT INTO or IGNORE noticia(id_noticia,titulo,texto) VALUES(1,'Noticia del día','Hoy salio el sol, que tristeza existe en el ambiente');";

 tablaRolCon: string ="INSERT INTO or IGNORE Rol(idRol, nombreRol) VALUES (1, 'Conductor');";
 tablaRolPas: string = "INSERT INTO or IGNORE Rol(idRol, nombreRol) VALUES (2, 'Pasajero');";

 usuario1: string = "INSERT INTO or IGNORE usuario(idUsuario, nombre,clave) VALUES (1, 'v.rosendo','J.12mm8');";
 usuario2: string = "INSERT INTO or IGNORE usuario(idUsuario, nombre,clave) VALUES (2, 'j.baez','B.34vf8');";
 usuario3: string = "INSERT INTO or IGNORE usuario(idUsuario, nombre,clave) VALUES (3, 'a.diaz','C.54yt78');";

//  TablaComuna1: string = "INSERT INTO or IGNORE comuna (idComuna, nombreComuna) VALUES (1, 'Quilicura');";
//  TablaComuna2: string = "INSERT INTO or IGNORE comuna (idComuna, nombreComuna) VALUES (2, 'Conchali');";
//  TablaComuna3: string = "INSERT INTO or IGNORE comuna (idComuna, nombreComuna) VALUES (3, 'Huechuraba');";
//  TablaComuna4: string = "INSERT INTO or IGNORE comuna (idComuna, nombreComuna) VALUES (4, 'Las Condes');";
//  TablaComuna5: string = "INSERT INTO or IGNORE comuna (idComuna, nombreComuna) VALUES (5, 'La Cisterna');";
//  TablaComuna6: string = "INSERT INTO or IGNORE comuna (idComuna, nombreComuna) VALUES (6, 'Recoleta');";
//  TablaComuna7: string = "INSERT INTO or IGNORE comuna (idComuna, nombreComuna) VALUES (7, 'Independencia');";


//observable para manipular los registros de una tabla
  // listaAuto =         new BehaviorSubject([]);
  Usuario =      new BehaviorSubject([]);
  // listaViajeCommuna = new BehaviorSubject([]);
  // listaViaje =        new BehaviorSubject([]);
  // listaRol =          new BehaviorSubject([]);
  // listaMarca =        new BehaviorSubject([]);
  // listaComuna =       new BehaviorSubject([]);
  




  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController,private toastController: ToastController,public storage: Storage) {
    this.crearBD();
   }
   dbState(){
    return this.isDBReady.asObservable();
  }
   


//método para mostrar mensajes mediante alertas
  async presentAlert(msj: string, lugar: string) {
    const alert = await this.alertController.create({
      header: lugar,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

//método para crear la base de datos
  crearBD(){
    this.storage.create()
    this.platform.ready().then(()=>{
      this.sqlite.create({
        name: 'miauto.db',
        location: 'default'

      }).then((Database: SQLiteObject)=>{
        this.database = Database;
        this.crearTablas();
      }).catch(e => this.presentAlert("error de secuencia", e));
    })
  }


  //método para crear tablas
  async crearTablas(){
    try{
      //await this.database.executeSql(this.TablaComuna1,[]);
      
      //await this.database.executeSql(this.TablaComuna2,[]);
      //await this.database.executeSql(this.TablaComuna3,[]);
      //await this.database.executeSql(this.TablaComuna4,[]);
      //await this.database.executeSql(this.TablaComuna5,[]);
      //await this.database.executeSql(this.TablaComuna6,[]);
      //await this.database.executeSql(this.TablaComuna7,[]);
      //await this.database.executeSql(this.tablaRolCon,[]);
      // await this.database.executeSql(this.tablaRolPas,[]);
      // await this.database.executeSql(this.tablaViajeComuna,[]);
      // await this.database.executeSql(this.tablaAuto,[]);
      // await this.database.executeSql(this.tablaComuna,[]);
      // await this.database.executeSql(this.tablaDetalleViaje,[]);
      // await this.database.executeSql(this.tablaRol,[]);
      await this.database.executeSql(this.tablaUsuario, []);
      await this.database.executeSql(this.usuario1, []);
      await this.database.executeSql(this.usuario2, []);
      await this.database.executeSql(this.usuario3, []);
      // await this.database.executeSql(this.tablaViaje,[]);
      
    


      //puedo mostrar mensaje de tablas creadas
      this.presentAlert("Tablas Creadas","Creación de Tablas");
      //llamar a metodo para traer todos los registros de la tabla
      //this.buscarViaje();
      this.buscarUsuario();
      //this.buscarComuna();
      //manipular observable de la bd lista
      this.isDBReady.next(true);
    }catch(e){
      this.presentAlert("Error al crear base de datos",e);
    }
    
  }

  // buscarViaje(){
  //   //realizamos la consulta a la BD
  //   return this.database.executeSql('SELECT * FROM viaje',[]).then(res=>{
  //     //variable para guardar los registros en una coleccion de datos de la clase noticia
  //     let items: Viaje[] = [];
  //     if(res.rows.length > 0){
  //       for(var i=0; i < res.rows.length; i++){
  //         items.push({
  //           idViaje : res.rows.item(i).id_viaje,
  //           fechaViaje : res.rows.item(i).fechaViaje,
  //           horaSalida : res.rows.item(i).horaSalida,
  //           asientos: res.rows.item(i).asientos,
  //           monto: res.rows.item(i).monto
  //         });
          
  //       }
  //     }
  //     this.listaViaje.next(items);

  //   })
  // }
  buscarUsuario(){
    //realizamos la consulta a la BD
    return this.database.executeSql('SELECT * FROM Usuario', []).then(res=>{
      //variable para guardar los registros en una coleccion de datos de la clase noticia
      let items: Usuario[] = [];
      if(res.rows.length > 0){
        for(var i=0; i < res.rows.length; i++){
          items.push({
            idUsuario : res.rows.item(i).id_usuario,
            nombre : res.rows.item(i).nombre,
            clave: res.rows.item(i).clave
          });
          
        }
      }
      this.Usuario.next(items);

    })
  }
  // buscarComuna(){
  //   //realizamos la consulta a la BD
  //   return this.database.executeSql('SELECT * FROM comuna',[]).then(res=>{
  //     //variable para guardar los registros en una coleccion de datos de la clase noticia
  //     let items: Comuna[] = [];
  //     if(res.rows.length > 0){
  //       for(var i=0; i < res.rows.length; i++){
  //         items.push({
  //           idComuna : res.rows.item(i).id_comuna,
  //           nombreComuna : res.rows.item(i).nombreComuna
  //         });
          
  //       }
  //     }
  //     this.listaComuna.next(items);

  //   })
  // }
  

  

  // fetchViaje(): Observable<Viaje[]>{
  //   return this.listaViaje.asObservable();
  // }
  // fetchComuna(): Observable<Comuna[]>{
  //   return this.listaComuna.asObservable();
  // }
  fetchUsuario(): Observable<Usuario[]>{
    return this.Usuario.asObservable();
  } 

  //modificarNoticia(id,titulo_nuevo, texto_nuevo){
  //  let data = [titulo_nuevo,texto_nuevo,id];
  //  return this.database.executeSql('UPDATE noticia SET titulo = ?, texto = ? WHERE id = ?',data).then(data2 =>{
  //    this.buscarNoticias();
  //})
  //}

  // eliminarViaje(id){
  //   return this.database.executeSql('DELETE FROM viaje  WHERE id_viaje = ?',[id]).then(a=>{
  //     this.buscarViaje();
  //   })

  // }
  // eliminarComuna(id){
  //   return this.database.executeSql('DELETE FROM comuna  WHERE id_viaje = ?',[id]).then(a=>{
  //     this.buscarComuna();
  //   })

  // }

  // agregarViaje(fechaViaje, horaSalida,asientos,monto){
  //   let data = [fechaViaje,horaSalida,asientos,monto];
  //   return this.database.executeSql('INSERT INTO viaje(fechaViaje,horaSalida,asientos,monto) VALUES(?,?,?,?)',data).then(res=>{
  //     this.buscarViaje ();
  //   });

  // }
//idUsuario INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(100) NOT NULL, apellido VARCHAR(100) NOT NULL, correo VARCHAR(100) NOT NULL, clave VARCHAR(100) NOT NULL)
  // agregarUsuario(idUsuario, nombre,clave,Rol){
  //   let data = [idUsuario, nombre,clave,Rol];
  //   return this.database.executeSql('INSERT INTO viaje(idUsuario, nombre,clave,FK_ID_ROL) VALUES(?,?,?,?)',data).then(res=>{
  //     this.buscarUsuario ();
  //   });

  // }
  // agregarComuna(id_comuna, nombreComuna){
  //   let data = [id_comuna,nombreComuna];
  //   return this.database.executeSql('INSERT INTO comuna(idcomuna,nombrecomuna) VALUES(?,?)',data).then(res=>{
  //     this.buscarComuna ();
  //   });

  // }
  login(nombre, clave) {
    let log = [nombre, clave]
    return this.database.executeSql("SELECT * FROM Usuario WHERE nombre=? AND clave=?", [log[0], log[1]])
      .then(res => {
        let items: Usuario[] = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              idUsuario: res.rows.item(i).id,
              nombre: res.rows.item(i).nombre,
              clave: res.rows.item(i).clave
            });

          }
          this.storage.set('logeado', nombre)
          this.storage.get('logeado')


          return true;
        }


        else {
          return false;
        }
      })
  }
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000

    });
    toast.present();
  }

}
