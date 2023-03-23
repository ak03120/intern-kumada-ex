import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Book } from 'src/app/types/book';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


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
    .open(DialogComponent, {data: targetBook})
    .afterClosed()
    .subscribe(result => {
      if(result == "1") this.deleteCard(targetBook.id);
    });
  }
}

@Component({
  selector: 'app-dialog',
  template: `
  <h2 mat-dialog-title>本を削除しますか？</h2>
  <mat-dialog-content>
    <p>{{data.name}}</p>
  </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button mat-dialog-close="0">キャンセル</button>
    <button mat-button color="warn" mat-dialog-close="1">削除</button>
  </mat-dialog-actions>
`
})

export class DialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

}
