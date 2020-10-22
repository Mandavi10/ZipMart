import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DateRangePickerModule,
    DatePickerModule,
    DashboardRoutingModule,
    AccordionModule,
    AgGridModule.withComponents([]),
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule
  ]
})
export class DashboardModule { }
