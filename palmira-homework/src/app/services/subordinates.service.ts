import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subordinate } from 'src/models/subordinate.model';
import { API_URL } from 'src/settings/settings';

@Injectable({
  providedIn: 'root'
})
export class SubordinatesService {

  constructor(private http: HttpClient) { }

  fetchSubordinatesService(){
    return this.http.post<any>(`${API_URL}subordinates.php`, {});
  }
}
