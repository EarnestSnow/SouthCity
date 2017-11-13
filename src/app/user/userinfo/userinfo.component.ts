import {  nickValidator, userNameValidator} from './../validator/validator';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GlobalPropertyService } from './../../services/global-property.service';
import { UserService } from './../../services/user.service';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css'],
  providers:[UserService]
})
export class UserinfoComponent implements OnInit {

  // formModel: FormGroup;
  constructor(
    private glo:GlobalPropertyService,
    private usersSer:UserService,
    private router:Router,
    // fb: FormBuilder
  ) {}
  userID:any;
  ngOnInit() {
    this.userID=localStorage.getItem('userID');
  }

  toupdate(user_form){

    this.usersSer.userinfoup(user_form.form.value,function (result) {
      console.log(33333333333333333);
      console.log(result);
      if(result && result.stateCode==1){
        alert('修改成功')
      }else {
        alert('修改失败')
      }
    })
  }


  handle_zm_mouse_over() {
    document.getElementById('zhima_des').style.display = 'block'
  }

  handle_zm_mouse_out() {
    document.getElementById('zhima_des').style.display = 'none'
  }

  c() {
    var r = new FileReader()
    // alert(r)
    // f = document.getElementById('file').files[0];

    const uploadsFile = <HTMLInputElement>document.getElementById('file');
    const f = uploadsFile.files[0];
    r.readAsDataURL(f);
    r.onload = function (e) {
      let s = <HTMLImageElement>document.getElementById('show')
      s.src = this.result;
    }
  }

  // onSubmit(){
  //   // let isValid:boolean = this.formModel.get("username").valid;
  //   // console.log("username的校验结果:"+isValid);
  //   // let errors:any = this.formModel.get("username").errors;
  //   // console.log("username的错误信息是:"+JSON.stringify(errors));
  //   if(this.formModel.valid){
  //     // alert(this.formModel.value);
  //     confirm('iesb')
  //
  //     console.log(this.formModel.value)
  //     // this.usersSer.userinfoup(uinfo_form.form.value,function () {
  //     //
  //     // })
  //
  //
  //
  //   }
  //   else {
  //     return false
  //   }
  //
  // }


}
