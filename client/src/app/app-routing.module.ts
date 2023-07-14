import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoteComponent } from './components/vote/vote.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [

  {path: 'getVote' , component:VoteComponent},
  {path: '**' , component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
