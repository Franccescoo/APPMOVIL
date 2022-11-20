import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ConfirmarPassPage } from './confirmar-pass.page';

// describe('ConfirmarPassPage', () => {
//   let component: ConfirmarPassPage;
//   let fixture: ComponentFixture<ConfirmarPassPage>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ConfirmarPassPage ],
//       imports: [IonicModule.forRoot()],
//       providers: [{provide: ActivatedRoute, useValue: ActivatedRoute},SQLite,Camera ,NativeStorage ],
//     }).compileComponents();

//     fixture = TestBed.createComponent(ConfirmarPassPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
