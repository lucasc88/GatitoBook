import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animals';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params['animalId'];
    this.animal$ = this.animalsService.searchById(this.animalId);
  }

  likes() {
    this.animalsService.likes(this.animalId).subscribe((liked) => {//animalsService.likes return true or false
      if (liked) {
        this.animal$ = this.animalsService.searchById(this.animalId);//reload the animal with the current likes
      }
    })
  }

  delete() {
    this.animalsService.deleteAnimal(this.animalId).subscribe(() => {
      this.router.navigate(['/animals/']);//on success request
    },
      (error) => console.log('Error: ' + error)//on failure request
    );
  }
}
