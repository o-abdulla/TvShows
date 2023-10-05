import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Show } from '../models/show';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetShows(): Observable<Show[]>{
    return this.http.get<Show[]>(`${this.baseUrl}shows/getShows`);
  }

  GetShowById(id:number): Observable<Show>{
    return this.http.get<Show>(`${this.baseUrl}shows/getShows/${id}`);
  }
}
