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
{path: 'TakeAway', loadChildren: './take-away/take-away.module#TakeAwayModule'},
{path: 'Test', loadChildren: './test/test.module#TestModule'},
{path: 'Location', loadChildren: './location/location.module#LocationModule'},
{path: 'DefineRestaurant', loadChildren: './define-restaurant/define-restaurant.module#DefineRestaurantModule'},
{path: 'Country', loadChildren: './country/country.module#CountryModule'},
{path: 'NewOrder', loadChildren: './new-order/new-order.module#NewOrderModule'},
{path: 'RunningOrder', loadChildren: './running-order/running-order.module#RunningOrderModule'},
{path: 'State', loadChildren: './state/state.module#StateModule'},
{path: 'EmployeeDetails', loadChildren: './employee-details/employee-details.module#EmployeeDetailsModule'},
{path: 'Home', loadChildren: './home/home.module#HomeModule'},
{path: 'SectionTable', loadChildren: './section-table/section-table.module#SectionTableModule'},
{path: 'Company', loadChildren: './company/company.module#CompanyModule'},
{path: 'MenuCreation', loadChildren: './menu-creation/menu-creation.module#MenuCreationModule'},
{path: 'Addon', loadChildren: './addon/addon.module#AddonModule'},
{path: 'KitchenSection', loadChildren: './kitchen-section/kitchen-section.module#KitchenSectionModule'},
{path: 'Payment', loadChildren: './payment/payment.module#PaymentModule'},
{path: 'KitchenScreen', loadChildren: './kitchen-screen/kitchen-screen.module#KitchenScreenModule'},


        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayOutRoutingModule { }
