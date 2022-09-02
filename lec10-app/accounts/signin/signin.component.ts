import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalService } from 'src/app/shared/global.service';
import { MainState } from 'src/app/store/app.state';
import { SpeedMonitorService } from 'src/app/subjects/speed-monitor.service';
import { User } from 'src/app/users/models/user.model';
import * as AppActions from '../../store/app.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private router: Router,
    private globals: GlobalService,
    private speedMonitor: SpeedMonitorService,
    private store: Store<MainState>
    ) { }

  ngOnInit(): void {
  }
  onSigninSubmit(data: {userName: String, password: String}): void {
    let loggedInUser: User = new User();
    if(data.userName === 'abc@test.test' && data.password === 'CureMD123') {
      loggedInUser.firstName = "Faisal";
      loggedInUser.lastName = "Abbas";
      this.globals.isAuthenticated = true;
      this.globals.userId = 'faisal';
      this.store.dispatch(AppActions.tryLogin({payload: {user: loggedInUser}}));
      this.router.navigate(['/dashboard']);
    }
  }
  changeSpeed(speed: String) {
    this.speedMonitor.setSpeed(+speed)
  }
}
