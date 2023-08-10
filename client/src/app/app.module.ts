import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSingupComponent } from './components/main-singup/main-singup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// add material 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
//form
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from "@angular/forms"
import { ReactiveFormsModule } from '@angular/forms'

// Material
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
//
import { HttpClientModule } from '@angular/common/http';
import { AllVoterComponent } from './components/all-voter/all-voter.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HelpComponent } from './components/help/help.component';
import { VoteComponent } from './components/vote/vote.component';
import { AllVoteComponent } from './components/all-vote/all-vote.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    MainSingupComponent,
    AllVoterComponent,
    LoginComponent,
    HeaderComponent,
    HelpComponent,
    VoteComponent,
    AllVoteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // add mateliral
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule,
    //
    HttpClientModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
