import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <h1>Angular</h1>
  // `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internDemo';
  // let listOfMenu = [
  //   {
  //     linkUrl:"about-us",
  //     id:1,
  //     permiss:[
  //       'admin',
  //     ]
  //   }
  // ]
  constructor(
    private router: Router
  ){}
  
  public onClick(): void {
    this.router.navigate(['about-us']);
  }
}
