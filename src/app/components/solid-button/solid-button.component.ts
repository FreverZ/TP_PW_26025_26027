import { Component, Input } from '@angular/core';

@Component({
  selector: 'solid-button',
  templateUrl: './solid-button.component.html',
  styleUrls: ['./solid-button.component.css']
})
export class SolidButtonComponent {
  @Input() button: string;
  @Input() rootClassName: string;
}
