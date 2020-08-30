import { ISessionState } from './session-state/session.store';

const sessionToken = 'session-token';
const sessionUserId = 'session-userId';

export function getSession(): ISessionState {
  const token = localStorage.getItem(sessionToken);
  const userId = localStorage.getItem(sessionUserId);
  return { token, userId };
}

export function saveSession(session: ISessionState) {
  localStorage.setItem(sessionToken, session.token);
  localStorage.setItem(sessionUserId, session.userId);
}
export function clearSession() {
  localStorage.removeItem(sessionToken);
  localStorage.removeItem(sessionUserId);
}
