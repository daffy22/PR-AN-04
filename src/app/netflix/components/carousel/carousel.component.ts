import { Component, Input, OnInit } from '@angular/core';
import { Search } from '../../interfaces/movie';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: [
  ]
})
export class CarouselComponent implements OnInit {

  @Input() id!: string;
  @Input('name') sectionName!: string;
  @Input() items!: Search[];
  dataName: string = '';

  constructor() { }

  ngOnInit(): void {
    this.dataName = `#${ this.sectionName }`;
  }

}
