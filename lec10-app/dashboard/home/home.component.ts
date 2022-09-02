import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { MainState } from 'src/app/store/app.state';
import { SpeedMonitorService } from 'src/app/subjects/speed-monitor.service';
import { User } from 'src/app/users/models/user.model';
import * as AppActions from '../../store/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSpeed: number = 0;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private speedMonitor: SpeedMonitorService,
    private store: Store<MainState>
  ) { }

  ngOnInit(): void {
    // const data = this.activatedRoute.snapshot.data;
    // console.log('data', data);
    // this.activatedRoute.data.subscribe(loggedInUSer => {
    //   console.log('loggedInUSer', loggedInUSer)
    // });
    this.store.select('app_state').subscribe((state: AppState) => {
      console.log('appState', state);

      this.store.dispatch(AppActions.tryLogin({payload: {user: state.user_state}}));

    });

    this.speedMonitor.subject.subscribe(speed => {
      this.currentSpeed = speed;
    })

  }
  changeSpeed(speed: String) {
    this.speedMonitor.setSpeed(+speed)
  }

  ngOnDestroy(): void {
      this.speedMonitor.subject.unsubscribe();
  }

}
