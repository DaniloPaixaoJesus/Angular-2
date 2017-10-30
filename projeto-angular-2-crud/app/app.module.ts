import 'rxjs/add/operator/map';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';

import { PainelModule } from './painel/painel.module';
import { CadastroComponent }   from './cadastro/cadastro.component';
import { CadastroComponent1 }   from './cadastro1/cadastro1.component';
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
                  HttpModule, 
                  PainelModule, 
                  routing, 
                  FormsModule, 
                  ReactiveFormsModule,
                  PessoaModule],
  declarations: [ AppComponent, 
                  CadastroComponent, 
                  CadastroComponent1, 
                  ListagemComponent,
                  PessoaListagemComponent,
                  PessoaCadastroComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }