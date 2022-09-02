import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.css']
})
export class ForgotPasswordFormComponent implements OnInit {
@Output('onForgotPasswordClick') onForgotPasswordClick: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(txtEmail: HTMLInputElement) {
    this.onForgotPasswordClick.emit(txtEmail.value);
  }

}
