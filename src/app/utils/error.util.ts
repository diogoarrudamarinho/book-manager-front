import { HttpErrorResponse } from '@angular/common/http';

export function formataErro(erro: HttpErrorResponse): string {
  if (erro.error && Array.isArray(erro.error)) 
    return erro.error.join('<br>');

  if(erro.error.message && Array.isArray(erro.error.message))
    return erro.error.message.join('<br>')
  
  if (erro.error && typeof erro.error === 'string') 
    return erro.error;

  return 'Ocorreu um erro inesperado no servidor.';
}