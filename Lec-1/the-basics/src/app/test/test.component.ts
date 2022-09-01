import { Component } from "@angular/core";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public para: String = ''
  constructor() {

  }
  onBtnTestClick(): void {
    this.para = 'Paragraph in test component';
  }
}
