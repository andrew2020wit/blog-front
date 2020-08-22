import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from './../share.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [HomePageComponent, NotFoundPageComponent],
  imports: [CommonModule, ShareModule, RouterModule],
})
export class ViewModule {}
