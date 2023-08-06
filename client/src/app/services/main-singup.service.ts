import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { voter } from '../Models/voter.model';


@Injectable({
  providedIn: 'root'
})
export class MainSingupService {
  public apiUrl = "http://localhost:5000/api/voter/singup";
  isUserLogin = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private reout: Router) { }

  userRegister(userDate: voter) {

    this.http.post<voter>(this.apiUrl, userDate).subscribe(
      result => {
        if (result) {
          this.isUserLogin.next(true);
          localStorage.setItem('user', JSON.stringify(result));
          this.reout.navigate(['/']);
        }
      }
    )
  }

}
