import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { PessoaComponent } from './pessoa.component';
import { Observable} from 'rxjs'; 

@Injectable()
export class PessoaService {

    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http) { 

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    lista(): Observable<PessoaComponent[]> {

        return this.http.get(this.url)
            .map(res => res.json());
    }

    cadastra1(pessoa: PessoaComponent): Observable<Response> {

        return this.http.post(this.url, JSON.stringify(pessoa), 
                { headers: this.headers }); 

    }

    cadastra(pessoa: PessoaComponent): Observable<any> {
        if (pessoa._id) {
            return this.http.put(this.url + '/' + pessoa._id, JSON.stringify(pessoa), 
            { headers: this.headers })
            .map(() => ({mensagem: 'pessoa alterada com sucesso', inclusao: false}));
        } else {
            return this.http.post(this.url, JSON.stringify(pessoa), 
                { headers: this.headers })
                .map(() => ({mensagem: 'pessoa incluída com sucesso', inclusao: true}));
        }
    }

    remove(pessoa: PessoaComponent): Observable<Response> {
        //return this.http.delete(this.url);
        return this.http.delete(this.url + '/' + pessoa._id);
    } 

    buscaPorId(id: string): Observable<PessoaComponent> {
        return this.http
            .get(this.url + '/' + id)
            .map(res => res.json());
    }
}
//Observable<Array<pessoaComponent>>
//Observable<pessoaComponent[]>

export class MensagemCadastro {
    
    private mensagem: string;
    private inclusao: boolean;

    constructor(mensagem: string, inclusao: boolean) {
        this.mensagem = mensagem;
        this.inclusao = inclusao;
    }

    public obterMensagem(): string {
        return this.mensagem;
    }

    public ehInclusao(): boolean {
        return this.inclusao;
    }
}

export class MensagemCadastro2 {
    
        private _mensagem: string;
        private _inclusao: boolean;
    
        constructor(mensagem: string, inclusao: boolean) {
            this._mensagem = mensagem;
            this._inclusao = inclusao;
        }
    
        public get mensagem(): string {
            return this._mensagem;
        }
    
        public get inclusao(): boolean {
            return this._inclusao;
        }
    }

    //construtor declara os atributos implicitamente
    export class MensagemCadastro3 {
        
            // por debaixo dos panos cria das propriedades `_memsagem` e `_inclusao` como privados
            constructor(private _mensagem: string, private _inclusao: boolean) {
                this._mensagem = _mensagem;
                this._inclusao = _inclusao;
            }
        
            public get mensagem(): string {
                return this._mensagem;
            }
        
            public get inclusao(): boolean {
                return this._inclusao;
            }
        }