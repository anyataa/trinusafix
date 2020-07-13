import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trinusa';

  ngxScrollToDuration: number;
  constructor() {
    this.ngxScrollToDuration = 100;
  }

  // add navItem in navbar
  navItem= [['profile', 'About Us'],
            ['products', 'Products'] ,
            ['service', 'Service' ],
            ['contact', 'Contact']]
            
}
