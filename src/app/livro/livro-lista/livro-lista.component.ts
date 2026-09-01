import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LivroService } from '../livro.service';
import { Livro } from '../livro'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  standalone: true,
  imports: [RouterLink]
})
export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];

  constructor(
    private livroService: LivroService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros(): void {
    this.livroService.buscarTodos().subscribe({
      next: (data: Livro[]) => { 
        this.livros = data; 
        this.cdr.detectChanges(); 
      },
      error: (erro) => console.error('Erro:', erro)
    });
  }
}