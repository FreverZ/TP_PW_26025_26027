import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolidButtonComponent } from './solid-button/solid-button.component';
import { PlaceCardComponent } from './place-card/place-card.component';

@NgModule({
  declarations: [
    SolidButtonComponent,
    PlaceCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SolidButtonComponent,
    PlaceCardComponent
  ]
})
export class SharedModule { }
