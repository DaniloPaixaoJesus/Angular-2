import {Component} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {FotoComponent} from '../foto/foto.component';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector:'cadastro1',
    templateUrl: './cadastro1.component.html'
})
export class CadastroComponent1{
    
    foto: FotoComponent = new FotoComponent();
    http: Http;
    meuForm: FormGroup;

    constructor(http: Http, fb: FormBuilder) {

        this.http = http;

        this.meuForm = fb.group({
            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url: ['', Validators.required],
            descricao: [''],
        });
    }

    /**
        model-driven form validation

     */

    cadastrar(event){        
        //evento é encapsulado e passado para o angular cancelar a submissao do formulário recarregando a pagina
        event.preventDefault();
        console.log(this.foto);
        // cria uma instância de Headers
        let headers = new Headers();
        // Adiciona o tipo de conteúdo application/json 
        headers.append('Content-Type', 'application/json');

        this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers })
                        .subscribe(() => {
                            this.foto = new FotoComponent();
                            console.log('Foto salva com sucesso');
                        }, erro =>  console.log(erro));
    }

}