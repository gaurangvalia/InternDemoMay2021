import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionsParentComponent } from './change-detections-parent/change-detections-parent.component';
import { PerformanceOptTechniquesComponent } from './performance-opt-techniques.component';
import { TrackByDemoComponent } from './track-by-demo/track-by-demo.component';

const routes: Routes = [
  {
    path: '', component: PerformanceOptTechniquesComponent,
    children:[
      {
        path:'change-detections-demo',
        component:ChangeDetectionsParentComponent
      },
      {
        path:'track-by',
        component:TrackByDemoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceOptTechniquesRoutingModule { }
