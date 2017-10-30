"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var FotoService = /** @class */ (function () {
    function FotoService(http) {
        this.url = 'v1/fotos';
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    FotoService.prototype.lista = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); });
    };
    FotoService.prototype.cadastra1 = function (foto) {
        return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers });
    };
    FotoService.prototype.cadastra = function (foto) {
        if (foto._id) {
            return this.http.put(this.url + '/' + foto._id, JSON.stringify(foto), { headers: this.headers })
                .map(function () { return ({ mensagem: 'Foto alterada com sucesso', inclusao: false }); });
        }
        else {
            return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers })
                .map(function () { return ({ mensagem: 'Foto incluída com sucesso', inclusao: true }); });
        }
    };
    FotoService.prototype.remove = function (foto) {
        //return this.http.delete(this.url);
        return this.http.delete(this.url + '/' + foto._id);
    };
    FotoService.prototype.buscaPorId = function (id) {
        return this.http
            .get(this.url + '/' + id)
            .map(function (res) { return res.json(); });
    };
    FotoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FotoService);
    return FotoService;
}());
exports.FotoService = FotoService;
//Observable<Array<FotoComponent>>
//Observable<FotoComponent[]>
var MensagemCadastro = /** @class */ (function () {
    function MensagemCadastro(mensagem, inclusao) {
        this.mensagem = mensagem;
        this.inclusao = inclusao;
    }
    MensagemCadastro.prototype.obterMensagem = function () {
        return this.mensagem;
    };
    MensagemCadastro.prototype.ehInclusao = function () {
        return this.inclusao;
    };
    return MensagemCadastro;
}());
exports.MensagemCadastro = MensagemCadastro;
var MensagemCadastro2 = /** @class */ (function () {
    function MensagemCadastro2(mensagem, inclusao) {
        this._mensagem = mensagem;
        this._inclusao = inclusao;
    }
    Object.defineProperty(MensagemCadastro2.prototype, "mensagem", {
        get: function () {
            return this._mensagem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MensagemCadastro2.prototype, "inclusao", {
        get: function () {
            return this._inclusao;
        },
        enumerable: true,
        configurable: true
    });
    return MensagemCadastro2;
}());
exports.MensagemCadastro2 = MensagemCadastro2;
//construtor declara os atributos implicitamente
var MensagemCadastro3 = /** @class */ (function () {
    // por debaixo dos panos cria das propriedades `_memsagem` e `_inclusao` como privados
    function MensagemCadastro3(_mensagem, _inclusao) {
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }
    Object.defineProperty(MensagemCadastro3.prototype, "mensagem", {
        get: function () {
            return this._mensagem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MensagemCadastro3.prototype, "inclusao", {
        get: function () {
            return this._inclusao;
        },
        enumerable: true,
        configurable: true
    });
    return MensagemCadastro3;
}());
exports.MensagemCadastro3 = MensagemCadastro3;
//# sourceMappingURL=foto.service.js.map