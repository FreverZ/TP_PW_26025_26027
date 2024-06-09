import { Component, Input } from '@angular/core';

@Component({
  selector: 'solid-button',
  templateUrl: './solid-button/solid-button.component.html', // Caminho corrigido
  styleUrls: ['./solid-button/solid-button.component.css'] // Caminho corrigido
})
export class SolidButtonComponent {
  @Input() button: string = '';
}
