import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-register1',
  templateUrl: 'register1.component.html',
  styleUrls: ['register1.component.css'],
})
export class Register1 {
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1499711860525-c485eb341d5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxzaWduJTIwdXB8ZW58MHx8fHwxNzEyOTI5MDYzfDA&ixlib=rb-4.0.3&w=600'
  @Input()
  heading1: string = 'Welcome to TeleportHQ'
  @Input()
  content1: string =
    'I want to receive emails about the product, events, and marketing promotions.'
  @Input()
  action1: string = 'Create an account'
  @Input()
  image1Alt: string = 'SignUp Image'
  raw2c3b: string = ' '
  rawulw9: string = ' '
  constructor() {}
}
