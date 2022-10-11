import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent implements OnInit {

  url: string = '';
  $titleName: HTMLElement = document.getElementById('title-name') || new HTMLElement;

  constructor(private router: Router) {
    router.events.subscribe( (_) => {
     this.detectChangesRoute();
    });
   }

  ngOnInit(): void {
    this.detectChangesRoute();
  }

  actualUrl(url: string): boolean {
    return this.url === url;
  }

  changePagesName(name: string) {
    this.$titleName.textContent = name;
    localStorage.setItem('page-name', name);
  }

  detectChangesRoute () {
    this.url = this.router.url.slice(1);
  }

}
