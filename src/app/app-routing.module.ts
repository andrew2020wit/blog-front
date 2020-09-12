import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { AuthGuard } from './auth-module/auth.guard';
import { UserProfileComponent } from './auth-module/view/user-profile/user-profile.component';
import { UserRegisterFormComponent } from './auth-module/view/user-register-form/user-register-form.component';
import { HomePageComponent } from './view/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './view/pages/not-found-page/not-found-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create-article', component: CreateArticleComponent },
  { path: 'new-user', component: UserRegisterFormComponent },
  // { path: 'admin/users-list', component: AdminUsersListComponent },
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
