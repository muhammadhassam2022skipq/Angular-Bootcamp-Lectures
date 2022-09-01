import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToDoItem } from 'src/app/todo/models/todo-item.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
@Input('toDoItem') toDoItem!: ToDoItem;// = new ToDoItem();
  constructor() { }

  ngOnInit(): void {
  }
  onStatusChange(chkBox: HTMLInputElement): void {
    this.toDoItem.isCompleted = chkBox.checked;
  }
}
