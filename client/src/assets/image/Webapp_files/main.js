(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-mat.module.ts":
/*!***********************************!*\
  !*** ./src/app/app-mat.module.ts ***!
  \***********************************/
/*! exports provided: AppMatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMatModule", function() { return AppMatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppMatModule = /** @class */ (function () {
    function AppMatModule() {
    }
    AppMatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"]
            ]
        })
    ], AppMatModule);
    return AppMatModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_recepcionar_fisico_recepcionar_fisico_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/recepcionar-fisico/recepcionar-fisico.component */ "./src/app/components/recepcionar-fisico/recepcionar-fisico.component.ts");
/* harmony import */ var _components_listar_atividades_listar_atividades_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/listar-atividades/listar-atividades.component */ "./src/app/components/listar-atividades/listar-atividades.component.ts");
/* harmony import */ var _components_tipificar_tipificar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tipificar/tipificar.component */ "./src/app/components/tipificar/tipificar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: 'recepcionar-fisico',
        component: _components_recepcionar_fisico_recepcionar_fisico_component__WEBPACK_IMPORTED_MODULE_4__["RecepcionarFisicoComponent"]
    },
    {
        path: 'listar-atividades/:definition',
        component: _components_listar_atividades_listar_atividades_component__WEBPACK_IMPORTED_MODULE_5__["ListarAtividadesComponent"]
    },
    {
        path: 'tipificar/:processInstanceId',
        component: _components_tipificar_tipificar_component__WEBPACK_IMPORTED_MODULE_6__["TipificarComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mat-typography\">\n  <div class=\"fixed-header\">\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row>\n        <span><img src=\"assets/image/interfile_logo.png\" class=\"logo\"></span>\n        <span class=\"header-spacer\"></span>\n        <span *ngIf=\"userSession.token\">\n          <mat-chip-list>\n            <mat-chip color=\"accent\" selected [matMenuTriggerFor]=\"menu\"><mat-icon>account_circle</mat-icon>  {{ ' '+ userSession.firstName + ' ' + userSession.lastName  }} </mat-chip>\n          </mat-chip-list>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item>Item 1</button>\n            <button mat-menu-item>Item 2</button>\n          </mat-menu>\n        </span>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </div>\n  <br/>\n  <br/>\n  <br/>\n  <div class=\"container\">\n\n    <div class=\"content-center\" ngClass.lg=\"content-lg\">\n      <loader *ngIf=\"loading\"></loader>\n      <router-outlet *ngIf=\"!loading\"></router-outlet>\n    </div>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loader/loader.service */ "./src/app/components/loader/loader.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _shared_model_user_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/model/user-session */ "./src/app/shared/model/user-session.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(loaderService, authService$) {
        this.loaderService = loaderService;
        this.authService$ = authService$;
        this.title = 'ITF';
        this.loading = false;
        this.userSession = new _shared_model_user_session__WEBPACK_IMPORTED_MODULE_3__["UserSession"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("init");
        console.log("authState", this.authService$.authState);
        this.authService$.authState.subscribe(function (state) {
            console.log("state", state);
        });
        this.loaderSubscription = this.loaderService.loaderState
            .subscribe(function (state) {
            _this.loading = state.show;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.loaderSubscription.unsubscribe();
        this.authService$.authState.unsubscribe();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_components_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _app_mat_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-mat.module */ "./src/app/app-mat.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_recepcionar_fisico_recepcionar_fisico_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/recepcionar-fisico/recepcionar-fisico.component */ "./src/app/components/recepcionar-fisico/recepcionar-fisico.component.ts");
/* harmony import */ var _services_process_process_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/process/process.service */ "./src/app/services/process/process.service.ts");
/* harmony import */ var _components_listar_atividades_listar_atividades_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/listar-atividades/listar-atividades.component */ "./src/app/components/listar-atividades/listar-atividades.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/loader/loader.service */ "./src/app/components/loader/loader.service.ts");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "./node_modules/@hallysonh/ngx-imageviewer/fesm5/hallysonh-ngx-imageviewer.js");
/* harmony import */ var _components_tipificar_tipificar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/tipificar/tipificar.component */ "./src/app/components/tipificar/tipificar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core Modules







// Components





// Services






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _components_recepcionar_fisico_recepcionar_fisico_component__WEBPACK_IMPORTED_MODULE_11__["RecepcionarFisicoComponent"],
                _components_listar_atividades_listar_atividades_component__WEBPACK_IMPORTED_MODULE_13__["ListarAtividadesComponent"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["Loader"],
                _components_tipificar_tipificar_component__WEBPACK_IMPORTED_MODULE_17__["TipificarComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_16__["ImageViewerModule"],
                _app_mat_module__WEBPACK_IMPORTED_MODULE_7__["AppMatModule"]
            ],
            entryComponents: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["Loader"]],
            providers: [_services_process_process_service__WEBPACK_IMPORTED_MODULE_12__["ProcessService"], _components_loader_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activity {\n  padding: 3px;\n}\n.activity:hover{\n   background-color: #E0F2F1;\n   border: 1px solid #E0F2F1;\n}\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title><mat-icon>touch_app</mat-icon> Novo  </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <button mat-button color=\"accent\" (click)=\"recepcionarFisico()\">Recepcionar o físico <mat-icon>add</mat-icon></button>\n    </mat-card-content>\n  </mat-card>\n  <br/>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title><mat-icon>work</mat-icon> Atividades </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-list *ngIf=\"taskList\">\n        <mat-list-item *ngFor=\"let task of taskList.taskList\">\n          <mat-divider [inset]=\"true\"></mat-divider>\n          {{ task.definition }}\n          <button mat-button color=\"accent\" (click)=\"listarAtividades(task.definition)\">{{ task.processInstanceList.length }} processos abertos</button>\n        </mat-list-item>\n      </mat-list>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_process_process_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/process/process.service */ "./src/app/services/process/process.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, processService, authService) {
        this.router = router;
        this.processService = processService;
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.userSession = localStorage.getItem('userSession');
        this.getprocessDefinitionList();
    };
    DashboardComponent.prototype.recepcionarFisico = function () {
        this.router.navigate(['/recepcionar-fisico']);
    };
    DashboardComponent.prototype.listarAtividades = function (definition) {
        this.router.navigate(['/listar-atividades', definition]);
    };
    DashboardComponent.prototype.getprocessDefinitionList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.processService.getTaskList()];
                    case 1:
                        _a.taskList = _b.sent();
                        console.log("taskList", this.taskList);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        console.log("error", e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_process_process_service__WEBPACK_IMPORTED_MODULE_2__["ProcessService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/listar-atividades/listar-atividades.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/listar-atividades/listar-atividades.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/listar-atividades/listar-atividades.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/listar-atividades/listar-atividades.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-card *ngIf=\"task\">\n    <mat-card-header>\n      <div mat-card-avatar color=\"primary\"><mat-icon>list</mat-icon></div>\n      <mat-card-title>{{ task.definition }}</mat-card-title>\n      <mat-card-subtitle>{{ task.processInstanceList.length }} processos abertos</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"container\">\n        <mat-list>\n          <h3 mat-subheader>Processos</h3>\n          <mat-list-item *ngFor=\"let process of task.processInstanceList\">\n            <mat-icon mat-list-icon>work_outline</mat-icon>\n            <button mat-button (click)=\"workProcess(task.definition, process.processInstanceId)\">{{process.bussinessKey}}</button>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n        </mat-list>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n        <button mat-button color=\"warn\" (click)=\"voltar()\"><mat-icon>backspace</mat-icon> </button>\n      </div>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/listar-atividades/listar-atividades.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/listar-atividades/listar-atividades.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListarAtividadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarAtividadesComponent", function() { return ListarAtividadesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_process_process_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/process/process.service */ "./src/app/services/process/process.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ListarAtividadesComponent = /** @class */ (function () {
    function ListarAtividadesComponent(route, router, processService) {
        this.route = route;
        this.router = router;
        this.processService = processService;
    }
    ListarAtividadesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTaskList();
        this.route.paramMap.subscribe(function (params) {
            _this.definition = params.get('definition');
        });
        console.log("init");
    };
    ListarAtividadesComponent.prototype.voltar = function () {
        this.router.navigate(['/dashboard']);
    };
    ListarAtividadesComponent.prototype.workProcess = function (processDefinition, processInstanceId) {
        this.router.navigate(['/tipificar', processInstanceId]);
    };
    ListarAtividadesComponent.prototype.getTaskList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {};
                        return [4 /*yield*/, this.processService.getTaskList()];
                    case 1:
                        result = _a.sent();
                        result.taskList.map(function (obj) {
                            console.log(obj);
                            if (obj.definition == _this.definition) {
                                _this.task = obj;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ListarAtividadesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar-atividades',
            template: __webpack_require__(/*! ./listar-atividades.component.html */ "./src/app/components/listar-atividades/listar-atividades.component.html"),
            styles: [__webpack_require__(/*! ./listar-atividades.component.css */ "./src/app/components/listar-atividades/listar-atividades.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_process_process_service__WEBPACK_IMPORTED_MODULE_2__["ProcessService"]])
    ], ListarAtividadesComponent);
    return ListarAtividadesComponent;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.loader-hidden]=\"!show\">\n  <div class=\"loader-overlay\">\n    <div>\n      <mat-progress-bar color=\"accent\" mode=\"indeterminate\" *ngIf=\"show\"></mat-progress-bar>\n    </div>\n  </div>\n</div>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<div [class.loader-hidden]=\"!show\" fxLayoutAlign=\"center center\">\n  <div>\n    <mat-spinner color=\"accent\" mode=\"indeterminate\" *ngIf=\"show\"></mat-spinner>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/loader/loader.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-hidden {\n  visibility: hidden; }\n\n.loader-overlay {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  z-index: 500000; }\n"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "./src/app/components/loader/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
* @title Indeterminate progress-bar
*/
var Loader = /** @class */ (function () {
    function Loader(loaderService) {
        this.loaderService = loaderService;
        this.show = true;
    }
    Loader.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderState
            .subscribe(function (state) {
            _this.show = state.show;
        });
    };
    Loader.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Loader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], Loader);
    return Loader;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/loader/loader.service.ts ***!
  \*****************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype.show = function () {
        this.loaderSubject.next({ show: true });
    };
    LoaderService.prototype.hide = function () {
        this.loaderSubject.next({ show: false });
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-card>\n    <mat-card-title>Login</mat-card-title>\n\n    <mat-card-content>\n      <div fxLayout=\"row\" fxLayout=\"column\">\n        <mat-form-field>\n          <input matInput placeholder=\"Usuário\" id=\"user\" [(ngModel)]=\"user\" required>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\" fxLayout=\"column\">\n        <mat-form-field>\n          <input matInput placeholder=\"Senha\" id=\"password\" [(ngModel)]=\"password\" required>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end\">\n        <span class=\"send\">\n          <button mat-fab (click)=\"login(user, password)\">\n            <mat-icon>send</mat-icon>\n          </button>\n        </span>\n      </div>\n    </mat-card-content>\n\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _shared_model_user_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model/user-session */ "./src/app/shared/model/user-session.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userSession;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userSession = new _shared_model_user_session__WEBPACK_IMPORTED_MODULE_3__["UserSession"]();
                        return [4 /*yield*/, this.authService.login(this.user, this.password)];
                    case 1:
                        userSession = _a.sent();
                        localStorage.setItem('userSession', JSON.stringify(userSession));
                        this.router.navigate(['/dashboard']);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/recepcionar-fisico/recepcionar-fisico.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/recepcionar-fisico/recepcionar-fisico.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recepcionar-fisico/recepcionar-fisico.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/recepcionar-fisico/recepcionar-fisico.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title><mat-icon>assignment</mat-icon> Recepcionar Lote  </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div *ngIf=\"!retornoProcesso\">\n        <div fxLayout=\"row\" fxLayout=\"column\">\n          <mat-form-field hintLabel=\"Ler código de barras da capa\">\n            <input matInput maxlength=\"14\" placeholder=\"Protocolo\" id=\"protocolo\" [(ngModel)]=\"protocolo\" #protocoloInput (change)=\"incrementLote(protocolo)\">\n          </mat-form-field>\n          <br/>\n        </div>\n        <button mat-raised-button *ngIf=\"loteFisico.length == 0\" (click)=\"abrirProcessoManual()\"><mat-icon>youtube_searched_for</mat-icon> Abrir processo sem protocolo</button>\n        <mat-list *ngIf=\"loteFisico.length > 0\">\n          <h3 mat-subheader> Lote de processamento: {{ loteFisico.length }} Protocolos </h3>\n          <mat-list-item *ngFor=\"let itemLote of loteFisico\">\n            <mat-chip-list>\n              <mat-chip> <mat-icon>keyboard_arrow_right</mat-icon> {{ itemLote }} </mat-chip>\n            </mat-chip-list>\n          </mat-list-item>\n        </mat-list>\n      </div>\n\n      <div *ngIf=\"retornoProcesso\">\n        <mat-chip-list  *ngIf=\"retornoProcesso.createdProcessSet.length > 0\">\n          <mat-chip color=\"accent\" selected=\"true\"><mat-chip-avatar> <mat-icon>check_circle_outline</mat-icon></mat-chip-avatar> {{ retornoProcesso.createdProcessSet.length }} Processos criados  com sucesso</mat-chip>\n        </mat-chip-list>\n        <mat-chip-list  *ngIf=\"retornoProcesso.refusedProcessSet.length > 0\">\n          <mat-chip> <mat-icon>keyboard_arrow_right</mat-icon> {{ retornoProcesso.refusedProcessSet.length }} Processos recusados </mat-chip>\n        </mat-chip-list>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\" *ngIf=\"!retornoProcesso\">\n        <button mat-button color=\"warn\" (click)=\"voltar()\"><mat-icon>backspace</mat-icon> </button>\n        <button mat-button color=\"accent\" (click)=\"processarLote()\"> <mat-icon>done_outline</mat-icon></button>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\" *ngIf=\"retornoProcesso\">\n        <button mat-button color=\"accent\" (click)=\"voltar()\"><mat-icon>home</mat-icon></button>\n      </div>\n    </mat-card-actions>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/recepcionar-fisico/recepcionar-fisico.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/recepcionar-fisico/recepcionar-fisico.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RecepcionarFisicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecepcionarFisicoComponent", function() { return RecepcionarFisicoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_process_process_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/process/process.service */ "./src/app/services/process/process.service.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/components/loader/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var RecepcionarFisicoComponent = /** @class */ (function () {
    function RecepcionarFisicoComponent(router, loaderService, processService) {
        this.router = router;
        this.loaderService = loaderService;
        this.processService = processService;
    }
    RecepcionarFisicoComponent.prototype.ngOnInit = function () {
        this.loteFisico = [];
    };
    RecepcionarFisicoComponent.prototype.voltar = function () {
        this.router.navigate(['/dashboard']);
    };
    RecepcionarFisicoComponent.prototype.incrementLote = function (protocolo) {
        this.loteFisico.push(protocolo);
        this.protocolo = null;
        this.protocoloInput.nativeElement.focus();
    };
    RecepcionarFisicoComponent.prototype.abrirProcessoManual = function () {
        this.loteFisico = [];
        this.loteFisico.push("new");
        this.processarLote();
    };
    RecepcionarFisicoComponent.prototype.processarLote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.processService.start(this.loteFisico)];
                    case 1:
                        _a.retornoProcesso = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RecepcionarFisicoComponent.prototype.showLoader = function () {
        this.loaderService.show();
    };
    RecepcionarFisicoComponent.prototype.hideLoader = function () {
        this.loaderService.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('protocoloInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RecepcionarFisicoComponent.prototype, "protocoloInput", void 0);
    RecepcionarFisicoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recepcionar-fisico',
            template: __webpack_require__(/*! ./recepcionar-fisico.component.html */ "./src/app/components/recepcionar-fisico/recepcionar-fisico.component.html"),
            styles: [__webpack_require__(/*! ./recepcionar-fisico.component.css */ "./src/app/components/recepcionar-fisico/recepcionar-fisico.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _services_process_process_service__WEBPACK_IMPORTED_MODULE_2__["ProcessService"]])
    ], RecepcionarFisicoComponent);
    return RecepcionarFisicoComponent;
}());



/***/ }),

/***/ "./src/app/components/tipificar/tipificar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/tipificar/tipificar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tipificar/tipificar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/tipificar/tipificar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-card>\n    <mat-card-header>\n      <div mat-card-avatar color=\"primary\"><mat-icon>list</mat-icon></div>\n      <mat-card-title>Tratamento de Guia Médica</mat-card-title>\n      <mat-card-subtitle>Identifique os dados da Guia</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"container\">\n        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n          <div fxLayout='column' fxFlex=\"30%\" >\n            <form class=\"example-form\">\n              <mat-form-field color=\"accent\" class=\"full-width-input\">\n                <input type=\"text\" placeholder=\"Numero da Guia\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n                <mat-autocomplete #auto=\"matAutocomplete\">\n                  <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                    {{option}}\n                  </mat-option>\n                </mat-autocomplete>\n                <mat-icon matSuffix>keyboard_return</mat-icon>\n              </mat-form-field>\n              <mat-form-field color=\"accent\" class=\"full-width-input\">\n                <mat-select placeholder=\"Tipo de Guia\">\n                  <mat-option *ngFor=\"let tipoGuia of tiposGuia\" [value]=\"tipoGuia.value\">\n                    {{tipoGuia.name}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </form>\n          </div>\n          <div fxLayout='column' fxFlex=\"70%\">\n            <ngx-imageviewer [src]=\"imageSrc\"></ngx-imageviewer>\n          </div>\n        </div>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n        <button mat-button color=\"warn\" (click)=\"voltar()\"><mat-icon>backspace</mat-icon> </button>\n        <button mat-button color=\"accent\"> <mat-icon>done_outline</mat-icon></button>\n      </div>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tipificar/tipificar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tipificar/tipificar.component.ts ***!
  \*************************************************************/
/*! exports provided: TipificarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipificarComponent", function() { return TipificarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "./node_modules/@hallysonh/ngx-imageviewer/fesm5/hallysonh-ngx-imageviewer.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IMAGEVIEWER_CUSTOM_CONFIG = {
    width: 300,
    height: 300,
    bgStyle: '#ECEFF1',
    buttonStyle: {
        bgStyle: '#80CBC4',
        iconStyle: '#ffffff',
        borderStyle: '#ffffff',
        borderWidth: 2 // buttons' border width (0 == disabled)
    }
};
var TipificarComponent = /** @class */ (function () {
    function TipificarComponent(router) {
        this.router = router;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.options = ['1234', '4567', '8976'];
        this.tiposGuia = [
            { value: 'guiaSadt', name: 'Guia SADT' },
            { value: 'guiaHonorarios', name: 'Guia Honorários' },
            { value: 'guiaConsulta', name: 'Guia de Consulta' },
            { value: 'guiaResumo', name: 'Guia Resumo de Internação' }
        ];
        this.imageSrc = "assets/image/partitura.jpg";
    }
    TipificarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return _this._filter(value); }));
    };
    TipificarComponent.prototype.voltar = function () {
        this.router.navigate(['/dashboard']);
    };
    TipificarComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    TipificarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tipificar',
            template: __webpack_require__(/*! ./tipificar.component.html */ "./src/app/components/tipificar/tipificar.component.html"),
            styles: [__webpack_require__(/*! ./tipificar.component.css */ "./src/app/components/tipificar/tipificar.component.css")],
            providers: [
                {
                    provide: _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_2__["IMAGEVIEWER_CONFIG"],
                    useValue: IMAGEVIEWER_CUSTOM_CONFIG
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TipificarComponent);
    return TipificarComponent;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var authUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/if-bpm/v1/auth";
var AuthServiceRequest = /** @class */ (function () {
    function AuthServiceRequest() {
    }
    return AuthServiceRequest;
}());
var AuthServiceResponse = /** @class */ (function () {
    function AuthServiceResponse() {
    }
    return AuthServiceResponse;
}());
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.authState = this.authSubject.asObservable();
    }
    AuthService.prototype.login = function (user, password) {
        var authRequest = new AuthServiceRequest();
        authRequest.username = user;
        authRequest.password = password;
        var response = this.http.post(authUrl, authRequest);
        console.log("response", response);
    };
    AuthService.prototype.setUserSession = function (userSession) {
        console.log(userSession);
        //this.authSubject.next(<UserSession> { userSession: response })
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/process/process.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/process/process.service.ts ***!
  \*****************************************************/
/*! exports provided: ProcessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessService", function() { return ProcessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_model_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model/process */ "./src/app/shared/model/process.ts");
/* harmony import */ var _shared_model_peg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/model/peg */ "./src/app/shared/model/peg.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var startProcessUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mockUrl + "/if-bpm/v1/process/start";
var getTaskListUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mockUrl + "/if-bpm/v1/process/tasks";
var StartProcessRequest = /** @class */ (function () {
    function StartProcessRequest() {
        this.processSet = new Array();
    }
    return StartProcessRequest;
}());
var StartProcessResponse = /** @class */ (function () {
    function StartProcessResponse() {
    }
    return StartProcessResponse;
}());
var ProcessService = /** @class */ (function () {
    function ProcessService(http) {
        this.http = http;
    }
    ProcessService.prototype.start = function (loteFisico) {
        var request = new StartProcessRequest();
        loteFisico.map(function (processId, $index) {
            var process = new _shared_model_process__WEBPACK_IMPORTED_MODULE_3__["Process"]();
            var peg = new _shared_model_peg__WEBPACK_IMPORTED_MODULE_4__["Peg"]();
            if (processId != "new") {
                process.newProtocol = false;
                process.bussinessKey = processId;
                peg.protocolo = processId;
                process.peg = peg;
            }
            else {
                process.newProtocol = true;
            }
            request.processSet.push(process);
        });
        console.log(request);
        return this.http.post(startProcessUrl, request).toPromise();
    };
    ProcessService.prototype.getTaskList = function () {
        return this.http.get(getTaskListUrl).toPromise();
    };
    ProcessService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProcessService);
    return ProcessService;
}());



/***/ }),

/***/ "./src/app/shared/model/peg.ts":
/*!*************************************!*\
  !*** ./src/app/shared/model/peg.ts ***!
  \*************************************/
/*! exports provided: Peg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Peg", function() { return Peg; });
var Peg = /** @class */ (function () {
    function Peg() {
    }
    return Peg;
}());



/***/ }),

/***/ "./src/app/shared/model/process.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/model/process.ts ***!
  \*****************************************/
/*! exports provided: Process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process", function() { return Process; });
var Process = /** @class */ (function () {
    function Process() {
    }
    return Process;
}());



/***/ }),

/***/ "./src/app/shared/model/user-session.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/model/user-session.ts ***!
  \**********************************************/
/*! exports provided: UserSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSession", function() { return UserSession; });
var UserSession = /** @class */ (function () {
    function UserSession() {
    }
    return UserSession;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    mockUrl: "http://localhost:8082",
    apiUrl: "http://localhost:8081",
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Kuika/Documents/Dev/interfile/interflow-health-account-porto-seguro/portoseguro-portal/webapp/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/Kuika/Documents/Dev/interfile/interflow-health-account-porto-seguro/portoseguro-portal/webapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map