import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { BookcategoryComponent } from './bookcategory/bookcategory.component';
import { BookCategorylistComponent } from './bookcategorylist/bookcategorylist.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: BookComponent },
      { path: 'category', component: BookcategoryComponent },
      { path: 'list', component: BookListComponent },
      { path: 'categorylist', component: BookCategorylistComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
