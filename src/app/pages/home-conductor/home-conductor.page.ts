import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-conductor',
  templateUrl: './home-conductor.page.html',
  styleUrls: ['./home-conductor.page.scss'],
})
export class HomeConductorPage{

  constructor(private router: Router) {
    this.router.navigate(['home-conductor/inicio']);
  }

  segmentChanged($event){
    const direccion = $event.detail.value;
    this.router.navigate(['home-conductor/' + direccion]);
  }


}
