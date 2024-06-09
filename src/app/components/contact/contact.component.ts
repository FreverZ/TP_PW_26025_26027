import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
})
export class Contact {
  @Input()
  location2Details: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  location2: string = 'Cluj - Napoca'
  @Input()
  heading1: string = 'Contact Us'
  @Input()
  location1Details: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  location1: string = 'Bucharest'
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  location2GoogleMap: string =
    'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d87449.5721581957!2d23.6084223!3d46.7688557!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1713508390460!5m2!1sen!2sro'
  @Input()
  location1GoogleMap: string =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.77077631063!2d26.012237766112886!3d44.43779612993267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1713441854828!5m2!1sen!2sro'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
