import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Skill, Student } from '../resorces.model';
import { ResorcesService } from '../resorces.service';

@Component({
	selector: 'app-add-studnet',
	templateUrl: './add-studnet.component.html',
	styleUrls: ['./add-studnet.component.scss']
})
export class AddStudnetComponent implements OnInit {

	public studentId:number;
	public studentFormGroup!: FormGroup;
	constructor(
		private fb:FormBuilder,
		private activetedRoute:ActivatedRoute,
		private resorcesService:ResorcesService
	) {
    this.studentFormGroup = this.fb.group({
      id:[''],
      name:[''],
      age:[0],
      address: [''],
        skills:this.fb.array([
          this.addNewGroup()
        ])
    })
    
		console.log('activetedRoute',activetedRoute);
		this.studentId = Number(this.activetedRoute.snapshot.paramMap.get('id'));
		if(this.studentId){
			this.resorcesService.getByIdStudnet(this.studentId).subscribe((item:Student)=>{
        // const skilsArray = this.studentFormGroup.get('skills') as FormArray
        // let skilsArray = this.studentFormGroup.get('skills') as FormArray
        // skilsArray = this.fb.array([])
				item.skills.forEach((skillItem:Skill)=>{
          debugger
          let skilsArray = this.studentFormGroup.get('skills') as FormArray
          skilsArray.push(this.addNewGroup())
				})
				this.studentFormGroup.patchValue(item)
			})
		}
		// this.route.snapshot.paramMap.get('id1')
	

		}

		public addNewGroup(){
			return this.fb.group({
				title:[''],
				cartification:['']
				})
	}

	getArrayOfAddress(){
		return this.studentFormGroup.get('skills') as FormArray
	}


	ngOnInit(): void {
	}

	addSkillsGroup(){
		const skilsArray = this.studentFormGroup.get('skills') as FormArray
		skilsArray.push(this.addNewGroup())
	}

	public checkPassword(){

	}
	removeItem(index:number){
		const skilsArray = this.studentFormGroup.get('skills') as FormArray;
		skilsArray.removeAt(index)
	}

	public submit(value:any){
    debugger
		console.log('formGroup',this.studentFormGroup);
		console.log('value',value);
    if(this.studentId){
      this.resorcesService.editStudent(this.studentFormGroup.value).subscribe((res:Student)=>{
        debugger
      })
    } else {
      this.resorcesService.addStudent(this.studentFormGroup.value).subscribe((res:Student)=>{
        debugger
      })
    }

	}

}
