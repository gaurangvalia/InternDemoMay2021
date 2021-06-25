import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs'


@Component({
	selector: 'app-combine-latest',
	templateUrl: './combine-latest.component.html',
	styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

	public name = ['darpen','vishal','nidhi','kiran','darsh','bhavink','ankit','parth']
	public color = ['red','blue','green']

	public nameSubject = new BehaviorSubject('darpen');
	public colorSubject = new BehaviorSubject('red');

  public selectedData:any[] =[];
	constructor() { }

	ngOnInit(): void {
  combineLatest(this.nameSubject,this.colorSubject).subscribe(([res1,res2])=>{
      debugger
      this.selectedData.push({name:res1,color:res2})
      
    })
	}

	onChangeName(event:any){
		debugger
		this.nameSubject.next(event.target.value);
	}

	onChangeColor(event:any){
		debugger
		this.colorSubject.next(event.target.value);

	}

}
