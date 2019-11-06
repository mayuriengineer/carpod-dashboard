import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DetailsComponent,
    DashboardComponent,
    VoMasterlistComponent,
    DataFilterPipe,
    VoAddnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
