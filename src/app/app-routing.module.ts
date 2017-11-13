/**
 * Created by Administrator on 2017/9/12 0012.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ReferralComponent } from './referral/referral.component';
import { UserComponent } from './user/user.component';
import { BossComponent } from './boss/boss.component';
import { BossissueComponent } from './bossissue/bossissue.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { AdvComponent } from './adv/adv.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { HouseComponent } from './house/house.component';
import { DetailComponent } from './detail/detail.component';
// import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [

  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'boss',
    component: BossComponent
  },
  {
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'bossissue',
    component: BossissueComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'referral',
    component: ReferralComponent
  },
  {
    path: 'forget',
    component:ForgetComponent
  },
  {
    path: 'adv',
    component: AdvComponent
  },
  {
    path: 'insurance',
    component: InsuranceComponent
  },
  {
    path: 'house',
    component: HouseComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  // {
  //   path: 'footer',
  //   component:FooterComponent
  // },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: IndexComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
