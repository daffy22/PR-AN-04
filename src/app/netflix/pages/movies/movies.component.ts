import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Search } from '../../interfaces/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent implements OnInit {

  popular: Search[] = [];
  trends: Search[] = [];
  launches: Search[] = [];

  constructor( private movieService: MovieService ) { }

  ngOnInit(): void {
    this.getMoviesInfo();
  }

  getMoviesInfo() {
    this.movieService.getMovieByTitleAndType('avatar', 'movie')
      .subscribe( ({ Search }) => {
        this.popular = Search;
      });
    this.movieService.getMovieByTitleAndType('fast and furious', 'movie')
      .subscribe( ({ Search }) => {
        this.trends = Search;
      });
    this.movieService.getMovieByTitleAndType('All', 'movie')
      .subscribe( ({ Search }) => {
        this.launches = Search;
      });
  }
}
