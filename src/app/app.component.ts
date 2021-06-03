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
  constructor(
    private router: Router
  ){}
  public onClick(): void {
    this.router.navigate(['about-us']);
  }
}
