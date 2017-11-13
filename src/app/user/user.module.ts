/**
 * Created by Administrator on 2017/9/12 0012.
 */
import {FormBuilder} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {FormsModule} from '@angular/forms';
//导入组件
import { UserComponent } from './user.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HavepaidComponent } from './havepaid/havepaid.component';
import { NotpaidComponent } from './notpaid/notpaid.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
//导入路由模块
import {UserRoutingModule} from './user-routing.module';


@NgModule({
  declarations: [
    UserComponent,
    ChangepasswordComponent,   //修改密码
    HavepaidComponent,        //已支付订单
    NotpaidComponent,         //未支付订单
    UserinfoComponent, //个人中心
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserRoutingModule,    //路由
    ReactiveFormsModule,
    // Ng2PaginationModule
  ],
  providers: [FormBuilder],
  bootstrap: [UserComponent]
})
export class UserModule { }
