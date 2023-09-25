import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AdminloginService {
 private Url = `${environment.userService}/api/`;
  private apiurl = this.Url + 'adminsauth/';
  constructor(private http: HttpClient) {}
  login(body: any) {
    console.log(body);
    return this.http.post(this.apiurl + 'adminlogin', body, {
      observe: 'body',
    });
  }
}
