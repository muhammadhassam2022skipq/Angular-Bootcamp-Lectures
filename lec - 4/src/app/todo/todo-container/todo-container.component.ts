import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { ToDoItem } from '../models/todo-item.model';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit, OnDestroy {
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    console.log('ToDo container has been initialized!');
  }
  clearTasks(): void {
    this.testService.clear();
  }

  ngOnDestroy(): void {
      console.log('ToDo container has been destroyed!');
  }
}
