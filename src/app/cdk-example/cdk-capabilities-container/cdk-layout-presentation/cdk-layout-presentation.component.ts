import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-layout-presentation',
  templateUrl: './cdk-layout-presentation.component.html',
  styleUrls: ['./cdk-layout-presentation.component.scss']
})
export class CdkLayoutPresentationComponent implements OnInit {

  public results1$:any;
  public results2$:any;
  
  constructor(
    private layoutObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.results1$ = this.layoutObserver.observe('(max-width: 350px)')
    this.results2$ = this.layoutObserver.observe(['(max-width: 350px)', '(max-width: 450px)'])
  }

}
