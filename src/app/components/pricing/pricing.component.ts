import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-pricing',
  templateUrl: 'pricing.component.html',
  styleUrls: ['pricing.component.css'],
})
export class Pricing {
  @Input()
  plan1Feature3: string = 'Feature text goes here'
  @Input()
  heading1: string = 'Pricing plan'
  @Input()
  plan1: string = 'Basic plan'
  @Input()
  plan1Feature5: string = 'Feature text goes here'
  @Input()
  plan1Price: string = '$20/mo'
  @Input()
  plan1Feature2: string = 'Feature text goes here'
  @Input()
  plan1Detail: string = 'Lorem ipsum dolor sit amet'
  @Input()
  content2: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  @Input()
  plan1Action: string = 'Get started'
  @Input()
  plan1Feature4: string = 'Feature text goes here'
  @Input()
  plan1Yearly: string = 'or $200 yearly'
  @Input()
  content1: string = 'Affordable Pricing Plans to Get You Started'
  @Input()
  plan1Feature1: string = 'Feature text goes here'
  @Input()
  imageSrc: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  imageAlt: string = 'image'
  @Input()
  imageSrc1: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  imageAlt1: string = 'image'
  constructor() {}
}
