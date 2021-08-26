import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../login/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthenticationService) { }

    ngOnInit() {
      this.isLoggedIn = this.authenticationService.isUserLoggedIn();
      console.log('menu ->' + this.isLoggedIn);
    }
  
    handleLogout() {
      this.authenticationService.logout();
    }

  openLoginForm() {
    
    this.dialog.open(LoginComponent , {width: '500px', height: '450px'})
  }

}