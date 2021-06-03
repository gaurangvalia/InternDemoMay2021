import { Component, OnInit } from '@angular/core';
import { Person } from '../parformance-opt.model';

@Component({
  selector: 'app-change-detections-parent',
  templateUrl: './change-detections-parent.component.html',
  styleUrls: ['./change-detections-parent.component.scss']
})
export class ChangeDetectionsParentComponent implements OnInit {

  constructor() {
    console.log('parent constructor');
  }

  ngOnInit(): void {
    console.log('parent onInit');
  }


  public person: Person = {
    name: 'John Doe', // current state
    age: 20
  };

  public reassign(): void {
    // this.person.name = 'xyz'; // new state
    // this.person.age = 30;
    this.person = {
      name: this.person.name,
      age: this.person.age
    };
  }



  ngOnChanges() {
    console.log(" parent OnChanges");
  }

  ngDoCheck() {
    // console.log(" parent DoCheck");
  }

  ngAfterContentInit() {
    console.log(" parent AfterContentInit");
  }

  ngAfterViewInit() {
    console.log(" parent AfterViewInit");
  }


}
