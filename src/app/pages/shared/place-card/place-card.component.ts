import { Component, Input } from '@angular/core';

@Component({
  selector: 'place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent {
  @Input() image: string;
  @Input() city: string;
  @Input() description: string;
}
