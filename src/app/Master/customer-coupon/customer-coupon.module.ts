import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerCouponRoutingModule } from './customer-coupon-routing.module';
import { CustomerCouponComponent } from './customer-coupon.component';
@NgModule({
  declarations: [CustomerCouponComponent],
  imports: [
    CommonModule,
    CustomerCouponRoutingModule
  ]
})
export class CustomerCouponModule { }
