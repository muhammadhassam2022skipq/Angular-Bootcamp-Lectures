import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { AddUserFormComponent } from './add-user/add-user-form/add-user-form.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserFormComponent } from './edit-user/edit-user-form/edit-user-form.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserListItemComponent } from './list-users/user-list-item/user-list-item.component';
import { UserServiceService } from './services/user-service.service';


@NgModule({
  declarations: [
    AddUserComponent,
    AddUserFormComponent,
    EditUserComponent,
    EditUserFormComponent,
    ListUsersComponent,
    UserListItemComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [UserServiceService]
})
export class UsersModule { }
