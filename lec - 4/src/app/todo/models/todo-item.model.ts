export class ToDoItem {
  constructor(
    public taskName: String = '',
    public dueDate: Date | null = null,
    public isCompleted: boolean = false
  ) {}
}
