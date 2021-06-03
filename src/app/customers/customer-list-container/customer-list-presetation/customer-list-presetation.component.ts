import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from '../../customer.model';
import { CustomwerListPresenterService } from '../customer-list-presenter/customwer-list-presenter.service';

@Component({
  selector: 'app-customer-list-presetation',
  templateUrl: './customer-list-presetation.component.html',
  styleUrls: ['./customer-list-presetation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [CustomwerListPresenterService]
})
export class CustomerListPresetationComponent implements OnInit {

  // @Input() public customerList: Customer[];

  @Input() public set customerList(value: Customer[]) {
    if (value) {
      this._customerList = value
    }
  }

  public get customerList(): Customer[] {
    return this._customerList
  }
  @Output() public deleteId:EventEmitter<any> = new EventEmitter();

  private _customerList: Customer[] = [];
  public customerGroup: FormGroup;
  constructor(
    private customwerListPresenterService: CustomwerListPresenterService
  ) {
    this.customerList = [];
    this.customerGroup = this.customwerListPresenterService.bindForm();
  }

  ngOnInit(): void {
    this.customwerListPresenterService.customerId$.subscribe((customerId) => {
      debugger
      this.deleteId.emit(customerId);
    });
  }

  public deleteCustomer(value: number) {
    debugger
    this.customwerListPresenterService.deleteCustomer(value)
  }

}
