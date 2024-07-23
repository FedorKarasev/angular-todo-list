import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    title: 'Home page',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About page',
  },
];
