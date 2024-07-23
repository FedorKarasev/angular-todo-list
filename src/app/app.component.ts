import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoFormComponent } from './create-todo-form/create-todo-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoListComponent,
    CreateTodoFormComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
