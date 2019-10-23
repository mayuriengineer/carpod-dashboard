import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarbodviewComponent } from '../carbodview/carbodview.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DataFilterPipe } from '../carbodview/dataFilter.pipe';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
export const routes: Routes = [
  
  {
    path: '',
    children: [{ path: 'dashboard', component: CarbodviewComponent }]
  }
];
@NgModule({
  declarations: [CarbodviewComponent,DataFilterPipe],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:      [ CommonModule,CarbodviewComponent,RouterModule ]
})
export class SharedModule { }
