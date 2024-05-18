import { Component, Input } from '@angular/core';
import { ResumedMovie } from 'src/app/modules/movie/models/resumed-movie.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  delay: number = 0;
  @Input() movie: ResumedMovie | undefined;
  @Input() set index(value: number) {
    this.delay = (value + 1) * 100;
  }

}
