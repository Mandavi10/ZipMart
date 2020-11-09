import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitchenScreenComponent } from './kitchen-screen.component';
const routes: Routes = [{path:'',component:KitchenScreenComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchenScreenRoutingModule { }
