import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrganizerComponent } from './organizer/organizer.component';
import { CountriesComponent } from './countries/countries.component';
import { SportsmenComponent } from './sportsmen/sportsmen.component';
import { MedalsComponent } from './medals/medals.component';
import { DelegateComponent } from './delegate/delegate.component';
import { LeaderDelegacyComponent } from './leader-delegacy/leader-delegacy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    OrganizerComponent,
    CountriesComponent,
    SportsmenComponent,
    MedalsComponent,
    DelegateComponent,
    LeaderDelegacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
