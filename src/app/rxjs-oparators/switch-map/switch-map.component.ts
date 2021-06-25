import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {fromEvent, interval } from "rxjs";
import { debounceTime, switchMap, } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {
  public counter = 0;
  public array1 = ['darpen','vishal','nidhi','kiran','darsh','bhavink','ankit','parth'];
  public array2:any = [];
  public search = new FormControl();
  constructor() { 

  }

  ngOnInit(): void {

    // ----------------------- SwitchMap -------------------------------------
    // fromEvent(document,'click').pipe(switchMap(()=> interval(500))).subscribe((val:any)=>{
    //   this.counter = val
    // })
    this.search.valueChanges.pipe(
      debounceTime(5000), //1 sec (darp)
      switchMap((value)=> this.array1.filter((item)=> item.includes(value)))
    ).subscribe((filterdata)=>{
      this.array2.push(filterdata)
    })
  }

}
