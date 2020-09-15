import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth-module/auth.module';
import { errorInterceptorProvider } from './auth-module/interceptors/errors.interceptor';
import { jwtInterceptorProvider } from './auth-module/interceptors/jwt.interceptor';
import { ShareModule } from './share.module';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ArticlesModule,
    AuthModule,
    ViewModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    ShareModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    errorInterceptorProvider,
    jwtInterceptorProvider,
    { provide: MAT_DATE_LOCALE, useValue: 'ru-ru' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
