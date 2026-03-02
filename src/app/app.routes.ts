import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { Api } from './api/api';


export const routes: Routes = [
  { path: '', component: Counter },   // default counter page
  { path: 'api', component: Api }
];  