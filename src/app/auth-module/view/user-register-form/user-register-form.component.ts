import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusMessageDto } from '../../../dto/status-message.dto';
import { AuthService } from '../../auth.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { MustMatch } from '../validators/must-match.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './user-register-form.component.html',
  styleUrls: ['./user-register-form.component.scss'],
})
export class UserRegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  statusMessage = new StatusMessageDto();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group(
      {
        login: ['', [Validators.required]],
        fullName: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  ngOnInit(): void {}

  get f() {
    return this.registerForm.controls;
  }

  submit() {
    const newUser = new CreateUserDto();
    newUser.login = this.registerForm.get('login').value;
    newUser.password = this.registerForm.get('password').value;
    newUser.fullName = this.registerForm.get('fullName').value;
    this.authService.createUser$(newUser).subscribe((m) => {
      this.statusMessage = m;
      console.log(m);
    });
  }
}
