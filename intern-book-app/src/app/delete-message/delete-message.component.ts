import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-message',
  template: `
  <h2 mat-dialog-title>本を削除しますか？</h2>
  <mat-dialog-content>
    <p>{{data.name}}</p>
  </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button mat-dialog-close="0">キャンセル</button>
    <button mat-button color="warn" mat-dialog-close="1">削除</button>
  </mat-dialog-actions>
`,
  styleUrls: ['./delete-message.component.scss']
})

export class DeleteMessageComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

}
