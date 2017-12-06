import {AdminPageComponent} from './admin-page';
import {RouterModule, Routes} from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import {ChuchesListComponent} from './chuches-list/chuches-list.component';
import {ValidatedChurchListComponent} from './validated-church-list/validated-church-list.component';
import {ValidatedUsersComponent} from './validated-users/validated-users.component';

const routes: Routes = [
  { path: 'admin-page',
    component: AdminPageComponent},
  { path: 'users',
    component: UsersListComponent},
   {path: 'church',
    component: ChuchesListComponent},
  {path: 'v-user',
     component: ValidatedUsersComponent},
  {path: 'v-Church',
   component: ValidatedChurchListComponent}


];

export const routing = RouterModule.forRoot(routes);

