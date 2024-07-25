import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodosService } from '../services/todos.service';
import { TodoItem } from '../interfaces/todo-item';
import { Filters } from '../interfaces/filters';
import { FiltersService } from '../services/filters.service';

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.css',
})
export class CreateTodoFormComponent {
  todosService: TodosService = inject(TodosService);
  filterService: FiltersService = inject(FiltersService);

  todos: TodoItem[] = this.todosService.getAllTodos();
  filters: Filters = this.filterService.getFilters();

  applyForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  createTodo(): void {
    if (!this.applyForm.valid) return;

    const toDo: TodoItem = {
      id: this.todosService.getAllTodos().length + 1,
      title: this.applyForm.value.title ?? '',
      description: this.applyForm.value.description ?? '',
      isComplete: false,
    };

    this.todosService.createTodo(toDo);
    this.filterService.setFilters({ isComplete: 'all', includes: '' });

    this.applyForm.setValue({
      title: '',
      description: '',
    });
    this.applyForm.value.description = '';
    this.applyForm.controls['title'].reset();
  }
}
