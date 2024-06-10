import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent {
  @Input() image: string;
  @Input() imageAlt: string;
  @Input() city: string;
  @Input() description: string;
}
