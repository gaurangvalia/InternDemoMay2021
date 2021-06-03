import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkExampleRoutingModule } from './cdk-example-routing.module';
import { CdkExampleComponent } from './cdk-example.component';
import { CdkCapabilitiesContainerComponent } from './cdk-capabilities-container/cdk-capabilities.container';
import { CdkDragAndDropPresentationComponent } from './cdk-capabilities-container/cdk-drag-and-drop-presentation/cdk-drag-and-drop.presentation';
import { CdkOverlayPresentationComponent } from './cdk-capabilities-container/cdk-overlay-presentation/cdk-overlay.presentation';
import { OverlayDemoComponent } from './cdk-capabilities-container/cdk-overlay-presentation/overlay-demo/overlay-demo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkVirtualScrollPresentationComponent } from './cdk-capabilities-container/cdk-virtual-scroll-presentation/cdk-virtual-scroll-presentation.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LayoutModule } from '@angular/cdk/layout';
import { CdkLayoutPresentationComponent } from './cdk-capabilities-container/cdk-layout-presentation/cdk-layout-presentation.component';

@NgModule({
  declarations: [
    CdkExampleComponent,
    CdkCapabilitiesContainerComponent,
    CdkOverlayPresentationComponent,
    CdkDragAndDropPresentationComponent,
    OverlayDemoComponent,
    CdkVirtualScrollPresentationComponent,
    CdkLayoutPresentationComponent,
  ],
  imports: [
    CommonModule,
    CdkExampleRoutingModule,
    OverlayModule,
    DragDropModule,
    ScrollingModule,
    LayoutModule
  ],
  entryComponents: [
    OverlayDemoComponent
  ]
})
export class CdkExampleModule { }
