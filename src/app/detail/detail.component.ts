import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // 收藏功能搞定
  choucang(){
  $('.choucang2').hide()
  $('.choucang1').click(function () {
  $('.choucang1').hide()
  $('.choucang2').show()
})
  $('.choucang2').click(function () {
  $('.choucang2').hide()
  $('.choucang1').show()
})
  }
}
