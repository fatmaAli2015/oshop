import { Component } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../shared/services/auth/auth.service';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser|any;

  constructor(private auth: AuthService) { 
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout() {
    this.auth.logout();
  }

}
