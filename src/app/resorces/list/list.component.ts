import { Component, OnInit } from '@angular/core';
import { Resources, Student } from '../resorces.model';
import { ResorcesService } from '../resorces.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // public resourcesList:Resources[]=[];
  public studentList:Student[]=[];
 
  public myName:string="";
  constructor(
    public resorcesService:ResorcesService
  ) { }
 
  ngOnInit(): void {
    this.resorcesService.getStudnet().subscribe((item:Student[])=>{
      this.studentList = item
    })
  }
  deleteStu(id:number){
    this.resorcesService.deleteStudnet(id).subscribe((item:number)=>{
      debugger
    })
  }
}
