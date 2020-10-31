import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBoxComponent } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { SectionTableRoutingModule } from './section-table-routing.module';
import { SectionTableComponent } from './section-table.component';
@NgModule({
  declarations: [SectionTableComponent ,ListBoxComponent, ButtonComponent],
  imports: [
    CommonModule,
    SectionTableRoutingModule
  ]
})
export class SectionTableModule { }
