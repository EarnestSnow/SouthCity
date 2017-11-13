import { Component, OnInit } from '@angular/core';
import * as ts from "typescript/lib/tsserverlibrary";
import none = ts.HighlightSpanKind.none;
declare var $:any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  // video() {
  //   document.getElementById('begin').play();
  // }
  //
  // stop() {
  //   document.getElementById('begin').pause();
  // }
  // play(){
  //   document.getElementById('begin2').play();
  // }
  // parse(){
  //   document.getElementById('begin2').pause();
  // }
  video() {
    $(function () {
      var video = $('video#begin');
      video.hover(function () {
          video[0].play() // play() 和 pause() 是HTML5中video自带的API函数，哈哈，方便吧？
        }
      )
    });

    // document.getElementById('begin').play();
  }

  stop() {
    $(function () {
      var video = $('#none');
      var video1 = $('video#begin')
      if (video.display = none) {
        video1[0].pause()
      }
    })

  }
  vs(){
    $(function () {
      var video = $('video#begin2');
      video.hover(function () {
          video[0].play() // play() 和 pause() 是HTML5中video自带的API函数，哈哈，方便吧？
        }
      )
    });

    // document.getElementById('begin').play();
  }


  sha() {
    $(function () {
      var video = $('#none1');
      var video1 = $('video#begin2')
      if (video.display = none) {
        video1[0].pause()
      }


    })

  }

}
