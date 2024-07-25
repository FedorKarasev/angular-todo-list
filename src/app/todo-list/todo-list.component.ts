import { Component, inject } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodosService } from '../services/todos.service';
import { TodoItem } from '../interfaces/todo-item';
import { TodosFilterPipe } from '../pipes/todos-filter.pipe';
import { FiltersService } from '../services/filters.service';
import { TodosTextFilterPipe } from '../pipes/todos-text-filter.pipe';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, TodosFilterPipe, TodosTextFilterPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todosService: TodosService = inject(TodosService);
  filtersService: FiltersService = inject(FiltersService);

  todos: TodoItem[] = [];
  filters = this.filtersService.getFilters();

  constructor() {
    this.todos = this.todosService.getAllTodos();
  }

  ngDoCheck() {
    this.todos = this.todosService.getAllTodos();
    this.filters = this.filtersService.getFilters();
  }
}
