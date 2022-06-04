import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { UserService } from 'src/app/autentication/user/user.service';
import { Animals } from '../animals';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {

  //$ at the end of variable is just to inditify that is an Observable
  animals$!: Observable<Animals>;

  constructor(private userService: UserService, private animalsService: AnimalsService) { }

  //it's not a good pratice to do a subscribe inside other subscribe
  //RXJS is the best way. The data flow is a kind of pipe and we can use RXJS to simplify.
  ngOnInit(): void {
    // this.userService.returnUser().subscribe((user) => {
    //   //in case user.name is undefined or null, ?? will put an empty string
    //   const userName = user.name ?? '';
    //   this.animalsService.userList(userName).subscribe((animals) => {
    //     this.animals = animals;
    //   })
    // });

    //we can use operators inside the pipe
    //switchMap will change the flow from User to Animals 
    this.animals$ = this.userService.returnUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.userList(userName);//switchMap requires return another Observable
        //using Observable fully, we can use pipe async. In this way, Angular will do Subscribe and Unsubscribe automatically
      })
    );
  }

}
