import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetflixRoutingModule } from './netflix-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SeriesComponent } from './pages/series/series.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ListComponent } from './pages/list/list.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { MovieComponent } from './components/movie/movie.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    SeriesComponent,
    MoviesComponent,
    ListComponent,
    BrowseComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    NetflixRoutingModule
  ]
})
export class NetflixModule { }
