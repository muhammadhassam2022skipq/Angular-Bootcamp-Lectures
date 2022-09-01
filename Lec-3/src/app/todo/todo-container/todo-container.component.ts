import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../models/todo-item.model';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  public toDoItems: Array<ToDoItem> = [];
  constructor() { }

  ngOnInit(): void {
  }
  clearTasks(): void {
    this.toDoItems = [];
  }
}
