import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { UserService } from 'src/app/authentication/user/user.service';
import { Animals } from '../animals';
import { AnimalsService } from '../animals.service';


//Resolver will load the pictures while the component animals-list is rendering. Just to imporve the performance.
//It loads some data before the route be resolved.
//After, add it to animals-routing.module as    resolve: { animals: AnimalsListResolver }
//This will get the photos before the component is rendered
@Injectable({
  providedIn: 'root'
})
export class AnimalsListResolver implements Resolve<Animals> {

  constructor(private animalsService: AnimalsService, private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Animals> {
    return this.userService.returnUser().pipe( //switchMap to change the flow from user to animals
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.userList(userName);
      }),
      take(1)// It's necessary the take(1) because returnUser() is a Observable of Subject type.
      //Subject stays open and we have to ensure that it is finalized
    );
  }

}
