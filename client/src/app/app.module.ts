import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { CheckComponent } from './components/check/check.component';
import { NotesComponent } from './components/notes/notes.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    CheckComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
