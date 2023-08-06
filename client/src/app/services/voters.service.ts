import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VotersService {

  constructor(private http: HttpClient) { }

  voters() {

  }
}
