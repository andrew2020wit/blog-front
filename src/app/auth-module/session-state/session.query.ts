import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ISessionState, SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<ISessionState> {
  isLoggedIn$ = this.select((state) => !!state.token);
  userId$ = this.select((state) => state.userId);

  constructor(protected store: SessionStore) {
    super(store);
  }
  get isLoggedIn() {
    return !!this.getValue().token;
  }
}
