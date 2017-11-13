/**
 * Created by Administrator on 2017/9/12 0012.
 */
//导入组件

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { ForgetComponent } from "./forget/forget.component";


//设置路由
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    children:[
      {
        path:'forget',
        component:ForgetComponent
      }
      ]
  },

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule {}
