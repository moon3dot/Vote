import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
import { voter } from 'src/app/Models/voter.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public apiUrl = "http://localhost:5000/api/voter/login";
  public userInput: voter | undefined;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  login = this.fb.group({
    emailCtrl: ['', [Validators.required, Validators.email]]
  })

  get EmailCtrl(): FormControl {
    return this.login.get('emailCtrl') as FormControl
  }

  btnLogin() {

    let userlogin: voter = {

      email: this.EmailCtrl.value
    }
    console.log(userlogin)

    this.http.post<voter>(this.apiUrl, userlogin).subscribe({
      next: response => this.userInput = response
    })
    console.log(this.userInput)
  }
}

