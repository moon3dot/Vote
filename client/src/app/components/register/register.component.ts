import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Voter } from 'src/app/models/voter.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) { }

  //#region Create Form Group/controler (AbstractControl)
  registerFg = this.fb.group({
    nameCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    emailCtrl: ['', [Validators.required , Validators.pattern(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,5})+)$/)]]
  });
  //#endregion

  //#region Forms Properties
  get NameCtrl(): FormControl {
    return this.registerFg.get('nameCtrl') as FormControl;
  }
  get EmailCtrl(): FormControl {
    return this.registerFg.get('emailCtrl') as FormControl;
  }
  //#endregion

  registeVoter(): void {
    let voter: Voter = {
      name: this.NameCtrl.value,
      email: this.EmailCtrl.value
    }
    console.log(voter)
  }
}
