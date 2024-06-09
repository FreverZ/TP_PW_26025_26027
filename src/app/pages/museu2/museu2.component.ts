import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-museu2',
  templateUrl: './museu2.component.html',
  styleUrls: ['./museu2.component.css']
})
export class Museu2Component {
  raw4wof: string = `<a href="https://example.com" target="_blank">Example</a>`;
}
@NgModule({
  declarations: [Museu2Component],
  imports: [],
  exports: [Museu2Component]
})
export class Museu2Module {}
