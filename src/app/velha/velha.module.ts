import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VelhaComponent } from './velha.component';

@NgModule({
  declarations: [VelhaComponent],
  imports: [
    CommonModule
  ],
  exports: [VelhaComponent]
})
export class VelhaModule { }