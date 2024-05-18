import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Subscription } from 'rxjs';
import { ExpandedMovie } from '../../models/expanded-movie.model';
import { OmdbService } from '../../services/omdb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  movie: ExpandedMovie | undefined;
  subscription: Subscription | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private omdb: OmdbService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') ?? '';

    this.subscription = this.omdb
      .searchById(id)
      .subscribe((data) => (this.movie = data));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  closeModal() {
    this.router.navigate(['']);
  }
}
