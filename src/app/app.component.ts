import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TP_PW_26025_26027';
  showData($event: any) {
    console.log("Button clicked!");
    if ($event) {
      console.log($event.target);
      console.log($event.target.innerHTML);
      $event.target.innerHTML = "Clicked!";
    }
  }

  moduleName: string = 'Students';
  studentName: string = "Xx_PedrinhoPvP_xX";
  myCSSClass: string = "myClass";
  applyCSSClass: boolean = true;
  fontCSSColor: string = "#d966ff";
  setStudentName(studentName: string) {
    this.studentName = studentName;
  }
}


