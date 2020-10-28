import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './state.component';
import { StateRoutingModule } from './state-routing.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [StateComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    StateRoutingModule
  ]
})
export class StateModule { }
