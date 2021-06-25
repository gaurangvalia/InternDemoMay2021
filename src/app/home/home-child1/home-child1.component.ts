import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-home-child1',
  templateUrl: './home-child1.component.html',
  styleUrls: ['./home-child1.component.scss']
})
export class HomeChild1Component implements OnInit,OnChanges {

  @Input() getEmployeeList:any;
  @Input() xyzData:string = "";
  @Output() passData = new EventEmitter()
  constructor() { }
  ngOnChanges(): void {
    console.log('child chnage');
    
  }

  ngOnInit(): void {
  }

  onChange(){
    this.passData.emit('hiiiiii')
  }

}
