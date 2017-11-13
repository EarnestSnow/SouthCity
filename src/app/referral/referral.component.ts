import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var p0 = $('.green0')
    var p1= $('.green1')
    var p2 = $('.green2')
    var p3 = $('.green3')
    var flag0 = true
    var flag1 = true
    var flag2 = true
    var flag3 = true
    p0.on('click', function ()  {
      p0.css('color', '#000')
      $(this).css('color', '#32a5e7')
    })

    p1.on('click', function ()  {
      p1.css('color', '#000')
      $(this).css('color', '#32a5e7')
    })
    p2.on('click', function ()  {
      p2.css('color', '#000')
      $(this).css('color', '#32a5e7')
    })
    p3.on('click', function ()  {
      p3.css('color', '#000')
      flag3 ? $(this).css('color', '#32a5e7') : $(this).css('color', '#000')

      flag3 = !flag3
    })
  }



}
