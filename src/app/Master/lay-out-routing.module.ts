import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
   { path: '',component: MainLayoutComponent,children: [
{path: 'Dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},

{path: 'TestMaster', loadChildren: './test-master/test-master.module#TestMasterModule'},


{path: 'City', loadChildren: './city/city.module#CityModule'},
{path: 'Location', loadChildren: './location/location.module#LocationModule'},

{path: 'Country', loadChildren: './country/country.module#CountryModule'},


        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayOutRoutingModule { }
