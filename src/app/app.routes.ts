import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { Register1Component } from './components/register1/register1.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { Museu1Component } from './pages/museu1/museu1.component';
import { Museu2Component } from './pages/museu2/museu2.component';
import { Museu3Component } from './pages/museu3/museu3.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'register', component: Register1Component },
  { path: 'login', component: LoginComponent },
  { path: 'museu1', component: Museu1Component },
  { path: 'museu2', component: Museu2Component },
  { path: 'museu3', component: Museu3Component },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
