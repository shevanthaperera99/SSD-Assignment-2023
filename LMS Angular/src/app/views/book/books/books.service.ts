import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class BooksService {
 private Url = `${environment.userService}/api/`;
  private apiurl = this.Url + 'books/';
  constructor(private http: HttpClient) {}
  getAllBooks() {
    return this.http.get(this.apiurl + 'allbooks');
  }
  deleteOneBook(id: any) {
    return this.http.delete(this.apiurl + id);
  }
  deleteMulBooks(delid: any) {
    return this.http.post(this.Url + 'librarians/bulkdelete', delid);
  }
}
