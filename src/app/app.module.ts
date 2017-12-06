import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
// import { APP_ROUTES_PROVIDER} from './app.routes';
import { ChuchesListComponent } from './chuches-list/chuches-list.component';
import { ValidatedUsersComponent } from './validated-users/validated-users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ValidatedChurchListComponent } from './validated-church-list/validated-church-list.component';
import { routing} from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AdminPageComponent,
    ChuchesListComponent,
    ValidatedUsersComponent,
    UsersListComponent,
    ValidatedChurchListComponent,
  ],
  imports: [
    BrowserModule,
    routing

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
