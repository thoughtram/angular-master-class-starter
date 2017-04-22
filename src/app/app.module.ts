import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactsMaterialModule } from './contacts-material.module';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppStore } from './store/app-store';
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard.component";
import { VoterComponent } from "./components/voter.component";
import { StatusComponent } from "./components/status.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    VoterComponent,
    StatusComponent
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule {
}

