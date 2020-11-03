import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuCreationComponent } from './menu-creation.component';
const routes: Routes = [{path:'',component:MenuCreationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuCreationRoutingModule { }
