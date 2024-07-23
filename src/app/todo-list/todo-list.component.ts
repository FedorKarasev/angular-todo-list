import { Component, inject } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodosService } from '../services/todos.service';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos: TodoItem[] = [];
  todosService: TodosService = inject(TodosService);

  constructor() {
    this.todos = this.todosService.getAllTodos();
  }

  ngDoCheck() {
    this.todos = this.todosService.getAllTodos();
  }
}
