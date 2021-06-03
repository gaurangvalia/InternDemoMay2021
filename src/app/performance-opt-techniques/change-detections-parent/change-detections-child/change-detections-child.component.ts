import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Person } from '../../parformance-opt.model';

@Component({
  selector: 'app-change-detections-child',
  templateUrl: './change-detections-child.component.html',
  styleUrls: ['./change-detections-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionsChildComponent implements OnInit {
  @Input() person: Person | any;

  constructor(
    private cdr: ChangeDetectorRef,
  ) {
    console.log('child constructor');
    setInterval(() => {
      this.cdr.markForCheck()
    }, 1000)
  }


  ngOnInit() {
    console.log(" child  OnInit");
  }

  ngOnChanges() {
    console.log("  child  OnChanges");
  }

  ngDoCheck() {
    // console.log(" child  DoCheck");
  }

  ngAfterContentInit() {
    console.log(" child   AfterContentInit");
  }

  ngAfterViewInit() {
    console.log("  child  AfterViewInit");
  }

}
