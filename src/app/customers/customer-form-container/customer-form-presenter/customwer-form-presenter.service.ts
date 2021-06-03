import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CustomwerFormPresenterService {

  public customerData: Subject<any> = new Subject<any>();
  public customerData$: Observable<any>;
  constructor() {
    this.customerData$ = this.customerData.asObservable();
  }

  public bindForm() {
    return new FormGroup({
      id: new FormControl(),
      name: new FormControl('', Validators.required),
      address: new FormControl()
    });
  }

  public customerDetails(customerForm: FormGroup) {
    if (customerForm.valid) {
      console.log('done');
      this.customerData.next(customerForm.value);
    } else {
    }
  }
}
