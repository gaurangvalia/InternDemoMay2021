import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';
import { CustomersService } from './customers.service';
import { CustomerListPresetationComponent } from './customer-list-container/customer-list-presetation/customer-list-presetation.component';
import { CustomerFormContainerComponent } from './customer-form-container/customer-form-container.component';
import { CustomerFormPresentationComponent } from './customer-form-container/customer-form-presentation/customer-form-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListContainerComponent,
    CustomerListPresetationComponent,
    CustomerFormContainerComponent,
    CustomerFormPresentationComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomersService
  ]
})
export class CustomersModule { }
