import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CarbodviewComponent } from './carbodview/carbodview.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  // {
  //     path: '',
  //    children: [{ path: 'dashboard', component: CarbodviewComponent }]
  //    },
  {
    path: 'app',
    loadChildren:
      './carbodview/dynamic-form-builder.module'
  },
  {
    path: 'app',
    loadChildren:
    './multi-tap-view/multi-tap-view.module'
  },

  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
