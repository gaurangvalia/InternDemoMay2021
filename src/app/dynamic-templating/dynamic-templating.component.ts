import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-templating',
  templateUrl: './dynamic-templating.component.html',
  styleUrls: ['./dynamic-templating.component.scss']
})
export class DynamicTemplatingComponent implements OnInit {
  public isShow:boolean = true;
  public myContext = { 
    $implicit: 'gaurang',
    users:[
      {
        firstName:'gaurang',
        lastName:'valia'
      },
      {
        firstName:'Hiren',
        lastName:'Tandel'
      },
      {
        firstName:'Mitul',
        lastName:'Patel'
      }
    ]
 }
  constructor() { }

  ngOnInit(): void {
  }

  

}
