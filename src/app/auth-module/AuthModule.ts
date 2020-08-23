import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from './../share.module';
import { AuthComponent } from './auth-component/auth.component';
import { NewLoginComponent } from './new-login/new-login.component';

@NgModule({
  declarations: [AuthComponent, NewLoginComponent],
  imports: [CommonModule, ShareModule],
  exports: [AuthComponent],
})
export class AuthModule {}
