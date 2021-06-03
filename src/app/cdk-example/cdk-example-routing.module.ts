import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkCapabilitiesContainerComponent } from './cdk-capabilities-container/cdk-capabilities.container';import { CdkDragAndDropPresentationComponent } from './cdk-capabilities-container/cdk-drag-and-drop-presentation/cdk-drag-and-drop.presentation';
import { CdkLayoutPresentationComponent } from './cdk-capabilities-container/cdk-layout-presentation/cdk-layout-presentation.component';
import { CdkOverlayPresentationComponent } from './cdk-capabilities-container/cdk-overlay-presentation/cdk-overlay.presentation';
import { CdkVirtualScrollPresentationComponent } from './cdk-capabilities-container/cdk-virtual-scroll-presentation/cdk-virtual-scroll-presentation.component';
import { CdkExampleComponent } from './cdk-example.component';

const routes: Routes = [
  {
    path: '', component: CdkExampleComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cdk-capablilities'
      },
      {
        path: 'cdk-capablilities',
        component: CdkCapabilitiesContainerComponent,
        children:[
          {
            path:'overlay',
            component:CdkOverlayPresentationComponent
          },
          {
            path:'drag-and-drop',
            component:CdkDragAndDropPresentationComponent
          },
          {
            path:'virtual-scroll',
            component:CdkVirtualScrollPresentationComponent
          },
          {
            path:'layout',
            component:CdkLayoutPresentationComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdkExampleRoutingModule { }
