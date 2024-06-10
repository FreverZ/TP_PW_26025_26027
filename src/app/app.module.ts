import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

// Importando componentes
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { Register1Component } from './components/register1/register1.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { Museu1Component } from './pages/museu1/museu1.component';
import { Museu2Component } from './pages/museu2/museu2.component';
import { Museu3Component } from './pages/museu3/museu3.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    Register1Component,
    GalleryComponent,
    PricingComponent,
    ReviewsComponent,
    Museu1Component,
    Museu2Component,
    Museu3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
