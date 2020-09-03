import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { UserAdminView } from '../dto/user-admin-view.dto';

export interface UsersState extends EntityState<UserAdminView> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'UserAdminView' })
export class UsersStore extends EntityStore<UsersState> {
  constructor() {
    super();
  }
}
