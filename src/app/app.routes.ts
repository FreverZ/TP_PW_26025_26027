import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { Register1Component } from './components/register1/register1.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { MuseumComponent } from './components/museum/museum.component'; // Update with actual museum component

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'register', component: Register1Component },
  { path: 'museums', component: MuseumComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
