import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCreationComponent } from './menu-creation.component';
import { MenuCreationRoutingModule } from './menu-creation-routing.module';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [MenuCreationComponent],
  imports: [
    CommonModule,
    MenuCreationRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class MenuCreationModule { }
