import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
 import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ProjectService } from './project.service';

import { Person } from 'person';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VoMasterlistComponent } from './vo-masterlist/vo-masterlist.component';
import { FormsModule } from '@angular/forms';
import { DataFilterPipe } from './dataFilter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { VoAddnewComponent } from './vo-addnew/vo-addnew.component';
import { DynamicFormBuilderModule } from './details/dynamic-form-builder.module';
import  { KeysPipe } from './Keys.pipe';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, HttpClientModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule,DynamicFormBuilderModule,RouterModule.forRoot([]),AppRoutingModule],
  declarations: [ AppComponent, HelloComponent,  SidebarComponent,
    HeaderComponent,
    DetailsComponent,
    DashboardComponent,
    VoMasterlistComponent,
    DataFilterPipe,
    KeysPipe,
    VoAddnewComponent,
    TabsComponent,
    
    ],
    providers: [ProjectService
    ],
  bootstrap:    [ AppComponent ]
 
})
export class AppModule { }
