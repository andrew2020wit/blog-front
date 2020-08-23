import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseApiUrl } from './../../environments/environment';
import { CreateLoginObjectDto } from './dto/create-login.dto';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  urlCreateLogin = baseApiUrl + '/login/create';

  createLogin(newLogin: CreateLoginObjectDto) {
    return this.http.post(this.urlCreateLogin, newLogin);
  }
}
