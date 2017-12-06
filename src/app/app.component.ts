import { Component } from '@angular/core';

import {AdminPageComponent} from './admin-page';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header';
import {ChuchesListComponent} from './chuches-list/chuches-list.component';
import {ValidatedUsersComponent} from './validated-users/validated-users.component';
import {UsersListComponent} from './users-list/users-list.component';
import {ValidatedChurchListComponent} from './validated-church-list/validated-church-list.component';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {

}
