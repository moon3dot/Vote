import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Voter } from 'src/app/Models/Voter.model';

@Component({
  selector: 'app-main-singup',
  templateUrl: './main-singup.component.html',
  styleUrls: ['./main-singup.component.scss']
})
export class MainSingupComponent {

  constructor(private fb: FormBuilder) { }

  singupFg = this.fb.group({
    nameCtrl: ['', [Validators.required, Validators.min(3), Validators.max(25)]],
    emailCtrl: ['', [Validators.required, Validators.email,]]
  })

  get NameCtrl(): FormControl {
    return this.singupFg.get('nameCtrl') as FormControl;
  }
  get EmailCtrl(): FormControl {
    return this.singupFg.get('emailCtrl') as FormControl;
  }

  submitfg(): void {

    let userdata: Voter = {
      name: this.NameCtrl.value,
      email: this.EmailCtrl.value
    }
    console.log(userdata);
  }

}


