import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SeriesComponent } from './pages/series/series.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ListComponent } from './pages/list/list.component';
import { BrowseComponent } from './pages/browse/browse.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'browse',
        component: BrowseComponent
      },
      {
        path: 'series',
        component: SeriesComponent
      },
      {
        path: 'movies',
        component: MoviesComponent
      },
      {
        path: 'my-list',
        component: ListComponent
      },
      {
        path: '**',
        redirectTo: 'browse'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetflixRoutingModule { }
