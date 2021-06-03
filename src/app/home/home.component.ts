import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  xyz = "1Rivte"
  myName = "gaurang"
  getDataWithChild:any;
  listOfEmployee = ['abc','xyz','pqr']
  constructor() { }

  ngOnInit(): void {
  }

  myMethod(){
    return "heeellloooo"
  }
  onChangeMyName = () =>{
    this.myName = this.xyz
  }
  getDataParentToChild = (val:any) => {
    this.getDataWithChild = val
  }
}
