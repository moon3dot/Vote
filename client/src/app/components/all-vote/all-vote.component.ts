import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { vote } from 'src/app/Models/vote.model';
import { voter } from 'src/app/Models/voter.model';
import { VotersService } from 'src/app/services/voters.service';

@Component({
  selector: 'app-all-vote',
  templateUrl: './all-vote.component.html',
  styleUrls: ['./all-vote.component.scss']
})
export class AllVoteComponent {
  public votes: vote[] | undefined;
  public apiUrl = "http://localhost:5000/api/vote/get-all";
  public count = 0;
  constructor(private http: HttpClient) {

    this.showVotes()
  }

  showVotes(): void {

    this.http.get<vote[]>(this.apiUrl).subscribe({
      next: respose => {
        this.votes = respose;
        for(let i = 0; i< this.votes.length ; i++){
          if(this.votes)
        }
        console.log(this.count);
      }

    });
  }
}
