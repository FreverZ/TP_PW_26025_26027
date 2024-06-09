import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceCardComponent } from './place-card/place-card.component';
import { SolidButtonComponent } from './solid-button/solid-button.component';

@NgModule({
  declarations: [
    PlaceCardComponent,
    SolidButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlaceCardComponent,
    SolidButtonComponent
  ]
})
export class SharedModule { }
