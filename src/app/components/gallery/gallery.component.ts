import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css'],
})
export class Gallery {
  @Input()
  image3Alt: string = 'PlaceholderImage1302'
  @Input()
  image3Src: string =
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=900'
  @Input()
  heading1: string = 'Photo Gallery'
  @Input()
  image1Alt: string = 'PlaceholderImage1302'
  @Input()
  image4Alt: string = 'PlaceholderImage1302'
  @Input()
  image2Src: string =
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=900'
  @Input()
  image4Src: string =
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=900'
  @Input()
  image2Alt: string = 'PlaceholderImage1302'
  @Input()
  content1: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=900'
  constructor() {}
}
