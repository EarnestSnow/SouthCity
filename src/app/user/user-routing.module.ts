/**
 * Created by Administrator on 2017/9/12 0012.
 */
//导入组件
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserinfoComponent } from "./userinfo/userinfo.component";
import { NotpaidComponent } from "./notpaid/notpaid.component";
import { HavepaidComponent } from "./havepaid/havepaid.component";
import { ChangepasswordComponent } from "./changepassword/changepassword.component";


//设置路由
const routes: Routes = [
      {
    path:'user',
    component:UserComponent,
        children:[
      {
      path:'userinfo',
  component:UserinfoComponent
},
      {
  path:'notpaid',
    component:NotpaidComponent
},
      {
  path:'havepaid',
    component:HavepaidComponent
},
      {
  path:'changepassword',
    component:ChangepasswordComponent
},
          ]
      },
      //设置当二级路由为空的时候，默认的界面
      // {
      //   path: '',
      //   redirectTo: 'manage',
      //   pathMatch: 'full'
      // },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {}
