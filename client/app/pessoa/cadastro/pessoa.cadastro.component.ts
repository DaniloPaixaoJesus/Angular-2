import {Component, Inject} from '@angular/core';
import {PessoaComponent} from '../pessoa.component';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PessoaService} from '../pessoa.service';

@Component({
    moduleId: module.id,
    selector:'cadastro-pessoa',
    templateUrl: './pessoa.cadastro.component.html'
})
export class PessoaCadastroComponent{
    
    pessoa: PessoaComponent = new PessoaComponent();
    meuForm: FormGroup;
    service: PessoaService;

    constructor(@Inject(PessoaService) service, fb: FormBuilder) {
        this.service = service;
        this.meuForm = fb.group({
            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url: ['', Validators.required],
            descricao: [''],
        });
    }

    /**   model-driven form validation   */
    cadastrar(event){        
        //evento é encapsulado e passado para o angular cancelar a submissao do formulário recarregando a pagina
        event.preventDefault();
        console.log(this.pessoa);
        // cria uma instância de Headers
        let headers = new Headers();
        // Adiciona o tipo de conteúdo application/json 
        headers.append('Content-Type', 'application/json');
        this.service.cadastra(this.pessoa)
                    .subscribe(
                        ()=>{
                            console.log('cadastro realizado com sucesso');
                            this.pessoa = new PessoaComponent();
                        },
                        erro=>console.error(erro)
                    );
    }

}