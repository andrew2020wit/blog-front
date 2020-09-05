import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { httpAdr } from '../config';
import { StatusMessageDto } from './../dto/status-message.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JWTokenDTO } from './dto/token-object.dto';
import { SessionQuery } from './state/session.query';
import { SessionStore } from './state/session.store';
import { UsersStore } from './state/users.store';

const jwtHelperService = new JwtHelperService();
const keyLocalStorToken = 'keyLocalStorToken';

export interface IToken {
  login: string;
  sub: string;
  role: string;
  fullName: string;
  iat: number;
  exp: number;
}

// function tokenToCurrentUser(token: IToken): CurrentUser {
//   return {
//     id: token.sub,
//     role: token.role,
//     login: token.login,
//     fullName: token.fullName,
//   };
// }

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private usersStore: UsersStore,
    private sessionStore: SessionStore,
    private sessionQuery: SessionQuery
  ) {
    this.sessionQuery.token$.subscribe((token) => {
      console.log('subscribe((token)', token);
      console.log(this.sessionQuery.currentUser);

      if (!token) {
        this.sessionStore.reset();
      } else {
        const tokenObj: IToken = jwtHelperService.decodeToken(token);
        this.sessionStore.update({ currentUser: tokenObj });
        this.sessionStore.update({ isLogged: true });
      }
      console.log(this.sessionQuery.currentUser);
    });
  }

  loadLocalToken() {
    const access_token = localStorage.getItem(keyLocalStorToken);
    this.sessionStore.update({ token: access_token });
  }

  createUser$(newUser: CreateUserDto) {
    return this.http.post<StatusMessageDto>(
      httpAdr + '/api/auth/create-user',
      newUser
    );
  }

  editUser$(editUser: CreateUserDto) {
    return this.http.post<StatusMessageDto>(
      httpAdr + '/api/auth/edit-user',
      editUser
    );
  }

  async login(user: LoginDto) {
    this.http
      .post<JWTokenDTO>(httpAdr + '/api/auth/get-token-obj', user)
      .subscribe((tokenObj) => {
        console.log('get tokenObj:', tokenObj);
        localStorage.setItem(keyLocalStorToken, tokenObj.access_token);
        this.loadLocalToken();
      });
  }

  async logout() {
    this.router.navigate(['']);
    localStorage.removeItem(keyLocalStorToken);
    this.usersStore.reset();
    this.sessionStore.reset();
  }
}
