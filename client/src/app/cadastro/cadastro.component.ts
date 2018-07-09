import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector:'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent{
    foto: FotoComponent = new FotoComponent();
    service: FotoService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';


    constructor(service: FotoService, route: ActivatedRoute, router: Router){
        this.service = service;
        this.route = route;
        this.router = router;
        //this.route.params.subscribe(params => console.log(params['id']));
        this.route.params.subscribe(params => {
                let id = params['id'];
                if(id){
                    /*this.service.buscaPorId(id)
                        .subscribe(
                            foto => this.foto = foto,
                            erro => console.log(erro));   */ 
                }            
            });
    }

    cadastrar(event){
        event.preventDefault();
        console.log(this.foto);
    
        /*this.service
            .cadastra(this.foto)
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.foto = new FotoComponent();
                if(!res.inclusao) this.router.navigate(['']);
            }, erro => {
                console.log(erro);
                this.mensagem = 'Não foi possível savar a foto';
            });*/
    }

}