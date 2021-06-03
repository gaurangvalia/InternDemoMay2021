import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormContainerComponent } from './customer-form-container/customer-form-container.component';
import { CustomwerFormPresenterService } from './customer-form-container/customer-form-presenter/customwer-form-presenter.service';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children:[
      
      {
        path:'',
        component:CustomerListContainerComponent
      },
      {
        path:'add',
        component:CustomerFormContainerComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
