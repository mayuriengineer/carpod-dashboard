import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VoAddnewComponent } from './vo-addnew/vo-addnew.component';
const routes: Routes = [
  {
    path: "dashboard",
    component : DashboardComponent
  },
  {
    path: "dashboard",
    component : DashboardComponent
  },
  {
    path: "details/:state_name",
    component : DetailsComponent
  },
  {
    path: "vo_addnew",
    component : VoAddnewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
