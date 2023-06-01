import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlluserService {
  alluser_url = 'http://localhost:3000/user/AllUsers';

  constructor(private http: HttpClient) {}

  getAllUserRecords(): Observable<any> {
    return this.http.get<any>(this.alluser_url);
  }
}
