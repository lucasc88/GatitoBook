import { Component, Input, OnInit } from '@angular/core';
import { Animals } from '../animals';

@Component({
  selector: 'app-animals-pictures-grid',
  templateUrl: './animals-pictures-grid.component.html',
  styleUrls: ['./animals-pictures-grid.component.scss']
})
export class AnimalsPicturesGridComponent implements OnInit {

  //! is to define the newUserForm can be null or not. This project is set to "strict": true in tsconfig.json
  @Input() animals!: Animals;

  constructor() { }

  ngOnInit(): void {
  }

}
