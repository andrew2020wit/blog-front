import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { httpAdr } from '../config';
import { StatusMessageDto } from './../dto/status-message.dto';
import { AdminUsersService } from './admin-users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JWTokenDTO } from './dto/token-object.dto';

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
  private _appUser$ = new BehaviorSubject<IToken | null>(null);
  appUser$ = this._appUser$.asObservable();
  currentToken = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private adminUsersService: AdminUsersService
  ) {}

  get appUser(): IToken | null {
    return this._appUser$.getValue();
  }

  get appUserRole(): string | null {
    const user: IToken = this._appUser$.getValue();
    if (!!user) {
      return user.role;
    }
    return null;
  }

  loadLocalToken() {
    const access_token = localStorage.getItem(keyLocalStorToken);
    if (!access_token) {
      this._appUser$.next(null);
      this.currentToken = '';
    } else {
      this.currentToken = access_token;
      const tokenObj: IToken = jwtHelperService.decodeToken(access_token);
      this._appUser$.next(tokenObj);
    }
    // console.log('loadLocalToken: ', access_token);
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
    this._appUser$.next(null);
    this.adminUsersService.reset();
  }
}
