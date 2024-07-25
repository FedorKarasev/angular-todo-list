import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  protected todoList: TodoItem[] = [];

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem('todoList') ?? '[]');
  }

  getAllTodos(): TodoItem[] {
    return this.todoList;
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
