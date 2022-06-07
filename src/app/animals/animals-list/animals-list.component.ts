import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { UserService } from 'src/app/authentication/user/user.service';
import { Animals } from '../animals';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {

  //this variable will use the Resolve Guard (animals-list.resolver.ts)
  animals!: Animals;

  constructor(private activedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.activedRoute.params.subscribe( param => {
      this.animals = this.activedRoute.snapshot.data['animals'];
    });
  }

}
