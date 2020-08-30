import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpAdr } from '../config';
import { StatusMessageDto } from './../dto/status-message.dto';
import { CreateUserDto } from './dto/create-user.dto';

export interface IAuthUser {
  accessToken: string;
  expiresIn: Date;
  login: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  createUser$(newUser: CreateUserDto) {
    return this.http.post<StatusMessageDto>(
      httpAdr + '/api/auth/create-user',
      newUser
    );
  }

  // login2(login: string, password: string) {
  //   return this.http
  //     .post<any>(httpAdr + '/auth/new-user', { login, password })
  //     .pipe(
  //       map((user) => {
  //         if (user && user.accessToken) {
  //           localStorage.setItem('currentUser', JSON.stringify(user));
  //           this.currentUserSubject.next(user);
  //         }
  //         return user;
  //       })
  //     );
  // }

  logout() {}
}
