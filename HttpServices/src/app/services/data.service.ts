import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
// base service
export class DataService<T> {
  constructor(
    // make url injectable to pass it from other services
    @Inject(String) private configURL: string,
    private http: HttpClient
  ) {}
  // user
  get(): Observable<T> {
    return this.http.get<T>(this.configURL);
  }
  // userDetails
  getById(id: number): Observable<T> {
    return this.http.get<T>(this.configURL + `/${id}`);
  }
}
