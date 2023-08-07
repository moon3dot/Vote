import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { voter } from '../Models/voter.model';

@Injectable({
  providedIn: 'root'
})
export class VotersService {
  public apiUrl = "http://localhost:5000/api/voter/get-all";
  voters: voter[] | undefined;
  constructor(private http: HttpClient) { }

  showVoters(): void {

    this.http.get<voter[]>(this.apiUrl).subscribe({
      next: respose => this.voters = respose
    });
  }
}

