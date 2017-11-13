import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable()
export class LoginsService {
  url:string='http://localhost:3000/login';
  constructor(
    private http:HttpClient,
  ) { }
  login(user,callback){
    console.log('接收到的数据');
    console.log(user);
    this.http.post(this.url,user).subscribe(
      function (result) {
        console.log(22222222222222)
        console.log(result);
        callback(result);
      },
      function (error) {
        console.log(error.message);
      }
    )
  }
  // 注册
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


  userinfoup(user,callback){
    this.http.post(this.url+'/userinfo',user).subscribe(
      function (result) {
        callback(result);
      },
      function (error) {
        console.log(error.message);
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
