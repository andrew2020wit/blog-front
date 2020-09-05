import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionQuery } from './state/session.query';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private sessionQuery: SessionQuery) {}
  canActivate(): boolean {
    if (this.sessionQuery.isLoggedIn) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
