import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from './../share.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticleHeaderCardComponent } from './article-header-card/article-header-card.component';
import { ArticleViewComponent } from './article-view/article-view.component';

@NgModule({
  declarations: [CreateArticleComponent, ArticlesListComponent, ArticleHeaderCardComponent, ArticleViewComponent],
  imports: [CommonModule, ShareModule],
  exports: [ArticlesListComponent],
})
export class ArticlesModule {}
