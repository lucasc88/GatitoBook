import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/autentication/user/user.service';
import { Animals } from '../animals';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {

  animals!: Animals;

  constructor(private userService: UserService, private animalsService: AnimalsService) { }

  ngOnInit(): void {
    this.userService.returnUser().subscribe((user) => {
      //in case user.name is undefined or null, ?? will put an empty string
      const userName = user.name ?? '';
      this.animalsService.userList(userName).subscribe((animals) => {
        this.animals = animals;
      })
    });
  }

}
