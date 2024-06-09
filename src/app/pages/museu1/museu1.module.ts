import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Museu1Component } from './museu1.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Museu1Component],
  imports: [CommonModule, SharedModule],
  exports: [Museu1Component]
})
export class Museu1Module { }
