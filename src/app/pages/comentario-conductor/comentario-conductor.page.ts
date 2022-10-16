import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-comentario-conductor',
  templateUrl: './comentario-conductor.page.html',
  styleUrls: ['./comentario-conductor.page.scss'],
})
export class ComentarioConductorPage implements OnInit {
  listaComen: any = [
    {
      texto: ''
    }
  ]

  constructor(private conexionBD: DbservicioService, private router: Router) { }

  ngOnInit() {
    //me subscribo al servicio
    this.conexionBD.dbState().subscribe((res)=>{
      if(res){
        //subscribo a los cambios en las consultas de BD
        this.conexionBD.fetchComen().subscribe(item=>{
          this.listaComen = item;
        })
      }
    })
  }

  

}
