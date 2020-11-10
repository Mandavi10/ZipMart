import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLoyaltyComponent } from './customer-loyalty.component';

const routes: Routes = [{path:'',component:CustomerLoyaltyComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerLoyaltyRoutingModule { }
