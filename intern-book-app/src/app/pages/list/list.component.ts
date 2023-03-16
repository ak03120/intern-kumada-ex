import { Component, NgModule } from '@angular/core';
import { Book } from 'src/app/types/book';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  cbook: Book = {id: 0, name: '', detail: '', evaluation: 0};
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
      id: this.bookList.length,
      name: this.cbook.name,
      detail: this.cbook.detail,
      evaluation: this.cbook.evaluation
    });
  }
  onDelete(id: number): void {
    this.bookList = this.bookList.filter((item) => item.id !== id);

  }
}
