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
    saturdayCtrl: ['',],
    saturdayTimeCtrl:['',]

  
  })

}
