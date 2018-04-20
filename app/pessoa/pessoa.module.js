"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pessoa_component_1 = require("./pessoa.component");
var pessoa_pipes_1 = require("./pessoa.pipes");
var pessoa_service_1 = require("./pessoa.service");
var PessoaModule = /** @class */ (function () {
    function PessoaModule() {
    }
    PessoaModule = __decorate([
        core_1.NgModule({
            declarations: [pessoa_component_1.PessoaComponent, pessoa_pipes_1.FiltroPorTitulo],
            exports: [pessoa_component_1.PessoaComponent, pessoa_pipes_1.FiltroPorTitulo],
            providers: [pessoa_service_1.PessoaService]
        })
    ], PessoaModule);
    return PessoaModule;
}());
exports.PessoaModule = PessoaModule;
//# sourceMappingURL=pessoa.module.js.map