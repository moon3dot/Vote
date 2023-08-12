import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { vote } from '../Models/vote.model';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetVoteService {

  public apiUrl = "http://localhost:5000/api/vote/get-all";
  private currentVoteSource = new BehaviorSubject<vote | null>(null);
  public currentVote$ = this.currentVoteSource.asObservable();

  constructor(private http: HttpClient) { }

  getVote()  :Observable<vote | null>{

return this.http.get<vote>( this.apiUrl)
.pipe(
  map(vote =>{
    if(vote){
      this.currentVoteSource.next(vote);

      return vote;
    }

    return null
  })
)
  }
}
