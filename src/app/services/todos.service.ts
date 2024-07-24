import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { Filters } from '../interfaces/filters';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  protected todoList: TodoItem[] = [];
  protected filteredTodos: TodoItem[] = [];

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem('todoList') ?? '[]');
    this.filteredTodos = this.todoList;
  }

  getAllTodos(): TodoItem[] {
    return this.todoList;
  }

  getFilteredTodos(): TodoItem[] {
    return this.filteredTodos;
  }

  setFilteredTodos(filters: Filters): void {
    if (filters.isComplete === 'all') {
      this.filteredTodos = this.todoList;
    }
    if (filters.isComplete === 'complete') {
      this.filteredTodos = this.todoList.filter(
        (todo) => todo.isComplete === true
      );
    }
    if (filters.isComplete === 'progress') {
      this.filteredTodos = this.todoList.filter(
        (todo) => todo.isComplete === false
      );
    }
  }

  deleteTodo(id: number): void {
    const todoItemIndex = this.todoList.findIndex((todo) => todo.id === id);
    this.todoList.splice(todoItemIndex, 1);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  completeTodo(id: number) {
    this.todoList = this.todoList.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        return todo;
      }
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
      return todo;
    });
  }

  createTodo(todo: TodoItem): void {
    this.todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  updateTodo(id: number) {}
}
