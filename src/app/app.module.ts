import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { Hero } from './components/hero/hero.component';
import { Stats } from './components/stats/stats.component';
import { Description } from './components/description/description.component';
import { SolidButton } from './components/solid-button/solid-button.component';
import { OutlineButton } from './components/outline-button/outline-button.component';
import { PlaceCard } from './components/place-card/place-card.component';
import { Gallery } from './components/gallery/gallery.component';
import { Reviews } from './components/reviews/reviews.component';
import { Pricing } from './components/pricing/pricing.component';
import { Contact } from './components/contact/contact.component';
import { SignIn } from './components/sign-in/sign-in.component';
import { Register1 } from './components/register1/register1.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    Museu1Component,
    Museu2Component,
    Museu3Component,
    Hero,
    Stats,
    Description,
    SolidButton,
    OutlineButton,
    PlaceCard,
    Gallery,
    Reviews,
    Pricing,
    Contact,
    SignIn,
    Register1
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
