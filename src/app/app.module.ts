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
import { enableAkitaProdMode } from '@datorama/akita';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { baseApiUrl, environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AuthModule } from './auth-module/auth-module';
import { ErrorInterceptor } from './auth-module/interceptors/errors.interceptor';
import { JwtInterceptor } from './auth-module/interceptors/jwt.interceptor';
import { ShareModule } from './share.module';
import { ViewModule } from './view/view.module';

if (environment.production) {
  enableAkitaProdMode();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
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
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
  ],
  providers: [
    ErrorInterceptor,
    JwtInterceptor,
    { provide: MAT_DATE_LOCALE, useValue: 'ru-ru' },
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: baseApiUrl },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
