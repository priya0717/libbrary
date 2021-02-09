import { Injectable } from '@angular/core';
import { BookCategoryModel } from '../models/bookcategorymodel';


@Injectable({
  providedIn: 'root'
})
export class BookCategoryService {

  public categories= [
    new BookCategoryModel().fill({ bookcategoryid: 1, bookcategoryname: 'testbook0', edit:"edit", delete:"deleted" }),
    new BookCategoryModel().fill({ bookcategoryid: 1, bookcategoryname: 'testbook0', edit:"edit", delete:"deleted" }),
    new BookCategoryModel().fill({ bookcategoryid: 1, bookcategoryname: 'testbook0', edit:"edit", delete:"deleted" }),
    new BookCategoryModel().fill({ bookcategoryid: 1, bookcategoryname: 'testbook0', edit:"edit", delete:"deleted" }),
    new BookCategoryModel().fill({ bookcategoryid: 1, bookcategoryname: 'testbook0', edit:"edit", delete:"deleted" }),
    new BookCategoryModel().fill({ bookcategoryid: 1, bookcategoryname: 'testbook0', edit:"edit", delete:"deleted" })
  ];

  constructor() { }

  getall() {
    return this.categories;
  }

  addBookcategory(bookcategory: BookCategoryModel) {
    this.categories.push(bookcategory);
  }

  updatebookcategory(bookcategory: BookCategoryModel, bookcategoryid: number) {
    this.categories.forEach((element, index) => {
      if (element.bookcategoryid === bookcategoryid) {
        this.categories[index] = bookcategory;
      }
    });
  }

  deleteBook(bookcategory: BookCategoryModel) {
    let idx = this.categories.indexOf(bookcategory);
    this.categories.splice(idx, 1);
  }

}
