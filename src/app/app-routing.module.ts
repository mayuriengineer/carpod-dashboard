import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarbodviewComponent } from './carbodview/carbodview.component';
import { AddcarpodComponent } from './carbodview/addcarpod/addcarpod.component';
import { EditcarpodComponent } from './editcarpod/editcarpod.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: "create-carbod-view",
    component : CarbodviewComponent
  },
  {
    path: "add-carbod-view",
    component : AddcarpodComponent
  },
  {
    path: "edit-carbod-view/:id",
    component : EditcarpodComponent
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
