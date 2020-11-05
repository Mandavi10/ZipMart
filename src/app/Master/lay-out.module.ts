import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent} from '../main-layout/main-layout.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PosSidebarComponent } from '../pos-sidebar/pos-sidebar.component';
import { SidebarMinimizerComponent } from '../sidebar-minimizer/sidebar-minimizer.component';
import { FooterComponent } from '../footer/footer.component';
import { LayOutRoutingModule } from './lay-out-routing.module';






@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, SidebarComponent, FooterComponent, SidebarMinimizerComponent, PosSidebarComponent,],

  imports: [
    CommonModule,
    LayOutRoutingModule
  ]
})
export class LayOutModule { }
