import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Museu3Component } from './museu3.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Museu3Component],
  imports: [CommonModule, SharedModule],
  exports: [Museu3Component]
})
export class Museu3Module { }
