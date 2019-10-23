import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
 import { AppRoutingModule } from './app-routing.module';
// dynamic form builder
//import {APP_EXTRA_OPTIONS, APP_ROUTES} from './app-routing.module';
import { DynamicFormBuilderModule } from './carbodview/dynamic-form-builder.module';
//import {APP_EXTRA_OPTIONS, APP_ROUTES} from './app-routing.module';
import { RouterModule } from '@angular/router';
//import { CarbodviewComponent } from './carbodview/carbodview.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

////import {NgxPaginationModule} from 'ngx-pagination';
//import { FormsModule } from '@angular/forms';
import { MultiTapViewModule } from './multi-tap-view/multi-tap-view.module';
//import {DataTablesModule} from 'angular-datatables';
//import { DataFilterPipe } from './carbodview/dataFilter.pipe';
import { Person } from 'person';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ,SharedModule ,MultiTapViewModule,DynamicFormBuilderModule,RouterModule.forRoot([]),AppRoutingModule],
  declarations: [ AppComponent, HelloComponent],
  bootstrap:    [ AppComponent ]
 
})
export class AppModule { }
