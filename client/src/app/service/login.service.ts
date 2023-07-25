import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = "http://localhost:5000/api/Register/Login"

  constructor(private http: HttpClient) { }

  loginUser<register>(userInput : register){

    return this.http.post<register>(this.apiUrl , userInput);
  }
}
