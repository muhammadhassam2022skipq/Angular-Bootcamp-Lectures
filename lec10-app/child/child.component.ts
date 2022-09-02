import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../users/models/user.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input('user') user: {name: String} = {name: ''};

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('current user', this.user);
  }

}
