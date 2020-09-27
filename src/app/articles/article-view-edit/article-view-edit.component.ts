import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { AuthService } from './../../auth-module/auth.service';

const ArticleGQL = gql`
  query getArticle($artId: String!) {
    getArticle(artId: $artId) {
      id
      title
      description
      text
      createdOn
      updatedOn
      author {
        id
        fullName
      }
    }
  }
`;

interface IArticle {
  id: string;
  title: string;
  description: string;
  text: string;
  createdOn: Date;
  updatedOn: Date;
  author: {
    id: string;
    fullName: string;
  };
}

@Component({
  selector: 'app-article-view-edit',
  templateUrl: './article-view-edit.component.html',
  styleUrls: ['./article-view-edit.component.scss'],
})
export class ArticleViewEditComponent implements OnInit {
  ArticleWatchQuery: QueryRef<any>;
  artId: string;

  title: string;
  description: string;
  text: string;
  createdOn: Date;
  updatedOn: Date;
  authorFullName: string;
  authorId: string;
  appUserId: string;

  constructor(
    private apollo: Apollo,
    private activateRoute: ActivatedRoute,
    private authService: AuthService
  ) {
    this.artId = this.activateRoute.snapshot.params['id'];
    // console.log(`!${this.artId}!`);

    this.appUserId = this.authService.appUser.sub;
  }

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: ArticleGQL,
        variables: {
          artId: this.artId,
        },
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log('data', data);
        console.log('loading', loading);
        const art = data.getArticle as IArticle;
        this.title = art.title;
        this.text = art.text;
        this.description = art.description;
        this.createdOn = art.createdOn;
        this.updatedOn = art.updatedOn;
        this.authorFullName = art.author.fullName;
        this.authorId = art.author.id;
      });
  }
}
