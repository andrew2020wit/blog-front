import { Component, OnInit } from '@angular/core';
import { UserAdminView } from './../../dto/user-admin-view.dto';
import { UsersQuery } from './../../state/users.query';
import { UsersService } from './../../state/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'login',
    'fullName',
    'role',
    'isActive',
    'createdOn',
    'updatedOn',
  ];
  dataSource: UserAdminView[];

  constructor(
    private usersService: UsersService,
    private usersQuery: UsersQuery
  ) {}

  ngOnInit(): void {
    this.usersService.get().subscribe();
    this.usersQuery.selectAll().subscribe((users) => {
      this.dataSource = users;
      // console.log(users);
    });
  }
}
