import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent} from '../home/home.component';
import { LogoutComponent } from '../logout/logout.component';
import {TickerTableComponent} from '../ticker-table/ticker-table.component';
import  {DashboardComponent} from '../dashboard/dashboard.component';
import {TradeHistoryComponent} from '../trade-history/trade-history.component';
import {BuySellComponent} from '../buy-sell/buy-sell.component';
import {PortfolioComponent} from '../portfolio/portfolio.component';
import {ProfileComponent} from '../profile/profile.component';
import {ChartComponent} from '../chart/chart.component';
import { SchartComponent } from '../schart/schart.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'logout',   component:LogoutComponent},
  { path: 'tickertable',   component:TickerTableComponent},
  { path: 'dashboard',   component:DashboardComponent},
  { path: 'tradeHistory',   component:TradeHistoryComponent},
  { path: 'buy',   component:BuySellComponent},
  { path: 'portfolio',   component:PortfolioComponent},
  { path: 'profile',   component:ProfileComponent},
  { path: 'chart',   component:ChartComponent},
  { path: 'schart',   component:SchartComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];