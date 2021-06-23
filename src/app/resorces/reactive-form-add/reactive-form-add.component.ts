import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Resources } from '../resorces.model';

@Component({
	selector: 'app-reactive-form-add',
	templateUrl: './reactive-form-add.component.html',
	styleUrls: ['./reactive-form-add.component.scss']
})
export class ReactiveFormAddComponent implements OnInit {

	public resorce:FormGroup;
		// data = {
		// 	name:'',
		// 	price:0,
		// 	addressArray:[
		// 	{
		// 		line1:'',
		// 		line2:''
		// 	},
		// 	{
		// 		line1:'',
		// 		line2:''
		// 	},
		// 	{
		// 		line1:'',
		// 		line2:''
		// 	},
		// 	]
		// }
		public address:FormArray[]=[];
	constructor(
		private fb: FormBuilder
		) { 

		this.resorce = this.fb.group({
			name:['',[Validators.required,Validators.maxLength(10),Validators.minLength(2)]],
			price:[0],
			address: this.fb.array([
			this.addNewGroup()
				])
		})
	}
		// {
		// line1: [],
		// line2: []
		// }
	ngOnInit(): void {
	}

		public addNewGroup(){
			return this.fb.group({
				line1:[''],
				line2:['']
				})
		}

    getArrayOfAddress(){
      return this.resorce.get('address') as FormArray
    }

    addAddressGroup(){
      debugger
      const addressArray = this.resorce.get('address') as FormArray
      addressArray.push(this.addNewGroup())
    }

		public checkPassword(){

		}
    removeItem(index:number){
      debugger
      const addressArray = this.resorce.get('address') as FormArray;
      addressArray.removeAt(index)
    }

		public submit(value:any){
			console.log('formGroup',this.resorce);
			console.log('value',value);

		}
}
