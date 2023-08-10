import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { voter } from 'src/app/Models/voter.model';
import { VotersService } from 'src/app/services/voters.service';

@Component({
  selector: 'app-all-voter',
  templateUrl: './all-voter.component.html',
  styleUrls: ['./all-voter.component.scss']
})
export class AllVoterComponent {
  voters: voter[] | undefined;
  public apiUrl = "http://localhost:5000/api/voter/get-all";

  constructor(private http: HttpClient) {
    
    this.showVotes()
  }

  showVotes(): void {

    this.http.get<voter[]>(this.apiUrl).subscribe({
      next: respose => this.voters = respose
    });
    console.log(this.voters)
  }
}
