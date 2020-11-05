import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddonComponent } from './addon.component';
const routes: Routes =[{path:'',component:AddonComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddonRoutingModule { }
