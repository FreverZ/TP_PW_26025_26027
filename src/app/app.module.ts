import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { LoginComponent } from './login/login.component'; // Import LoginComponent

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to the imports
    // No need to declare or import AppComponent here
  ],
  providers: [],
  bootstrap: [LoginComponent] // Bootstrap the LoginComponent if AppComponent is standalone
})
export class AppModule { }
