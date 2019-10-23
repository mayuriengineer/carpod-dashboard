import { Routes } from '@angular/router';
import { MultiTapViewComponent } from './multi-tap-view/multi-tap-view.component';
import { CarbodviewComponent } from '../carbodview/carbodview.component';
export const routes: Routes = [
  {
    path: '',
    children: [{ path: 'multitab', component: MultiTapViewComponent }]
  },
  // {
  //   path: '',
  //   children: [{ path: 'dashboard', component: CarbodviewComponent }]
  // }
];
