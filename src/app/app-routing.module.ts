import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VoAddnewComponent } from './vo-addnew/vo-addnew.component';

//import { CarbodviewComponent } from './carbodview/carbodview.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  // {
  //     path: '',
  //    children: [{ path: 'dashboard', component: CarbodviewComponent }]
  //    },
 
    // 5th Route
  
    {
      path: "dashboard",
      component : DashboardComponent
    },
    {
      path: "details/:name",
      component : DetailsComponent
    },
    {
      path: "vo_addnew",
      component : VoAddnewComponent
    },
    {
      path: 'app',
      loadChildren:
        './details/dynamic-form-builder.module'
    },

  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
