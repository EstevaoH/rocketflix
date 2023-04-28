import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Filme } from '../interface/filme';

const API_URL = environment.API;
const API_KEY = environment.API_KEY;
@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  constructor(private http: HttpClient) {}

  public get_filme(id: number): Observable<Filme> {
    return this.http.get<Filme>(`${API_URL}${id}${API_KEY}`);
  }
}
