import { passwordValidator } from './../validator/validator';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { equalValidator } from '../validator/validator';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  formModel: FormGroup;
  constructor(fb: FormBuilder) { 
    this.formModel = fb.group( {
      passwordsGroup: fb.group({
        password: ['', passwordValidator],
        pconfirm: ['']
      }, {validator: equalValidator})
    })
  }

  
  ngOnInit() {
  }

  handle_span1_focus() {
    document.getElementById('box-span-1').innerHTML = '新密码须为6-16个字符'
    document.getElementById('box-span-1').className = 'active'
  }

  handle_span1_blur() {
    document.getElementById('box-span-1').innerHTML = '6-16个字符'
    document.getElementById('box-span-1').className = ''
  }

  handle_span2_focus() {
    document.getElementById('box-span-2').className = 'active'
  }
  handle_span2_blur() {
    document.getElementById('box-span-2').className = ''
  }



  onSubmit(){
    // confirm(''+this.formModel.valid)
    if(this.formModel.valid){
      alert('sb')
    }


    // if(!this.formModel.get(''))



  }

}
