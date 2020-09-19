import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { IArticleHeader } from './../article-header.interface';

const ArticlesGQL = gql`
  query allArticles($take: Int, $createOnCursor: DateTime) {
    allArticles(take: $take, createOnCursor: $createOnCursor) {
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
export class ArticlesListComponent implements OnInit, AfterViewInit, OnDestroy {
  // intersection
  private intersectionObserver: IntersectionObserver;
  isIntersecting2 = false;
  articleHeaders: IArticleHeader[] = [];

  private querySubscription: Subscription;
  ArticlesWatchQuery: QueryRef<any>;
  takeV = 20;
  createOnCursor: Date = new Date();
  dataFinished = false;
  loading = false;

  constructor(private apollo: Apollo) {
    this.intersectionObserver = new IntersectionObserver((entries) =>
      this.intersectionCallback(entries)
    );
  }

  ngOnInit(): void {
    this.ArticlesWatchQuery = this.apollo.watchQuery<any>({
      query: ArticlesGQL,
      variables: {
        take: this.takeV,
        createOnCursor: this.createOnCursor,
      },
    });
  }
  ngAfterViewInit(): void {
    this.intersectionObserver.observe(
      document.getElementById('IntersectionTarget')
    );
    this.querySubscription = this.ArticlesWatchQuery.valueChanges.subscribe(
      ({ data, loading }) => {
        this.loadArtHeaders({ data, loading });
      }
    );
  }

  intersectionCallback(entries) {
    this.isIntersecting2 = entries[0].isIntersecting;
    if (this.isIntersecting2) {
      this.loadArtHeadersNext();
    }
  }

  loadArtHeaders({ data, loading }) {
    this.loading = loading;
    const newArticles: IArticleHeader[] = data.allArticles as IArticleHeader[];
    const length = newArticles.length;
    if (length < this.takeV) {
      this.dataFinished = true;
    }
    if (length > 0) {
      this.createOnCursor = newArticles[length - 1].createdOn;
    }
    this.articleHeaders.push(...newArticles);
  }

  loadArtHeadersNext() {
    if (this.dataFinished) {
      return;
    }
    this.ArticlesWatchQuery.fetchMore({
      variables: { createOnCursor: this.createOnCursor },
    }).then(({ data, loading }) => {
      this.loadArtHeaders({ data, loading });
    });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
    this.intersectionObserver.disconnect();
  }
}
