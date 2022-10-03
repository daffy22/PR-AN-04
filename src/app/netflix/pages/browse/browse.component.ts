import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styles: [
  ]
})
export class BrowseComponent implements OnInit {

  movies: Movie[] = [];

  constructor( private movieService: MovieService ) { }

  ngOnInit(): void {
    this.movieService.getMovieByTitle('abc')
      .subscribe( resp => {
        this.movies = resp;
        console.log(this.movies);
      });
  }

}
