import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent} from '../home/home.component';
import { LogoutComponent } from '../logout/logout.component';
import {TickerTableComponent} from '../ticker-table/ticker-table.component';
import  {DashboardComponent} from '../dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'logout',   component:LogoutComponent},
  { path: 'tickertable',   component:TickerTableComponent},
  { path: 'dashboard',   component:DashboardComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];