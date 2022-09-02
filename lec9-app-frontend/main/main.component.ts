import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  currentDatte: Date = new Date(Date.now());

  myObj = {
    fName: "ABC",
    age: 12
  }

  ngOnInit(): void {
  }

}
