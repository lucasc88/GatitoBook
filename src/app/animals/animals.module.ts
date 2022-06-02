import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../component/card/card.module';
import { AnimalsPicturesGridComponent } from './animals-pictures-grid/animals-pictures-grid.component';


@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalComponent,
    AnimalsPicturesGridComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule
  ]
})
export class AnimalsModule { }
