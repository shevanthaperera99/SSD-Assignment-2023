import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UpdateissueService {
 private Url = `${environment.userService}/api/`;
  private apiurl = this.Url + 'issuebooks/';
  constructor(private http: HttpClient) {}
  getIssue(id: any) {
    return this.http.get(this.apiurl + id);
  }

  editIssue(id: any, body: any) {
    console.log('Return: ', body);
    return this.http.put(this.Url + 'librarians/fineentry/' + id, body);
  }
}
