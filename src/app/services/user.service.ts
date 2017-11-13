import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';


@Injectable()
export class UserService {
  url:string='http://localhost:3000/user';
  constructor(
    private http:HttpClient,
  ) { }
userinfoup(user,callback){
  this.http.post(this.url+'/userinfo',user).subscribe(
    function (result) {
      callback(result);
    },
    function (error) {
      console.log(error.message);
    }
  )
}

}
