import {RouterModule, Routes} from '@angular/router';
import {ListagemComponent} from './listagem/listagem.component';
import {CadastroComponent} from './cadastro/cadastro.component';

import {PessoaListagemComponent} from './pessoa/listagem/pessoa.listagem.component';
import {PessoaCadastroComponent} from './pessoa/cadastro/pessoa.cadastro.component';


const appRoutes: Routes  = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro/:id', component: CadastroComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'pessoa', component: PessoaListagemComponent },
    { path: 'pessoa/cadastro', component: PessoaCadastroComponent },
    { path: 'pessoa/cadastro/:id', component: PessoaCadastroComponent },
    { path: '**', redirectTo: ''}    
  ];
  export const routing = RouterModule.forRoot(appRoutes);