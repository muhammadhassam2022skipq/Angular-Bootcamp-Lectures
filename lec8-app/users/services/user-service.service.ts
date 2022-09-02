import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UserServiceService {
  users: Array<User> = [];
  constructor() { }
  public addUser(user: User): void {
    this.users.push(user);
  }

  public editUser(user: User): void {
    const existingUserIndex: number = this.users.findIndex(x => x.id === user.id);
    if(existingUserIndex >= 0 ) {
      this.users[existingUserIndex].birthDate = user.birthDate;
      this.users[existingUserIndex].firstName = user.firstName;
      this.users[existingUserIndex].lastName = user.lastName;
      this.users[existingUserIndex].isActive = user.isActive;
    }
  }
}
