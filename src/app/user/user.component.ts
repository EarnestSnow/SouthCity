import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  hidd:any;
  telephone:any;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem('loginPhone')){
      this.telephone=localStorage.getItem('loginPhone');
      this.hidd=true;
    }
  }
  out(){
    localStorage.clear()
    this.router.navigate(['/index'])
  }
}
