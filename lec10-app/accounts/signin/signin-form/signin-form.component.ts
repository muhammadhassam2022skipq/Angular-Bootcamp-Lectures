import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInModel } from '../../models/signin.model';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {

  @ViewChild('frmSignin', {static: false}) frmSignin!: NgForm;

  @Output('onSigninSubmit') onSigninSubmit: EventEmitter<{userName: String, password: String}> = new EventEmitter<{userName: String, password: String}>();
  constructor() {
  }

  ngOnInit(): void {
  }
  btnSigninClick(email: String, password: String) {

  }
  onSubmit(): void {
    //this.validateForm();
    console.log('fromSignIn', this.frmSignin);
    // console.log('fromSignIn.dirty', fromSignIn.dirty);
    // console.log('fromSignIn.controls', fromSignIn.controls);
    // console.log('fromSignIn.valid', fromSignIn.valid);
    // console.log('fromSignIn.value', fromSignIn.value);
    // console.log('fromSignIn.errors', fromSignIn.errors);
    // console.log('fromSignIn.controls[txtEmail]', fromSignIn.controls['txtEmail']);
    // console.log('fromSignIn.controls[txtPassword]', fromSignIn.controls['txtPassword']);
    if(this.frmSignin.valid) {
      const data: {userName: String, password: String} = {
        userName: this.frmSignin.value.txtEmail,
        password: this.frmSignin.value.txtPassword
      };
      this.onSigninSubmit.emit(data);
    }
  }
  validateForm(): void {
    if(this.frmSignin.value.email === null
      || typeof(this.frmSignin.value.email) === 'undefined'
      || this.frmSignin.value.email === '') {

        this.frmSignin.controls['txtEmail'].setErrors([
          {"emailRequired" : "Email address is required."}
        ])
      }
  }

}
