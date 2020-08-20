import { Component } from '@angular/core';
import { menuList } from './site-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuOn = true;
  links = menuList;
  constructor() {}
}
