import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {
  constructor(private fb:FormBuilder){}

  voteFg = this.fb.group({
    saturdayVote:['',[]]
  })
  };
 