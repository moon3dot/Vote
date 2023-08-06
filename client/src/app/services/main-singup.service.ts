import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainSingupService {
  public apiUrl = "http://localhost:5000/api/voter/singup";

  constructor() { }

}
