import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //, Headers, Response 
import { FotoComponent } from './foto.component';
import { Observable} from 'rxjs'; 

@Injectable()
export class FotoService {

    http: HttpClient;
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(http: HttpClient) { 

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    /*
    lista(): Observable<FotoComponent[]> {

        return this.http.get(this.url)
            .map(res => res.json());
    }

    cadastra1(foto: FotoComponent): Observable<Response> {

        return this.http.post(this.url, JSON.stringify(foto), 
                { headers: this.headers }); 

    }

    cadastra(foto: FotoComponent): Observable<any> {
        if (foto._id) {
            return this.http.put(this.url + '/' + foto._id, JSON.stringify(foto), 
            { headers: this.headers })
            .map(() => ({mensagem: 'Foto alterada com sucesso', inclusao: false}));
        } else {
            return this.http.post(this.url, JSON.stringify(foto), 
                { headers: this.headers })
                .map(() => ({mensagem: 'Foto incluída com sucesso', inclusao: true}));
        }
    }

    remove(foto: FotoComponent): Observable<Response> {
        //return this.http.delete(this.url);
        return this.http.delete(this.url + '/' + foto._id);
    } 

    buscaPorId(id: string): Observable<FotoComponent> {
        return this.http
            .get(this.url + '/' + id)
            .map(res => res.json());
    }
    */
}
//Observable<Array<FotoComponent>>
//Observable<FotoComponent[]>

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