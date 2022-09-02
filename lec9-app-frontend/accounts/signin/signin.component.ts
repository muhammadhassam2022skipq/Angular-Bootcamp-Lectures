import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/global.service';
import { SpeedMonitorService } from 'src/app/subjects/speed-monitor.service';
import { User } from 'src/app/users/models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private router: Router,
    private globals: GlobalService,
    private speedMonitor: SpeedMonitorService
    ) { }

  ngOnInit(): void {
  }
  onSigninSubmit(data: {userName: String, password: String}): void {
    let loggedInUser!: User;
    if(data.userName === 'abc@test.test' && data.password === 'CureMD123') {
      this.globals.isAuthenticated = true;
      this.globals.userId = 'faisal'
      this.router.navigate(['/dashboard']);
    }
  }
  changeSpeed(speed: String) {
    this.speedMonitor.setSpeed(+speed)
  }
}
