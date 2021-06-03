import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomwerFormPresenterService } from '../customer-form-presenter/customwer-form-presenter.service';

@Component({
  selector: 'app-customer-form-presentation',
  templateUrl: './customer-form-presentation.component.html',
  styleUrls: ['./customer-form-presentation.component.scss'],
  viewProviders: [CustomwerFormPresenterService]
})
export class CustomerFormPresentationComponent implements OnInit {

  @Output() customerData: EventEmitter<any> = new EventEmitter<any>();

  public customerForm: FormGroup = this.customwerFormPresenterService.bindForm();

  constructor(
    private customwerFormPresenterService: CustomwerFormPresenterService
  ) {
  }

  ngOnInit(): void {
    this.customwerFormPresenterService.customerData$.subscribe((customerData: any) => {
      debugger
      this.customerData.emit(customerData)
    })
  }


  get customerFormControl() {
    return this.customerForm.controls;
  }

  public onSubmit() {
    this.customwerFormPresenterService.customerDetails(this.customerForm)
  }

}
