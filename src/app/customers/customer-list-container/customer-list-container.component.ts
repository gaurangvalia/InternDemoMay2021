import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../customer.model';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-list-container',
  templateUrl: './customer-list-container.component.html',
  styleUrls: ['./customer-list-container.component.scss']
})
export class CustomerListContainerComponent implements OnInit {

  public customerList$: Observable<any> = of();

  constructor(
    private customersService: CustomersService
  ) {
    this.customerList$ = this.customersService.getCustomers();
  }

  ngOnInit(): void {
  }

  public onDeleteId(value: number) {
    debugger
    this.customersService.deleteCustomer(value)
  }

}
