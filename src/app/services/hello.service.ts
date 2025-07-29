import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../api-url';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HelloService {
  constructor(private http: HttpClient) {}

  getHello(): Observable<string> {
    return this.http.get(`${API_URL}/hello`, { responseType: 'text' });
  }
}
