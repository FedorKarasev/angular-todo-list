import { Component } from '@angular/core';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CreateTodoFormComponent, TodoListComponent, FiltersComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {}
