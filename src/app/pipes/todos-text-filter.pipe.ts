import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { Filters } from '../interfaces/filters';

@Pipe({
  name: 'todosTextFilter',
  standalone: true,
})
export class TodosTextFilterPipe implements PipeTransform {
  transform(value: TodoItem[], ...args: Filters[]): TodoItem[] {
    if (args[0].includes === '') return value;

    const filteredTodos: TodoItem[] = [];

    for (let i = 0; i < value.length; i++) {
      if (value[i].title.includes(args[0].includes || '')) {
        filteredTodos.push(value[i]);
      }
    }

    return filteredTodos;
  }
}
