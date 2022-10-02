import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styles: [
  ]
})
export class BrowseComponent implements OnInit {

  constructor( private movieService: MovieService ) { }

  ngOnInit(): void {
    this.movieService.getMovieByTitle('star')
      .subscribe( console.log );
  }

}
