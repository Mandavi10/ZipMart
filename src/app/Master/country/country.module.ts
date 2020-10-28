import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { CountryRoutingModule } from './country-routing.module';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    CountryRoutingModule
  ]
})
export class CountryModule { }
