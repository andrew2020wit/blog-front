import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from './../share.module';
import { AuthComponent } from './view/auth-component/auth.component';
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
  ],
  imports: [CommonModule, ShareModule],
  exports: [AuthComponent],
})
export class AuthModule {}
