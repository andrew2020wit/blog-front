import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from './../share.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticleHeaderCardComponent } from './article-header-card/article-header-card.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleViewEditComponent } from './article-view-edit/article-view-edit.component';

@NgModule({
  declarations: [CreateArticleComponent, ArticlesListComponent, ArticleHeaderCardComponent, ArticleViewComponent, ArticleViewEditComponent],
  imports: [CommonModule, ShareModule],
  exports: [ArticlesListComponent],
})
export class ArticlesModule {}
