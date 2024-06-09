import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Hero } from './hero/hero.component'
import { Stats } from './stats/stats.component'
import { Description } from './description/description.component'
import { SolidButton } from './solid-button/solid-button.component'
import { OutlineButton } from './outline-button/outline-button.component'
import { PlaceCard } from './place-card/place-card.component'
import { Gallery } from './gallery/gallery.component'
import { Reviews } from './reviews/reviews.component'
import { Pricing } from './pricing/pricing.component'
import { Contact } from './contact/contact.component'
import { SignIn } from './sign-in/sign-in.component'
import { Register1 } from './register1/register1.component'

@NgModule({
  declarations: [
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
    Register1,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
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
    Register1,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
