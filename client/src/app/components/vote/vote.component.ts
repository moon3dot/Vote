import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {
  toppings = new FormControl('');
  toppingList: string[] = ['10-14', '11-15', '12-16', '13-17', '14-18', '15-19' , '16-20' , '17-21'];  
  
  };
 