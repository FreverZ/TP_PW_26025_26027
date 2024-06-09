import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-reviews',
  templateUrl: 'reviews.component.html',
  styleUrls: ['reviews.component.css'],
})
export class Reviews {
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=1500'
  @Input()
  author3Alt: string = 'Author Avatar'
  @Input()
  author2: string = 'Author Name'
  @Input()
  author1Alt: string = 'Author Avatar'
  @Input()
  heading1: string = 'User Reviews'
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1500'
  @Input()
  author1Name: string = 'Author Name'
  @Input()
  author2Position: string = 'Position, Company name'
  @Input()
  author2Alt: string = 'Author Avatar'
  @Input()
  author3Position: string = 'Position, Company name'
  @Input()
  author1Position: string = 'Position, Company name'
  @Input()
  review2: string =
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
  @Input()
  review3: string =
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=1500'
  @Input()
  content1: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  @Input()
  author3: string = 'Author Name'
  @Input()
  review1: string =
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
