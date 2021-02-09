import { Injectable } from '@angular/core';
import { BookModel } from '../models/bookmodel';



@Injectable({
  providedIn: 'root'
})
export class BookService {

  public books = [
    new BookModel().fill({ bookid: 1, title: 'testbook0', authorname: 'test', location: 'shelf 2', description: 'book description' }),
    new BookModel().fill({ bookid: 2, title: 'testbook1', authorname: 'test', location: 'shelf 2', description: 'book description' }),
    new BookModel().fill({ bookid: 3, title: 'testbook2', authorname: 'test', location: 'shelf 2', description: 'book description' }),
    new BookModel().fill({ bookid: 4, title: 'testbook3', authorname: 'test', location: 'shelf 2', description: 'book description' }),
    new BookModel().fill({ bookid: 5, title: 'testbook4', authorname: 'test', location: 'shelf 2', description: 'book description' })
  ];

  constructor() { }

  getall() {
    return this.books;
  }

  addBook(book: BookModel) {
    this.books.push(book);
  }

  updatebook(book: BookModel, bookid: number) {
    this.books.forEach((element, index) => {
      if (element.bookid === bookid) {
        this.books[index] = book;
      }
    });
  }

  deleteBook(book: BookModel) {
    let idx = this.books.indexOf(book);
    this.books.splice(idx, 1);
  }

}
