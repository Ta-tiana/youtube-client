import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanLoad {

  public canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
