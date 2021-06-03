import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class TestLazyGuard implements CanLoad {

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let admin = 'gaurang';
    if(admin === 'gaurang'){
      return true;
    }else{
      return false;
    }
  }
  
  
}
