import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Storage } from '@ionic/storage';
import { RouterTestingModule } from "@angular/router/testing";
import { CambiarPassPage } from './cambiar-pass.page';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

// describe('CambiarPassPage', () => {
//   let component: CambiarPassPage;
//   let fixture: ComponentFixture<CambiarPassPage>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CambiarPassPage ],
//       imports: [IonicModule.forRoot(),ActivatedRoute,HttpClientModule]
//     }).compileComponents();

//     fixture = TestBed.createComponent(CambiarPassPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create',
//   inject(
//     [HttpTestingController],
//     () => {
//       expect(component).toBeTruthy();
//     }
//   )
// )
// });
