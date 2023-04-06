import { Component, NgModule } from '@angular/core';
import { Book } from 'src/app/types/book';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  constructor(private messageService: MessageService) {}
  cardBook: Book = {id: 0, name: '', detail: '', evaluation: 0};
  bookForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    detail: new FormControl('', Validators.required),
    evaluation: new FormControl('', [Validators.required, Validators.min(0)])
  });
  bookList: Book[] = [
    { id: 0, name: 'アンドロイドは電気羊の夢を見るか?', detail: '第三次大戦後の未来、サンフランシスコを舞台に賞金稼ぎのリック・デッカードが火星から逃亡してきた8体のアンドロイドを「処理」するというあらすじ', evaluation: 90 },
    { id: 1, name: '岩田さん1: 岩田聡はこんなことを話していた。', detail: '任天堂の元社長、岩田聡さんのことばをまとめた本', evaluation: 90 },
    { id: 2, name: '岩田さん2: 岩田聡はこんなことを話していた。', detail: '任天堂の元社長、岩田聡さんのことばをまとめた本', evaluation: 90 },
    { id: 3, name: '岩田さん3: 岩田聡はこんなことを話していた。', detail: '任天堂の元社長、岩田聡さんのことばをまとめた本', evaluation: 90 },
    { id: 4, name: '岩田さん4: 岩田聡はこんなことを話していた。', detail: '任天堂の元社長、岩田聡さんのことばをまとめた本', evaluation: 90 },
    { id: 5, name: '岩田さん5: 岩田聡はこんなことを話していた。', detail: '任天堂の元社長、岩田聡さんのことばをまとめた本', evaluation: 90 }
  ];
  onAdd(): void {
    this.bookList.push({
      id: this.bookList.length ? this.bookList[this.bookList.length-1].id+1 : 0,
      // this.bookList.lengthの場合ID被りが発生する。
      // this.bookList[this.bookList.length-1].id+1だけだと要素数0のときundefined
      name: this.bookForm.get("name")?.value,
      detail: this.bookForm.get("detail")?.value,
      evaluation: this.bookForm.get("evaluation")?.value
    });
    this.messageService.add(`${ListComponent.name}: 本「${this.cardBook.name}」を追加しました。`);
  }
  onDelete(id: number): void {
    this.bookList = this.bookList.filter((book) => book.id !== id);
  }
  validationCheck(): boolean {
    // 改行について中村さんから伝授していただきました
    return !this.cardBook.name || !this.cardBook.detail || this.cardBook.evaluation === null;
  }
}
