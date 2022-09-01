import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onUserAdd(user: User): void {
    this.userService.addUser(user);
    this.router.navigate(['/dashboard/users/list']);
  }

}
