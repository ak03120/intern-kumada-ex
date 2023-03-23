import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.scss']
})

export class DeleteMessageComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

}
