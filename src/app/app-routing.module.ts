import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },

  {
    path: 'app',
    loadChildren:
      './dynamic-form-builder/dynamic-form-builder.module'
  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
