import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  ngxScrollToDuration: number;
  constructor() {
    this.ngxScrollToDuration = 100;
  }

  ngOnInit(): void {}
  // add navItem in navbar
  navItem = [
    ['profile', 'About Us'],
    ['products', 'Products'],
    ['service', 'Service'],
    ['contact', 'Contact'],
  ];
}
