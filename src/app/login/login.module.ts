/**
 * Created by Administrator on 2017/9/12 0012.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login.component';
import { ForgetComponent } from "./forget/forget.component";
// import {Ng2PaginationModule} from "ng2-pagination"

//导入路由模块
import {LoginRoutingModule} from './login-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginRoutingModule,
    // Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
