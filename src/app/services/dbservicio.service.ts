import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auto } from './auto';
import { Comuna } from './comuna';
import { DetalleViaje } from './detalleviaje';
import { Marca } from './marca';
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
//variables para crear tablas e insertar registros por defecto en tablas
  tablaNoticias: string = "CREATE TABLE IF NOT EXISTS noticia(id_noticia INTEGER PRIMARY KEY autoincrement, titulo VARCHAR(50) NOT NULL, texto TEXT NOT NULL);";

//Variable para insertar datos
  registroNoticias: string ="INSERT INTO or IGNORE noticia(id_noticia,titulo,texto) VALUES(1,'Noticia del día','Hoy salio el sol, que tristeza existe en el ambiente');";
//observable para manipular los registros de una tabla
  listaNoticias = new BehaviorSubject([]);
  //observable para validar si la BD esta disponible o no
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController) {
    this.crearBD();
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
    //validación de la plataforma
    this.platform.ready().then(()=>{
      //creación de la BD
      this.sqlite.create({
        name: 'actividad.db',
        location: 'default'
      }).then((db: SQLiteObject)=>{
        this.database = db;
        //crear las tablas
        this.crearTablas();
      }).catch(e=>{
        this.presentAlert(e,"Creación de BD");
      })

    })
  }


  //método para crear tablas
  async crearTablas(){
    try{
      await this.database.executeSql(this.tablaNoticias,[]);
      await this.database.executeSql(this.registroNoticias,[]);
      //puedo mostrar mensaje de tablas creadas
      this.presentAlert("Tablas Creadas","Creación de Tablas");
      //llamar a metodo para traer todos los registros de la tabla
      this.buscarNoticias();
      //manipular observable de la bd lista
      this.isDBReady.next(true);
    }catch(e){
      this.presentAlert(e,"Creación de Tablas");
    }
  }

  buscarNoticias(){
    //realizamos la consulta a la BD
    return this.database.executeSql('SELECT * FROM noticia',[]).then(res=>{
      //variable para guardar los registros en una coleccion de datos de la clase noticia
      let items: Noticias[] = [];
      if(res.rows.length > 0){
        for(var i=0; i < res.rows.length; i++){
          items.push({
            id : res.rows.item(i).id_noticia,
            titulo : res.rows.item(i).titulo,
            texto : res.rows.item(i).texto
          });

        }
      }
      this.listaNoticias.next(items);

    })
  }

  dbState(){
    return this.isDBReady.asObservable();
  }

  fetchNoticias(): Observable<Noticias[]>{
    return this.listaNoticias.asObservable();

  }

  modificarNoticia(id,titulo_nuevo, texto_nuevo){
    let data = [titulo_nuevo,texto_nuevo,id];
    return this.database.executeSql('UPDATE noticia SET titulo = ?, texto = ? WHERE id = ?',data).then(data2 =>{
      this.buscarNoticias();
    })

  }

  eliminarNoticia(id){
    return this.database.executeSql('DELETE FROM noticia WHERE id = ?',[id]).then(a=>{
      this.buscarNoticias();
    })

  }

  agregarNoticias(titulo, texto){
    let data = [titulo,texto];
    return this.database.executeSql('INSERT INTO noticia(titulo,texto) VALUES(?,?)',data).then(res=>{
      this.buscarNoticias();
    });

  }

}
