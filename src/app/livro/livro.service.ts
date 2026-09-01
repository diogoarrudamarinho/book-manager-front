import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})

export class LivroService {
  private apiUrl = 'http://localhost:8080/livros';

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl + '/all');
  }

  salvar(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.apiUrl, livro);
  }
}