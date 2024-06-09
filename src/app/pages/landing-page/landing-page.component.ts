import { Component } from '@angular/core';
import { SolidButton } from '../../components/solid-button/solid-button.component'; // Import SolidButton
import { Hero } from 'src/app/components/hero/hero.component';
import { OutlineButton } from 'src/app/components/outline-button/outline-button.component';
import { PlaceCard } from 'src/app/components/place-card/place-card.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  rawu9qv: string = '<a href="https://example.com" target="_blank">Example</a>';

  constructor() {}
}
