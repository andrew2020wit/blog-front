import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseApiUrl } from './../../environments/environment';
import { ArticleDTO } from './article.dto';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private html: HttpClient) {}
  create$(article: ArticleDTO) {
    const url = baseApiUrl + '/api/articles';
    return this.html.post(url, article);
  }
}
