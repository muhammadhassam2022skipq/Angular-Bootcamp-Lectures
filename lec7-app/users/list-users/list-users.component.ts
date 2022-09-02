import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: Array<User> = [];
  constructor(
    private userService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.users = this.userService.users;
  }

}
