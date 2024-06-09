import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Museu2Component } from './museu2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Museu2Component],
  imports: [CommonModule, SharedModule],
  exports: [Museu2Component]
})
export class Museu2Module { }
