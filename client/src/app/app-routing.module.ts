import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSingupComponent } from './components/main-singup/main-singup.component';

const routes: Routes = [
  {path: "singup", component:MainSingupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
