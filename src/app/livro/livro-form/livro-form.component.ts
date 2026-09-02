import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { LivroService } from '../livro.service';
import { Toast } from '../../utils/toast.util';
import { formataErro } from '../../utils/error.util';
import { NgSelectModule } from '@ng-select/ng-select';
import { GeneroService } from '../../genero/genero.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgSelectModule,
  ],
  styleUrls: ['./livro-form.component.scss']
})

export class LivroFormComponent {
  listaGeneros: any[] = [];
  livro: any = { titulo: '', autor: '', generosIds: [] }

  constructor(
    private livroService: LivroService,
    private generoService: GeneroService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.carregarGeneros()
  }

  carregarGeneros(): void {
    this.generoService.listarTodos().subscribe({
      next: (dados) => this.listaGeneros = dados,
      error: (erro) => {
       const mensagemFormatada = formataErro(erro);
        Toast.fire({
          icon: 'error',
          title: 'Não foi possível salvar!',
          html: mensagemFormatada 
        });
        console.log(erro)
      }
    });
  }

  criarNovoGenero = (nome: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      const novoGenero = { nome: nome }

      this.generoService.salvar(novoGenero).subscribe({
        next: (genero) => {
          Toast.fire({ icon: 'success', title: 'Gênero criado!' })
          
          this.listaGeneros = [...this.listaGeneros, genero]
          
          resolve(genero)
        },
        error: (erro) => {
          const mensagemFormatada = formataErro(erro);
          Toast.fire({ 
            icon: 'error', 
            title: 'Falha ao criar gênero', 
            html: mensagemFormatada
          })
          reject()
      }});
    });
  }

  salvarLivro(): void {
   this.livroService.salvar(this.livro).subscribe({
      next: () => {
        Toast.fire({
          icon: 'success',
          title: 'Livro salvo com sucesso!'
        });
        
        this.router.navigate(['/']);
      },
      error: (erro) => {
        console.error('Erro ao salvar livro', erro);

        const mensagemFormatada = formataErro(erro);

        Toast.fire({
          icon: 'error',
          title: 'Não foi possível salvar!',
          html: mensagemFormatada 
        });
      }
    });
  }
}