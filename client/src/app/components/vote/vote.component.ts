import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
    saturdayTimeCtrl: [''],
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
    sundayTimeCtrl: [''],
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
    mondayTimeCtrl: [''],
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
    tuesdayTimeCtrl: [''],
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
    wednesdayTimeCtrl: [''],
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
    thursdayTimeCtrl: [''],
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
    fridayTimeCtrl: [''],
    friday10To14Ctrl: [''],
    friday11To15Ctrl: [''],
    friday12To16Ctrl: [''],
    friday13To17Ctrl: [''],
    friday14To18Ctrl: [''],
    friday15To19Ctrl: [''],
    friday16To20Ctrl: [''],
    friday17To21Ctrl: [''],
  })


}
