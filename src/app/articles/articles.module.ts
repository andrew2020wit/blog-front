import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from './../share.module';
import { CreateArticleComponent } from './create-article/create-article.component';

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [CommonModule, ShareModule],
})
export class ArticlesModule {}
