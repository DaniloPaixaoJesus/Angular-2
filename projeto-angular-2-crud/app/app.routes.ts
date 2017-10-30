import {RouterModule, Routes} from '@angular/router';
import {ListagemComponent} from './listagem/listagem.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {CadastroComponent1} from './cadastro1/cadastro1.component';

import {PessoaListagemComponent} from './pessoa/listagem/pessoa.listagem.component';
import {PessoaCadastroComponent} from './pessoa/cadastro/pessoa.cadastro.component';


const appRoutes: Routes  = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro/:id', component: CadastroComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'cadastro1', component: CadastroComponent1 },
    { path: 'pessoa', component: PessoaListagemComponent },
    { path: 'pessoa/cadastro', component: PessoaCadastroComponent },
    { path: 'pessoa/cadastro/:id', component: PessoaCadastroComponent },
    { path: '**', redirectTo: ''}    
  ];
  export const routing = RouterModule.forRoot(appRoutes);