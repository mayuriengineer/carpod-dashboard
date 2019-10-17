import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// dynamic form builder

import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CarbodviewComponent } from './carbodview/carbodview.component';
import { AddcarpodComponent } from './carbodview/addcarpod/addcarpod.component';
import { EditcarpodComponent } from './editcarpod/editcarpod.component';



@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule , DynamicFormBuilderModule, RouterModule.forRoot([]),AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, CarbodviewComponent, AddcarpodComponent, EditcarpodComponent ],
  bootstrap:    [ AppComponent ]
 
})
export class AppModule { }
