import { Injectable } from '@angular/core';
import { Filters } from '../interfaces/filters';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private filters: Filters;

  constructor() {
    this.filters = {
      isComplete: 'all',
      includes: '',
    };
  }

  setFilters(filters: Filters): void {
    this.filters = { ...filters };
  }

  getFilters(): Filters {
    return this.filters;
  }
}
