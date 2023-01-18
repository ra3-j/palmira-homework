import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/settings/settings';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  constructor(private http: HttpClient) {}

  signIn(form:any) {
    return this.http.post(`${API_URL}login.php`, form);
  }
}
