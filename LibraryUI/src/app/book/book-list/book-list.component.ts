import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['title', 'bookid', 'authorname'];
  public bookdatasource = new MatTableDataSource();
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(public bookserv: BookService) { }

  ngOnInit(): void {
    this.bookdatasource.data = this.bookserv.getall();
  }

  ngAfterViewInit(): void {
    this.bookdatasource.sort = this.sort;

  }


}
