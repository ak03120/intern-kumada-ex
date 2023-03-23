import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Book } from 'src/app/types/book';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteMessageComponent } from 'src/app/delete-message/delete-message.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() book?: Book;
  @Output() deleteCardEvent = new EventEmitter<number>();
  bookId: number = 0;

  constructor(private dialog:MatDialog){
  }

  deleteCard(id: number) {
    this.deleteCardEvent.emit(id);
  }

  deleteDialog(targetBook: Book) {
    this.dialog
    .open(DeleteMessageComponent, {data: targetBook})
    .afterClosed()
    .subscribe(result => {
      if(result == "1") this.deleteCard(targetBook.id);
    });
  }
}
