import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { register } from 'src/app/models/registeer.model';
import { AuthService } from 'src/app/service/auth.service';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

globalUserRegister: register | undefined;

  constructor(private fb: FormBuilder, private service: RegisterService, private router: Router, private http: HttpClient) {
    localStorage.clear();
  }

  registerFg = this.fb.group({
    nameCtrl: ['', [Validators.required, Validators.min(3), Validators.maxLength(25)]],
    emailCtrl: ['', [Validators.required, Validators.pattern(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,5})+)$/)]],
    passwordCtrl: ['', [Validators.required]],
    confirmPassCtrl: ['', [Validators.required]],
  });

  get NameCtrl(): FormControl {
    return this.registerFg.get('nameCtrl') as FormControl;
  };
  get EmailCtrl(): FormControl {
    return this.registerFg.get('emailCtrl') as FormControl;
  };
  get PasswordCtrl(): FormControl {
    return this.registerFg.get('passwordCtrl') as FormControl;
  };
  get ConfirmPassCtrl(): FormControl {
    return this.registerFg.get('confirmPassCtrl') as FormControl;
  };

  submitFg(): void {

    let userRegister: register = {
      name: this.NameCtrl.value,
      email: this.EmailCtrl.value,
      password: this.PasswordCtrl.value,
      confirmPass: this.ConfirmPassCtrl.value
    }
    console.log(userRegister);

    // this.http.post<register>('http://localhost:5000/api/Register/register', userRegister).subscribe(
    //   {
    //     next: res => {
    //       this.globalUserRegister = res;
    //       this.router.navigateByUrl('');
    //     }
    //   }
    // )
    this.service.postUser(userRegister).subscribe(
      {
        next: res => {
          userRegister = res;
          this.router.navigateByUrl('login');
        }
      }
    )
  }
}

