import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CdkOverlayPresenter } from '../cdk-overlay-presenter/cdk-overlay.presenter';
// ---------------------------------- //


@Component({
  selector: 'app-cdk-overlay-ui',
  templateUrl: './cdk-overlay.presentation.html',
  styleUrls: ['./cdk-overlay.presentation.scss'],
  viewProviders: [CdkOverlayPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdkOverlayPresentationComponent {
  constructor(
    private cdkOverlayPresenter: CdkOverlayPresenter
  ) { }

  public openOverlayDemo(buttonCDKRef: HTMLButtonElement) {
    this.cdkOverlayPresenter.openOverlayComponent(buttonCDKRef)
  }

}