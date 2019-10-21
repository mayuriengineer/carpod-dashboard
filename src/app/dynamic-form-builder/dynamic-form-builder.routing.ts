import { Routes } from '@angular/router';
import { CarbodviewComponent } from './carbodview/carbodview.component';

export const routes: Routes = [
  {
    path: '',
    children: [{ path: 'dashboard', component: CarbodviewComponent }]
  }
];
