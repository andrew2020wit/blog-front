import { Component, OnInit } from '@angular/core';
import { UsersQuery } from './../../../store/users/users.query';
import { UsersService } from './../../../store/users/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users$ = this.usersQuery.selectAll();
  constructor(
    private usersQuery: UsersQuery,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.usersService.get().subscribe();
  }
}
