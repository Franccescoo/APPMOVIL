
import { waitForAsync } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';
import { CambiarPassPage } from './cambiar-pass.page';
import {  ComponentFixture, TestBed } from '@angular/core/testing';


describe('CambiarPassPage', () => {
  let component: CambiarPassPage;
  let fixture: ComponentFixture<CambiarPassPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarPassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

