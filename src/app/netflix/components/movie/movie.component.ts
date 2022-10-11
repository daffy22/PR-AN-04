import { Component, Input, OnInit } from '@angular/core';
import { Search, Type } from '../../interfaces/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [
    `
    img {
      height: 8.2rem;
      border: none;
      cursor: pointer;
    }
    `
  ]
})
export class MovieComponent implements OnInit {

  @Input() movie: Search = {
    Title: 'hello',
    Year: '2022',
    imdbID: '454',
    Type: Type.Game,
    Poster: '...'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
