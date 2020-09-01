import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth-module/auth.service';

@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.scss'],
})
export class UserWidgetComponent implements OnInit {
  userName = '';
  constructor(private authService: AuthService) {
    authService.currentUser.subscribe((user) => {
      if (!!user) {
        this.userName = user.fullName;
      } else {
        this.userName = '';
      }
    });
  }

  ngOnInit(): void {}

  logOut() {
    this.authService.logout();
  }
}
