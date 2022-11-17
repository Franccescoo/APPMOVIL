import { Component } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  idrol: any=[];

  constructor(public nativeStorage: NativeStorage) {}

  guardaridrol(){
    this.nativeStorage.getItem('idrol').then((data4)=>{
      this.idrol = data4
    })
  }

}
