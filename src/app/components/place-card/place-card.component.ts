import { Component, Input } from '@angular/core';

@Component({
  selector: 'place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent {
  @Input() image: string = 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000';
  @Input() imageAlt: string = 'image';
  @Input() city: string = 'city name';
  @Input() description: string = 'description of the city';
  @Input() button: string = 'Descobrir mais...';
}
