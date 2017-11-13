import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';


// import { LocalStorage } from '../services/localStorage.service';

@Injectable()
export class UsersService {
  // url:string='http://localhost:3000/users';
  url:string='http://localhost:3000/users';
  constructor(
    private http:HttpClient,
    // private ls:LocalStorage
  ) {
  }
// 接收到传过来的user，返回一个callback
  login(user,callback){
    console.log('接收到的数据');
    console.log(user);
    callback('登陆成功')
    this.http.post(this.url+'/login',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }



  register(user,callback){
    console.log(user);
    callback('注册成功，执行中');
    this.http.post(this.url+'/register',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.massage);
      }
    )
}
  // getAllUsers(){
  //   let _head=new HttpHeaders({token:this.ls.get('token')});
  //
  //   let param=new HttpParams().set('id','0011111');
  //
  //
  //
  //   this.http.get(this.url+'/getAllUsers',{headers:_head,params:param}).subscribe(
  //     function (result) {
  //       console.log('>>>>>>>>>>>>>>>>>>>>');
  //       console.log(result);
  //     },
  //     function (error) {
  //       console.log(error.message);
  //     }
  //
  //   )
  //
  // }

}
