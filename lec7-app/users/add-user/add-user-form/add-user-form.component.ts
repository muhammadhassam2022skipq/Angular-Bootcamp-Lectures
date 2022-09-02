import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  @ViewChild('chkActive', {static: false}) chkActive!: ElementRef;
  @ViewChild('txtBirthDate', {static: false}) txtBirthDate!: ElementRef;
  @ViewChild('txtLastName', {static: false}) txtLastName!: ElementRef;
  @ViewChild('txtFirstName', {static: false}) txtFirstName!: ElementRef;

  @Output('onUserAdd') onUserAdd: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }
  onUserAddFormSubmit() {
    const user: User = new User();
    user.birthDate = this.txtBirthDate.nativeElement.value;
    user.firstName = this.txtFirstName.nativeElement.value;
    user.lastName = this.txtLastName.nativeElement.value;
    user.isActive = this.chkActive.nativeElement.checked;

    this.onUserAdd.emit(user);
  }
}
