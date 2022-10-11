import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  $titleName: HTMLElement = document.getElementById('title-name') || new HTMLElement;

  constructor() { }

  ngOnInit(): void {
    this.$titleName.textContent = localStorage.getItem('page-name');
  }

}
