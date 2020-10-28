import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { LocationRoutingModule } from './location-routing.module';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class LocationModule { }
