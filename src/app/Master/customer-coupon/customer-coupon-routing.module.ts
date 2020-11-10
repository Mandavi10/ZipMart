import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerCouponComponent } from './customer-coupon.component';
const routes: Routes = [{path:'',component:CustomerCouponComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerCouponRoutingModule { }
