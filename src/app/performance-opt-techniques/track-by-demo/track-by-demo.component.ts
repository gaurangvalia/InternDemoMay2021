import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PerformanceOptService } from '../performance-opt.service';
@Component({
  selector: 'app-track-by-demo',
  templateUrl: './track-by-demo.component.html',
  styleUrls: ['./track-by-demo.component.scss']
})
export class TrackByDemoComponent implements OnInit {

  public companyProduct: any[] = [];

  public SampleMessage = "Example of Angular Fetching records using TrackBy";

  private destroyed$: Subject<boolean> = new Subject();
  constructor(private performanceService: PerformanceOptService) {
  }

  ngOnInit() {
    this.performanceService.getAllProductsUsingTrackBy().subscribe((res) => {
      this.companyProduct = res
    });
  }

  public getNewCompanies(): void {
    this.performanceService.getAllProductsUsingTrackByExample().subscribe((res) => {
      this.companyProduct = res
    });
  }

  trackByArtNo(index: number, companyProduct: any): string {
    return companyProduct.ArtNo;
  }


}
