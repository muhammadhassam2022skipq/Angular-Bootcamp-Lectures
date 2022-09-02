import { Component, OnInit } from '@angular/core';
import { SpeedMonitorService } from './subjects/speed-monitor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentSpeed: number  = 0;
  constructor(private speeMonitor: SpeedMonitorService) {

  }
  title = 'routing-basics';
  ngOnInit() {
    this.speeMonitor.subject.subscribe((speed: number) => {
      this.currentSpeed = speed;
    });
  }
}
