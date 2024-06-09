import { Component, Input } from '@angular/core';

@Component({
  selector: 'solid-button',
  template: `<button class="solid-button">{{button}}</button>`,
  styleUrls: ['./solid-button.component.css']
})
export class SolidButtonComponent {
  @Input() button: string = '';
}
