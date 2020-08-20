import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './view/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './view/pages/not-found-page/not-found-page.component';
import { UsersListComponent } from './view/pages/users-list/users-list.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'users-list', component: UsersListComponent },
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
