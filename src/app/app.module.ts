import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
 import { AppRoutingModule } from './app-routing.module';
// dynamic form builder
//import {APP_EXTRA_OPTIONS, APP_ROUTES} from './app-routing.module';
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';
//import {APP_EXTRA_OPTIONS, APP_ROUTES} from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


//import {DataTablesModule} from 'angular-datatables';

import { Person } from 'person';


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule , DynamicFormBuilderModule,RouterModule.forRoot([]),AppRoutingModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
 
})
export class AppModule { }
