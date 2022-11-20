import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonicModule } from '@ionic/angular';

import { InicioClientePage } from './inicio-cliente.page';

// describe('InicioClientePage', () => {
//   let component: InicioClientePage;
//   let fixture: ComponentFixture<InicioClientePage>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ InicioClientePage ],
//       imports: [IonicModule.forRoot(),SQLite,ActivatedRoute,HttpClientModule]
//     }).compileComponents();

//     fixture = TestBed.createComponent(InicioClientePage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {

//   });
// });
