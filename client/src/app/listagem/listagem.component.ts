import { Component, Inject } from '@angular/core';
import {FotoComponent} from '../foto/foto.component';   
import {FotoService} from '../foto/foto.service';

@Component({
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(service:FotoService) {
        this.service = service;
        /*service.lista()
            .subscribe(
                fotos=>{
                    console.log('fotos consultadas com sucesso');
                    this.fotos = fotos;
                },
                erro=> console.error(erro)
            );*/
    }

    remove(foto: FotoComponent): void {
        console.log(foto.titulo);
        /*this.service.remove(foto)
        .subscribe(
           fotos => {
            console.log('Foto removida com sucesso');
            let novasFotos = this.fotos.slice(0);
            let indice = novasFotos.indexOf(foto);
            novasFotos.splice(indice, 1);
            this.fotos = novasFotos;
            this.mensagem = 'Foto removida com sucesso';
           },
           erro => {
                console.log(erro);
                this.mensagem = 'Não foi possível remover a foto';
           });*/
    }
}