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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pessoa_component_1 = require("../pessoa.component");
var forms_1 = require("@angular/forms");
var pessoa_service_1 = require("../pessoa.service");
var PessoaCadastroComponent = /** @class */ (function () {
    function PessoaCadastroComponent(service, fb) {
        this.pessoa = new pessoa_component_1.PessoaComponent();
        this.service = service;
        this.meuForm = fb.group({
            titulo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            url: ['', forms_1.Validators.required],
            descricao: [''],
        });
    }
    /**   model-driven form validation   */
    PessoaCadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        //evento é encapsulado e passado para o angular cancelar a submissao do formulário recarregando a pagina
        event.preventDefault();
        console.log(this.pessoa);
        // cria uma instância de Headers
        var headers = new Headers();
        // Adiciona o tipo de conteúdo application/json 
        headers.append('Content-Type', 'application/json');
        this.service.cadastra(this.pessoa)
            .subscribe(function () {
            console.log('cadastro realizado com sucesso');
            _this.pessoa = new pessoa_component_1.PessoaComponent();
        }, function (erro) { return console.error(erro); });
    };
    PessoaCadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro-pessoa',
            templateUrl: './pessoa.cadastro.component.html'
        }),
        __param(0, core_1.Inject(pessoa_service_1.PessoaService)),
        __metadata("design:paramtypes", [Object, forms_1.FormBuilder])
    ], PessoaCadastroComponent);
    return PessoaCadastroComponent;
}());
exports.PessoaCadastroComponent = PessoaCadastroComponent;
//# sourceMappingURL=pessoa.cadastro.component.js.map