import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

import { ClockComponent } from './components/clock/clock.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VoteComponent } from './components/vote/vote.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ClockComponent,
    NotFoundComponent,
    VoteComponent,
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
