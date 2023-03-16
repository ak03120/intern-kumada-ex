import { Component, NgModule } from '@angular/core';
import { Book } from 'src/app/types/book';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  cbook: Book = {name: '', detail: '', evaluation: 0};
  bookList: Book[] = [
    { name: 'アンドロイドは電気羊の夢を見るか?', detail: '第三次大戦後の未来、サンフランシスコを舞台に賞金稼ぎのリック・デッカードが火星から逃亡してきた8体のアンドロイドを「処理」するというあらすじ', evaluation: 90 },
    { name: '岩田さん: 岩田聡はこんなことを話していた。', detail: '任天堂の元社長、岩田聡さんのことばをまとめた本', evaluation: 90 }
  ];
  onAdd(): void {
    this.bookList.push({name: this.cbook.name, detail: this.cbook.detail, evaluation: this.cbook.evaluation});
  }
}