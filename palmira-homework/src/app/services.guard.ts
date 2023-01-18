import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router:Router,
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn().pipe(
      tap((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate(['signin']);
        }
      })
    );
  }

}
