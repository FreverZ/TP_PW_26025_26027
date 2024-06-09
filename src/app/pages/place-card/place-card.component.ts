import { Component, Input } from '@angular/core';

@Component({
  selector: 'place-card',
  template: `
    <div class="place-card">
      <img [src]="image" alt="{{city}}" />
      <h3>{{city}}</h3>
      <p>{{description}}</p>
    </div>
  `,
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent {
  @Input() city: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
}
