import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, interval } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-oparators',
  templateUrl: './rxjs-oparators.component.html',
  styleUrls: ['./rxjs-oparators.component.scss']
})
export class RxjsOparatorsComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {

  
  }

}
