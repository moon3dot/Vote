import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-topnavbor',
  templateUrl: './topnavbor.component.html',
  styleUrls: ['./topnavbor.component.scss']
})
export class TopnavborComponent {
constructor(private rout :Router){}

  logout(){
    localStorage.removeItem('');
    this.rout.navigateByUrl('login');
  }
}
