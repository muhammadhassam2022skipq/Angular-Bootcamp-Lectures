import { Injectable } from '@angular/core';
import { ToDoItem } from '../todo/models/todo-item.model';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class TestService {
  toDoItems: Array<ToDoItem> = [];
  constructor() {

  }
  public addItem(toDoItem: ToDoItem): void {
    this.toDoItems.push(toDoItem);
  }

  public removeItem(toDoItem: ToDoItem): void {
    //this.toDoItems.findIndex(x => x.)
  }

  public clear(): void {
    this.toDoItems = [];
  }
}
