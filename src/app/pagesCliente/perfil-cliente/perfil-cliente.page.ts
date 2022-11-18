import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.page.html',
  styleUrls: ['./perfil-cliente.page.scss'],
})
export class PerfilClientePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  click(){
    this.router.navigate(['/escanearqr']);
  }

}
