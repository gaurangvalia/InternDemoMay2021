import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceOptTechniquesRoutingModule } from './performance-opt-techniques-routing.module';
import { PerformanceOptTechniquesComponent } from './performance-opt-techniques.component';
import { ChangeDetectionsParentComponent } from './change-detections-parent/change-detections-parent.component';
import { ChangeDetectionsChildComponent } from './change-detections-parent/change-detections-child/change-detections-child.component';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionsChildTwoComponent } from './change-detections-parent/change-detections-child-two/change-detections-child-two.component';
import { TrackByDemoComponent } from './track-by-demo/track-by-demo.component';
import { PerformanceOptService } from './performance-opt.service';


@NgModule({
  declarations: [
    PerformanceOptTechniquesComponent,
    ChangeDetectionsParentComponent,
    ChangeDetectionsChildComponent,
    ChangeDetectionsChildTwoComponent,
    TrackByDemoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PerformanceOptTechniquesRoutingModule,
  ],
  providers:[
    PerformanceOptService
  ]
})
export class PerformanceOptTechniquesModule { }
