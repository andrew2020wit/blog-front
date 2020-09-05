import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { IToken } from '../auth.service';

export interface SessionState {
  token: string | null;
  currentUser: IToken;
  isLogged: boolean;
}

export function createInitialState(): SessionState {
  return {
    token: null,
    currentUser: null,
    isLogged: false,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session', resettable: true })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
