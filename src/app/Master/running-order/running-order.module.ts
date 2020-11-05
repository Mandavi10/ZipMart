import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunningOrderComponent } from './running-order.component';
import { RunningOrderRoutingModule } from './running-order-routing.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [RunningOrderComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    RunningOrderRoutingModule
  ]
})
export class RunningOrderModule { }
