import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { httpAdr } from '../config';
import { StatusMessageDto } from './../dto/status-message.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JWTokenDTO } from './dto/token-object.dto';
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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  appUser$: BehaviorSubject<IToken | null>;
  currentToken = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private usersStore: UsersStore
  ) {
    this.appUser$ = new BehaviorSubject(null);
  }

  get appUser(): IToken | null {
    return this.appUser$.getValue();
  }

  loadLocalToken() {
    const access_token = localStorage.getItem(keyLocalStorToken);
    if (!access_token) {
      this.appUser$.next(null);
      this.currentToken = '';
    } else {
      this.currentToken = access_token;
      const tokenObj: IToken = jwtHelperService.decodeToken(access_token);
      this.appUser$.next(tokenObj);
    }
    console.log('loadLocalToken: ', access_token);
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

  async getToken(user: LoginDto) {
    this.http
      .post<JWTokenDTO>(httpAdr + '/api/auth/get-token-obj', user)
      .subscribe((tokenObj) => {
        // console.log('get tokenObj:', tokenObj);
        localStorage.setItem(keyLocalStorToken, tokenObj.access_token);
        this.loadLocalToken();
      });
  }

  async logout() {
    this.router.navigate(['']);
    localStorage.removeItem(keyLocalStorToken);
    this.appUser$.next(null);
    this.usersStore.reset();
  }
}
