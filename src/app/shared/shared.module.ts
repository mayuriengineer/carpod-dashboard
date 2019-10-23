import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarbodviewComponent } from '../carbodview/carbodview.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DataFilterPipe } from '../carbodview/dataFilter.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CarbodviewComponent,DataFilterPipe],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports:      [ CommonModule,CarbodviewComponent ]
})
export class SharedModule { }
