import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ShareModule } from '../share.module';
import { AuthComponent } from './view/auth-component/auth.component';
import { LoginFormComponent } from './view/login-form/login-form.component';
import { UserProfileComponent } from './view/user-profile/user-profile.component';
import { UserRegisterFormComponent } from './view/user-register-form/user-register-form.component';
import { UserWidgetComponent } from './view/user-widget/user-widget.component';
import { UsersListComponent } from './view/users-list/users-list.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginFormComponent,
    UserRegisterFormComponent,
    UserWidgetComponent,
    UserProfileComponent,
    UsersListComponent,
  ],
  imports: [CommonModule, ShareModule, MatDialogModule],
  exports: [AuthComponent],
})
export class AuthModule {}