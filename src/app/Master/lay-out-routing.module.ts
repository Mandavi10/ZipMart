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

{path: 'Test', loadChildren: './test/test.module#TestModule'},
{path: 'Location', loadChildren: './location/location.module#LocationModule'},
{path: 'DefineRestaurant', loadChildren: './define-restaurant/define-restaurant.module#DefineRestaurantModule'},
{path: 'Country', loadChildren: './country/country.module#CountryModule'},
{path: 'State', loadChildren: './state/state.module#StateModule'},

{path: 'Home', loadChildren: './home/home.module#HomeModule'},
{path: 'SectionTable', loadChildren: './section-table/section-table.module#SectionTableModule'},
{path: 'Company', loadChildren: './company/company.module#CompanyModule'},
{path: 'MenuCreation', loadChildren: './menu-creation/menu-creation.module#MenuCreationModule'},
{path: 'Addon', loadChildren: './addon/addon.module#AddonModule'},
{path: 'KitchenSection', loadChildren: './kitchen-section/kitchen-section.module#KitchenSectionModule'},

        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayOutRoutingModule { }
