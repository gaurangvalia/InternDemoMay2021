import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-home-child1',
  templateUrl: './home-child1.component.html',
  styleUrls: ['./home-child1.component.scss']
})
export class HomeChild1Component implements OnInit {

  @Input() getEmployeeList:any;
  @Input() xyzData:string = "";
  @Output() passData = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    this.passData.emit('hiiiiii')
  }
}
