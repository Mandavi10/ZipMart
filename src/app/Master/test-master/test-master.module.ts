import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestMasterComponent } from './test-master.component';
import { TestMasterRoutingModule } from './test-master-routing.module';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [TestMasterComponent],
  imports: [
    CommonModule,
    TestMasterRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class TestMasterModule { }
