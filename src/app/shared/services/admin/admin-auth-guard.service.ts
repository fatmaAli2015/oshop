import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { AppUser } from 'src/app/models/app-user';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .pipe(map((appUser: AppUser | any) => appUser.isAdmin));
  }
}
