import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getLocalTimeFromUTC } from '../../utils/get-local-time-from-utc';

@Component({
  selector: 'app-article-header-card',
  templateUrl: './article-header-card.component.html',
  styleUrls: ['./article-header-card.component.scss'],
})
export class ArticleHeaderCardComponent implements OnInit {
  @Input() title = 'no title';
  @Input() id = '';
  @Input() authorFullName = 'no author';
  @Input() description = 'no description';
  @Input() createdOn: Date;
  @Input() updatedOn: Date;
  createdOn2: Date;
  updatedOn2: Date;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.createdOn2 = getLocalTimeFromUTC(this.createdOn);
    this.updatedOn2 = getLocalTimeFromUTC(this.updatedOn);
  }

  go() {
    this.router.navigate(['/article-view', this.id]);
  }
}
