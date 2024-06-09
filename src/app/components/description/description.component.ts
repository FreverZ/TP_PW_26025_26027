import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-description',
  templateUrl: 'description.component.html',
  styleUrls: ['description.component.css'],
})
export class Description {
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  @Input()
  card1Content: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  @Input()
  date1: string = '23/04/2023'
  @Input()
  card4Content: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  @Input()
  title1: string = 'Long heading going here'
  @Input()
  card4Heading: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  @Input()
  card1Heading: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  constructor() {}
}
