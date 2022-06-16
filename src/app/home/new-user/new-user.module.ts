import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NewUserRouting } from './new-user-routing.module';



@NgModule({
  declarations: [
    NewUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NewUserRouting,
    SharedModule
  ]
})
export class NewUserModule { }
