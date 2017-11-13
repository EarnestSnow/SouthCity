import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalPropertyService } from './../services/global-property.service';
import { LoginsService } from '../services/logins.service';
import {LocalStorage}from'../services/localStorage.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // 注入服务
  providers:[LoginsService]
})
export class LoginComponent implements OnInit {

  constructor(
    // 声明一个服务对象userSer
    private glo:GlobalPropertyService,
    private userSer:LoginsService,
    private router:Router,
    private localstor:LocalStorage
  ) { }

  ngOnInit() {
  }

  toLogin(login_form){
    let that=this;
    // 调用服务
    //获取form表单带来的数据值，传给services
    this.userSer.login(login_form.form.value,function (result) {
      // 接收到返回来的result，输出一下
      if (result && result.stateCode ==1){
        localStorage.setItem('userID',result.userID);
        localStorage.setItem('loginPhone',result.loginPhone);
        that.router.navigate(['/index']);
        location.reload();
      }else {
        alert('登录失败');
      }

    })
  }

  toregister(register_from){
    //获取form表单带来的数据值，传给services
    this.userSer.register(register_from.form.value,function (result) {
      // 接收到返回来的result，输出一下
      alert(result)
    })
  }


  // click时间
  // toInde(){
  //   this.router.navigate(['./index']);
  //   this.glo.serverUrl='localhost:8282';
  // }

  // tologin(loginForm) {
  //   let that = this;
  //   that.userSer.login(loginForm.form.value, function (result) {
  //     console.log(result +'zheli');
  //     if(result && result.stateCode==1){
  //       that.local.set('userId', result.userId);
  //       that.local.set('token', result.token);
  //       that.local.set('username', result.user_name);
  //
  //       that.flag=false;
  //       that.router.navigate(['/index']);
  //       location.reload();
  //       $('#closeBtn').click();
  //       // if(result.user_name){
  //       //   alert(result.user_name)
  //       //   $('#user').html('<li>'+result.user_name+'</li>');
  //       // }else {
  //       //   $('#user').html('<button   data-toggle="modal" data-target="#login" style="height: 0;border: none;padding: 0px">'+
  //       //     '<li style="height: 40px;margin-top: 5px;margin-right: 10px"><a routerLink="/login" style="color:#FEC24E">登录</a></li>'+
  //       //     '</button>'+
  //       //     '<button  data-toggle="modal" data-target="#register" style="height: 0;border: none;padding: 0px">'+
  //       //     '<li style="height: 40px;margin-top: 5px"><a routerLink="/regist" style="color:#FEC24E">注册</a></li>'+
  //       //     '</button>')
  //       // }
  //
  //     }else if(result.stateCode==3){
  //       that.login_res='该用户不存在'
  //     }else
  //     {
  //       that.login_res='用户名或者密码错误';
  //     }
  //   })
  // }
}
