"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var listagem_component_1 = require("./listagem/listagem.component");
var cadastro_component_1 = require("./cadastro/cadastro.component");
var cadastro1_component_1 = require("./cadastro1/cadastro1.component");
var pessoa_listagem_component_1 = require("./pessoa/listagem/pessoa.listagem.component");
var pessoa_cadastro_component_1 = require("./pessoa/cadastro/pessoa.cadastro.component");
var appRoutes = [
    { path: '', component: listagem_component_1.ListagemComponent },
    { path: 'cadastro/:id', component: cadastro_component_1.CadastroComponent },
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: 'cadastro1', component: cadastro1_component_1.CadastroComponent1 },
    { path: 'pessoa', component: pessoa_listagem_component_1.PessoaListagemComponent },
    { path: 'pessoa/cadastro', component: pessoa_cadastro_component_1.PessoaCadastroComponent },
    { path: 'pessoa/cadastro/:id', component: pessoa_cadastro_component_1.PessoaCadastroComponent },
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map