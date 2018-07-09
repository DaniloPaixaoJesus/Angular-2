import {map, startWith} from 'rxjs/operators';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpClientModule } from '@angular/common/http'

import { PainelModule } from './painel/painel.module';
import { CadastroComponent }   from './cadastro/cadastro.component';
import { ListagemComponent }   from './listagem/listagem.component';

import {PessoaModule} from './pessoa/pessoa.module'
import {PessoaComponent} from './pessoa/pessoa.component';
import {PessoaListagemComponent} from './pessoa/listagem/pessoa.listagem.component';
import {PessoaCadastroComponent} from './pessoa/cadastro/pessoa.cadastro.component';
import { routing } from './app.routes';

//model-driven form validation ReactiveFormsModule 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, 
                  FotoModule, 
                  HttpClientModule, 
                  PainelModule, 
                  routing, 
                  FormsModule, 
                  ReactiveFormsModule,
                  PessoaModule],
  declarations: [ AppComponent, 
                  CadastroComponent,                   
                  ListagemComponent,
                  PessoaListagemComponent,
                  PessoaCadastroComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }