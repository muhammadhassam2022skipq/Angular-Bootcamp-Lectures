import { Component, Input, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { ToDoItem } from '../../models/todo-item.model';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }
  AddToDoItemHandler(todoItem: ToDoItem): void {
    this.testService.addItem(todoItem);
  }
}
