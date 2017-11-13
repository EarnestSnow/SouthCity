import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  hidd:boolean;
  telephone:any;
  constructor(private router:Router,) {
  }

  ngOnInit() {
    if (localStorage.getItem('loginPhone')){
      this.telephone=localStorage.getItem('loginPhone');
      this.hidd=true;
    }

  }
  out(){
    localStorage.clear()
    this.router.navigate(['/index'])
  }
}
