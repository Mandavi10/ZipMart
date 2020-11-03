import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefineRestaurantComponent } from './define-restaurant.component';

const routes: Routes = [{path:'',component:DefineRestaurantComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefineRestaurantRoutingModule { }
