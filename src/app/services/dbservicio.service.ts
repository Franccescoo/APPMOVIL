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
  public database: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  //variable para crear tablas e insertar registros por defecto en tablas
  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS Usuario(idUsuario INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(50) NOT NULL, clave VARCHAR(50))";
  //insersion registros
  user1: string = "INSERT or IGNORE INTO Usuario(idUsuario,nombre,clave) VALUES (1,'v.rosendo','victor123')";

  //observable para manipular los registros de una tabla
  Usuarios = new BehaviorSubject([]);

  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController, public storage: Storage, private toastController: ToastController) {
    this.crearBD();
  }

  dbState() {
    return this.isDbReady.asObservable();
  }
  

  crearBD() {
    this.storage.create()
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'miautos.db',
        location: 'default'

      }).then((Database: SQLiteObject) => {
        this.database = Database;
        this.crearTablas();
      }).catch(e => {
        this.presentAlert(e, "Error Creación de BD");
      })
    })
  }
  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaUsuario, []);
      await this.database.executeSql(this.user1, []);
      this.listarUser();
      this.isDbReady.next(true);
    } catch (e) {
      this.presentAlert("Error al crear base de datos", e);
    }
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
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000

    });
    toast.present();
  }

  


  

  fetchUser(): Observable<Usuario[]> {
    return this.Usuarios.asObservable();
  }

  listarUser() {
    return this.database.executeSql('SELECT * FROM Usuario', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.row.length; i++) {
          items.push({
            idUsuario: res.rows.item(i).id_usuario,
            nombre: res.rows.item(i).nombre,
            clave: res.rows.item(i).clave
          });

        }
      }
      this.Usuarios.next(items);
    });
  }


  login(usuario, clave) {
    let log = [usuario, clave]
    return this.database.executeSql("SELECT * from Usuario where Usuario = ? and clave = ?", [log[0], log[1]])
      .then(res => {
        let items: Usuario[] = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              idUsuario: res.rows.item(i).id_usuario,
              nombre: res.rows.item(i).nombre,
              clave: res.rows.item(i).clave
              
            });

          }
          this.storage.set('logeado', usuario)
          this.storage.get('logeado')
          return true;
        }
        else {
          return false;
        }

      })
  }
}
