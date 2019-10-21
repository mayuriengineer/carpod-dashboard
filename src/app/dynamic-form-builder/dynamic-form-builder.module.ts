import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from './project.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextBoxComponent } from './atoms/textbox';
import { DropDownComponent } from './atoms/dropdown';
import { FileComponent } from './atoms/file';
import { CheckBoxComponent } from './atoms/checkbox';
import { RadioComponent } from './atoms/radio';
import { HttpModule } from '@angular/http';
import { EditcarpodComponent } from './editcarpod/editcarpod.component';
import { CarbodviewComponent } from './carbodview/carbodview.component';
import { AddcarpodComponent } from './addcarpod/addcarpod.component';
import { ViewcarpodComponent } from './viewcarpod/viewcarpod.component';
import {DataTablesModule} from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
const Routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: "dashboard",
    component : CarbodviewComponent
  },
  {
    path: "add-carbod-view",
    component : AddcarpodComponent
  },
  {
    path: "edit-carbod-view",
    component : EditcarpodComponent
  },
  {
    path: "view-carbod-view/:id",
    component : ViewcarpodComponent
  },

];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    DataTablesModule,
   
    RouterModule.forChild(Routes),

    
  ],
  declarations: [
    DynamicFormBuilderComponent,
    FieldBuilderComponent,
    TextBoxComponent,
    DropDownComponent,
    CheckBoxComponent,
    CarbodviewComponent, 
    AddcarpodComponent,
     ViewcarpodComponent,
    FileComponent,
    RadioComponent,
    EditcarpodComponent
  ],
  exports: [DynamicFormBuilderComponent],
  providers: [ProjectService
    ]
})
export class DynamicFormBuilderModule { }
