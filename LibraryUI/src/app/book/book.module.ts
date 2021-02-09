import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BookService } from "../services/book.service";
import { SharedModule } from '../shared/shared.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book/book.component';
import { BookcategoryComponent } from "./bookcategory/bookcategory.component";
import { BookCategorylistComponent } from './bookcategorylist/bookcategorylist.component';


@NgModule({
  declarations: [BookComponent,  BookcategoryComponent, BookListComponent, BookCategorylistComponent],
  imports: [
    CommonModule,
    SharedModule,
    BookRoutingModule,
    MatTableModule,
    MatSortModule
  ],
  providers:[
    BookService
  ]
})
export class BookModule { }
