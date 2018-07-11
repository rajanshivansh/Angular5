import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class LoginGaurdService implements CanActivate{

  canActivate(){
   return this.authService.isAuthenticated();
    
  }
  constructor(private authService : AuthService, 
              private router : Router) { }

}
