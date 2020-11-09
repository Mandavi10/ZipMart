import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenScreenComponent } from './kitchen-screen.component';
import { KitchenScreenRoutingModule } from './kitchen-screen-routing.module';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [KitchenScreenComponent],
  imports: [
    CommonModule,
    KitchenScreenRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class KitchenScreenModule { }
