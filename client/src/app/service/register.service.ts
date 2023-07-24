import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = "http://localhost:5000/api/Register/register";

  constructor(private http: HttpClient) { }

  postUser<register>(postuser: register) {

    return this.http.post<register>(this.apiUrl, postuser)
  }
}
