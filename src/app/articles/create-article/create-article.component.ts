import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/auth-module/auth.service';
import { ArticlesService } from './../articles.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  createArticleForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private articleService: ArticlesService
  ) {
    this.createArticleForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      text: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  send() {
    const title = this.createArticleForm.get('title').value;
    const description = this.createArticleForm.get('description').value;
    const text = this.createArticleForm.get('text').value;
    this.articleService
      .createArticle$(title, description, text)
      .subscribe((x) => console.log('x', x));
  }
}
