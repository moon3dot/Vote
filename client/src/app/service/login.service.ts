import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = "http://localhost:5000/api/Register/login";
  isUserLogin = new BehaviorSubject(false);
  constructor(private http: HttpClient, private router:Router) { }

  
  userSingin<register>(data:register){
    this.http.post<register>(this.apiUrl , data,{observe:'response'}).subscribe(
      (result) =>
      {
        if(result){
          this.isUserLogin.next(true)
          localStorage.setItem('user', JSON.stringify(result))
          this.router.navigateByUrl('home');
        }
      })
  }
  // loginUser<register>(userInput : register){

  //   return this.http.post<register>(this.apiUrl , userInput);
  // }
}
