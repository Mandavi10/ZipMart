import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';
import { ListBoxComponent } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
@NgModule({
  declarations: [TestComponent ,ListBoxComponent, ButtonComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
   
  ]
})
export class TestModule { }
