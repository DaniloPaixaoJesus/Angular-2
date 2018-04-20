import {Component, Inject} from '@angular/core';
import {FotoComponent} from '../foto/foto.component';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FotoService} from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector:'cadastro1',
    templateUrl: './cadastro1.component.html'
})
export class CadastroComponent1{
    
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    service: FotoService;

    constructor(@Inject(FotoService) service, fb: FormBuilder) {
        this.service = service;
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
        this.service.cadastra(this.foto)
                    .subscribe(
                        ()=>{
                            console.log('cadastro realizado com sucesso');
                            this.foto = new FotoComponent();
                        },
                        erro=>console.error(erro)
                    );

        /*
        this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers })
                        .subscribe(() => {
                            this.foto = new FotoComponent();
                            console.log('Foto salva com sucesso');
                        }, erro =>  console.log(erro));
        */
    }

}