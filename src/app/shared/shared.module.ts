import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModule } from '../component/message/message.module';
import { ReactiveFormsModule } from '@angular/forms';


//This module has only one goal, to agroup modules that are used multiple times in different other modules.
//For example: MessageModule and ReactiveFormsModule
@NgModule({
  imports: [
    CommonModule,
    MessageModule,
    ReactiveFormsModule
  ],
  exports: [
    MessageModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
