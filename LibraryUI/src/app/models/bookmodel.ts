import { BaseModel } from "./basemodel";

export class BookModel extends BaseModel {
  public bookid: number;
  public title: string;
  public bookauthor: any;
  public location: string;
  public description: string;
  public categoryofbook: string;
}
