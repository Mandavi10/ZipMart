import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitchenSectionComponent } from './kitchen-section.component';
const routes: Routes = [{path:'',component:KitchenSectionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchenSectionRoutingModule { }
