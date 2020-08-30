import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ISessionState {
  token: string | null;
  userId: string | null;
}

export function createInitialSessionState(): ISessionState {
  return {
    token: null,
    userId: null,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<ISessionState> {
  constructor() {
    super(createInitialSessionState());
  }
  login(session: ISessionState) {
    this.update(session);
    storage.saveSession(session);
  }
  logout() {
    storage.clearSesssion();
    this.update(createInitialSessionState());
  }
}
