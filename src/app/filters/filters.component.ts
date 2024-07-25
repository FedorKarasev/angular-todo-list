import { Component, inject } from '@angular/core';
import { Filters } from '../interfaces/filters';
import { TodosService } from '../services/todos.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FiltersService } from '../services/filters.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  todosService: TodosService = inject(TodosService);
  filtersService: FiltersService = inject(FiltersService);

  filtersForm = new FormGroup({
    statusFilter: new FormControl('all'),
    textFilter: new FormControl(''),
  });

  filterResults(filters: Filters) {
    this.filtersService.setFilters(filters);
  }
}
