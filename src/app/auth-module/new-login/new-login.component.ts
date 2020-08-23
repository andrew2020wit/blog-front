import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateLoginObjectDto } from './../dto/create-login.dto';
import { LoginService } from './../login.service';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.scss'],
})
export class NewLoginComponent implements OnInit {
  newLoginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.newLoginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submit() {
    const newLogin = new CreateLoginObjectDto();
    newLogin.login = this.newLoginForm.get('login').value;
    newLogin.password = this.newLoginForm.get('password').value;

    this.loginService.createLogin(newLogin).subscribe();
  }
}
