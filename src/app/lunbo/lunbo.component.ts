import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunbo',
  templateUrl: './lunbo.component.html',
  styleUrls: ['./lunbo.component.css'],
  template: `
    <div class="bannerContainer">
      <ul class="bannerPicList">
        <li [class.active]="currentPic==0"> <img src="../../assets/image/ncwg-l-1.jpg"width="100%" height="580px" class="mo"/></li>
        <li [class.active]="currentPic==1"> <img src="../../assets/image/ncwg-l-2.jpg" width="100%" height="580px" class="mo"/></li>
        <li [class.active]="currentPic==2"> <img src="../../assets/image/ncwg-l-3.jpg" width="100%" height="580px" class="mo"/></li>
      </ul>
      <ul class="bannerBtnList">
        <li><span class="picBtn" (click)="changebanner(0)"></span></li>
        <li><span class="picBtn" (click)="changebanner(1)"></span></li>
        <li><span class="picBtn" (click)="changebanner(2)"></span></li>
      </ul>
    </div>
  `,
  styles: [`
    .bannerContainer{
      margin-top:40px ;

    }
    ul {
      padding: 0;
    }
    .mo{
      animation:fade 4s ;
    }
    @-webkit-keyframes fade {
      0% {
        opacity: 0; /*初始状态 透明度为0*/
      }
      100% {
        opacity: 1; /*结尾状态 透明度为1*/
      }
    }

    .bannerPicList li {
      display: none;
    }

    .bannerPicList li.active {
      display: block;
    }

    .bannerContainer .bannerBtnList {
      position: absolute;
      top:620px;
      left: 44%;

    }

    .bannerContainer .bannerBtnList li {
      float: left;
      margin: 0 5px;
      list-style-type: none;
    }

    .bannerContainer .bannerBtnList span.picBtn {
      margin: 20px;
      height: 10px;
      width: 10px;
      background-color: #80b4ff;
      display: block;
      border-radius: 5px;
      cursor: pointer;
    }
  `]
})
export class LunboComponent implements OnInit {
  currentPic = 0;
  constructor() {
    setInterval(() => {
      let id = (this.currentPic + 1) % 3;
      this.currentPic = id;
    },10000)
  }

  changebanner(id) {
    console.log(id)
    this.currentPic = id;
  }


  ngOnInit() {
  }

}
