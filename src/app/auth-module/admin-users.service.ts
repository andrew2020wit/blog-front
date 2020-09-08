import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { httpAdr } from '../config';
import { UserAdminView } from './dto/user-admin-view.dto';

@Injectable({
  providedIn: 'root',
})
export class AdminUsersService {
  users$ = new BehaviorSubject<UserAdminView[]>(null);
  constructor(private http: HttpClient) {}

  httpLoadUsers() {
    this.http
      .get<UserAdminView[]>(httpAdr + '/api/auth/admin/users')
      .subscribe((users) => {
        this.users$.next(users);
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

    // console.log('activateUser');
  }
}
