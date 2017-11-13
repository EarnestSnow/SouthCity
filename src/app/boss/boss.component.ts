import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.css']
})
export class BossComponent implements OnInit {
  constructor(
    private router:Router,
  ) {
  }

  ngOnInit() {
  }

  // 成为房东注册，下滑效果
  btn() {
    $(function () {
      var t = $(window).scrollTop();
      $('body,html').animate({'scrollTop': t + 1500}, 1000)
    })
  }
  // 判定是否登录，如果未登录，跳转至登录界面，如果登录，跳转到成为房东界面
  // 成为房东界面有同样判定功能
  botn(){
    if(localStorage.getItem('userID')){
      this.router.navigate(['/bossissue'])
    }else {
      this.router.navigate(['/login'])
    }
  }
}

