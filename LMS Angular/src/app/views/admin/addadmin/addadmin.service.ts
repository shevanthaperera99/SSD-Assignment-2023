import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AddadminService {
 private Url = `${environment.userService}/api/`;
  private apiurl = this.Url + 'admins/';
  constructor(private http: HttpClient) {}

  addAdmin(body: any) {
    return this.http.post(this.apiurl, body);
  }
}
