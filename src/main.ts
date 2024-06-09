import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Correct import path

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
