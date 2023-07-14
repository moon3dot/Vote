import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { CheckComponent } from './components/check/check.component';
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
  {path: 'bookmarks' , component: BookmarksComponent},
  {path: 'check' , component: CheckComponent},
  {path: 'notes' , component:NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
