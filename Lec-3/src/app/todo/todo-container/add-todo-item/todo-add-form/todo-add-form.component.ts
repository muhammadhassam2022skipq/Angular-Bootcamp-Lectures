import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ToDoItem } from 'src/app/todo/models/todo-item.model';

@Component({
  selector: 'app-todo-add-form',
  templateUrl: './todo-add-form.component.html',
  styleUrls: ['./todo-add-form.component.css']
})
export class TodoAddFormComponent implements OnInit {

  @ViewChild('chkCompleted', {static: false}) chkCompleted!: ElementRef;
  @ViewChild('txtTaskName', {static: false}) txtTaskName!: ElementRef;
  @ViewChild('txtDueDate', {static: false}) txtDueDate!: ElementRef;

  @Output('onAddToDoItem') onAddToDoItem!: EventEmitter<ToDoItem>;

  constructor() {
    this.onAddToDoItem = new EventEmitter<ToDoItem>();
   }

  ngOnInit(): void {
  }

  onBtnAddToDoItemClick(): void {
    const todoItem: ToDoItem = new ToDoItem();
    todoItem.taskName = (<HTMLInputElement>this.txtTaskName.nativeElement).value;
    todoItem.dueDate = new Date(Date.parse((<HTMLInputElement>this.txtDueDate.nativeElement).value));
    todoItem.isCompleted = (<HTMLInputElement>this.chkCompleted.nativeElement).checked;
    //console.log('todoItem', todoItem);
    this.onAddToDoItem.emit(todoItem)
  }
}
