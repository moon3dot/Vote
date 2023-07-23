import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { register } from 'src/app/models/registeer.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  responsedata: any;
  userRegister: any;
  constructor(private fb: FormBuilder, private service: AuthService, private route: Router) {
    localStorage.clear();
  }

  registerFg = this.fb.group({
    nameCtrl: ['', [Validators.required, Validators.min(3), Validators.maxLength(25)]],
    emailCtrl: ['', [Validators.required, Validators.pattern(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,5})+)$/)]],
    passwordCtrl: ['', [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")]],
    confirmPassCtrl: ['', [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")]],
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

  submitFg() {

    let userRegister: register = {
      name: this.NameCtrl.value,
      email: this.EmailCtrl.value,
      password: this.PasswordCtrl.value,
      confirmPass: this.ConfirmPassCtrl.value
    }

    this.service.RegisterVoter('').subscribe(
      {
        next: res => {
          this.userRegister = res
          console.log(this.userRegister.value)
        }
      }
    )
  }
}

