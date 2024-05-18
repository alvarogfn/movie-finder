import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpandedMovie } from '../models/expanded-movie.model';
import { MovieList } from '../models/movie-list.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  private URL = new URL('http://www.omdbapi.com/');

  constructor(private http: HttpClient) {
    const apikey = environment.apikey;
    this.URL.searchParams.append('apikey', apikey);
  }

  searchByName(name: string): Observable<MovieList> {
    const URLParams = new URL(this.URL.href);
    URLParams.searchParams.append('s', name);

    return this.http.get<MovieList>(URLParams.href);
  }

  searchById(id: string): Observable<ExpandedMovie> {
    const URLParams = new URL(this.URL.href);
    URLParams.searchParams.append('i', id);

    return this.http.get<ExpandedMovie>(URLParams.href);
  }
}
