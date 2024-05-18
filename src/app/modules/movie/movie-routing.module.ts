import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie.component';
import { DetailsComponent } from './views/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: MovieComponent,
    children: [
      {
        path: 'movie/:id',
        component: DetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
