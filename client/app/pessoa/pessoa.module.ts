import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaComponent } from './pessoa.component';
import { FiltroPorTitulo} from './pessoa.pipes';
import { PessoaService } from './pessoa.service';

@NgModule({
  declarations: [ PessoaComponent, FiltroPorTitulo ],
  exports: [PessoaComponent, FiltroPorTitulo  ],
  providers: [ PessoaService ]
})
export class PessoaModule { }