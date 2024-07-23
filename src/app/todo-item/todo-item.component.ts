import { Component, inject, Input } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItem;

  todosService: TodosService = inject(TodosService);

  deleteTodo(id: number): void {
    this.todosService.deleteTodo(id);
  }

  toggleComplete(id: number): void {
    this.todosService.completeTodo(id);
  }

  editTodo(id: number): void {
    this.todosService.updateTodo(id);
  }
}
