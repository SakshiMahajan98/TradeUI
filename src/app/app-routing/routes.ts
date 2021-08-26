import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent} from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CartComponent } from '../cart/cart.component';
import { LogoutComponent } from '../logout/logout.component';


export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'cart',  component: CartComponent },
  { path: 'logout',   component:LogoutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];