import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {

  @Output('onSigninSubmit') onSigninSubmit: EventEmitter<{userName: String, password: String}> = new EventEmitter<{userName: String, password: String}>();
  constructor() { }

  ngOnInit(): void {
  }
  btnSigninClick(email: String, password: String) {
    const data: {userName: String, password: String} = {
      userName: email,
      password: password
    };
    this.onSigninSubmit.emit(data);
  }

}
