import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';


import { VerAutoPage } from './ver-auto.page';

// describe('VerAutoPage', () => {
//   let component: VerAutoPage;
//   let fixture: ComponentFixture<VerAutoPage>;

//   beforeEach(waitForAsync(async () => {

//     await TestBed.configureTestingModule({
//       imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule,HttpClientModule],
//       providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite, Camera, Geolocation, NativeStorage,Storage],
//       schemas: [NO_ERRORS_SCHEMA],
//       declarations: [ VerAutoPage ],

//     }).compileComponents();

//     fixture = TestBed.createComponent(VerAutoPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
