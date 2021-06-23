import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-child2',
  templateUrl: './home-child2.component.html',
  styleUrls: ['./home-child2.component.scss']
})
export class HomeChild2Component implements OnInit {

  @Input() customerList:any;
  @Output() passDataToP = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    let arrayOfEmp= [
      {
        id:1,
        address :'abc'
      },
      {
        id:2,
        address :'abc'
      }
    ]
    this.passDataToP.emit(arrayOfEmp)
  }
}
