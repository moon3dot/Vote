import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = "http://localhost:5000/api/Register/register";

  constructor(private http: HttpClient) { }

  postUser<Register>(postuser: Register) {

    return this.http.post(this.apiUrl, postuser)
  }
}
