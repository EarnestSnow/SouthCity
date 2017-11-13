import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { ReferralComponent } from './referral/referral.component';
import { DetailComponent } from './detail/detail.component';
import{AppRoutingModule} from './app-routing.module';
// import{LoginModule} from './login/login.module';
import{UserModule} from './user/user.module';
// import{UserComponent} from './user/user.component';

// import { UserinfoComponent } from './user/userinfo/userinfo.component';
// import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { BossComponent } from './boss/boss.component';
import { BossissueComponent } from './bossissue/bossissue.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {Ng2PaginationModule} from "ng2-pagination";
import { LunboComponent } from './lunbo/lunbo.component';
import { AdvComponent } from './adv/adv.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { HouseComponent } from './house/house.component';
//导入GlobalPropertyService服务
import { GlobalPropertyService } from './services/global-property.service';
import {LocalStorage}from './services/localStorage.service'

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    ReferralComponent,
    DetailComponent,
    ForgetComponent,
    // UserComponent,
    // HavepaidComponent,
    // UserinfoComponent,
    // ChangepasswordComponent,
    BossComponent,    //房东
    BossissueComponent,    //房东发布
    NavComponent,     //导航
    FooterComponent, //底部
    LunboComponent,
    AdvComponent,     //先行赔付
    InsuranceComponent,     //赠送保险
    HouseComponent,   //房屋保真
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // LoginModule,     //登录模块
    // ReferralComponent,    //介绍模块
     UserModule,      //用户模块
    // BossComponent,      //房东
    // BossissueComponent,   //房东发布
    // NavComponent,       //导航
    // FooterComponent,     //底部
    AppRoutingModule,   //路由
    Ng2PaginationModule
  ],
  providers: [GlobalPropertyService,LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
