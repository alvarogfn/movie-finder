import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  constructor() {}
  input: string = '';
  @Output() output = new EventEmitter<string>();

  onSubmit(data: SubmitEvent) {
    data.preventDefault();
    this.output.emit(this.input);
  }
}
