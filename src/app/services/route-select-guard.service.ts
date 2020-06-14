import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteSelectGuardService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (localStorage.getItem("roofrat_routeProgress")) {
      this.router.navigate(['tablinks']);
      return false;
    }

    return true;
  }
}
