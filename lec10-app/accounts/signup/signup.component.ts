import { Component, OnInit } from '@angular/core';
import { SpeedMonitorService } from 'src/app/subjects/speed-monitor.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private speedMonitor: SpeedMonitorService
  ) { }

  ngOnInit(): void {
  }
  changeSpeed(speed: String) {
    this.speedMonitor.setSpeed(+speed)
  }
}
