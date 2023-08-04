import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { register } from 'src/app/models/registeer.model';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  globLogin: register | undefined;
  globError: string | undefined;
  globShow: register | undefined;

  constructor(private registerS: LoginService, private fb: FormBuilder, private router: Router, private http: HttpClient) { };

  loginFg = this.fb.group({
    emailctrl: ['', [Validators.email, Validators.required]],
    passwordCtrl: ['', [Validators.required]]
  });

  get EmailCtrl(): FormControl {
    return this.loginFg.get('emailctrl') as FormControl;
  };
  get PasswordCtrl(): FormControl {
    return this.loginFg.get('passwordCtrl') as FormControl;
  };

  submitlogin(): void {

    let userlogin: register = {
      email: this.EmailCtrl.value,
      password: this.PasswordCtrl.value
    }
    this.registerS.userSingin(userlogin);
  };
  };

    // this.service.loginUser(userlogin).subscribe(
    //   {
    //     next: res => {
    //       this.globLogin = res;
    //       this.router.navigateByUrl('');
    //       this.globShow = res;
    //     }
    //   });

    // this.http.post<register>("http://localhost:5000/api/Register/login" , userlogin).subscribe({
    // next: res => {
    //   this.globLogin = res;
    //   this.router.navigateByUrl('');
    //   this.globShow = res;
    // }
    // });
