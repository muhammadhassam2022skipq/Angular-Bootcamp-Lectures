import { Component, OnInit } from '@angular/core';
import { User } from '../users/models/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: {name: String} = {name : ''};

  constructor() {
    this.user.name = "xyz";
  }

  currentDatte: Date = new Date(Date.now());

  myObj = {
    fName: "ABC",
    age: 12
  }

  ngOnInit(): void {
  }

  changeName(name: String): void {
    this.user = {name: name};
  }

}
