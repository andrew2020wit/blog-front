import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@app/auth-module/auth.service';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLogged = false;
  constructor(private authService: AuthService, public loginDialog: MatDialog) {
    this.authService.currentUser.subscribe((user) => {
      this.isLogged = !!user;
    });
  }

  ngOnInit(): void {}

  popupLogIn() {
    const dialogRef = this.loginDialog.open(LoginFormComponent);
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
