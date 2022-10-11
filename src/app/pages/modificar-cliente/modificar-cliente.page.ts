import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.page.html',
  styleUrls: ['./modificar-cliente.page.scss'],
})
export class ModificarClientePage implements OnInit {
  listaUsuarios: any;


  constructor(private api: ApiService) {
    this.subsUser(id);
   }

  ngOnInit() {
  }

  subsUser(id){
    this.api.getUser(id).subscribe((res) =>{
      if (res){
        this.listaUsuarios = res;
      }
    })
  }







}
