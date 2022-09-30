import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent implements OnInit {
  url: string = '';

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

  detectChangesRoute () {
    this.url = this.router.url;
    this.url = this.url.slice(1);
  }

}
