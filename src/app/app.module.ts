import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes'; // Certifique-se de usar o nome correto aqui
import { SharedModule } from './pages/shared/shared.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Museu1Component } from './pages/museu1/museu1.component';
import { Museu2Component } from './pages/museu2/museu2.component';
import { Museu3Component } from './pages/museu3/museu3.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    Museu1Component,
    Museu2Component,
    Museu3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
