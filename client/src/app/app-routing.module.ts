import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSingupComponent } from './components/main-singup/main-singup.component';
import { AllVoterComponent } from './components/all-voter/all-voter.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HelpComponent } from './components/help/help.component';
import { VoteComponent } from './components/vote/vote.component';
import { AllVoteComponent } from './components/all-vote/all-vote.component';
import { HomeComponent } from './components/home/home.component';
import { ThankComponent } from './components/thank/thank.component';
import { ToVoteComponent } from './components/to-vote/to-vote.component';

const routes: Routes = [
  { path: "singup", component: MainSingupComponent },
  { path: "voters", component: AllVoterComponent },
  { path: "login", component: LoginComponent },
  { path: "help", component: HelpComponent },
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "vote", component: VoteComponent },
  { path: "show-vote", component: AllVoteComponent },
  { path: "thank", component: ThankComponent },
  { path: "top-vote", component: ToVoteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
