import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onForgotPasswordClick(email: String): void {
    if(email === 'abc@test.test') {
      this.router.navigate(['/accounts/reset-password']);
    }
  }

}
