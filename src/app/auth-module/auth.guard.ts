import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@app/auth-module/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (!!this.authService.appUser) {
      const exp = 1000 * this.authService.appUser.exp;
      // console.log(exp, 'exp');

      const curTime: number = new Date().getTime();
      // console.log(curTime, 'curTime');
      if (exp < curTime) {
        alert('token too old!');
        this.authService.logout();
        this.router.navigate(['']);
        return false;
      }
      return true;
    }
    setTimeout(() => alert('login or register!'), 0);
    this.router.navigate(['']);
    return false;
  }
}
