import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city.component';
import { CityRoutingModule } from './city-routing.module';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [CityComponent],
  imports: [
    CommonModule,
    CityRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class CityModule { }
