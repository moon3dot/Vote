import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSingupComponent } from './components/main-singup/main-singup.component';
import { AllVoterComponent } from './components/all-voter/all-voter.component';

const routes: Routes = [
  { path: "singup", component: MainSingupComponent },
  { path: "voters", component: AllVoterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
