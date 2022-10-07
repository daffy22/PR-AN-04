import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _apiKey: string = environment.apiKey;
  private _baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getMovieByTitle(title: string = 'abc') {
    const url: string = ` ${ this._baseUrl }`;

    const params = new HttpParams()
            .set('apiKey', this._apiKey)
            .set('s', title);

    return this.http.get<Movie>(url, { params });
  }
}
