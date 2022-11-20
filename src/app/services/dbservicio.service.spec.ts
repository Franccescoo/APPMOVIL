import { TestBed } from '@angular/core/testing';

import { waitForAsync } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, IonicModule, Platform } from '@ionic/angular';
import { DbservicioService } from './dbservicio.service';

describe('DbservicioService', () => {
  let service: DbservicioService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DbservicioService ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: SQLite},
        { provide: Platform},
        { provide: AlertController}
      ]
    }).compileComponents();

  }));
})