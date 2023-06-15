import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private basePath = 'https://localhost:44326/api/book';
  constructor(private http: HttpClient) { }


  public getBook(): Observable<any>{
    return this.http.get(this.basePath);
  }
}
