import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;
      return this.checkUser(route, url);
  }
  checkUser(route:any,url:any){
    console.log(route.data.role)
    console.log(route.data.role.indexOf(localStorage.getItem('Role')))
    if(route.data.role && route.data.role.indexOf(localStorage.getItem('Role'))===-1){
      return false
    }
    return true;
  }

  
}
