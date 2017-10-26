import {RouterModule, Routes} from '@angular/router'
import {ListagemComponent} from './listagem/listagem.component';
import {CadastroComponent} from './cadastro/cadastro.component'
import {CadastroComponent1} from './cadastro1/cadastro1.component'


const appRoutes: Routes  = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'cadastro1', component: CadastroComponent1 },
    { path: '**', redirectTo: ''}
  ];
  export const routing = RouterModule.forRoot(appRoutes);