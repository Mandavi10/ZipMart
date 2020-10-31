import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionTableComponent } from './section-table.component';
const routes: Routes = [{path:'',component:SectionTableComponent}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionTableRoutingModule { }
