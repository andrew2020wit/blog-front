import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-module/auth.guard';
import { UserProfileComponent } from './auth-module/user-profile/user-profile.component';
import { LoginComponent } from './auth-module/view/login/login.component';
import { NewUserComponent } from './auth-module/view/new-user/new-user.component';
import { HomePageComponent } from './view/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './view/pages/not-found-page/not-found-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-user', component: NewUserComponent },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
