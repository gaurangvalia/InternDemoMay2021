import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class PerformanceOptService {
  public employees!: any[];
  constructor() { }

  public getAllProductsUsingTrackBy(): Observable<any> {
    this.employees = [
      {
        ProductId: 1,
        ArtNo: "1001111",
        Provider: "OppoProvider",
        ProviderArtNo: "1Yu",
        Brand: "Oppo",
        Price: 7810.23,
        BuyAccount: "123",
        SalesAccount: "321"
      },
      {
        ProductId: 2,
        ArtNo: "1003333",
        Provider: "OppoProvider",
        ProviderArtNo: "1Yu",
        Brand: "Oppo",
        Price: 7810.23,
        BuyAccount: "123",
        SalesAccount: "321"
      },
      {
        ProductId: 3,
        ArtNo: "1002222",
        Provider: "OppoProvider",
        ProviderArtNo: "1Yu",
        Brand: "Oppo",
        Price: 7810.23,
        BuyAccount: "123",
        SalesAccount: "321"
      },
    ];
    return of(this.employees)
  }

  public getAllProductsUsingTrackByExample(): Observable<any> {
    this.employees = [
      {
        ProductId: 1,
        ArtNo: "10055555",
        Provider: "OppoProvider",
        ProviderArtNo: "1Yu",
        Brand: "Oppo",
        Price: 7810.23,
        BuyAccount: "123",
        SalesAccount: "321"
      },
      {
        ProductId: 1,
        ArtNo: "1006777",
        Provider: "OppoProviderfghfhgf",
        ProviderArtNo: "1Yu5456645645",
        Brand: "Oppo",
        Price: 7810.23,
        BuyAccount: "123",
        SalesAccount: "321"
      },
      {
        ProductId: 1,
        ArtNo: "10089789787",
        Provider: "OppoProviderghfhfh",
        ProviderArtNo: "1Yudffgdfgdf",
        Brand: "Oppo",
        Price: 7810.23,
        BuyAccount: "123",
        SalesAccount: "321"
      },
    ];

    return of(this.employees)
  }

}
