import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // TODO: implements type search method http://www.omdbapi.com/?apiKey=84e2c97c&s=abc&type=movie

  private _apiKey: string = environment.apiKey;
  private _baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getMovieByTitle(title: string = 'abc') {
    const url: string = `${ this._baseUrl }`;

    const params = new HttpParams()
            .set('apiKey', this._apiKey)
            .set('s', title);

    return this.http.get<Movie>(url, { params });
  }

  getMovieByTitleAndType(title: string = 'abc', type: string = 'movie') {
    const url: string = `${ this._baseUrl }`;

    const params = new HttpParams()
            .set('apiKey', this._apiKey)
            .set('s', title)
            .set('type', type);

    return this.http.get<Movie>(url, { params });
  }
}
