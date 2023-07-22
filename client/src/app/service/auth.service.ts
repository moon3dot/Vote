import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl = 'http://localhost:5000/api/Register/addVoter'
  constructor(private http: HttpClient) { }

  proceedRegister(usercred: any) {
    return this.http.post(this.apiurl, usercred)
  }
}
