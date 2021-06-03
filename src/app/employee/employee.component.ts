import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  // public employeeDetails = {
  //   id: 1,
  //   name: 'gaurang',
  //   salary: '12000',
  //   city: 'vadodara',
  //   state: 'gujarat',
  //   zip: 390012
  // }

  public employeeForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    // AbstractControl
    // this.employeeForm.patchValue(this.employeeDetails)

    // ----------------------- Formgroup and formControle (simple)-------------------------
    // this.employeeForm = new FormGroup({
    //   id: new FormControl(1, Validators.required),
    //   name: new FormControl('Gaurang', [Validators.required, Validators.pattern('[A-Za-z]{1,32}')]),
    //   salary: new FormControl(null, Validators.required),
    //   address: new FormArray(
    //     [   new FormGroup({
    //         city: new FormControl(null, Validators.required),
    //         state: new FormControl(null, Validators.required),
    //         zip: new FormControl(null, Validators.required)
    //       })
    //     ]
    //   )
    // })
    //------------------- Formgroup inside formgroup ---------------------------
    // this.employeeForm = new FormGroup({
    //   id: new FormControl(null, Validators.required),
    //   name: new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z]{1,32}')]),
    //   salary: new FormControl(null, Validators.required),
    //   address: new FormGroup({
    //     city: new FormControl(null, Validators.required),
    //     state: new FormControl(null, Validators.required),
    //     zip: new FormControl(null, [Validators.required,Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')])
    //   })
    // })

    // ----------------------- Formgroup and formControle with formBuilder(simple)-------------------------
    // this.employeeForm = this.formBuilder.group({
    //   id: [null, Validators.required],
    //   name: ['', [Validators.required, Validators.pattern('[A-Za-z]{1,32}')]],
    //   salary: ['', Validators.required],
    //   address: this.formBuilder.group({
    //     city: ['', Validators.required],
    //     state: ['', Validators.required],
    //     zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]]
    //   })
    // })

    // ----------------------- Formgroup and FormArray with formBuilder(simple)-------------------------
    this.employeeForm = this.formBuilder.group({
      id: [null, Validators.required],
      name: ['', [Validators.required, Validators.pattern('[A-Za-z]{1,32}')]],
      salary: ['', Validators.required],
      address: this.formBuilder.array([
        this.addressFormGroup()
      ])
    })
  }

  public addressFormGroup(): FormGroup {
    return this.formBuilder.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]]
    })
  }

  ngOnInit(): void {

  }

  public onSubmit() {
    console.log(this.employeeForm);
  }

  public addAddress() {
    const add = this.employeeForm.get('address') as FormArray;
    add.push(this.addressFormGroup());
  }

  public deleteAddress(index: number) {
    debugger
    const deleteAddressItem = this.employeeForm.get('address') as FormArray;
    deleteAddressItem.removeAt(index)
  }
}
