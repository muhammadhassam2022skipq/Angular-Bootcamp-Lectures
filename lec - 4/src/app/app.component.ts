import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-deep-dive';
  show: boolean = false;
  onShowHideClick(): void {
    this.show = !this.show;
  }
}
