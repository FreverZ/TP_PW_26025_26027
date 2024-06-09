import { Component, Input } from '@angular/core'

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css'],
})
export class SignIn {
  @Input()
  heading2: string = 'Create an account'
  @Input()
  action1: string = 'Sign in'
  @Input()
  content2: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.'
  @Input()
  heading1: string = 'Sign in to your account'
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.'
  @Input()
  action2: string = 'Create an account'
  constructor() {}
}
