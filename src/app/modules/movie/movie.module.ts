import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { DetailsComponent } from './views/details/details.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    MovieComponent,
    DetailsComponent,
    ListComponent,
    ListItemComponent,
    TitleComponent,
  ],
  imports: [CommonModule, MovieRoutingModule, SharedModule],
})
export class MovieModule {}
