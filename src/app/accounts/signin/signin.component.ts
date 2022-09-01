import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSigninSubmit(data: {userName: String, password: String}): void {
    if(data.userName === 'abc@test.test' && data.password === 'CureMD123') {
      this.router.navigate(['/dashboard']);
    }
  }
}
