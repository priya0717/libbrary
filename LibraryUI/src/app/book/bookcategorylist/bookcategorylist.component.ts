import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookCategoryModel } from "../../models/bookcategorymodel";
import { BookCategoryService } from "../../services/book-category.service";

@Component({
  selector: 'app-bookcategorylist',
  templateUrl: './bookcategorylist.component.html',
  styleUrls: ['./bookcategorylist.component.css']
})

export class BookCategorylistComponent  implements OnInit {
  public displayedColumns: string[] = [ 'bookcategoryid',  'bookcategoryname', 'edit', 'delete'];
  public bookdatasource: MatTableDataSource<BookCategoryModel>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public bookserv: BookCategoryService) {

  }

  ngOnInit(): void {
    this.bookdatasource= new MatTableDataSource(this.bookserv.getall());
    this.bookdatasource.sort = this.sort;
  }

}
