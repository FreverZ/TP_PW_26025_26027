import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Museu1Component } from './museu1.component';

const routes: Routes = [
  {
    path: '',
    component: Museu1Component
  }
];

@NgModule({
  declarations: [Museu1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [Museu1Component]
})
export class Museu1Module { }
