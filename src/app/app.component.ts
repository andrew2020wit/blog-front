import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth-module/auth.service';
import { menuList } from './site-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  menuOn = true;
  links = menuList;
  constructor(private authService: AuthService) {
    this.authService.loadLocalToken();
  }
  ngOnInit(): void {}
}
