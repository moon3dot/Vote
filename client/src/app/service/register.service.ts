import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { register } from '../models/registeer.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = "http://localhost:5000/api/Register/register";
  isUserLogin = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

  userSingUp<register>(data: register) {
    this.http.post<register>(this.apiUrl, data, { observe: 'response' }).subscribe(
      (result) => {
        if (result) {
          this.isUserLogin.next(true)
          localStorage.setItem('user', JSON.stringify(result))
          this.router.navigate(['', 'home']);
        }
      })
  }
}
  // postUser<register>(postuser: register) {

  //   return this.http.post<register>(this.apiUrl, postuser)
  // }
