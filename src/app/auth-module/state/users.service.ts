import { Injectable } from '@angular/core';
import {
  NgEntityService,
  NgEntityServiceConfig,
} from '@datorama/akita-ng-entity-service';
import { httpAdr } from './../../config';
import { UsersState, UsersStore } from './users.store';

@NgEntityServiceConfig({
  resourceName: 'users',
  baseUrl: httpAdr + '/api/auth/admin',
})
@Injectable({ providedIn: 'root' })
export class UsersService extends NgEntityService<UsersState> {
  constructor(protected store: UsersStore) {
    super(store);
  }
}
