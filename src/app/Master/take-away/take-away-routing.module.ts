import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeAwayComponent } from './take-away.component';

const routes: Routes = [{path:'',component:TakeAwayComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakeAwayRoutingModule { }
