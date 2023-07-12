import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { VoteComponent } from './component/vote/vote.component';
import { RegisterStudentComponent } from './component/register-student/register-student.component';
import { PageNoteFoundComponent } from './component/page-note-found/page-note-found.component';
import { ShowVoteComponent } from './component/show-vote/show-vote.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoteComponent,
    RegisterStudentComponent,
    PageNoteFoundComponent,
    ShowVoteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
