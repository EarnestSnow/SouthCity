import { Component } from '@angular/core';
// 导入服务
import { GlobalPropertyService } from './services/global-property.service'
import {Router} from "@angular/router";
// import { LocalStorage } from './services/localStorage.service';
// import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // 提供服务
  providers:[]
  // providers:[UserService,LocalStorage]
})
export class AppComponent {
  title = 'app';
  _url:string;
  constructor(
    // 声明服务的变量
    private glo:GlobalPropertyService,
    // private userSer: UserService,
    // private local: LocalStorage,
    private router:Router,
  ) {}
  ngOnInit(){
    // 调用测试
    // this._url=this.glo.serverUrl;
  }
  ngAfterContentChecker(){
    // 关于生命周期的调用，测试》》》》》》》》
    // this._url=this.glo.serverUrl;
  }
}
