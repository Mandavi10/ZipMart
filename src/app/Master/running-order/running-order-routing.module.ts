import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunningOrderComponent } from './running-order.component';

const routes: Routes = [{path:'',component:RunningOrderComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunningOrderRoutingModule { }
