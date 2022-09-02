import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { v4 } from 'uuid';
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


  frmAddUser: any;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }
  onUserAddFormSubmit() {
    const user: User = new User();
    user.birthDate = this.txtBirthDate.nativeElement.value;
    user.firstName = this.txtFirstName.nativeElement.value;
    user.lastName = this.txtLastName.nativeElement.value;
    user.isActive = this.chkActive.nativeElement.checked;

    this.onUserAdd.emit(user);
  }
  onSubmit(): void {
    console.log('this.frmAddUser', this.frmAddUser);

    const user: User = this.frmAddUser.value;


    this.onUserAdd.emit(user);
  }
  createForm(): void {
    const fb: FormBuilder = new FormBuilder();

    this.frmAddUser = fb.group({
      'id': [v4()],
      'firstName': ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ])],
      'lastName': ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ])],
      'birthDate': ['', Validators.compose([
        Validators.required
      ])],
      'isActive': [true]
    })
  }
}
