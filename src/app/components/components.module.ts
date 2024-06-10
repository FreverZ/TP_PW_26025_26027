import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroComponent } from './hero/hero.component';
import { PlaceCardComponent } from './place-card/place-card.component';
import { SolidButtonComponent } from './solid-button/solid-button.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OutlineButtonComponent } from './outline-button/outline-button.component';
import { ContactComponent } from './contact/contact.component';
import { DescriptionComponent } from './description/description.component';
import { PricingComponent } from './pricing/pricing.component';
import { RegisterComponent } from './register1/register1.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    HeroComponent,
    PlaceCardComponent,
    SolidButtonComponent,
    GalleryComponent,
    OutlineButtonComponent,
    ContactComponent,
    DescriptionComponent,
    PricingComponent,
    RegisterComponent,
    ReviewsComponent,
    SignInComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeroComponent,
    PlaceCardComponent,
    SolidButtonComponent,
    GalleryComponent,
    OutlineButtonComponent,
    ContactComponent,
    DescriptionComponent,
    PricingComponent,
    RegisterComponent,
    ReviewsComponent,
    SignInComponent,
    StatsComponent
  ]
})
export class ComponentsModule { }
