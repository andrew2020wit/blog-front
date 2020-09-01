import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth-module/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLogged = false;
  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe((user) => {
      this.isLogged = !!user;
    });
  }

  ngOnInit(): void {}

  tempLogIn() {}
}
