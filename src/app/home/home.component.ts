import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnChanges {
  xyz = "1Rivte"
  myName = "gaurang"
  getDataWithChild:any;
  listOfEmployee = ['abc','xyz','pqr']

  customerDetail = [
    {
      name:"abc",
      age:25
    },
    {
      name:"abcd",
      age:25
    },
    {
      name:"abcdfds",
      age:25
    }
  ]
  constructor() { }
  ngOnChanges(): void {
    console.log('parent Change');
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  
  myMethod(){
    return "heeellloooo"
  }
  onChangeMyName = () =>{
    debugger
    this.getDataWithChild = this.xyz
    this.myName = this.xyz
  }
  getDataParentToChild = (val:any) => {
    this.getDataWithChild = val
  }

  onGetDataInChild(value:any){
    console.log(value);
    
  }

}
