import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { MultiTapViewComponent } from './multi-tap-view/multi-tap-view.component';
import { FormsModule } from '@angular/forms';
//import { CarbodviewComponent } from '../carbodview/carbodview.component';
import { SharedModule } from '../shared/shared.module';
// import {NgxPaginationModule} from 'ngx-pagination';
// import { DataFilterPipe } from '../carbodview/dataFilter.pipe';
//import { FormsModule } from '@angular/forms';
const Routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: "multitab",
    component : MultiTapViewComponent
  },
  // {
  //   path: "dashboard",
  //   component : CarbodviewComponent
  // },
  

];
@NgModule({
  declarations: [MultiTapViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  
    RouterModule.forChild(Routes),
    
  ]
})
export class MultiTapViewModule { }
