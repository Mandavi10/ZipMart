import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { KitchenSectionRoutingModule } from './kitchen-section-routing.module';
import { KitchenSectionComponent } from './kitchen-section.component';
@NgModule({
  declarations: [KitchenSectionComponent],
  imports: [
    CommonModule,
    KitchenSectionRoutingModule,
    AgGridModule.withComponents([]),

  ]
})
export class KitchenSectionModule { }
