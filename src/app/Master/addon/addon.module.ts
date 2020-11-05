import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddonComponent } from './addon.component';
import { AddonRoutingModule } from './addon-routing.module';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [AddonComponent],
  imports: [
    CommonModule,
    AddonRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class AddonModule { }
