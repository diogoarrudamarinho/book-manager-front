import { Routes } from '@angular/router';
import { LivroListaComponent } from './livro/livro-lista/livro-lista.component';
import { LivroFormComponent } from './livro/livro-form/livro-form.component';

export const routes: Routes = [
  { path: '', component: LivroListaComponent },
  { path: 'novo', component: LivroFormComponent }
];