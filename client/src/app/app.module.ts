import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

//components
import { ClockComponent } from './components/clock/clock.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VoteComponent } from './components/vote/vote.component';

//material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { TopnavborComponent } from './components/topnavbor/topnavbor.component';
import {MatMenuModule} from '@angular/material/menu';
import { HelpComponent } from './components/help/help.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdatePassComponent } from './components/update-pass/update-pass.component';
import { MyVoteComponent } from './components/my-vote/my-vote.component';
import { EditVoteComponent } from './components/edit-vote/edit-vote.component';
import { CadminComponent } from './components/cadmin/cadmin.component';
import { SliderComponent } from './components/slider/slider.component';
import { GetVoteComponent } from './components/get-vote/get-vote.component';
import { GetVoterComponent } from './components/get-voter/get-voter.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    NotFoundComponent,
    VoteComponent,
    RegisterComponent,
    LoginComponent,
    TopnavborComponent,
    HelpComponent,
    ProfileComponent,
    UpdatePassComponent,
    MyVoteComponent,
    EditVoteComponent,
    CadminComponent,
    SliderComponent,
    GetVoteComponent,
    GetVoterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,


    //material
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    HttpClientModule,
    MatMenuModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
