import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { Filters } from '../interfaces/filters';

@Pipe({
  name: 'todosFilter',
  standalone: true,
})
export class TodosFilterPipe implements PipeTransform {
  transform(value: TodoItem[], ...args: Filters[]): TodoItem[] {
    console.log('select filter', value);
    const filteredTodos: TodoItem[] = [];

    for (let i = 0; i < value.length; i++) {
      if (args[0].isComplete === 'all') {
        filteredTodos.push(value[i]);
      }
      if (args[0].isComplete === 'progress' && value[i].isComplete === false) {
        filteredTodos.push(value[i]);
      }
      if (args[0].isComplete === 'complete' && value[i].isComplete === true) {
        filteredTodos.push(value[i]);
      }
    }

    return filteredTodos;
  }
}
