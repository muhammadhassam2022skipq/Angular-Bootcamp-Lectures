import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from '../../models/todo-item.model';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {

  @Input('toDoItems') toDoItems!: Array<ToDoItem>;

  constructor() { }

  ngOnInit(): void {
  }
  AddToDoItemHandler(todoItem: ToDoItem): void {
    //console.log('todoItem from parent', todoItem);
    this.toDoItems.push(todoItem);
  }
}
