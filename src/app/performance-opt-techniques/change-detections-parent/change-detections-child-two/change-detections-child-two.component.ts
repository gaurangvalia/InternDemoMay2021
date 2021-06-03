import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detections-child-two',
  templateUrl: './change-detections-child-two.component.html',
  styleUrls: ['./change-detections-child-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionsChildTwoComponent implements OnInit {
  public counter: number = 0;
  constructor(
    private cdr: ChangeDetectorRef
  ) {
    setInterval(() => {
      this.counter++
      this.cdr.markForCheck();
    }, 1000);
    // setInterval(() => {
    //   this.cdr.reattach();
    // }, 10000);

  }

  ngOnInit(): void {
  }

  public onReattach() {
    this.cdr.reattach();
  }

  public onDetach() {
    this.cdr.detach();
  }

  public onDetect() {
    this.cdr.detectChanges();
  }
  
  
}
