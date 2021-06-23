import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Resources, Student } from '../resorces.model';
import { ResorcesService } from '../resorces.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public resorceForm = new Resources();
  // data = {
  //   name:"",
  //   price:800
  // }
  public getStudent:Student[]=[];
  
  public student:Student ={
      id:5,
      name:'gaurang1',
      age:'27',
      address:'vadodara3',
      skills:[
        {
          title:'darpern',
          cartification:'fsfsdf1'
        },
        {
          title:'kiran',
          cartification:'fsfsdf1'
        }
      
      ]
  }

  constructor(
    private resorcesService:ResorcesService
  ) {
    this.resorcesService.getStudnet().subscribe((item:Student[])=>{
      debugger
      this.getStudent = item
    })
   }

  ngOnInit(): void {
    // this.resorcesService.addResoruce({}).subscribe(()=>{
    //   debugger
    // })
  }
  name = {first: 'Nancy', last: 'Drew'};

  onSubmit() {
    // console.log(f.value);  // {name: {first: 'Nancy', last: 'Drew'}, email: ''}
    // console.log(f.valid);  // true
    debugger
    this.resorcesService.addStudent(this.student).subscribe((item:Student)=>{
      debugger
    })
    // this.resorcesService.editStudent(this.student).subscribe((item:Student)=>{
    //   debugger
    // })
  }

  setValue() {
    this.name = {first: 'Bess', last: 'Marvin'};
  }

  addResorce(formData:Resources){
    console.log(formData);
    
  }
  deleteStu(){
    this.resorcesService.deleteStudnet(1).subscribe((item:number)=>{
      debugger
    })
  }

}
