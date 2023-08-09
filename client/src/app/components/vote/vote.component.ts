import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {
  apiUrl = "http://localhost:5000/api/vote/vote";

  constructor(private fb: FormBuilder) { }

  voteFg = this.fb.group({
    // day
    saturdayCtrl: [''],
    //time
    saturday10To14Ctrl: [''],
    saturday11To15Ctrl: [''],
    saturday12To16Ctrl: [''],
    saturday13To17Ctrl: [''],
    saturday14To18Ctrl: [''],
    saturday15To19Ctrl: [''],
    saturday16To20Ctrl: [''],
    saturday17To21Ctrl: [''],
    // day
    sundayCtrl: [''],
    //time
    sunday10To14Ctrl: [''],
    sunday11To15Ctrl: [''],
    sunday12To16Ctrl: [''],
    sunday13To17Ctrl: [''],
    sunday14To18Ctrl: [''],
    sunday15To19Ctrl: [''],
    sunday16To20Ctrl: [''],
    sunday17To21Ctrl: [''],
    // day
    mondayCtrl: [''],
    //time
    monday10To14Ctrl: [''],
    monday11To15Ctrl: [''],
    monday12To16Ctrl: [''],
    monday13To17Ctrl: [''],
    monday14To18Ctrl: [''],
    monday15To19Ctrl: [''],
    monday16To20Ctrl: [''],
    monday17To21Ctrl: [''],
    // day
    tuesdayCtrl: [''],
    //time
    tuesday10To14Ctrl: [''],
    tuesday11To15Ctrl: [''],
    tuesday12To16Ctrl: [''],
    tuesday13To17Ctrl: [''],
    tuesday14To18Ctrl: [''],
    tuesday15To19Ctrl: [''],
    tuesday16To20Ctrl: [''],
    tuesday17To21Ctrl: [''],
    // day
    wednesdayCtrl: [''],
    //time
    wednesday10To14Ctrl: [''],
    wednesday11To15Ctrl: [''],
    wednesday12To16Ctrl: [''],
    wednesday13To17Ctrl: [''],
    wednesday14To18Ctrl: [''],
    wednesday15To19Ctrl: [''],
    wednesday16To20Ctrl: [''],
    wednesday17To21Ctrl: [''],
    // day
    thursdayCtrl: [''],
    //time
    thursday10To14Ctrl: [''],
    thursday11To15Ctrl: [''],
    thursday12To16Ctrl: [''],
    thursday13To17Ctrl: [''],
    thursday14To18Ctrl: [''],
    thursday15To19Ctrl: [''],
    thursday16To20Ctrl: [''],
    thursday17To21Ctrl: [''],
    // day
    fridayCtrl: [''],
    //time
    friday10To14Ctrl: [''],
    friday11To15Ctrl: [''],
    friday12To16Ctrl: [''],
    friday13To17Ctrl: [''],
    friday14To18Ctrl: [''],
    friday15To19Ctrl: [''],
    friday16To20Ctrl: [''],
    friday17To21Ctrl: [''],
  })

  // day
  get SaturdayCtrl(): FormControl {
    return this.voteFg.get('saturdayCtrl') as FormControl;
  };
  //time
  get Saturday10To14Ctrl(): FormControl {
    return this.voteFg.get('saturday10To14Ctrl') as FormControl;
  };
  get Saturday11To15Ctrl(): FormControl {
    return this.voteFg.get('saturday11To15Ctrl') as FormControl;
  };
  get Saturday12To16Ctrl(): FormControl {
    return this.voteFg.get('saturday12To16Ctrl') as FormControl;
  };
  get Saturday13To17Ctrl(): FormControl {
    return this.voteFg.get('saturday13To17Ctrl') as FormControl;
  };
  get Saturday14To18Ctrl(): FormControl {
    return this.voteFg.get('saturday14To18Ctrl') as FormControl;
  };
  get Saturday15To19Ctrl(): FormControl {
    return this.voteFg.get('saturday15To19Ctrl') as FormControl;
  };
  get Saturday16To20Ctrl(): FormControl {
    return this.voteFg.get('saturday16To20Ctrl') as FormControl;
  };
  get Saturday17To21Ctrl(): FormControl {
    return this.voteFg.get('saturday17To21Ctrl') as FormControl;
  };

  // day
  get SundayCtrl(): FormControl {
    return this.voteFg.get('sundayCtrl') as FormControl;
  };
  //time
  get Sunday10To14Ctrl(): FormControl {
    return this.voteFg.get('sunday10To14Ctrl') as FormControl;
  };
  get Sunday11To15Ctrl(): FormControl {
    return this.voteFg.get('sunday11To15Ctrl') as FormControl;
  };
  get Sunday12To16Ctrl(): FormControl {
    return this.voteFg.get('sunday12To16Ctrl') as FormControl;
  };
  get Sunday13To17Ctrl(): FormControl {
    return this.voteFg.get('sunday13To17Ctrl') as FormControl;
  };
  get Sunday14To18Ctrl(): FormControl {
    return this.voteFg.get('sunday14To18Ctrl') as FormControl;
  };
  get Sunday15To19Ctrl(): FormControl {
    return this.voteFg.get('sunday15To19Ctrl') as FormControl;
  };
  get Sunday16To20Ctrl(): FormControl {
    return this.voteFg.get('sunday16To20Ctrl') as FormControl;
  };
  get Sunday17To21Ctrl(): FormControl {
    return this.voteFg.get('sunday17To21Ctrl') as FormControl;
  };

  // day
  get MondayCtrl(): FormControl {
    return this.voteFg.get('mondayCtrl') as FormControl;
  };
  //time
  get Monday10To14Ctrl(): FormControl {
    return this.voteFg.get('monday10To14Ctrl') as FormControl;
  };
  get Monday11To15Ctrl(): FormControl {
    return this.voteFg.get('monday11To15Ctrl') as FormControl;
  };
  get Monday12To16Ctrl(): FormControl {
    return this.voteFg.get('monday12To16Ctrl') as FormControl;
  };
  get Monday13To17Ctrl(): FormControl {
    return this.voteFg.get('monday13To17Ctrl') as FormControl;
  };
  get Monday14To18Ctrl(): FormControl {
    return this.voteFg.get('monday14To18Ctrl') as FormControl;
  };
  get Monday15To19Ctrl(): FormControl {
    return this.voteFg.get('monday15To19Ctrl') as FormControl;
  };
  get Monday16To20Ctrl(): FormControl {
    return this.voteFg.get('monday16To20Ctrl') as FormControl;
  };
  get Monday17To21Ctrl(): FormControl {
    return this.voteFg.get('monday17To21Ctrl') as FormControl;
  };


  // day
  get TuesdayCtrl(): FormControl {
    return this.voteFg.get('tuesdayCtrl') as FormControl;
  };
  //time
  get Tuesday10To14Ctrl(): FormControl {
    return this.voteFg.get('tuesday10To14Ctrl') as FormControl;
  };
  get Tuesday11To15Ctrl(): FormControl {
    return this.voteFg.get('tuesday11To15Ctrl') as FormControl;
  };
  get Tuesday12To16Ctrl(): FormControl {
    return this.voteFg.get('tuesday12To16Ctrl') as FormControl;
  };
  get Tuesday13To17Ctrl(): FormControl {
    return this.voteFg.get('tuesday13To17Ctrl') as FormControl;
  };
  get Tuesday14To18Ctrl(): FormControl {
    return this.voteFg.get('tuesday14To18Ctrl') as FormControl;
  };
  get Tuesday15To19Ctrl(): FormControl {
    return this.voteFg.get('tuesday15To19Ctrl') as FormControl;
  };
  get Tuesday16To20Ctrl(): FormControl {
    return this.voteFg.get('tuesday16To20Ctrl') as FormControl;
  };
  get Tuesday17To21Ctrl(): FormControl {
    return this.voteFg.get('tuesday17To21Ctrl') as FormControl;
  };
  // day
  get wednesdayCtrl(): FormControl {
    return this.voteFg.get('wednesdayCtrl') as FormControl;
  };
  //time
  get wednesday10To14Ctrl(): FormControl {
    return this.voteFg.get('wednesday10To14Ctrl') as FormControl;
  };
  get wednesday11To15Ctrl(): FormControl {
    return this.voteFg.get('wednesday11To15Ctrl') as FormControl;
  };
  get wednesday12To16Ctrl(): FormControl {
    return this.voteFg.get('wednesday12To16Ctrl') as FormControl;
  };
  get wednesday13To17Ctrl(): FormControl {
    return this.voteFg.get('wednesday13To17Ctrl') as FormControl;
  };
  get wednesday14To18Ctrl(): FormControl {
    return this.voteFg.get('wednesday14To18Ctrl') as FormControl;
  };
  get wednesday15To19Ctrl(): FormControl {
    return this.voteFg.get('wednesday15To19Ctrl') as FormControl;
  };
  get wednesday16To20Ctrl(): FormControl {
    return this.voteFg.get('wednesday16To20Ctrl') as FormControl;
  };
  get wednesday17To21Ctrl(): FormControl {
    return this.voteFg.get('wednesday17To21Ctrl') as FormControl;
  };
}
