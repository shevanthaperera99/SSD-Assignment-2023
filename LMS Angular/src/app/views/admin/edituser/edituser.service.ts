import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EdituserService {
 private Url = `${environment.userService}/api/`;
  private apiurl = this.Url + 'admins/';
  constructor(private http: HttpClient) {}

  getUser(id: any) {
    return this.http.get(this.apiurl + 'users/' + id);
  }

  editUser(id: any, body: any) {
    return this.http.put(this.apiurl + 'users/' + id, body);
  }
}
