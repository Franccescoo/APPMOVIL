import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {
    this.router.navigate(['home/inicio']);
  }

  segmentChanged($event){
    const direccion = $event.detail.value;
    this.router.navigate(['home/' + direccion]);
  }

}

