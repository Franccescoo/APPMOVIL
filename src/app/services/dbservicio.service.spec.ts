import { TestBed } from '@angular/core/testing';
import { ComponentFixture, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DbservicioService } from './dbservicio.service';

describe('DbservicioService', () => {
  let service: DbservicioService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DbservicioService ],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

  }));

  it('should be created', () => {
  });
});
