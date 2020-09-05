import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';
import { SessionQuery } from './../../state/session.query';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLogged = false;
  constructor(
    private sessionQuery: SessionQuery,
    public loginDialog: MatDialog
  ) {
    this.sessionQuery.isLogged$.subscribe((b) => (this.isLogged = b));
  }

  ngOnInit(): void {}

  popupLogIn() {
    const dialogRef = this.loginDialog.open(LoginFormComponent);
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
