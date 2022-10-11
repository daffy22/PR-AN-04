import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Search } from '../../interfaces/movie';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styles: [
  ]
})
export class BrowseComponent implements OnInit {

  myList!: Search[];

  constructor( private movieService: MovieService ) { }

  ngOnInit(): void {
    this.movieService.getMovieByTitle()
    .subscribe( resp => {
      const { Search } = resp;
      this.myList = Search;
    });
  }

}
