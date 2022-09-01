import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { ToDoItem } from '../../models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  toDoItems: Array<ToDoItem> = [];
  constructor(private testService: TestService) {

  }

  ngOnInit(): void {
    this.toDoItems = this.testService.toDoItems;
  }

}
