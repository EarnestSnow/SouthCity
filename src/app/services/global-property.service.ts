import { Injectable } from '@angular/core';

@Injectable()
export class GlobalPropertyService {
  // 服务这里定义一个变量（ps：serverUrl），app.component里面引入
  // serverUrl:string;
  constructor() {
    // this.serverUrl='http://localhost:3000';//或者127.0.0.1
  }

}
