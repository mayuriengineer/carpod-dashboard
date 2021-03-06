import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextBoxComponent } from './atoms/textbox';

import { DropDownComponent } from './atoms/dropdown';
import { FileComponent } from './atoms/file';
import { CheckBoxComponent } from './atoms/checkbox';
import { DatepickerComponent } from './atoms/datepicker';
import { TimepickerComponent } from './atoms/timepicker';

import { RadioComponent } from './atoms/radio';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { VoEditprofileComponent } from './vo-editprofile/vo-editprofile.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { AddNewComponent } from './add-new/add-new.component';
import { TabsViewComponent } from './tabs-view/tabs-view.component';
const Routes: Routes = [
  {
    path: "list/page/:state_name/:param1",
    component: DemoComponent
  },
 {
    path: "VoEditprofile",
    component: VoEditprofileComponent
  },
  {
    path: "list/add/:state_name",
    component: AddNewComponent
  },
  {
    path: "tabs/:state_name",
    component: TabsViewComponent
  },

];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    RouterModule.forChild(Routes),
 ],
  declarations: [
    DynamicFormBuilderComponent,
    FieldBuilderComponent,
    TextBoxComponent,
    DropDownComponent,
    CheckBoxComponent,
    VoEditprofileComponent,
    DemoComponent,
    FileComponent,
    RadioComponent,
    DatepickerComponent,
    TimepickerComponent,
    AddNewComponent,
    TabsViewComponent



  ],
  exports: [DynamicFormBuilderComponent],
  providers: [
  ]
})
export class DynamicFormBuilderModule { }
