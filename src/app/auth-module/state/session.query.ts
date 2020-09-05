import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SessionState, SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {
  token$ = this.select('token');
  currentUser$ = this.select('currentUser');
  isLogged$ = this.select('isLogged');
  constructor(protected store: SessionStore) {
    super(store);
  }

  get isLoggedIn() {
    return this.getValue().isLogged;
  }

  get currentUser() {
    return this.getValue().currentUser;
  }

  get token() {
    return this.getValue().token;
  }
}
