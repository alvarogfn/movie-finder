import { ResumedMovie } from './resumed-movie.model';

export interface MovieList {
  Search: ResumedMovie[];
  totalResults: number;
  Response: boolean;
}
