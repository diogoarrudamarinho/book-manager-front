import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { LivroService } from '../livro.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  standalone: true,
  imports: [FormsModule] 
})

export class LivroFormComponent {

  livro: Livro = {
    id: 0,
    titulo: '',
    autor: '',
    lido: false,
    emprestado: false,
    imageurl: ''
  };

  constructor(
    private livroService: LivroService,
    private router: Router
  ) {}

  salvarLivro(): void {
    this.livroService.salvar(this.livro).subscribe({
      next: () => {
        alert('Livro salvo com sucesso!');
        this.router.navigate(['/']);
      },
      error: (erro) => console.error('Erro ao salvar livro', erro)
    });
  }
}