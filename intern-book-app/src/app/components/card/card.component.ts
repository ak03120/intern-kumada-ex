import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() book?: Book;
  @Output() deleteCardEvent = new EventEmitter<number>();

  deleteCard(id: number) {
    this.deleteCardEvent.emit(id);
  }
}
