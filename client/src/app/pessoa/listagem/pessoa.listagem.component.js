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
var pessoa_service_1 = require("../pessoa.service");
var PessoaListagemComponent = /** @class */ (function () {
    function PessoaListagemComponent(service) {
        var _this = this;
        this.pessoas = [];
        this.mensagem = '';
        this.service = service;
        service.lista()
            .subscribe(function (pessoas) {
            console.log('fotos consultadas com sucesso');
            _this.pessoas = pessoas;
        }, function (erro) { return console.error(erro); });
    }
    PessoaListagemComponent.prototype.remove = function (foto) {
        var _this = this;
        console.log(foto.titulo);
        this.service.remove(foto)
            .subscribe(function (pessoas) {
            console.log('Foto removida com sucesso');
            var novasPessoas = _this.pessoas.slice(0);
            var indice = novasPessoas.indexOf(foto);
            novasPessoas.splice(indice, 1);
            _this.pessoas = novasPessoas;
            _this.mensagem = 'Foto removida com sucesso';
        }, function (erro) {
            console.log(erro);
            _this.mensagem = 'Não foi possível remover a foto';
        });
    };
    PessoaListagemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listagem-pessoa',
            templateUrl: './pessoa.listagem.component.html',
            styleUrls: ['./pessoa.listagem.componente.css']
        }),
        __metadata("design:paramtypes", [pessoa_service_1.PessoaService])
    ], PessoaListagemComponent);
    return PessoaListagemComponent;
}());
exports.PessoaListagemComponent = PessoaListagemComponent;
//# sourceMappingURL=pessoa.listagem.component.js.map