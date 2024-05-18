import { Component, Input } from '@angular/core';
import { ResumedMovie } from 'src/app/modules/movie/models/resumed-movie.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  movies: ResumedMovie[] = [];

  @Input() set data(value: ResumedMovie[]) {
    this.movies = value;
  }
}
