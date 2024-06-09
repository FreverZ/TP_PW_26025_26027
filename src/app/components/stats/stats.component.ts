import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-stats',
  templateUrl: 'stats.component.html',
  styleUrls: ['stats.component.css'],
})
export class Stats {
  @Input()
  stat2: string = '44%'
  @Input()
  stat1: string = '99%'
  @Input()
  stat3Description: string = 'Customer satisfaction'
  @Input()
  stat2Description: string = 'Active users'
  @Input()
  stat1Description: string = 'Customer satisfaction'
  @Input()
  stat3: string = '99%'
  @Input()
  heading1: string = 'Business value of teleportHQ'
  constructor() {}
}
