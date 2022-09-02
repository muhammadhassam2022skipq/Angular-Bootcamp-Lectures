import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']
})
export class EditUserFormComponent implements OnInit {

  @ViewChild('chkActive', {static: false}) chkActive!: ElementRef;
  @ViewChild('txtBirthDate', {static: false}) txtBirthDate!: ElementRef;
  @ViewChild('txtLastName', {static: false}) txtLastName!: ElementRef;
  @ViewChild('txtFirstName', {static: false}) txtFirstName!: ElementRef;

  @Output('onUserEdit') onUserEdit: EventEmitter<User> = new EventEmitter<User>();

  currentUser!: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserServiceService
  ) { }

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.params['userId'];
    console.log('userId', userId);
    this.currentUser = this.userService.users.find(x => x.id === userId) ?? new User();
    console.log('this.currentUser', this.currentUser);
  }
  onUserEditFormSubmit() {
    const user: User = new User();
    user.id = this.activatedRoute.snapshot.params['userId'];
    user.birthDate = this.txtBirthDate.nativeElement.value;
    user.firstName = this.txtFirstName.nativeElement.value;
    user.lastName = this.txtLastName.nativeElement.value;
    user.isActive = this.chkActive.nativeElement.checked;

    this.onUserEdit.emit(user);
  }

}
