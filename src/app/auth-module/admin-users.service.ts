import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { httpAdr } from '../config';
import { UserAdminView } from './dto/user-admin-view.dto';

@Injectable({
  providedIn: 'root',
})
export class AdminUsersService {
  _users$ = new BehaviorSubject<UserAdminView[]>([]);
  _usersLoading$ = new BehaviorSubject<boolean>(false);
  public users$ = this._users$.asObservable();
  public usersLoading$ = this._usersLoading$.asObservable();
  constructor(private http: HttpClient) {}
  httpLoadUsers() {
    this.http
      .get<UserAdminView[]>(httpAdr + '/api/auth/admin/users')
      .subscribe((users) => {
        this._users$.next(users);
      });
  }
  activateUser(userId: string, isActive: boolean) {
    this.http
      .post(httpAdr + '/api/auth/admin/activate-user', {
        userId,
        isActive,
      })
      .subscribe((x) => {
        // console.log('activateUser', x);
        this.httpLoadUsers();
      });
  }
  reset() {
    this._users$.next([]);
  }
}
