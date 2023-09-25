import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AddbookService {
 private Url = `${environment.userService}/api/`;
  private apiurl = this.Url + 'books/';
  constructor(private http: HttpClient) {}

  addBook(body: any) {
    return this.http.post(this.apiurl, body);
  }
}
