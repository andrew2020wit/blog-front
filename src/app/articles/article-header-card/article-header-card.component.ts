import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-header-card',
  templateUrl: './article-header-card.component.html',
  styleUrls: ['./article-header-card.component.scss'],
})
export class ArticleHeaderCardComponent implements OnInit {
  @Input() title = 'no title';
  @Input() authorFullName: 'no author';
  @Input() description: 'no description';

  constructor() {}

  ngOnInit(): void {}
}
