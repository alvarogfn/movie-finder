import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../movie/components/list/list.component';

@NgModule({
  declarations: [CardComponent, InputComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [CardComponent, InputComponent],
})
export class SharedModule {}
