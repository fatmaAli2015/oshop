import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot
  , CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
    private router: Router) { }
  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.user$.map((user:any) => {
      if (user) return true;
      this.router.navigate(['/login'],
      { queryParams: { returnUrl: state.url } });
      return false
    });
  }

}
