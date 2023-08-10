import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSingupComponent } from './components/main-singup/main-singup.component';
import { AllVoterComponent } from './components/all-voter/all-voter.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HelpComponent } from './components/help/help.component';
import { VoteComponent } from './components/vote/vote.component';
import { AllVoteComponent } from './components/all-vote/all-vote.component';

const routes: Routes = [
  { path: "singup", component: MainSingupComponent },
  { path: "voters", component: AllVoterComponent },
  { path: "login", component: LoginComponent },
  { path: "help", component: HelpComponent },
  { path: "", component: VoteComponent },
  { path: "home", component: VoteComponent },
  { path: "vote", component: VoteComponent },
  {path : "show-vote" , component:AllVoteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
