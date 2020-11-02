import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefineRestaurantComponent } from './define-restaurant.component';
import { DefineRestaurantRoutingModule } from './define-restaurant-routing.module';

@NgModule({
  declarations: [DefineRestaurantComponent],
  imports: [
    CommonModule,
    DefineRestaurantRoutingModule
  ]
})
export class DefineRestaurantModule { }
