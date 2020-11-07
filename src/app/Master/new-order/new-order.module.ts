import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './new-order.component';
import { NewOrderRoutingModule } from './new-order-routing.module';

@NgModule({
  declarations: [NewOrderComponent],
  imports: [
    CommonModule,
    NewOrderRoutingModule
  ]
})
export class NewOrderModule { }
