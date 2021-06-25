import { Component, OnInit } from '@angular/core';
import { concatMap, tap } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {


  constructor(
    private appService:AppService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.appService.api1().pipe(
      tap((res1)=> console.log(res1)),
      concatMap((res)=> this.appService.api2()),
      tap((res2)=> console.log('res2',res2)),
      concatMap((api3Res)=> this.appService.api3())
    ).subscribe((data)=>{
      debugger
      console.log(data);
    })
  }
}
