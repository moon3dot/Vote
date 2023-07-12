import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, MaxValidator, Validators } from '@angular/forms';
import { vote } from './models/vote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "";
  userRes: vote | undefined;
constructor(private fb:FormBuilder , private http: HttpClient){
};
  //#region Create Form Group/controler (AbstractControl)
fmVote=this.fb.group({
  emailCtrl:['', [Validators.required ,Validators.pattern(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,5})+)$/)]],
  saturdayCtrl:[false, []],
  satmornigCtrl:[false, []],
  satNoonCtrl:[false, []],
  sundayCtrl:[false, []],
  sunmornigCtrl:[false, []],
  sunNoonCtrl:[false, []],
  mondayCtrl:[false, []],
  monmornigCtrl:[false, []],
  monNoonCtrl:[false, []],
  tuesdayCtrl:[false, []],
  tuesmornigCtrl:[false, []],
  tuseNoonCtrl:[false, []],
  wednesdayCtrl:[false, []],
  wenmornigCtrl:[false, []],
  wenNoonCtrl:[false, []],
  thursdayCtrl:[false, []],
  thurmornigCtrl:[false, []],
  thurNoonCtrl:[false, []],
  fridayCtrl:[false, []],
  friymornigCtrl:[false, []],
  friyNoonCtrl:[false, []]
})
//#endregion

//#region Methods
registerVote(): void {
  console.log(this.fmVote.value);

  let vote : vote={
    email : this.EmailCtrl.value,
    saturday : this.SaturdayCtrl.value,
    satmornig : this.SatmornigCtrl.value,
    satNoon : this.SatNoonCtrl.value,
    sunday : this.SundayCtrl.value,
    sunmornig : this.SunmornigCtrl.value,
    sunNoon : this.SunNoonCtrl.value,
    monday : this.MondayCtrl.value,
    monmornig : this.MonmornigCtrl.value,
    monNoon : this.MonNoonCtrl.value,
    tuesday : this.TuesdayCtrl.value,
    tuesmornig : this.TuesmornigCtrl.value,
    tuseNoon : this.TuseNoonCtrl.value,
    wednesday : this.WednesdayCtrl.value,
    wenmornig : this.WenmornigCtrl.value,
    wenNoon : this.WenNoonCtrl.value,
    thursday : this.ThursdayCtrl.value,
    thurmornig : this.ThurmornigCtrl.value,
    thurNoon : this.ThurNoonCtrl.value,
    friday : this.FridayCtrl.value,
    friymornig : this.FriymornigCtrl.value,
    friyNoon : this.FriyNoonCtrl.value
  }

  this.http.post<vote>('http://localhost:5000/api/vote/vote', vote).subscribe(
    {next: res => {
      this.userRes = res; 
      console.log(res);
    }}
  );
};


 // Lab's Info
 get EmailCtrl() : FormControl {
  return this.fmVote.get('emailCtrl') as FormControl;
 }

 get SaturdayCtrl() : FormControl{
  return this.fmVote.get('saturdayCtrl') as FormControl;
 }
get SatmornigCtrl() : FormControl{
  return this.fmVote.get('satmornigCtrl') as FormControl
}
get SatNoonCtrl() : FormControl{
  return this,this.fmVote.get('satNoonCtrl') as FormControl
}
get SundayCtrl() : FormControl{
  return this.fmVote.get('sundayCtrl') as FormControl
} 
get SunmornigCtrl() : FormControl{
  return this.fmVote.get('sunmornigCtrl') as FormControl
}
get SunNoonCtrl() : FormControl{
  return this.fmVote.get('sunNoonCtrl') as FormControl
}
get MondayCtrl() : FormControl{
  return this.fmVote.get('mondayCtrl') as FormControl
}
get MonmornigCtrl() : FormControl{
  return this.fmVote.get('monmornigCtrl') as FormControl
}
get MonNoonCtrl() : FormControl{
  return this.fmVote.get('monNoonCtrl') as FormControl
} 
get TuesdayCtrl() : FormControl{
  return this.fmVote.get('tuesdayCtrl') as FormControl
}
get TuesmornigCtrl() : FormControl{
  return this.fmVote.get('tuesmornigCtrl') as FormControl
}
get TuseNoonCtrl() : FormControl{
  return this.fmVote.get('tuseNoonCtrl') as FormControl
}
get WednesdayCtrl() : FormControl{
  return this.fmVote.get('wednesdayCtrl') as FormControl
} 
get WenmornigCtrl() : FormControl{
  return this.fmVote.get('wenmornigCtrl') as FormControl
}
get WenNoonCtrl() : FormControl{
  return this.fmVote.get('wenNoonCtrl') as FormControl
}
get ThursdayCtrl() :FormControl{
  return this.fmVote.get('thursdayCtrl') as FormControl
}
get ThurmornigCtrl() : FormControl{
  return this.fmVote.get('thurmornigCtrl') as FormControl
}
get ThurNoonCtrl() : FormControl{
  return this.fmVote.get('thurNoonCtrl') as FormControl
} 
get FridayCtrl() : FormControl{
  return this.fmVote.get('fridayCtrl') as FormControl
}
get FriymornigCtrl() : FormControl{
  return this.fmVote.get('friymornigCtrl') as FormControl
}
get FriyNoonCtrl() : FormControl{
  return this.fmVote.get('friyNoonCtrl') as FormControl
}
}