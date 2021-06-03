import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-overlay-demo',
  templateUrl: './overlay-demo.component.html',
  styleUrls: ['./overlay-demo.component.scss']
})
export class OverlayDemoComponent implements OnInit {

  public myName: string = '';
  @Output() public passData: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.passData.emit('pratik is click');
  }

}
