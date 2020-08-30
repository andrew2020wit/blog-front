import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusMessageDto } from './../../../dto/status-message.dto';
import { AuthService } from './../../auth.service';
import { CreateUserDto } from './../../dto/create-user.dto';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  newLoginForm: FormGroup;
  statusMessage = new StatusMessageDto();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.newLoginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submit() {
    const newUser = new CreateUserDto();
    newUser.login = this.newLoginForm.get('login').value;
    newUser.password = this.newLoginForm.get('password').value;
    newUser.fullName = this.newLoginForm.get('fullName').value;
    this.authService.createUser$(newUser).subscribe((m) => {
      this.statusMessage = m;
      console.log(m);
    });
  }
}
