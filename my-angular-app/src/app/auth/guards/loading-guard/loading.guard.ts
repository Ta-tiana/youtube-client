import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanLoad {

  constructor(public authService: AuthService, public router: Router) { }

  public canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.authService.isRegistered()) {
      this.router.navigate(['']).then(r => console.log(r));
      return false;
    }
    return true;
  }
}
