import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddmultiplebooksService {
 private Url = `${environment.userService}/api/`;
  private apiurl = this.Url + 'librarians/';
  constructor(private http: HttpClient) { }
  addmultiplebooks(body: any){
    return this.http.post(this.apiurl + 'bulkupload', body);
  }
  addBook(body: any) {
    return this.http.post(this.Url + 'books/', body);
  }
}
