import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent} from '../home/home.component';
import { LogoutComponent } from '../logout/logout.component';


export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'logout',   component:LogoutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];