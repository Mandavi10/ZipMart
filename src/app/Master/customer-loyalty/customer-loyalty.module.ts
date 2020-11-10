import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLoyaltyComponent } from './customer-loyalty.component';
import { CustomerLoyaltyRoutingModule } from './customer-loyalty-routing.module';

@NgModule({
  declarations: [CustomerLoyaltyComponent],
  imports: [
    CommonModule,
    CustomerLoyaltyRoutingModule
  ]
})
export class CustomerLoyaltyModule { }
