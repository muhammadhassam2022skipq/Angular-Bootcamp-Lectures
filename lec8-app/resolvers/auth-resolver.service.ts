import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GlobalService } from '../shared/global.service';
import { User } from '../users/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthResolverService implements Resolve<Observable<User | undefined>> {

  constructor(private global: GlobalService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User | undefined> | Observable<Observable<User | undefined>> | Promise<Observable<User | undefined>> {
      const userId= this.global.userId;
      let loggedInUSer: User | undefined;
      if(userId === 'faisal') {
        loggedInUSer = new User();
        loggedInUSer.firstName = "Faisal";
        loggedInUSer.lastName = "Abbas";
        loggedInUSer.isActive = true;
      }
      return of(loggedInUSer);
  }
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User | undefined> | Promise<User | undefined> | User | undefined {
  //   const userId= this.global.userId;
  //   let loggedInUSer: User | undefined;
  //   if(userId === 'faisal') {
  //     loggedInUSer = new User();
  //     loggedInUSer.firstName = "Faisal";
  //     loggedInUSer.lastName = "Abbas";
  //     loggedInUSer.isActive = true;
  //   }
  //   return loggedInUSer;
  // }
}
