import { Component } from '@angular/core';
import { MovieList } from './models/movie-list.model';
import { OmdbService } from './services/omdb.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  movies: MovieList | undefined;

  constructor(private omdb: OmdbService) {}

  search(name: string) {
    this.omdb.searchByName(name).subscribe((data) => {
      this.movies = data;
    });
  }
}
