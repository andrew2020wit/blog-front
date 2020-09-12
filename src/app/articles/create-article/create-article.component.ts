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
    if (!!this.authService.appUser) {
      this.articleService
        .create$({
          title: this.createArticleForm.get('title').value,
          description: this.createArticleForm.get('description').value,
          text: this.createArticleForm.get('text').value,
        })
        .subscribe((x) => console.log('x', x));
    } else {
      console.error('appUser not exist');
    }
  }
}
