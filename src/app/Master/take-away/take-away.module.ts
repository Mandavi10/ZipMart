import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeAwayComponent } from './take-away.component';
import { TakeAwayRoutingModule } from './take-away-routing.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [TakeAwayComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    TakeAwayRoutingModule
  ]
})
export class TakeAwayModule { }
