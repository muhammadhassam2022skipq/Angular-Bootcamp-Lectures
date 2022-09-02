import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeedMonitorService {
  subject = new Subject<number>();
  constructor() { }

  public setSpeed(speed: number) {
    this.subject.next(speed);
  }

}
