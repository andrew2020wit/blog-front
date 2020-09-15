import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { IArticleHeader } from './../article-header.interface';

const ArticlesGQL = gql`
  query {
    allArticles {
      id
      title
      description
      createdOn
      updatedOn
      author {
        id
        fullName
      }
    }
  }
`;

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit, OnDestroy {
  private querySubscription: Subscription;
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  loading: boolean;
  articleHeaders: IArticleHeader[] = [];
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: ArticlesGQL,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.articleHeaders = data.allArticles;
      });
  }
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
