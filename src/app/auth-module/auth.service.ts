import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { httpAdr } from '../config';
import { StatusMessageDto } from './../dto/status-message.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { CurrentUser } from './dto/current-user';
import { LoginDto } from './dto/login.dto';
import { JWTokenDTO } from './dto/token-object.dto';

const jwtHelperService = new JwtHelperService();
const keyLocalStorToken = 'keyLocalStorToken';

interface IToken {
  login: string;
  sub: string;
  role: string;
  fullName: string;
  iat: number;
  exp: number;
}

function tokenToCurrentUser(token: IToken): CurrentUser {
  return {
    id: token.sub,
    role: token.role,
    login: token.login,
    fullName: token.fullName,
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<CurrentUser | undefined>(
    undefined
  );
  private currentToken: string;
  public currentUser: Observable<CurrentUser | undefined>;

  constructor(private http: HttpClient) {
    this.loadLocalToken();
    this.currentUser = this.currentUserSubject.asObservable();
  }

  loadLocalToken() {
    const access_token = localStorage.getItem(keyLocalStorToken);
    if (access_token) {
      this.currentToken = access_token;
      const tokenObj: IToken = jwtHelperService.decodeToken(this.currentToken);
      console.log(tokenObj);
      this.currentUserSubject.next(tokenToCurrentUser(tokenObj));
    } else {
      this.currentUserSubject.next(undefined);
    }
  }

  public get currentUserValue(): CurrentUser | undefined {
    return this.currentUserSubject.value;
  }

  createUser$(newUser: CreateUserDto) {
    return this.http.post<StatusMessageDto>(
      httpAdr + '/api/auth/create-user',
      newUser
    );
  }

  login(user: LoginDto) {
    this.http
      .post<JWTokenDTO>(httpAdr + '/api/auth/get-token-obj', user)
      .subscribe((tokenObj) => {
        localStorage.setItem(keyLocalStorToken, tokenObj.access_token);
        this.loadLocalToken();
        // console.log(tokenObj);
      });
  }

  logout() {
    localStorage.removeItem(keyLocalStorToken);
    this.loadLocalToken();
  }
}
