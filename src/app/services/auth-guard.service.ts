import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!localStorage.getItem("roofrat_routeProgress")) {
      this.router.navigate(['route-select']);
      return false;
    }

    return true;
  }
}
