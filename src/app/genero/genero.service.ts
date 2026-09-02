import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private readonly API_URL = 'http://localhost:8080/generos';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.API_URL);
  }

  salvar(genero: Genero): Observable<Genero> {
    return this.http.post<Genero>(this.API_URL, genero);
  }
}