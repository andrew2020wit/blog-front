import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
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
import { GraphQLModule } from './graphql.module';
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
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [errorInterceptorProvider, jwtInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
