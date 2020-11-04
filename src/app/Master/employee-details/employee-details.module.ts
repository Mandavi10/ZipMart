import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details.component';
import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';

@NgModule({
  declarations: [EmployeeDetailsComponent],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule
  ]
})
export class EmployeeDetailsModule { }
