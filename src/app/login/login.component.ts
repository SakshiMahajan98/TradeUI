import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogRef,MatDialogConfig} from '@angular/material/dialog';
import { AuthenticationService } from './auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // user= {username: '',password: '',remember: false};
  username: string;
  password : string;
  public remember:false;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;



  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height="600";
    dialogConfig.width="500";
  }

  handleLogin() {
    if(this.username=="Hack5" && this.password=="Hack5")
    {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.authenticationService.registerSuccessfulLogin(this.username,this.password);
      if(this.remember){
        localStorage.setItem('token',this.username);
       
      }
      setTimeout(() => {
       this. dialogRef.close();
      }, 100);
      this.router.navigate(['/dashboard']);
      }
      else
      {
      this.invalidLogin = true;
      this.loginSuccess = false;
      }
    }


}
