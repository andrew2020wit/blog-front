import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ShareModule } from '../share.module';
import { AuthComponent } from './view/auth-component/auth.component';
import { LoginPopupComponent } from './view/login-popup/login-popup.component';
import { LoginComponent } from './view/login/login.component';
import { NewUserComponent } from './view/new-user/new-user.component';
import { UserProfileComponent } from './view/user-profile/user-profile.component';
import { UserWidgetComponent } from './view/user-widget/user-widget.component';
import { UsersListComponent } from './view/users-list/users-list.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    NewUserComponent,
    UserWidgetComponent,
    UserProfileComponent,
    UsersListComponent,
    LoginPopupComponent,
  ],
  imports: [CommonModule, ShareModule, MatDialogModule],
  exports: [AuthComponent],
})
export class AuthModule {}
