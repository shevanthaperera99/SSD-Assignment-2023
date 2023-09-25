import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IssuebooksService {
 private Url = `${environment.userService}/api/`;
  constructor(private http: HttpClient) {}
  getAllIssues() {
    return this.http.get(this.Url + 'issuebooks');
  }
  deleteOneIssue(id: any) {
    return this.http.delete(this.Url + 'issuebooks/' + id);
  }
}
