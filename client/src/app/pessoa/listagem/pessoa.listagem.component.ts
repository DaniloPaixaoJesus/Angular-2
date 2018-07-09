import { Component, Inject } from '@angular/core';
import {PessoaComponent} from '../pessoa.component';   
import {PessoaService} from '../pessoa.service';

@Component({
    selector: 'listagem-pessoa',
    templateUrl: './pessoa.listagem.component.html',
    styleUrls: ['./pessoa.listagem.componente.css']
})
export class PessoaListagemComponent {

    pessoas: PessoaComponent[] = [];
    service: PessoaService;
    mensagem: string = '';

    constructor(service:PessoaService) {
        this.service = service;
        /*service.lista()
            .subscribe(
                pessoas=>{
                    console.log('fotos consultadas com sucesso');
                    this.pessoas = pessoas;
                },
                erro=> console.error(erro)
            );*/
    }

    remove(foto: PessoaComponent): void {
        console.log(foto.titulo);
        /*this.service.remove(foto)
        .subscribe(
            pessoas => {
            console.log('Foto removida com sucesso');
            let novasPessoas = this.pessoas.slice(0);
            let indice = novasPessoas.indexOf(foto);
            novasPessoas.splice(indice, 1);
            this.pessoas = novasPessoas;
            this.mensagem = 'Foto removida com sucesso';
           },
           erro => {
                console.log(erro);
                this.mensagem = 'Não foi possível remover a foto';
           });*/
    }
}