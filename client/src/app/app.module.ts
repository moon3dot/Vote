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

@NgModule({
  declarations: [
    AppComponent,
    MainSingupComponent,
    AllVoterComponent

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
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
