import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Museu3Component } from './museu3.component';

const routes: Routes = [
  {
    path: '',
    component: Museu3Component
  }
];

@NgModule({
  declarations: [Museu3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [Museu3Component],
})
export class Museu3Module { }
