import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { LoginComponent } from './login/login.component';
import { MedalsComponent } from './medals/medals.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { RegisterComponent } from './register/register.component';
import { SportsmenComponent } from './sportsmen/sportsmen.component';
import { DelegateComponent} from './delegate/delegate.component'
import { LeaderDelegacyComponent } from './leader-delegacy/leader-delegacy.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'organizer', component: OrganizerComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'sportsmen', component: SportsmenComponent },
  { path: 'medals', component: MedalsComponent},
  { path: 'delegate', component: DelegateComponent},
  { path: 'leader', component: LeaderDelegacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
