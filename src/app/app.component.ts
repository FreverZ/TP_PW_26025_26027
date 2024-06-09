import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent {
  title = 'TP_PW_26025_26027';

  showData($event: any) {
    console.log("Button clicked!");
    if ($event) {
      console.log($event.target);
      console.log
    }
  }
}