import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';


//Exports means who import HeaderModule, can use the HeaderComponent
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MenuModule],
  exports: [HeaderComponent] 
})
export class HeaderModule { }
