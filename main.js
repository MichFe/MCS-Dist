(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'adminpro';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/register.component */ "./src/app/login/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Rutas

//Modulos

//Components



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _login_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_2__["APP_ROUTES"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/register.component */ "./src/app/login/register.component.ts");
/* harmony import */ var _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/nopagefound/nopagefound.component */ "./src/app/shared/nopagefound/nopagefound.component.ts");




var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _login_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: '**', component: _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_3__["NopagefoundComponent"] }
];
var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: false });


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nTemplate Name: Admin pro Admin\nAuthor: Wrappixel\nEmail: niravjoshi87@gmail.com\nFile: scss\n*/\n/*\nTemplate Name: Admin Pro Admin\nAuthor: Wrappixel\nEmail: niravjoshi87@gmail.com\nFile: scss\n*/\n/*Theme Colors*/\n/*bootstrap Color*/\n/*Light colors*/\n/*Normal Color*/\n/*Extra Variable*/\n/*******************\nLogin register and recover password Page\n******************/\n.login-register {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 100%;\n  width: 100%;\n  padding: 10% 0;\n  position: fixed; }\n.login-box {\n  width: 400px;\n  margin: 0 auto; }\n.login-box .footer {\n    width: 100%;\n    left: 0px;\n    right: 0px; }\n.login-box .social {\n    display: block;\n    margin-bottom: 30px; }\n#recoverform {\n  display: none; }\n.login-sidebar {\n  padding: 0px;\n  margin-top: 0px; }\n.login-sidebar .login-box {\n    right: 0px;\n    position: absolute;\n    height: 100%; }\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Main wrapper - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<section id=\"wrapper\" class=\"login-register login-sidebar\" style=\"background-image:url(assets/images/background/login-register.jpg);\">\n  <div class=\"login-box card\">\n    <div class=\"card-body\">\n      <form class=\"form-horizontal form-material\" id=\"loginform\" action=\"index.html\">\n        <a href=\"javascript:void(0)\" class=\"text-center db\"><img src=\"assets/images/logo-icon.png\" alt=\"Home\" /><br/><img\n            src=\"assets/images/logo-text.png\" alt=\"Home\" /></a>\n        <div class=\"form-group m-t-40\">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Nombre de usuario\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" type=\"password\" required=\"\" placeholder=\"Contraseña\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-12\">\n            <div class=\"checkbox checkbox-primary pull-left p-t-0\">\n              <input id=\"checkbox-signup\" type=\"checkbox\" class=\"filled-in chk-col-light-blue\">\n              <label for=\"checkbox-signup\"> Recordarme </label>\n            </div>\n            <a href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark pull-right\"><i class=\"fa fa-lock m-r-5\"></i> Olvidó\n              su contraseña?</a> </div>\n        </div>\n        <div class=\"form-group text-center m-t-20\">\n          <div class=\"col-xs-12\">\n            <button class=\"btn btn-info btn-lg btn-block text-uppercase btn-rounded\" type=\"submit\">Log In</button>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\n            <div class=\"social\">\n              <a href=\"javascript:void(0)\" \n                 class=\"btn btn-facebook\" \n                 data-toggle=\"tooltip\" \n                 title=\"Login with Facebook\">\n                <i aria-hidden=\"true\" class=\"fa fa-facebook\"></i>\n             </a>\n             &nbsp;\n             <a href=\"javascript:void(0)\" \n                class=\"btn btn-googleplus\"\n                data-toggle=\"tooltip\" \n                title=\"Login with Google\">\n                  <i aria-hidden=\"true\" class=\"fa fa-google-plus\"></i>\n              </a>\n              </div>\n          </div>\n        </div>\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            Aún no tiene una cuenta? <a href=\"pages-register2.html\" class=\"text-primary m-l-5\"><b>Registrarse</b></a>\n          </div>\n        </div>\n      </form>\n      <form class=\"form-horizontal\" id=\"recoverform\" action=\"index.html\">\n        <div class=\"form-group \">\n          <div class=\"col-xs-12\">\n            <h3>Recuperar Contraseña</h3>\n            <p class=\"text-muted\">Ingresa tu Email y te enviaremos las instrucciones!</p>\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Email\">\n          </div>\n        </div>\n        <div class=\"form-group text-center m-t-20\">\n          <div class=\"col-xs-12\">\n            <button class=\"btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Reset</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n<!-- ============================================================== -->\n<!-- End Wrapper -->\n<!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/register.component.html":
/*!***********************************************!*\
  !*** ./src/app/login/register.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Main wrapper - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<section id=\"wrapper\" class=\"login-register login-sidebar\" style=\"background-image:url(assets/images/background/login-register.jpg);\">\n  <div class=\"login-box card\">\n    <div class=\"card-body\">\n      <form class=\"form-horizontal form-material\" id=\"loginform\" action=\"index.html\">\n        <a href=\"javascript:void(0)\" class=\"text-center db\"><img src=\"assets/images/logo-icon.png\" alt=\"Home\" /><br/><img\n            src=\"assets/images/logo-text.png\" alt=\"Home\" /></a>\n        <h3 class=\"box-title m-t-40 m-b-0\">Registrate ahora</h3><small>Crea tu cuenta y disfruta</small>\n        <div class=\"form-group m-t-20\">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Nombre\">\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Email\">\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" type=\"password\" required=\"\" placeholder=\"Contraseña\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" type=\"password\" required=\"\" placeholder=\"Confirma Contraseña\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-12\">\n            <div class=\"checkbox checkbox-primary p-t-0\">\n              <input id=\"checkbox-signup\" type=\"checkbox\">\n              <label for=\"checkbox-signup\"> Acepto todos los <a href=\"#\">Términos</a></label>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group text-center m-t-20\">\n          <div class=\"col-xs-12\">\n            <button class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Registrar</button>\n          </div>\n        </div>\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            <p>Ya tienes una cuenta? <a href=\"pages-login-2.html\" class=\"text-info m-l-5\"><b>Ingresa</b></a></p>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n<!-- ============================================================== -->\n<!-- End Wrapper -->\n<!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/login/register.component.ts":
/*!*********************************************!*\
  !*** ./src/app/login/register.component.ts ***!
  \*********************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/login/register.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/calendario/calendario.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/calendario/calendario.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    display: table;\r\n    table-layout: fixed;\r\n\r\n}\r\n\r\nth{\r\n    font-weight:600;\r\n    text-align: center;\r\n}\r\n\r\ntd,th{\r\n    padding:5px;\r\n}\r\n\r\ntd{\r\n    height:80px;\r\n    border: 1px solid rgba(120, 130, 140, 0.09);\r\n}\r\n\r\ntd:hover{\r\n    background-color: #caebf1;\r\n}\r\n\r\ndiv.dia{\r\n    font-size: 13px;\r\n    display:block;\r\n}\r\n\r\ndiv.evento{\r\n    background-color: #278395;\r\n    color:white;\r\n    cursor:pointer;\r\n    font-size: 13px;\r\n    padding-left:5px;\r\n    margin-bottom: 5px;\r\n    \r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n\r\n}\r\n\r\ndiv.evento-1{\r\n    background-color: #278395;\r\n}\r\n\r\ndiv.evento-2{\r\n    background-color: #0300c4;\r\n\r\n}\r\n\r\ndiv.evento-3{\r\n    background-color: #ee7f00;\r\n}\r\n\r\ndiv.evento:hover{\r\n    background-color: #19545f !important;\r\n}\r\n\r\n.controlBar{\r\n    font-size: 25px;\r\n    padding:25px 0px;\r\n}\r\n\r\n.custom-btn{\r\n    color:rgb(103, 117, 124);\r\n    border: 1px solid rgba(120, 130, 140, 0.13);\r\n}\r\n\r\n.displayFecha{\r\n    text-align: center;\r\n    font-weight: 500;\r\n\r\n}\r\n\r\n.noMesActual{\r\n    /* visibility: hidden; */\r\n    background-color: rgba(220, 220, 220, 0.7);\r\n    \r\n}\r\n\r\n.noMesActual:hover{\r\n    background-color: #a1dbe7;\r\n}\r\n\r\ntd.today{\r\n    border: 2px solid #a1dbe7;;\r\n    border-style: dashed;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/calendario/calendario.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/calendario/calendario.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n  <div class=\"container\">\n  \n        <div class=\"card-body\">\n\n          <div class=\"controlBar\">\n\n            <div class=\"btn-group pull-left\">\n              <button class=\"btn btn-light custom-btn\"\n                      (click)=\"mesAnterior()\"><i class=\"fa fa-arrow-left\"></i></button>\n              <button class=\"btn btn-light custom-btn\"\n                      (click)=\"mesSiguiente()\"><i class=\"fa fa-arrow-right\"></i></button>\n            </div>\n\n            <div class=\"displayFecha\">\n              {{ month | mes |uppercase }} {{ year }}\n            </div>\n\n\n          </div>\n\n          <table *ngIf=\"semanas.length>0\" class=\"table text-center\">\n            <thead>\n              <tr>\n                <th>Dom</th>\n                <th>Lun</th>\n                <th>Mar</th>\n                <th>Mié</th>\n                <th>Jue</th>\n                <th>Vie</th>\n                <th>Sáb</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let semana of semanas; let numSemana=index;\">\n\n                <!-- Celda del día  -->\n                <td *ngFor=\"let dia of semana; let numDia=index;\"\n                     (click)=\"registrarSemanaYDia(numSemana,numDia)\"\n                     data-toggle=\"modal\" \n                     data-target=\"#nuevoEvento\"\n                     [ngClass]=\"{\n                       'noMesActual': (dia.otroMes),\n                       'today': (dia.today)\n                      }\">\n                  \n                  <!-- numero de día -->\n                  <div class=\"dia\">\n                    <span class=\"pull-left\">{{ dia.numero }}</span>\n                  </div>\n                  <!-- Fin numero de dia -->\n                    <br>\n                  \n                  <!-- Div de eventos -->\n                  <div *ngFor=\"let evento of dia.eventos; let numEvento=index;\" \n                       class=\"evento\"\n                       [ngStyle]=\"{'background-color': evento.colorFondo}\"\n                       (click)=\"editarEvento(numSemana,numDia, numEvento, $event)\">\n                    <span>{{ evento.nombreEvento }}</span>\n                  </div>\n                  <!-- Fin de div de eventos -->\n\n  \n                </td>\n                <!-- Termina celda del Dia -->\n\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n  \n  </div>\n\n  <app-nuevo-evento (nuevoEvento)=\"nombreEvento($event)\"></app-nuevo-evento>\n"

/***/ }),

/***/ "./src/app/pages/calendario/calendario.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/calendario/calendario.component.ts ***!
  \**********************************************************/
/*! exports provided: CalendarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioComponent", function() { return CalendarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarioComponent = /** @class */ (function () {
    function CalendarioComponent() {
        this.fechaActual = new Date();
        this.today = new Date();
        this.semana = [];
        this.semanas = [];
        this.dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
        this.eventBackgroundColors = ["#278395", "#0300c4", "#ee7f00"];
        this.evento = "";
        this.year = this.fechaActual.getFullYear();
        this.month = this.fechaActual.getMonth();
        this.construirSemanas();
    }
    CalendarioComponent.prototype.ngOnInit = function () { };
    CalendarioComponent.prototype.nombreEvento = function (evento) {
        this.evento = evento.nombreEvento;
        var posicionEvento = this.semanas[this.semanaEvento][this.diaEvento]
            .eventos.length;
        var color = this.calcularColorDeEvento(posicionEvento + 1);
        var objetoEvento = {
            nombreEvento: this.evento,
            colorFondo: color
        };
        this.semanas[this.semanaEvento][this.diaEvento].eventos.push(objetoEvento);
    };
    CalendarioComponent.prototype.calcularColorDeEvento = function (indiceEvento) {
        var modulo = indiceEvento % 3;
        var colorIndex;
        var color;
        //Paso la posicion del evento tal cual para los 3 primeros y
        //aplicamos el modulo para la posición 4 en adelante
        if (indiceEvento < 3) {
            colorIndex = indiceEvento;
        }
        else {
            modulo == 0 ? (colorIndex = 3) : (colorIndex = modulo);
        }
        //Guardo el color de mi arreglo de acuerdo a la posición correspondiente (0,1,2)
        color = this.eventBackgroundColors[colorIndex - 1];
        return color;
    };
    CalendarioComponent.prototype.registrarSemanaYDia = function (semana, dia) {
        this.semanaEvento = semana;
        this.diaEvento = dia;
    };
    CalendarioComponent.prototype.editarEvento = function (semana, dia, numEvento, evento) {
        this.semanas[semana][dia].eventos[numEvento].nombreEvento = "Otro Evento";
        evento.stopPropagation();
    };
    CalendarioComponent.prototype.mesAnterior = function () {
        if (this.month > 0) {
            this.month -= 1;
        }
        else {
            this.month = 11;
            this.year -= 1;
        }
        this.construirSemanas();
    };
    CalendarioComponent.prototype.mesSiguiente = function () {
        if (this.month < 11) {
            this.month += 1;
        }
        else {
            this.month = 0;
            this.year += 1;
        }
        this.construirSemanas();
    };
    CalendarioComponent.prototype.construirSemanas = function () {
        //Limpiamos el arreglo de semanas
        this.semanas = [];
        this.semana = [];
        //Definimos el año y mes en curso
        var year = this.year;
        var mes = this.month;
        //Inicializamos la fecha actual en el último día del mes anterior al mes en curso
        this.fechaActual = new Date(year, mes, 0);
        //Seteando el dia inicial para coincidir con el lunes de la semana 1
        var diaSemana = this.fechaActual.getDay();
        if (diaSemana != 7) {
            var diaFinal = this.fechaActual.getDate();
            var diasAdicionales = diaSemana;
            this.fechaActual.setDate(diaFinal - diasAdicionales);
        }
        //El primer ciclo itera a traves de semanas y el segundo llena los dias de la semana
        for (var semana = 1; semana <= 6; semana++) {
            var diaInicialSemana = this.fechaActual.getDay();
            for (var dia = diaInicialSemana; dia < 7; dia++) {
                var diaMes = this.fechaActual.getDate();
                var otroMes = false;
                var chequeoMes = this.fechaActual.getMonth();
                var chequeoToday = void 0;
                if (chequeoMes != this.month) {
                    otroMes = true;
                }
                else {
                    otroMes = false;
                }
                if (this.today.getDate() == diaMes &&
                    this.today.getMonth() == chequeoMes &&
                    this.today.getFullYear() == this.fechaActual.getFullYear()) {
                    chequeoToday = true;
                }
                else {
                    chequeoToday = false;
                }
                this.semana[dia] = {
                    numero: diaMes,
                    eventos: [],
                    otroMes: otroMes,
                    today: chequeoToday
                };
                this.fechaActual.setDate(diaMes + 1);
            }
            this.semanas.push(this.semana);
            this.semana = [];
        }
    };
    CalendarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-calendario",
            template: __webpack_require__(/*! ./calendario.component.html */ "./src/app/pages/calendario/calendario.component.html"),
            styles: [__webpack_require__(/*! ./calendario.component.css */ "./src/app/pages/calendario/calendario.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarioComponent);
    return CalendarioComponent;
}());



/***/ }),

/***/ "./src/app/pages/crm/crm.component.custom.css":
/*!****************************************************!*\
  !*** ./src/app/pages/crm/crm.component.custom.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-main-box{\r\n    width:100%;\r\n}\r\ninput.form-control{\r\n    color:#2e9bb0;\r\n}\r\ninput.form-control:focus {\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#278395), to(#278395)), -webkit-gradient(linear, left top, left bottom, from(#e9edf2), to(#e9edf2));\r\n}\r\n.chat-clientes{\r\n    max-height:60vh;\r\n    overflow-y:scroll;\r\n}\r\n.buscador::-webkit-input-placeholder{\r\n    border-bottom: 1px solid gray;\r\n}\r\n.buscador::-ms-input-placeholder{\r\n    border-bottom: 1px solid gray;\r\n}\r\n.buscador::placeholder{\r\n    border-bottom: 1px solid gray;\r\n}\r\nli>a{\r\n    padding:5px;\r\n}\r\n.list-cliente:hover{\r\n    background-color: #caebf1;\r\n}\r\nul{\r\n    padding:0px;\r\n    overflow: auto;\r\n}\r\nli{\r\n    list-style: none;\r\n    cursor: pointer;\r\n}\r\n/* ul li i.info-icon{\r\n    position: absolute;\r\n    top:0.5em;\r\n    right:1em;\r\n\r\n    color:#278395;\r\n    font-size: 1.5em;\r\n    z-index: 10;\r\n} */\r\n.box-title{\r\n    padding: 5px;\r\n}\r\nh3{\r\n    color:#2e9bb0;\r\n}\r\nhr{\r\n     border: 0; \r\n     height: 1px; \r\n     background: #278395; \r\n     background-image: linear-gradient(to right, #caebf1, #278395, #caebf1);\r\n}\r\ndiv.chat-placeholder{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    color:rgba(128, 128, 128, 0.3);\r\n}\r\ndiv.chat-placeholder i{\r\n    font-size:180px;\r\n}\r\ndiv.chat-placeholder p{\r\n    font-size: 45px;\r\n}\r\ndiv.bg-mensaje{\r\n    background-color: #caebf1;\r\n}\r\nli.reverse div.bg-mensaje{\r\n    background-color: #f6f6f6;\r\n}\r\ndiv.botonera button{\r\n    margin:5px;\r\n}\r\ntextarea{\r\n    border: 1px solid #2e9bb0;\r\n    color:#2e9bb0;\r\n}\r\ntextarea:focus{\r\n        color:#278395;\r\n        border: 1.5px solid #278395;\r\n}\r\n.btn-audio{\r\n    margin:5px 0px !important;\r\n    border-right: 1px solid #e0940f;\r\n}\r\n.btn-audio:last-of-type{\r\n    border-right:0px;\r\n\r\n}\r\n.color-animation {\r\n    /* fill: #fff; */\r\n    -webkit-animation: animation-button 2000ms forwards;\r\n    animation: animation-button 2000ms forwards;\r\n\r\n    /* font-size: 25vh; */\r\n}\r\n/* animando cambio de color en botones */\r\n@-webkit-keyframes animation-button {\r\n    0%   {color:#fff; }\r\n    25%  {color:#ff9292; }\r\n    50%  {color:#fa5959; }\r\n    75%  {color:#fd4830; }\r\n    100% {color:#ff0000; }\r\n}\r\n@keyframes animation-button {\r\n    0%   {color:#fff; }\r\n    25%  {color:#ff9292; }\r\n    50%  {color:#fa5959; }\r\n    75%  {color:#fd4830; }\r\n    100% {color:#ff0000; }\r\n}\r\n/* Fin de animación de cambio de color en botones */\r\n.chat-rbox{\r\n    max-height:60vh;\r\n    overflow-y: scroll;\r\n}\r\n::-webkit-scrollbar\r\n{\r\n  width: 3px;  /* for vertical scrollbars */\r\n  height: 3px; /* for horizontal scrollbars */\r\n}\r\n::-webkit-scrollbar-track\r\n{\r\n  background: #caebf1;\r\n  border-radius: 10px;\r\n}\r\n::-webkit-scrollbar-thumb\r\n{\r\n  background: #278395;\r\n  border-radius: 10px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/crm/crm.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/crm/crm.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n  <!-- ============================================================== -->\n  <!-- Chat component -->\n  <!-- ============================================================== -->\n    <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card m-b-0\">\n        <!-- .chat-row -->\n        <div class=\"chat-main-box\">\n          <!-- Clientes .chat-left-panel -->\n          <div class=\"row\">\n            <div class=\"col col-lg-3 col-md-3 col-sm-12 col-12\">\n              \n                <div class=\"form-material\" *ngIf=\"!chatProyectos\">\n                  <input [(ngModel)]=\"terminoBusqueda\"\n                         (keyup)=\"buscarCliente()\"\n                         name=\"clientesFiltrados\" \n                         class=\"form-control p-20\" type=\"text\" placeholder=\"Buscar Cliente\">\n                </div>\n                \n                <!-- Chat de clientes -->\n                <div class=\"chat-clientes\" *ngIf=\"!chatProyectos\">\n                  <ul class=\"chatonline style-none\">\n                    <li *ngFor=\"let cliente of clientesFiltrados; let i=index;\"\n                        (click)=\"seleccionarCliente(cliente,i)\">\n                      <a class=\"list-cliente\">\n                        <img [src]=\"cliente.imagen\" alt=\"user-img\" class=\"img-circle\"> \n                        <span>\n                          {{ cliente.nombre }}\n                          <small \n                            [ngClass]=\"{\n                              'text-success': cliente.estatus=='Activo', \n                              'text-muted':cliente.estatus=='Inactivo'\n                            }\">\n                              {{ cliente.estatus }}\n                          </small>\n                        </span>\n                      </a>\n                    </li>\n                 \n                    <li class=\"p-20\"></li>\n                  </ul>\n                </div>\n\n                <div class=\"container m-t-20\">\n                  <button *ngIf=\"!chatProyectos\" \n                          class=\"btn btn-success btn-block waves-effect waves-light\"\n                          data-toggle=\"modal\" \n                          data-target=\"#nuevoCliente\">Agregar Cliente</button>\n                </div>\n\n                <!-- Cliente Actual y proyectos -->\n                <div class=\"chat-clients\" *ngIf=\"chatProyectos\">\n                  <ul class=\"chatonline style-non cliente-actual\">\n                    <li \n                      data-toggle=\"modal\" \n                      data-target=\"#infoCliente\">\n                      <a href=\"javascript:void(0)\" class=\"list-cliente\">\n                        <img [src]=\"clienteActual.imagen\" alt=\"user-img\" class=\"img-circle\"> \n                        <span>\n                          {{ clienteActual.nombre }}\n                          <small \n                            [ngClass]=\"{\n                              'text-success': clienteActual.estatus=='Activo', \n                              'text-muted':clienteActual.estatus=='Inactivo'\n                            }\">\n                              {{ clienteActual.estatus }}\n                          </small>\n                        </span>\n                        <!-- <i class=\"fa fa-info-circle info-icon\"></i> -->\n                      </a>\n                    </li>\n                  </ul>\n\n                  <hr>\n                  \n                  <ul class=\"chatonline style-none\">\n                    <li *ngFor=\"let proyecto of proyectos; let i=index;\"\n                        (click)=\"mostrarChatProyecto(i); indexProyectoActual=i;\">\n                      <a href=\"javascript:void(0)\" class=\"list-cliente\">\n                        <img [src]=\"proyecto.imagen\" alt=\"user-img\" class=\"img-circle\">\n                        <span>\n                          {{ proyecto.nombre }}\n                          <small [ngClass]=\"{\n                              'text-success': proyecto.estatus=='Activo', \n                              'text-muted':proyecto.estatus=='Terminado'\n                            }\">\n                            {{ proyecto.estatus }}\n                          </small>\n                        </span>\n                      </a>\n                    </li>\n                  \n                    <li class=\"p-20\"></li>\n                  </ul>\n\n                  <button class=\"btn btn-success waves-effect waves-light btn-block\"\n                           type=\"button\"\n                           data-toggle=\"modal\" \n                           data-target=\"#nuevoProyecto\">Agregar Proyecto</button>\n\n                  <button class=\"btn btn-danger waves-effect waves-light btn-block\"\n                           (click)=\"chatProyectos=false; this.indexProyectoActual=null; chats=[]\">Regresar</button>\n                </div>\n\n            </div>\n            <!-- End Clientes .chat-left-panel -->\n            <!-- .chat-right-panel -->\n            \n            <div class=\"chat-right-aside chat-historial col col-lg-9 col-md-9 col-sm-12 col-12\">\n              \n              <div *ngIf=\"indexProyectoActual!=null\" class=\"row\">\n                <div class=\"col col-12 col-sm-9 col-md-9\">\n                  <h3>Historial del proyecto: {{ proyectos[indexProyectoActual].nombre }}</h3>\n                </div>\n\n                <div class=\"col col-12 col-sm-3 col-md-3\">\n                  <button class=\"btn btn-info waves-effect waves-light\"\n                          type=\"button\"\n                          data-toggle=\"modal\" \n                          data-target=\"#cotizacion\">Cotización <i class=\"fa fa-file-text-o\"></i></button>\n                </div>\n              </div>\n\n              <h3 *ngIf=\"indexProyectoActual==null\">Historial del proyecto</h3>\n\n                <hr>\n\n              <!-- Chat Body -->\n              <div id=\"chatBody\" class=\"chat-rbox\">\n                <ul class=\"chat-list p-20\">\n                  <!--chat Row -->\n\n                  <!-- Placeholder cuando no hay mensajes -->\n                  <div class=\"chat-placeholder\"\n                       *ngIf=\"chats.length==0\">\n                    <i class=\"fa fa-comments\"></i>\n                    <p>Sin Mensajes</p>\n                  </div>\n                  <!-- Fin de placeholder  -->\n                  <li *ngFor=\"let chat of chats\" [ngClass]=\"{'reverse': chat.usuario.nombre!='Michelle Felix'}\">\n                    <div *ngIf=\"chat.usuario.nombre=='Michelle Felix'\" class=\"chat-img\">\n                      <img [src]=\"chat.usuario.imagen\" alt=\"user\" />\n                    </div>\n                    <div class=\"chat-content\">\n                      <h5>{{ chat.usuario.nombre }}</h5>\n                      <div *ngIf=\"!chat.audio\" class=\"box bg-mensaje\">{{ chat.mensaje }}</div>\n                      <audio controls [src]=\"chat.audio\" *ngIf=\"chat.audio\">Audio</audio>\n                    </div>\n                    <div *ngIf=\"chat.usuario.nombre!='Michelle Felix'\" class=\"chat-img\">\n                      <img [src]=\"chat.usuario.imagen\" alt=\"user\" />\n                    </div>\n                    <div class=\"chat-time\">{{ chat.hora }}</div>\n                  </li>\n                </ul>\n              </div>\n\n              <hr>\n\n              <div class=\"card-body b-t\"\n                   *ngIf=\"indexProyectoActual!=null\">\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <textarea placeholder=\"Type your message here\" class=\"form-control\"\n                              [(ngModel)]=\"mensaje\"\n                              (keydown.enter)=\"agregarChat($event,false);\"></textarea>\n                  </div>\n\n                  <div class=\"col-12 text-left botonera\">\n\n                    <button type=\"button\" class=\"btn btn-info waves-effect waves-light\"\n                            (click)=\"agregarChat($event,false)\"><i class=\"fa fa-paper-plane-o\"></i> Send</button>\n                    <button type=\"button\" class=\"btn btn-success waves-effect waves-light\"><i class=\"fa fa-upload\"></i> File</button>\n                    <!-- Botonera de grabacion de audio -->\n                    <div class=\"btn-group\">\n                      <button type=\"button\" \n                              (click)=\"recordAudio()\" \n                              class=\"btn btn-warning waves-effect waves-light btn-audio\">\n                              <i class=\"fa fa-microphone color-animation\"\n                                 [ngClass]=\"{'color-animation': grabandoAudio}\"></i></button>\n                      <button id=\"stopButton\" \n                              (click)=\"stopRecording()\"\n                              class=\"btn btn-warning waves-effect waves-light btn-audio\">\n                              <i class=\"fa fa-stop\"></i></button>\n                      <button class=\"btn btn-warning btn-audio waves-effect waves-light\"\n                              (click)=\"playAudio()\"><i class=\"fa fa-play\"></i></button>\n                      <button class=\"btn btn-warning btn-audio waves-effect waves-light\"\n                              (click)=\"agregarChat($event,true)\">Enviar</button>\n                    </div>\n                    <!-- Termina botonera de grabación de audio -->\n\n                    <button class=\"btn btn-danger waves-effect waves-light\"\n                            [routerLink]=\"['/calendario']\"><i class=\"fa fa-calendar\"></i> Agenda</button>\n                    \n                  </div>\n                </div>\n              </div>\n              \n            </div>\n            <!-- .chat-right-panel -->\n          </div>\n        </div>\n        <!-- /.chat-row -->\n      </div>\n    </div>\n    \n    </div>\n  <!-- ============================================================== -->\n  <!-- End Chat Component -->\n  <!-- ============================================================== -->\n\n  <!-- Componente Modal -->\n  <app-modal\n     tituloModal=\"Nuevo Proyecto\"\n     (nuevoProyecto)=\"agregarProyecto($event)\"></app-modal>\n\n   <app-info-client\n    [cliente]=\"clienteActual\"\n    (cambiosCliente)=\"guardarCambiosCliente($event)\"></app-info-client>\n\n  <app-nuevo-cliente\n    (clienteNuevo)=\"registrarClienteNuevo($event)\"></app-nuevo-cliente>\n\n  <app-cotizacion *ngIf=\"indexProyectoActual!=null\"\n    [proyecto]=\"proyectos[indexProyectoActual]\"\n    [cliente]=\"clienteActual\"></app-cotizacion>"

/***/ }),

/***/ "./src/app/pages/crm/crm.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/crm/crm.component.ts ***!
  \********************************************/
/*! exports provided: CrmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmComponent", function() { return CrmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_voice_recorder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/voice-recorder.service */ "./src/app/services/voice-recorder.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrmComponent = /** @class */ (function () {
    function CrmComponent(audio, sanitizer, shared) {
        this.audio = audio;
        this.sanitizer = sanitizer;
        this.shared = shared;
        this.chatProyectos = false;
        this.clienteActual = {};
        this.grabandoAudio = false;
        this.mensaje = "";
        this.terminoBusqueda = "";
        this.clientesFiltrados = [];
        this.proyectos = [
            {
                clientId: 1,
                nombre: "Sala Cafetería",
                imagen: "../assets/images/gallery/chair.jpg",
                estatus: "Activo",
                chatProyecto: [
                    {
                        usuario: {
                            nombre: "Michelle Felix",
                            imagen: "../assets/images/users/1.jpg"
                        },
                        mensaje: "Lorem Ipsum is simply dummy text of the printing & type setting industry.",
                        fecha: "21/09/2018",
                        hora: "12:00 pm"
                    },
                    {
                        usuario: {
                            nombre: "Rodrigo Martinez",
                            imagen: "../assets/images/users/2.jpg"
                        },
                        mensaje: "Hola",
                        fecha: "21/09/2019",
                        hora: "3:00 pm"
                    }
                ]
            }
        ];
        this.clientes = [
            {
                nombre: "Michelle Felix",
                telefono: "477-123-45-67",
                direccion: "Marioano Escobedo 1300, Centro, León, Guanajuato",
                correo: "mobla@gmail.com",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo",
                clientId: 1
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                telefono: "477-123-45-67",
                direccion: "Marioano Escobedo 1300, Centro, León, Guanajuato",
                correo: "mobla@gmail.com",
                estatus: "Inactivo",
                clientId: 2
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            },
            {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo"
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                estatus: "Inactivo"
            }
        ];
        this.chats = [];
        this.buscarCliente();
    }
    CrmComponent.prototype.seleccionarCliente = function (cliente, index) {
        this.clienteActual = cliente;
        this.indexClienteActual = index;
        this.shared.clienteSeleccionado = cliente;
        this.chatProyectos = true;
    };
    CrmComponent.prototype.registrarClienteNuevo = function (nuevoCliente) {
        var cliente = {
            nombre: nuevoCliente.nombre,
            telefono: nuevoCliente.telefono,
            direccion: nuevoCliente.direccion,
            correo: nuevoCliente.correo,
            imagen: nuevoCliente.imagen,
            estatus: "Activo"
        };
        this.clientes.push(cliente);
        this.buscarCliente();
    };
    CrmComponent.prototype.guardarCambiosCliente = function (informacion) {
        var cliente = this.clientesFiltrados[this.indexClienteActual];
        cliente.nombre = informacion.nombre;
        cliente.telefono = informacion.telefono;
        cliente.direccion = informacion.direccion;
        cliente.correo = informacion.correo;
        this.clienteActual = this.clientesFiltrados[this.indexClienteActual];
    };
    CrmComponent.prototype.buscarCliente = function () {
        var _this = this;
        this.clientesFiltrados = this.clientes.filter(function (cliente) {
            var nombreCliente = cliente.nombre;
            return nombreCliente.includes(_this.terminoBusqueda);
        });
    };
    CrmComponent.prototype.recordAudio = function () {
        this.grabandoAudio = true;
        var stopButton = document.getElementById("stopButton");
        this.audio.grabarAudio(stopButton);
    };
    CrmComponent.prototype.stopRecording = function () {
        this.grabandoAudio = false;
    };
    CrmComponent.prototype.playAudio = function () {
        if (!this.audio.recordedAudio) {
            return;
        }
        this.audio.recordedAudio.play();
    };
    CrmComponent.prototype.agregarProyecto = function (proyecto) {
        var nuevoProyecto = {
            nombre: proyecto.nombreProyecto,
            imagen: "../assets/images/gallery/chair.jpg",
            descripcion: proyecto.descripcionProyecto,
            estatus: "Activo",
            chatProyecto: []
        };
        this.proyectos.push(nuevoProyecto);
    };
    CrmComponent.prototype.scrollBottom = function (element) {
        element.scrollTop = element.scrollHeight;
    };
    CrmComponent.prototype.agregarChat = function (event, esAudio) {
        var _this = this;
        //Previniendo comportamiento por default del botón enter
        if (event.keyCode == 13) {
            event.preventDefault();
        }
        //------------------------------------------------------
        //Evitando el envío de mensajes de texto vacios
        if (this.mensaje.trim().length <= 0 && !esAudio) {
            return;
        }
        //------------------------------------------------------
        //Evitando el envío de mensajes de audio vacios
        if (!this.audio.recordedAudio && esAudio) {
            return;
        }
        //------------------------------------------------------
        //Construyendo mensaje
        var chat = {
            usuario: {
                nombre: "Michelle Felix",
                imagen: "../assets/images/users/1.jpg"
            },
            mensaje: this.mensaje,
            audio: this.sanitizer.bypassSecurityTrustUrl(this.audio.recordedAudioUrl),
            fecha: "21/09/2018",
            hora: "12:00 pm"
        };
        //--------------------------------------------------------
        //Eliminando ruta audio en mensajes de texto
        if (!esAudio) {
            chat.audio = null;
        }
        //--------------------------------------------------------
        //Agregando el mensaje a arreglo de chats del proyecto
        this.proyectos[this.indexProyectoActual].chatProyecto.push(chat);
        //--------------------------------------------------------
        //Actualizando arreglo de chats actuales en chat body
        this.mostrarChatProyecto(this.indexProyectoActual);
        //--------------------------------------------------------
        //Limpiando text area
        this.mensaje = "";
        //Limpiando audio guardado
        this.audio.recordedAudio = null;
        this.audio.recordedAudioUrl = null;
        //Llamando Scroll
        var chatBody = document.getElementById("chatBody");
        setTimeout(function () {
            _this.scrollBottom(chatBody);
        });
        //-------------------------------------------------------
    };
    CrmComponent.prototype.mostrarChatProyecto = function (index) {
        this.chats = this.proyectos[index].chatProyecto;
        this.shared.proyectoSeleccionado = this.proyectos[index];
    };
    CrmComponent.prototype.ngOnInit = function () { };
    CrmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-crm",
            template: __webpack_require__(/*! ./crm.component.html */ "./src/app/pages/crm/crm.component.html"),
            styles: [__webpack_require__(/*! ./crm.component.custom.css */ "./src/app/pages/crm/crm.component.custom.css")]
        }),
        __metadata("design:paramtypes", [_services_voice_recorder_service__WEBPACK_IMPORTED_MODULE_1__["VoiceRecorderService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], CrmComponent);
    return CrmComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/graficas1/graficas1.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/graficas1/graficas1.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  graficas1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/graficas1/graficas1.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/graficas1/graficas1.component.ts ***!
  \********************************************************/
/*! exports provided: Graficas1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graficas1Component", function() { return Graficas1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Graficas1Component = /** @class */ (function () {
    function Graficas1Component() {
    }
    Graficas1Component.prototype.ngOnInit = function () {
    };
    Graficas1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-graficas1',
            template: __webpack_require__(/*! ./graficas1.component.html */ "./src/app/pages/graficas1/graficas1.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], Graficas1Component);
    return Graficas1Component;
}());



/***/ }),

/***/ "./src/app/pages/modal/cotizacion/cotizacion.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/modal/cotizacion/cotizacion.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.logo{\r\n    width:150px;\r\n}\r\n\r\ntd{\r\n    vertical-align: middle;\r\n}\r\n\r\ntd.clickable{\r\n    cursor: pointer;\r\n}\r\n\r\ntd.clickable:hover{\r\n    border:2px solid #caebf1;\r\n}\r\n\r\ntd.editando{\r\n    background-color:#caebf1;\r\n}\r\n\r\ndiv.politicas{\r\n    font-size:8px;\r\n}\r\n\r\nimg.product-image{\r\n    height: 50px;\r\n}\r\n\r\n.oculto{\r\n    display: none;\r\n}\r\n\r\n.modal-lg {\r\n    max-width: 85%;\r\n}\r\n\r\n@media print {\r\n\r\n    .no-print {\r\n        display: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/pages/modal/cotizacion/cotizacion.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/modal/cotizacion/cotizacion.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"cotizacion\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\">\n\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n\n    <div class=\"modal-content\">\n      <!-- Modal header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalLabel1\">Cotización: {{ proyecto.nombre }}</h4>\n        <button (click)=\"resetearModal()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      </div>\n      <!-- Fin de Modal header -->\n\n      <!-- Modal Body -->\n      <div class=\"modal-body p-l-5 p-r-5 p-t-0 p-b-0\">\n        <div class=\"card-body\">\n\n          <!-- Documento Cotización -->\n          <div id=\"documento-cotizacion\" class=\"container print-content\">\n\n            <!-- Header de cotizacion -->\n            <div class=\"row m-b-5\">\n\n              <div class=\"col col-md-12 m-b-30\">\n                <img class=\"logo pull-left\" src=\"../assets/images/mobla-logo.png\" alt=\"\">\n              </div>\n              \n            </div>\n            <div class=\"row\">\n              <div class=\"col col-md-12\">\n                <span class=\"pull-left\">\n                  Cotización: {{ cliente.nombre }}\n                </span>\n\n                <span class=\"pull-right\">\n                  León Gto. al {{ fecha | date:'fullDate'}}\n                </span>\n              </div>\n            </div>\n            <!-- Fin de header de cotizacion -->\n\n            <!-- Tabla de productos -->\n            <div class=\"row m-b-30\">\n              <div class=\"col col-md-12 p-l-10 p-r-10 table-responsive\">\n\n                <table  id=\"tablaCotizacion\" \n                        class=\"table editable-table table-bordered table-striped\">\n                  <thead>\n                    <tr>\n                      <th>Imágen</th>\n                      <th>Producto</th>\n                      <th>Descripción</th>\n                      <th>Cant.</th>\n                      <th [ngClass]=\"{'no-print': totalDescuento==0}\">Descuento</th>\n                      <th>Precio</th>\n                      <th>Importe</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let producto of productos; let i=index;\">\n                      <td class=\"text-center\"><img class=\"product-image\" src=\"../assets/images/gallery/chair2.jpg\"></td>\n                      <td>{{ producto.nombre }}</td>\n                      <td>{{ producto.descripcion }}</td>\n                      <td (click)=\"clearFieldCantidad($event,i)\" \n                          (keyup.enter)=\"loseFocus(i)\" \n                          (blur)=\"loseFocus(i)\" \n                          (input)=\"actualizandoCantidad($event,i)\" \n                          class=\"text-center clickable\"\n                           [ngClass]=\"{'editando': producto.editandoCantidad}\"\n                          contenteditable=\"true\">0</td>\n                      <td (click)=\"clearFieldDescuento($event,i)\"\n                          (keyup.enter)=\"loseFocusDescuento(i)\"\n                          (blur)=\"loseFocusDescuento(i)\"\n                          (input)=\"actualizarDescuento($event,i)\"\n                          class=\"text-center clickable\"\n                          [ngClass]=\"{\n                            'editando': producto.editandoDescuento,\n                            'no-print':totalDescuento==0\n                          }\"\n                          contenteditable=\"true\">0</td>\n                      <td (click)=\"clearFieldPrecio($event,i)\" \n                          (keyup.enter)=\"loseFocusPrecio(i)\" \n                          (blur)=\"loseFocusPrecio(i)\" \n                          (input)=\"actualizarPrecio($event,i)\" \n                          class=\"text-center clickable\"\n                          [ngClass]=\"{'editando': producto.editandoPrecio}\"\n                          contenteditable=\"true\">$8,000.00</td>\n                      <td class=\"text-center\">{{ producto.precio * producto.cantidad | currency:'MXN' }}</td>\n                    </tr>\n                  </tbody>\n                  <tfoot>\n                    <tr>\n                      <th><strong>SUBTOTAL</strong></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th [ngClass]=\"{'no-print': totalDescuento==0}\"></th>\n                      <th></th>\n                      <th class=\"text-center\">{{ totalImporte | currency:'MXN' }}</th>\n                    </tr>\n                    <tr [ngClass]=\"{'oculto': totalDescuento==0}\">\n                      <th><strong>DESCUENTO</strong></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th [ngClass]=\"{'no-print': totalDescuento==0}\"></th>\n                      <th></th>\n                      <th class=\"text-center\">{{ totalDescuento | currency:'MXN' }}</th>\n                    </tr>\n                    <tr>\n                      <th><strong>TOTAL</strong></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th [ngClass]=\"{'no-print': totalDescuento==0}\"></th>\n                      <th></th>\n                      <th class=\"text-center\">{{ totalImporte - totalDescuento | currency:'MXN' }}</th>\n                    </tr>\n                  </tfoot>\n\n                </table>\n                \n              </div>\n            </div>\n            <!-- Fin de tabla de productos -->\n\n            <!-- Políticas -->\n            <div class=\"politicas\">\n              <span><strong>Imágenes meramente ilustrativas</strong></span>\n            \n              <ol class=\"p-l-0 m-l-10\">\n                <li *ngFor=\"let politica of politicas\"\n                    class=\"m-0\">{{ politica }}</li>\n              </ol>\n            </div>\n            <!-- Fin de Políticas -->\n          \n\n          </div>\n          <!-- Fin de documento Cotización -->\n\n        </div>\n      </div>\n      <!-- Final de Modal Body -->\n\n      <!-- Modal Footer -->\n      <div class=\"modal-footer\">\n\n        <!-- Botones -->\n\n        <button type=\"button\"\n                class=\"btn btn-success waves-effect waves-light\"\n                (click)=\"imprimirCotizacion()\"\n                >Imprimir</button>\n\n        <button type=\"button\"\n                class=\"btn btn-warning waves-effect waves-light\"\n                 (click)=\"guardarCotizacion()\"\n                [ngClass]=\"{'disabled': !notaValida}\"\n                [attr.data-toggle]=\"(!notaValida)?'tooltip':null\"\n                [attr.data-original-title]=\"(!notaValida)?'Favor de validar la nota':null\"\n                [attr.data-placement]=\"(!notaValida)?'bottom':null\">Guardar</button>\n\n        <button type=\"button\"\n                (click)=\"resetearModal()\" \n                class=\"btn btn-danger waves-effect waves-light\" \n                data-dismiss=\"modal\">Salir</button>\n        <!-- Fin de botones -->\n\n      </div>\n      <!-- Fin de Modal Footer -->\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/modal/cotizacion/cotizacion.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/modal/cotizacion/cotizacion.component.ts ***!
  \****************************************************************/
/*! exports provided: CotizacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotizacionComponent", function() { return CotizacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CotizacionComponent = /** @class */ (function () {
    function CotizacionComponent(cotizacion) {
        this.cotizacion = cotizacion;
        //Inputs
        this.proyecto = {};
        this.cliente = {};
        //Variables
        this.fecha = Date.now();
        this.notaValida = true;
        this.totalImporte = 0;
        this.totalDescuento = 0;
        //Productos de la nota
        this.productos = [
            {
                nombre: "Sillón Murcielago",
                descripcion: "Sillón inspirado en las alas de los murcielagos",
                precio: 8000,
                cantidad: 0,
                descuento: 0,
                factorDescuento: 0,
                importe: 0,
                editandoCantidad: false,
                editandoPrecio: false,
                editandoDescuento: false
            },
            {
                nombre: "Sillón Murcielago",
                descripcion: "Sillón inspirado en las alas de los murcielagos",
                precio: 8000,
                cantidad: 0,
                descuento: 0,
                factorDescuento: 0,
                importe: 0,
                editandoCantidad: false,
                editandoPrecio: false,
                editandoDescuento: false
            }
        ];
        this.politicas = [
            "Cotización en moneda nacional.",
            "Vigencia de cotización: 15 días.",
            "Los precios incluyen flete siempre y cuando sea dentro del área metropolitana de León Gto.",
            "Los precios están sujetos a cambio sin previo aviso, excepto con anticipo recibido.",
            "Tiempo de entrega según previo acuerdo. (Siempre y cuando se dé cumplimiento a los pagos correspondientes).",
            "Ningún trabajo incluye trabajos de albañilería, electricidad, fontanería y pintura.",
            "No se aceptan cambios ni modificaciones al proyecto una vez autorizado por el cliente y pagado el anticipo.",
            "En caso de cancelación no se regresa el anticipo. ",
            "Nuestros productos están garantizados contra cualquier defecto de fabricación siempre y cuando se usen en forma adecuada y para lo que fueron diseñados. (El tiempo de garantía varía según producto).	",
            "En proyectos bajo diseño es necesario contar con una o varias imágenes claras de lo que se busca producir",
            "En proyectos bajo diseño pueden existir algunas variaciones, el cliente al aceptar el proyecto declara que es consiente del riesgo. ",
            "No nos hacemos responsables por los diferentes tonos que tome la madera ya que varía según: Humedad, origen y varios factores externos a nuestras 	posibilidades."
        ];
    }
    CotizacionComponent.prototype.ngOnInit = function () { };
    CotizacionComponent.prototype.resetearModal = function () { };
    CotizacionComponent.prototype.imprimirCotizacion = function () {
        var cotizacion = document.getElementById("documento-cotizacion");
        var domClone = cotizacion.cloneNode(true);
        var printSection = document.getElementById("printSection");
        printSection.innerHTML = "";
        printSection.appendChild(domClone);
        window.print();
    };
    CotizacionComponent.prototype.guardarCotizacion = function () { };
    CotizacionComponent.prototype.clearFieldDescuento = function (evento, i) {
        evento.srcElement.textContent = "";
        this.productos[i].editandoDescuento = true;
    };
    CotizacionComponent.prototype.clearFieldPrecio = function (evento, i) {
        evento.srcElement.textContent = "";
        this.productos[i].editandoPrecio = true;
    };
    CotizacionComponent.prototype.clearFieldCantidad = function (evento, i) {
        evento.srcElement.textContent = "";
        this.productos[i].editandoCantidad = true;
    };
    CotizacionComponent.prototype.calcularTotal = function () {
        var total = 0;
        var descuento = 0;
        this.productos.forEach(function (producto) {
            total += producto.importe;
            descuento += producto.descuento;
        });
        this.totalDescuento = descuento;
        this.totalImporte = total;
    };
    CotizacionComponent.prototype.formatNumber = function (monto) {
        var numeroString;
        var numeroNumber;
        //eliminando espacios
        numeroString = monto.trim().replace(" ", "");
        //eliminando símbolo $
        numeroString = numeroString.replace("$", "");
        //eliminando comas
        numeroString = numeroString.replace(",", "");
        //eliminando %
        numeroString = numeroString.replace("%", "");
        numeroNumber = Number(numeroString);
        return numeroNumber;
    };
    CotizacionComponent.prototype.validarNota = function () {
        //Obteniendo todas las filas de la tabla y definiendo la variable de chequeo
        var rows = document
            .getElementById("tablaCotizacion")
            .getElementsByTagName("tbody")
            .item(0)
            .getElementsByTagName("tr");
        var notaValida = true;
        //Iteramos las filas para validar que las columnas de numero sean numeros
        for (var fila = 1; fila < rows.length - 1; fila++) {
            var row = rows[fila];
            var celdas = row.getElementsByTagName("td");
            console.log(celdas);
            var producto = celdas.item(1).innerText;
            var descripcion = celdas.item(2).innerText;
            var cantidad = this.formatNumber(celdas.item(3).innerText);
            var descuento = this.formatNumber(celdas.item(4).innerText);
            var precio = this.formatNumber(celdas.item(5).innerText);
            var importe = this.formatNumber(celdas.item(6).innerText);
            //Si alguna no es un número seteamos la variable de chequeo a falso y rompemos el ciclo
            if (Number.isNaN(cantidad) ||
                Number.isNaN(precio) ||
                Number.isNaN(importe) ||
                Number.isNaN(descuento)) {
                notaValida = false;
                $(function () {
                    $('[data-toggle="tooltip"]').tooltip();
                });
                break;
            }
        }
        //Seteamos el valor de la variable del componente "notaValida"
        //al valor de nuestra variable de chequeo (true/false)
        this.notaValida = notaValida;
    };
    CotizacionComponent.prototype.loseFocusDescuento = function (index) {
        var celda = document
            .getElementsByTagName("tr")
            .item(index + 1)
            .getElementsByTagName("td")
            .item(4);
        var descuento = this.formatNumber(celda.textContent);
        if (Number.isNaN(descuento) || this.productos[index].cantidad == 0) {
            celda.innerText = "0";
            this.productos[index].factorDescuento = 0;
        }
        else {
            celda.innerText = descuento.toString();
            this.productos[index].factorDescuento = descuento;
        }
        this.validarNota();
        this.calcularTotal();
        celda.blur();
        this.productos[index].editandoDescuento = false;
    };
    CotizacionComponent.prototype.loseFocusPrecio = function (index) {
        var celda = document
            .getElementsByTagName("tr")
            .item(index + 1)
            .getElementsByTagName("td")
            .item(5);
        var precio = this.formatNumber(celda.textContent);
        if (Number.isNaN(precio) || precio == 0) {
            celda.innerText = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatCurrency"])(this.productos[index].precio, "es-Mx", "$").toString();
        }
        else {
            celda.innerText = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatCurrency"])(precio, "es-Mx", "$").toString();
        }
        //Actualizamos descuento
        var cantidad = this.productos[index].cantidad;
        var factorDescuento = this.productos[index].factorDescuento;
        this.productos[index].descuento =
            cantidad * precio * (factorDescuento / 100);
        this.validarNota();
        this.calcularTotal();
        celda.blur();
        this.productos[index].editandoPrecio = false;
    };
    CotizacionComponent.prototype.loseFocus = function (index) {
        var celda = document
            .getElementsByTagName("tr")
            .item(index + 1)
            .getElementsByTagName("td")
            .item(3);
        var cantidad = this.formatNumber(celda.textContent);
        if (Number.isNaN(cantidad)) {
            celda.textContent = this.productos[index].cantidad;
        }
        else {
            celda.textContent = this.productos[index].cantidad;
        }
        //Actualizamos descuento
        var precio = this.productos[index].precio;
        var factorDescuento = this.productos[index].factorDescuento;
        this.productos[index].descuento =
            cantidad * precio * (factorDescuento / 100);
        this.validarNota();
        this.calcularTotal();
        celda.blur();
        this.productos[index].editandoCantidad = false;
    };
    CotizacionComponent.prototype.actualizarPrecio = function (evento, index) {
        var precio = this.formatNumber(evento.srcElement.textContent);
        if (Number.isNaN(precio) || precio == 0) {
        }
        else {
            this.productos[index].precio = precio;
            this.productos[index].importe =
                this.productos[index].cantidad * this.productos[index].precio;
        }
    };
    CotizacionComponent.prototype.actualizarDescuento = function (evento, index) {
        //Eliminando espacios en blanco del texto recibido en el campo cantidad
        var descuento = evento.srcElement.textContent.trim().replace(" ", "");
        //Transformando el inner text a un numero
        var descuentoNumero = Number(descuento);
        //Validando si el número es un entero, cantidad no esta vacío y es un número
        if (Number.isInteger(descuentoNumero) &&
            descuento != "" &&
            !Number.isNaN(descuentoNumero)) {
            //Guardamos la nueva cantidad en nuestro arreglo de productos
            var precio = this.productos[index].precio;
            var cantidad = this.productos[index].cantidad;
            this.productos[index].factorDescuento = descuentoNumero;
            var calculoDescuento = (descuentoNumero / 100) * precio * cantidad;
            if (cantidad > 0) {
                this.productos[index].descuento = calculoDescuento;
            }
        }
        else {
            //Si es texto igualamos el factor de descuento a cero
            this.productos[index].factorDescuento = 0;
            var precio = this.productos[index].precio;
            var cantidad = this.productos[index].cantidad;
            var calculoDescuento = (descuentoNumero / 100) * precio * cantidad;
            if (cantidad > 0) {
                this.productos[index].descuento = calculoDescuento;
            }
        }
    };
    CotizacionComponent.prototype.actualizandoCantidad = function (evento, index) {
        //Eliminando espacios en blanco del texto recibido en el campo cantidad
        var cantidad = evento.srcElement.textContent.trim().replace(" ", "");
        //Transformando el inner text a un numero
        var cantidadNumero = Number(cantidad);
        //Validando si el número es un entero, cantidad no esta vacío y es un número
        if (Number.isInteger(cantidadNumero) &&
            cantidad != "" &&
            !Number.isNaN(cantidadNumero)) {
            //Guardamos la nueva cantidad en nuestro arreglo de productos
            this.productos[index].cantidad = cantidadNumero;
            this.productos[index].importe =
                cantidadNumero * this.productos[index].precio;
        }
        else {
            //Si es texto igualamos al input recibido sin espacios
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CotizacionComponent.prototype, "proyecto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CotizacionComponent.prototype, "cliente", void 0);
    CotizacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-cotizacion",
            template: __webpack_require__(/*! ./cotizacion.component.html */ "./src/app/pages/modal/cotizacion/cotizacion.component.html"),
            styles: [__webpack_require__(/*! ./cotizacion.component.css */ "./src/app/pages/modal/cotizacion/cotizacion.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], CotizacionComponent);
    return CotizacionComponent;
}());



/***/ }),

/***/ "./src/app/pages/modal/info-client/info-client.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modal/info-client/info-client.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nimg.profile{\r\n    width:100px;\r\n}\r\n\r\nlabel{\r\n    font-weight: bold;\r\n}\r\n\r\nhr{\r\n     border: 0; \r\n     height: 1px; \r\n     background: #278395; \r\n     background-image: linear-gradient(to right, #caebf1, #278395, #caebf1);\r\n}\r\n\r\n/* h3,label{\r\n    color:#278395; \r\n} */\r\n\r\n/* span{\r\n    color:#2e9bb0;\r\n} */"

/***/ }),

/***/ "./src/app/pages/modal/info-client/info-client.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/modal/info-client/info-client.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"infoCliente\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\">\n \n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n\n    <div class=\"modal-content\">\n      <!-- Modal header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalLabel1\">Información de: <small>{{ cliente.nombre }}</small></h4>\n        <button (click)=\"resetearModal();\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      </div>\n      <!-- Fin de Modal header -->\n\n      <!-- Modal Body -->\n      <div class=\"modal-body p-l-5 p-r-5 p-t-0 p-b-0\">\n\n        <!-- Vista de información -->\n        <div class=\"card-body\">\n          <form class=\"form-horizontal\" role=\"form\">\n            <div class=\"form-body\">\n\n              <div class=\"text-center\">\n                <img *ngIf=\"cliente.imagen\" class=\"profile img-circle m-b-10\" [src]=\"cliente.imagen\">\n                <h3 class=\"box-title font-bold\">{{ cliente.nombre }}</h3>\n              </div>\n              \n              <hr class=\"m-t-0\"\n                  [ngClass]=\"{\n                    'm-b-40': !editando\n                  }\">\n\n              <!-- Alineación de información centrada -->\n              <div *ngIf=\"!editando\"\n                   class=\"animated\"\n                   [ngClass]=\"{ \n                      'bounceInDown': !editando, \n                      'bounceOutDown': outAnimation}\">\n                <div class=\"text-center\">\n                  <label class=\"control-label\">Nombre:</label>\n                  <span class=\"form-control-static\"> {{ cliente.nombre }} </span>\n                </div>\n                \n                <br>\n                \n                <div class=\"text-center\">\n                  <label class=\"control-label\">Teléfono:</label>\n                  <span class=\"form-control-static\"> {{ cliente.telefono}} </span>\n                </div>\n                \n                <br>\n                \n                <div class=\"text-center\">\n                  <label class=\"control-label\">Dirección:</label>\n                  <span class=\"form-control-static\"> {{ cliente.direccion }} </span>\n                </div>\n                \n                <br>\n                \n                <div class=\"text-center\">\n                  <label class=\"control-label\">Email:</label>\n                  <span class=\"form-control-static\"> {{ cliente.correo }} </span>\n                </div>\n              </div>\n              <!-- Fin de información centrada\n\n              <!-- Alineación de información izquierda (basada en columnas) -->\n              <!-- <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group row\">\n                    <label class=\"control-label text-right col-md-3\">Nombre:</label>\n                    <div class=\"col-md-9\">\n                      <p class=\"form-control-static\"> {{ cliente.nombre }} </p>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group row\">\n                    <label class=\"control-label text-right col-md-3\">Teléfono:</label>\n                    <div class=\"col-md-9\">\n                      <p class=\"form-control-static\"> 477-238-25-25 </p>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group row\">\n                    <label class=\"control-label text-right col-md-3\">Dirección</label>\n                    <div class=\"col-md-9\">\n                      <p class=\"form-control-static\"> Violetas 110, Jardínes de Jerez, León, Gto. </p>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group row\">\n                    <label class=\"control-label text-right col-md-3\">Email:</label>\n                    <div class=\"col-md-9\">\n                      <p class=\"form-control-static\"> mich.feloz@gmail.com </p>\n                    </div>\n                  </div>\n                </div>\n              </div> -->\n\n              <!-- Fin de información izquierda -->\n\n              <!-- Panel de edición de información del cliente -->\n              <div *ngIf=\"editando\"\n                   class=\"animated\"\n                   [ngClass]=\"{\n                                'bounceInDown': editando,\n                                 'bounceOutDown': outAnimation\n                              }\">\n\n                <form class=\"form-horizontal p-t-20\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 control-label\">Nombre*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-user\"></i></div>\n                        <input  name=\"nuevoNombre\"\n                                [(ngModel)]=\"nuevoNombre\"\n                                type=\"text\" class=\"form-control\" placeholder=\"Nombre del Cliente\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label  class=\"col-sm-3 control-label\">Teléfono*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-mobile\"></i></div>\n                        <input  name=\"nuevoTelefono\"\n                                [(ngModel)]=\"nuevoTelefono\" \n                                type=\"text\" class=\"form-control\" placeholder=\"Teléfono (sólo números)\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 control-label\">Dirección*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-location-pin\"></i></div>\n                        <input  name=\"nuevaDireccion\" \n                                [(ngModel)]=\"nuevaDireccion\"\n                                type=\"text\" class=\"form-control\" placeholder=\"Calle #, Colonia, Ciudad, Estado\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row m-b-0\">\n                    <label class=\"col-sm-3 control-label\">Email</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-email\"></i></div>\n                        <input  name=\"nuevoCorreo\"\n                                [(ngModel)]=\"nuevoCorreo\"\n                                type=\"email\" class=\"form-control\" placeholder=\"Correo electrónico\">\n                      </div>\n                    </div>\n                  </div>\n                  \n                </form>\n\n              </div>\n              <!-- Fin de panel de edición de información del cliente -->\n\n            </div>\n          </form>\n        </div>\n\n      </div>\n      <!-- Fin de Modal Body -->\n\n      <!-- Modal Footer -->\n      <div class=\"modal-footer\">\n\n        <!-- Botones vista información -->\n        <button *ngIf=\"!editando\"\n                (click)=\"cerrarInformacion()\"\n                type=\"button\" class=\"btn btn-success waves-effect waves-light\">Editar</button>\n        <button *ngIf=\"!editando\"\n                type=\"button\" class=\"btn btn-danger waves-effect waves-light\" data-dismiss=\"modal\">Salir</button>\n        <!-- Fin de botones vista información -->\n\n        <!-- Botones vista edición -->\n        <button *ngIf=\"editando\" \n                (click)=\"guardarCambios()\"\n                class=\"btn btn-warning waves-effect waves-light\">Guardar</button>\n        <button *ngIf=\"editando\"\n                (click)=\"cerrarEdicion()\" \n                class=\"btn btn-danger waves-effect waves-light\">Cancelar</button>\n        <!-- Fin de botones vista edición -->\n\n      </div>\n      <!-- Fin de Modal Footer -->\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/modal/info-client/info-client.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/modal/info-client/info-client.component.ts ***!
  \******************************************************************/
/*! exports provided: InfoClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoClientComponent", function() { return InfoClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoClientComponent = /** @class */ (function () {
    function InfoClientComponent() {
        this.cliente = {};
        this.cambiosCliente = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editando = false;
        this.outAnimation = false;
    }
    InfoClientComponent.prototype.ngOnInit = function () { };
    InfoClientComponent.prototype.resetearModal = function () {
        this.editando = false;
        this.outAnimation = false;
    };
    InfoClientComponent.prototype.ngOnChanges = function () {
        this.nombre = this.cliente.nombre;
        this.telefono = this.cliente.telefono;
        this.direccion = this.cliente.direccion;
        this.correo = this.cliente.correo;
    };
    InfoClientComponent.prototype.guardarCambios = function () {
        this.nombre = this.nuevoNombre;
        this.telefono = this.nuevoTelefono;
        this.direccion = this.nuevaDireccion;
        this.correo = this.nuevoCorreo;
        var nuevaInformacion = {
            nombre: this.nuevoNombre,
            telefono: this.nuevoTelefono,
            direccion: this.nuevaDireccion,
            correo: this.nuevoCorreo
        };
        this.cambiosCliente.emit(nuevaInformacion);
        this.cerrarEdicion();
    };
    InfoClientComponent.prototype.cerrarEdicion = function () {
        var _this = this;
        this.outAnimation = true;
        setTimeout(function () {
            _this.editando = false;
            _this.outAnimation = false;
        }, 500);
    };
    InfoClientComponent.prototype.cerrarInformacion = function () {
        var _this = this;
        this.outAnimation = true;
        setTimeout(function () {
            _this.editando = true;
            _this.outAnimation = false;
        }, 500);
        this.nuevoNombre = this.nombre;
        this.nuevoTelefono = this.telefono;
        this.nuevaDireccion = this.direccion;
        this.correo = this.nuevoCorreo;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoClientComponent.prototype, "cliente", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InfoClientComponent.prototype, "cambiosCliente", void 0);
    InfoClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-info-client",
            template: __webpack_require__(/*! ./info-client.component.html */ "./src/app/pages/modal/info-client/info-client.component.html"),
            styles: [__webpack_require__(/*! ./info-client.component.css */ "./src/app/pages/modal/info-client/info-client.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoClientComponent);
    return InfoClientComponent;
}());



/***/ }),

/***/ "./src/app/pages/modal/modal.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/modal/modal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.disabled{\r\n    cursor: not-allowed;\r\n}"

/***/ }),

/***/ "./src/app/pages/modal/modal.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/modal/modal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Ejemplo botones -->\n<!-- <div class=\"button-box\">\n  <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@mdo\">Open\n    modal for @mdo</button>\n  <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@fat\">Open modal\n    for @fat</button>\n  <button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@getbootstrap\">Open\n    modal for @getbootstrap</button>\n</div> -->\n\n<!-- Modal con inputs -->\n<div class=\"modal fade\" id=\"nuevoProyecto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalLabel1\">{{ tituloModal }}</h4>\n        <button (click)=\"resetearModal()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      </div>\n\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"recipient-name\" class=\"control-label\">Proyecto*:</label>\n            <input type=\"text\" class=\"form-control\" id=\"recipient-name1\"\n                    [(ngModel)]=\"nombreProyecto\"\n                    name=\"nombreProyecto\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"message-text\" class=\"control-label\">Descripción*:</label>\n            <textarea class=\"form-control\" id=\"message-text1\"\n                      [(ngModel)]=\"descripcionProyecto\"\n                      name=\"descripcionProyecto\"></textarea>\n          </div>\n        </form>\n\n      </div>\n      <div class=\"modal-footer\">\n        \n        <button (click)=\"guardarProyecto()\"\n                [ngClass]=\"{ 'disabled': (nombreProyecto=='' || descripcionProyecto=='') }\"\n                type=\"button\" \n                class=\"btn btn-success waves-effect waves-light\"\n                [attr.data-toggle]=\"(nombreProyecto=='' || descripcionProyecto=='')?'tooltip':null\"\n                [attr.data-original-title]=\"(nombreProyecto=='' || descripcionProyecto=='')?mensajeRequeridos:null\"\n                [attr.data-placement]=\"(nombreProyecto=='' || descripcionProyecto=='')?'bottom':null\"\n                [attr.data-dismiss]=\"(nombreProyecto!='' && descripcionProyecto!='')?'modal':''\">Agregar</button>\n\n        <button (click)=\"resetearModal()\" \n                type=\"button\" \n                class=\"btn btn-danger waves-effect waves-light\" \n                data-dismiss=\"modal\">Cancelar</button>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/modal/modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/modal/modal.component.ts ***!
  \************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.tituloModal = "Nuevo Proyecto";
        this.nuevoProyecto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nombreProyecto = "";
        this.descripcionProyecto = "";
        this.mensajeRequeridos = "Favor de completar el formulario";
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.resetearModal = function () {
        this.nombreProyecto = "";
        this.descripcionProyecto = "";
    };
    ModalComponent.prototype.guardarProyecto = function () {
        //validando que el campo nombre de proyecto y descripción de proyecto no esten vacios
        if (this.nombreProyecto == "" || this.descripcionProyecto == "") {
            return;
        }
        this.nuevoProyecto.emit({
            nombreProyecto: this.nombreProyecto,
            descripcionProyecto: this.descripcionProyecto
        });
        this.nombreProyecto = "";
        this.descripcionProyecto = "";
        $('#nuevoProyecto').modal('toggle');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "tituloModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ModalComponent.prototype, "nuevoProyecto", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-modal",
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/pages/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/pages/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/modal/nuevo-cliente/nuevo-cliente.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/modal/nuevo-cliente/nuevo-cliente.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.profile{\r\n    width:100px;\r\n    border-radius:100%;\r\n}\r\n\r\nlabel{\r\n    font-weight: bold;\r\n}\r\n\r\nbutton.disabled{\r\n    cursor: not-allowed;\r\n}\r\n\r\nhr{\r\n     border: 0; \r\n     height: 1px; \r\n     background: #278395; \r\n     background-image: linear-gradient(to right, #caebf1, #278395, #caebf1);\r\n}\r\n\r\ndiv.image-container .after{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: none;\r\n    color: rgb(200, 200, 200);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.image-container img {display: block;}\r\n\r\n.image-container {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.image-container:hover .after {\r\n    display: block;\r\n    background: rgba(0, 0, 0, .6);\r\n}\r\n\r\ni.icon-center{\r\n\r\n    font-size: 30px;\r\n    margin-top:50%;\r\n    margin-bottom: 50%;\r\n\r\n    -webkit-transform: translateY(-15px);\r\n\r\n            transform: translateY(-15px);\r\n\r\n}"

/***/ }),

/***/ "./src/app/pages/modal/nuevo-cliente/nuevo-cliente.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/modal/nuevo-cliente/nuevo-cliente.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"nuevoCliente\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\">\n  \n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n\n    <div class=\"modal-content\">\n      <!-- Modal header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalLabel1\">Registrar Cliente</h4>\n        <button (click)=\"resetearModal()\" \n                type=\"button\" \n                class=\"close\" \n                data-dismiss=\"modal\" \n                aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      </div>\n      <!-- Fin de Modal header -->\n      \n      <!-- Modal Body -->\n      <div class=\"modal-body p-l-5 p-r-5 p-t-0 p-b-0\">\n        <div class=\"card-body\">\n          <form class=\"form-horizontal\" role=\"form\">\n            <div class=\"form-body\">\n\n              <div class=\"text-center\">\n                <div class=\"image-container\">\n                  <img class=\"profile img-circle\" src=\"../assets/images/users/default.png\">\n                  <div class=\"after text-center\"><i class=\"fa fa-plus icon-center\"></i></div>\n                </div>\n                <h3 class=\"box-title font-bold\">{{ nombre }}</h3>\n              </div>\n\n              <hr class=\"m-t-0\">\n\n              <!-- Panel de ingreso de información del cliente -->\n              <div>\n              \n                <form class=\"form-horizontal p-t-20\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 control-label\">Nombre*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-user\"></i></div>\n                        <input (keyup)=\"validarFormulario()\" name=\"nombre\" [(ngModel)]=\"nombre\" type=\"text\" class=\"form-control\" placeholder=\"Nombre del Cliente\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 control-label\">Teléfono*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-mobile\"></i></div>\n                        <input (keyup)=\"validarFormulario()\" name=\"telefono\" [(ngModel)]=\"telefono\" type=\"text\" class=\"form-control\" placeholder=\"Teléfono (sólo números)\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 control-label\">Dirección*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-location-pin\"></i></div>\n                        <input (keyup)=\"validarFormulario()\" name=\"direccion\" [(ngModel)]=\"direccion\" type=\"text\" class=\"form-control\" placeholder=\"Calle #, Colonia, Ciudad, Estado\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row m-b-0\">\n                    <label class=\"col-sm-3 control-label\">Email</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-email\"></i></div>\n                        <input (keyup)=\"validarFormulario()\" name=\"correo\" [(ngModel)]=\"correo\" type=\"email\" class=\"form-control\" placeholder=\"Correo electrónico\">\n                      </div>\n                    </div>\n                  </div>\n              \n                </form>\n              \n              </div>\n              <!-- Fin de panel de edición de información del cliente -->\n            \n            </div>\n          </form>\n        </div>\n      </div>\n\n      <!-- Modal Footer -->\n      <div class=\"modal-footer\">\n\n        <!-- Botones -->\n        <button (click)=\"registrarCliente()\"\n                type=\"button\"\n                [attr.data-toggle]=\"(!completo)?'tooltip':null\"\n                [attr.data-title]=\"(!completo)?mensajeRequeridos:null\"\n                [attr.data-placement]=\"(!completo)?'bottom':null\"\n                 [ngClass]=\"{ 'disabled': !completo }\"\n                class=\"btn btn-success waves-effect waves-light\">Registrar</button>\n\n        <button type=\"button\"\n                (click)=\"resetearModal()\" \n                class=\"btn btn-danger waves-effect waves-light\" \n                data-dismiss=\"modal\">Salir</button>\n        <!-- Fin de botones -->\n\n      </div>\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/modal/nuevo-cliente/nuevo-cliente.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/modal/nuevo-cliente/nuevo-cliente.component.ts ***!
  \**********************************************************************/
/*! exports provided: NuevoClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoClienteComponent", function() { return NuevoClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NuevoClienteComponent = /** @class */ (function () {
    function NuevoClienteComponent() {
        this.clienteNuevo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mensajeRequeridos = "Favor de completar el formulario";
        this.completo = false;
        this.nombre = '';
        this.telefono = '';
        this.direccion = '';
        this.correo = '';
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }
    NuevoClienteComponent.prototype.ngOnInit = function () { };
    NuevoClienteComponent.prototype.resetearModal = function () {
        this.nombre = "";
        this.telefono = "";
        this.direccion = "";
        this.correo = "";
    };
    NuevoClienteComponent.prototype.validarFormulario = function () {
        if (this.nombre == '' || this.telefono == '' || this.direccion == '') {
            this.completo = false;
        }
        else {
            this.completo = true;
        }
    };
    NuevoClienteComponent.prototype.registrarCliente = function () {
        if (this.nombre == '' || this.telefono == '' || this.direccion == '') {
            return;
        }
        var nuevoCliente = {
            'nombre': this.nombre,
            'telefono': this.telefono,
            'direccion': this.direccion,
            'correo': this.correo,
            'imagen': '../assets/images/users/default.png'
        };
        this.clienteNuevo.emit(nuevoCliente);
        $("#nuevoCliente").modal("toggle");
        this.resetearModal();
        this.validarFormulario();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NuevoClienteComponent.prototype, "clienteNuevo", void 0);
    NuevoClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-nuevo-cliente",
            template: __webpack_require__(/*! ./nuevo-cliente.component.html */ "./src/app/pages/modal/nuevo-cliente/nuevo-cliente.component.html"),
            styles: [__webpack_require__(/*! ./nuevo-cliente.component.css */ "./src/app/pages/modal/nuevo-cliente/nuevo-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NuevoClienteComponent);
    return NuevoClienteComponent;
}());



/***/ }),

/***/ "./src/app/pages/modal/nuevo-evento/nuevo-evento.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/modal/nuevo-evento/nuevo-evento.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    margin:0px;\r\n}\r\n\r\nhr{\r\n     border: 0; \r\n     height: 1px; \r\n     background: #278395; \r\n     background-image: linear-gradient(to right, #caebf1, #278395, #caebf1);\r\n}\r\n\r\nimg.profile{\r\n    width: 90px;\r\n}\r\n\r\n.input-group-addon{\r\n    background-color: #278395;\r\n    border-color: #278395;\r\n    color:#caebf1;\r\n}\r\n\r\ninput.form-control{\r\n    border-color:#278395;\r\n}\r\n\r\ndiv.info{\r\n    font-size: smaller;\r\n}"

/***/ }),

/***/ "./src/app/pages/modal/nuevo-evento/nuevo-evento.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/modal/nuevo-evento/nuevo-evento.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"nuevoEvento\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalLabel1\">Gestión de evento</h4>\n        <button (click)=\"resetearModal()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      </div>\n\n      <div class=\"modal-body\">\n\n        <!-- Datos del cliente y proyecto -->\n        <div *ngIf=\"(cliente.nombre && proyecto.nombre)\" class=\"row\">\n          <div class=\"col col-md-3 text-center\">\n            <img class=\"img-circle profile\" [src]=\"cliente.imagen\">\n          </div>\n          <div class=\"col col-md-9 p-l-0 info\">\n            <p>Cliente: {{ cliente.nombre }}</p>\n            <p>Teléfono: {{ cliente.telefono }}</p>\n            <p>Dirección: {{ cliente.direccion }}</p>\n            <p>Proyecto: {{ proyecto.nombre }}</p>\n          </div>\n        </div>\n        <!-- Fin de datos del cliente y proyecto -->\n        <hr *ngIf=\"(cliente.nombre && proyecto.nombre)\">\n\n        <form class=\"form-horizontal p-l-20 p-r-20\">\n\n          <div class=\"form-group\">\n            <label class=\"col-sm-3 control-label\">Evento*</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-addon\"><i class=\"ti-calendar\"></i></div>\n                <input name=\"nombreEvento\" [(ngModel)]=\"nombreEvento\" type=\"text\" class=\"form-control\" placeholder=\"Ingresa un evento\">\n              </div>\n          </div>\n\n          <div class=\"form-group m-l-10\">\n            <div class=\"checkbox checkbox-success\">\n              <input id=\"checkbox1\" type=\"checkbox\">\n              <label for=\"checkbox1\"> Completado? </label>\n            </div>\n          </div>\n\n        </form>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-success\"\n                (click)=\"guardarEvento()\"\n                data-dismiss=\"modal\">Guardar</button>\n        <button class=\"btn btn-danger\"\n                (click)=\"resetearModal()\"\n                 data-dismiss=\"modal\">Cancelar</button>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/modal/nuevo-evento/nuevo-evento.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/modal/nuevo-evento/nuevo-evento.component.ts ***!
  \********************************************************************/
/*! exports provided: NuevoEventoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoEventoComponent", function() { return NuevoEventoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NuevoEventoComponent = /** @class */ (function () {
    function NuevoEventoComponent(shared) {
        this.shared = shared;
        this.nuevoEvento = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nombreEvento = "";
        this.claseEvento = "primary";
        this.cliente = {};
        this.proyecto = {};
        console.log(this.shared.clienteSeleccionado);
        console.log(this.shared.proyectoSeleccionado);
        this.cliente = this.shared.clienteSeleccionado;
        this.proyecto = this.shared.proyectoSeleccionado;
    }
    NuevoEventoComponent.prototype.ngOnInit = function () { };
    NuevoEventoComponent.prototype.guardarEvento = function () {
        if (this.nombreEvento != '') {
            this.nuevoEvento.emit({
                'nombreEvento': this.nombreEvento
            });
        }
        this.resetearModal();
    };
    NuevoEventoComponent.prototype.resetearModal = function () {
        this.nombreEvento = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NuevoEventoComponent.prototype, "nuevoEvento", void 0);
    NuevoEventoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-nuevo-evento",
            template: __webpack_require__(/*! ./nuevo-evento.component.html */ "./src/app/pages/modal/nuevo-evento/nuevo-evento.component.html"),
            styles: [__webpack_require__(/*! ./nuevo-evento.component.css */ "./src/app/pages/modal/nuevo-evento/nuevo-evento.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], NuevoEventoComponent);
    return NuevoEventoComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Main wrapper - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<div id=\"main-wrapper\">\n\n  <app-header></app-header>\n\n  <app-sidebar></app-sidebar>\n\n  <!-- ============================================================== -->\n  <!-- Page wrapper  -->\n  <!-- ============================================================== -->\n  <div class=\"page-wrapper\">\n\n    <!-- ============================================================== -->\n    <!-- Container fluid  -->\n    <!-- ============================================================== -->\n    <div class=\"container-fluid\">\n      <app-breadcrumbs></app-breadcrumbs>\n      <!-- ============================================================== -->\n      <!-- Start Page Content -->\n      <!-- ============================================================== -->\n\n      <router-outlet></router-outlet>\n\n      <!-- <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            This is some text within a card block.\n                        </div>\n                    </div>\n                </div>\n            </div> -->\n      <!-- ============================================================== -->\n      <!-- End PAge Content -->\n      <!-- ============================================================== -->\n    </div>\n    <!-- ============================================================== -->\n    <!-- END Container fluid  -->\n    <!-- ============================================================== -->\n\n  </div>\n  <!-- ============================================================== -->\n  <!-- END Page wrapper  -->\n  <!-- ============================================================== -->\n</div>"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/es-MX */ "./node_modules/@angular/common/locales/es-MX.js");
/* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graficas1/graficas1.component */ "./src/app/pages/graficas1/graficas1.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/pages/progress/progress.component.ts");
/* harmony import */ var _crm_crm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crm/crm.component */ "./src/app/pages/crm/crm.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/pages/modal/modal.component.ts");
/* harmony import */ var _modal_info_client_info_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal/info-client/info-client.component */ "./src/app/pages/modal/info-client/info-client.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages.routes */ "./src/app/pages/pages.routes.ts");
/* harmony import */ var _modal_nuevo_cliente_nuevo_cliente_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/nuevo-cliente/nuevo-cliente.component */ "./src/app/pages/modal/nuevo-cliente/nuevo-cliente.component.ts");
/* harmony import */ var _modal_cotizacion_cotizacion_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/cotizacion/cotizacion.component */ "./src/app/pages/modal/cotizacion/cotizacion.component.ts");
/* harmony import */ var _calendario_calendario_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./calendario/calendario.component */ "./src/app/pages/calendario/calendario.component.ts");
/* harmony import */ var _pipes_mes_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pipes/mes.pipe */ "./src/app/pipes/mes.pipe.ts");
/* harmony import */ var _modal_nuevo_evento_nuevo_evento_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modal/nuevo-evento/nuevo-evento.component */ "./src/app/pages/modal/nuevo-evento/nuevo-evento.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Locales

Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_3___default.a, "es-Mx");
//Pages





//Modals









var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _pages_routes__WEBPACK_IMPORTED_MODULE_12__["PAGES_ROUTES"]
            ],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'es-Mx' }
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_6__["Graficas1Component"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_7__["ProgressComponent"],
                _pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"],
                _crm_crm_component__WEBPACK_IMPORTED_MODULE_8__["CrmComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
                _modal_info_client_info_client_component__WEBPACK_IMPORTED_MODULE_10__["InfoClientComponent"],
                _modal_nuevo_cliente_nuevo_cliente_component__WEBPACK_IMPORTED_MODULE_13__["NuevoClienteComponent"],
                _modal_cotizacion_cotizacion_component__WEBPACK_IMPORTED_MODULE_14__["CotizacionComponent"],
                _calendario_calendario_component__WEBPACK_IMPORTED_MODULE_15__["CalendarioComponent"],
                _pipes_mes_pipe__WEBPACK_IMPORTED_MODULE_16__["MesPipe"],
                _modal_nuevo_evento_nuevo_evento_component__WEBPACK_IMPORTED_MODULE_17__["NuevoEventoComponent"]
            ],
            exports: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_6__["Graficas1Component"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_7__["ProgressComponent"],
                _pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routes.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.routes.ts ***!
  \***************************************/
/*! exports provided: PAGES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGES_ROUTES", function() { return PAGES_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/pages/progress/progress.component.ts");
/* harmony import */ var _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graficas1/graficas1.component */ "./src/app/pages/graficas1/graficas1.component.ts");
/* harmony import */ var _crm_crm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crm/crm.component */ "./src/app/pages/crm/crm.component.ts");
/* harmony import */ var _calendario_calendario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendario/calendario.component */ "./src/app/pages/calendario/calendario.component.ts");







var pagesRoutes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
        children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
            { path: 'progress', component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_3__["ProgressComponent"] },
            { path: 'graficas1', component: _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_4__["Graficas1Component"] },
            { path: 'crm', component: _crm_crm_component__WEBPACK_IMPORTED_MODULE_5__["CrmComponent"] },
            { path: 'calendario', component: _calendario_calendario_component__WEBPACK_IMPORTED_MODULE_6__["CalendarioComponent"] },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
];
var PAGES_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(pagesRoutes);


/***/ }),

/***/ "./src/app/pages/progress/progress.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/progress/progress.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  progress works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/progress/progress.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/progress/progress.component.ts ***!
  \******************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
    }
    ProgressComponent.prototype.ngOnInit = function () {
    };
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/pages/progress/progress.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/pipes/mes.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipes/mes.pipe.ts ***!
  \***********************************/
/*! exports provided: MesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesPipe", function() { return MesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MesPipe = /** @class */ (function () {
    function MesPipe() {
    }
    MesPipe.prototype.transform = function (mesNum) {
        var mesStr = '';
        switch (mesNum) {
            case 0:
                mesStr = 'Enero';
                break;
            case 1:
                mesStr = 'Febrero';
                break;
            case 2:
                mesStr = 'Marzo';
                break;
            case 3:
                mesStr = 'Abril';
                break;
            case 4:
                mesStr = 'Mayo';
                break;
            case 5:
                mesStr = 'Junio';
                break;
            case 6:
                mesStr = 'Julio';
                break;
            case 7:
                mesStr = 'Agosto';
                break;
            case 8:
                mesStr = 'Septiembre';
                break;
            case 9:
                mesStr = 'Octubre';
                break;
            case 10:
                mesStr = 'Noviembre';
                break;
            case 11:
                mesStr = 'Diciembre';
                break;
            default:
                break;
        }
        return mesStr;
    };
    MesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'mes'
        })
    ], MesPipe);
    return MesPipe;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = /** @class */ (function () {
    function SharedService() {
        this.clienteSeleccionado = {};
        this.proyectoSeleccionado = {};
        this.clientes = [
            {
                nombre: "Michelle Felix",
                telefono: "477-123-45-67",
                direccion: "Marioano Escobedo 1300, Centro, León, Guanajuato",
                correo: "mobla@gmail.com",
                imagen: "../assets/images/users/1.jpg",
                estatus: "Activo",
                clientId: 1
            },
            {
                nombre: "Rodrigo Martinez",
                imagen: "../assets/images/users/2.jpg",
                telefono: "477-123-45-67",
                direccion: "Marioano Escobedo 1300, Centro, León, Guanajuato",
                correo: "mobla@gmail.com",
                estatus: "Inactivo",
                clientId: 2
            }
        ];
        this.proyectos = [
            {
                clientId: 1,
                proyectId: 1,
                nombre: "Sala Cafetería",
                imagen: "../assets/images/gallery/chair.jpg",
                estatus: "Activo",
            }
        ];
    }
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/sidebar.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sidebar.service.ts ***!
  \*********************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarService = /** @class */ (function () {
    function SidebarService() {
        this.menu = [
            {
                modulo: 'Ventas',
                icono: 'mdi mdi-gauge',
                submenu: [
                    { titulo: 'CRM', url: '/crm' },
                    { titulo: 'Reporte de Ventas', url: '/dashboard' },
                    { titulo: 'Catálogo de Productos', url: '/graficas1' }
                ]
            }
        ];
    }
    SidebarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "./src/app/services/voice-recorder.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/voice-recorder.service.ts ***!
  \****************************************************/
/*! exports provided: VoiceRecorderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceRecorderService", function() { return VoiceRecorderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VoiceRecorderService = /** @class */ (function () {
    function VoiceRecorderService() {
    }
    VoiceRecorderService.prototype.grabarAudio = function (stopButton) {
        var _this = this;
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
            var mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            var audioChunks = [];
            mediaRecorder.addEventListener("dataavailable", function (event) {
                audioChunks.push(event.data);
            });
            mediaRecorder.addEventListener("stop", function () {
                var audioBlob = new Blob(audioChunks);
                var audioUrl = URL.createObjectURL(audioBlob);
                var audio = new Audio(audioUrl);
                _this.recordedAudio = audio;
                _this.recordedAudioUrl = audioUrl;
            });
            stopButton.onclick = function () {
                if (mediaRecorder.state != 'inactive') {
                    mediaRecorder.stop();
                }
            };
        });
    };
    VoiceRecorderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], VoiceRecorderService);
    return VoiceRecorderService;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumbs/breadcrumbs.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/breadcrumbs/breadcrumbs.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Bread crumb and right sidebar toggle -->\n<!-- ============================================================== -->\n<div class=\"row page-titles\">\n  <div class=\"col-md-5 align-self-center\">\n    <h3 class=\"text-themecolor\">Blank Page</h3>\n  </div>\n  <div class=\"col-md-7 align-self-center\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a href=\"javascript:void(0)\">Home</a>\n      </li>\n      <li class=\"breadcrumb-item\">pages</li>\n      <li class=\"breadcrumb-item active\">Blank Page</li>\n    </ol>\n  </div>\n\n</div>\n<!-- ============================================================== -->\n<!-- End Bread crumb and right sidebar toggle -->\n<!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/shared/breadcrumbs/breadcrumbs.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumbs/breadcrumbs.component.ts ***!
  \*************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./src/app/shared/breadcrumbs/breadcrumbs.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.logo{\r\n    max-height:35px;\r\n}\r\n\r\nimg.logo-text{\r\n    margin-left: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Topbar header - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<header class=\"topbar\">\n  <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n    <!-- ============================================================== -->\n    <!-- Logo -->\n    <!-- ============================================================== -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"index.html\">\n        <!-- Logo icon --><b>\n          <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\n          <!-- Dark Logo icon -->\n          <img src=\"assets/images/mobla-logo-letra.PNG\" alt=\"homepage\" class=\"logo dark-logo\" />\n          <!-- Light Logo icon -->\n          <img src=\"assets/images/mobla-logo-letra.PNG\" alt=\"homepage\" class=\"logo light-logo\" />\n        </b>\n        <!--End Logo icon -->\n        <!-- Logo text --><span>\n          <!-- dark Logo text -->\n          <img src=\"assets/images/mobla-logo.png\" alt=\"homepage\" class=\"logo logo-text dark-logo\" />\n          <!-- Light Logo text -->\n          <img src=\"assets/images/mobla-logo.png\" class=\"logo logo-text light-logo\" alt=\"homepage\" /></span> </a>\n    </div>\n    <!-- ============================================================== -->\n    <!-- End Logo -->\n    <!-- ============================================================== -->\n    <div class=\"navbar-collapse\">\n      <!-- ============================================================== -->\n      <!-- toggle and nav items -->\n      <!-- ============================================================== -->\n      <ul class=\"navbar-nav mr-auto\">\n        <!-- This is  -->\n        <li class=\"nav-item\"> <a class=\"nav-link nav-toggler hidden-md-up waves-effect waves-dark\" href=\"javascript:void(0)\"><i\n              class=\"ti-menu\"></i></a> </li>\n        <li class=\"nav-item\"> <a class=\"nav-link sidebartoggler hidden-sm-down waves-effect waves-dark\" href=\"javascript:void(0)\"><i\n              class=\"ti-menu\"></i></a> </li>\n        <li class=\"nav-item hidden-sm-down\"></li>\n      </ul>\n      <!-- ============================================================== -->\n      <!-- User profile and search -->\n      <!-- ============================================================== -->\n      <ul class=\"navbar-nav my-lg-0\">\n        <!-- ============================================================== -->\n        <!-- Search -->\n        <!-- ============================================================== -->\n        <li class=\"nav-item hidden-xs-down search-box\"> <a class=\"nav-link hidden-sm-down waves-effect waves-dark\" href=\"javascript:void(0)\"><i\n              class=\"ti-search\"></i></a>\n          <form class=\"app-search\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search & enter\"> <a class=\"srh-btn\"><i class=\"ti-close\"></i></a>\n            </form>\n        </li>\n        <!-- ============================================================== -->\n        <!-- Messages -->\n        <!-- ============================================================== -->\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" id=\"2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"mdi mdi-email\"></i>\n            <div class=\"notify\"> <span class=\"heartbit\"></span> <span class=\"point\"></span> </div>\n          </a>\n          <div class=\"dropdown-menu mailbox dropdown-menu-right animated fadeIn\" aria-labelledby=\"2\">\n            <ul>\n              <li>\n                <div class=\"drop-title\">You have 4 new messages</div>\n              </li>\n              <li>\n                <div class=\"message-center\">\n                  <!-- Message -->\n                  <a href=\"#\">\n                    <div class=\"user-img\"> <img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status online pull-right\"></span>\n                      </div>\n                    <div class=\"mail-contnet\">\n                      <h5>Pavan kumar</h5> <span class=\"mail-desc\">Just see the my admin!</span> <span class=\"time\">9:30\n                        AM</span> </div>\n                  </a>\n                  <!-- Message -->\n                  <a href=\"#\">\n                    <div class=\"user-img\"> <img src=\"assets/images/users/2.jpg\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status busy pull-right\"></span>\n                      </div>\n                    <div class=\"mail-contnet\">\n                      <h5>Sonu Nigam</h5> <span class=\"mail-desc\">I've sung a song! See you at</span> <span class=\"time\">9:10\n                        AM</span> </div>\n                  </a>\n                  <!-- Message -->\n                  <a href=\"#\">\n                    <div class=\"user-img\"> <img src=\"assets/images/users/3.jpg\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status away pull-right\"></span>\n                      </div>\n                    <div class=\"mail-contnet\">\n                      <h5>Arijit Sinh</h5> <span class=\"mail-desc\">I am a singer!</span> <span class=\"time\">9:08 AM</span>\n                      </div>\n                  </a>\n                  <!-- Message -->\n                  <a href=\"#\">\n                    <div class=\"user-img\"> <img src=\"assets/images/users/4.jpg\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status offline pull-right\"></span>\n                      </div>\n                    <div class=\"mail-contnet\">\n                      <h5>Pavan kumar</h5> <span class=\"mail-desc\">Just see the my admin!</span> <span class=\"time\">9:02\n                        AM</span> </div>\n                  </a>\n                </div>\n              </li>\n              <li>\n                <a class=\"nav-link text-center\" href=\"javascript:void(0);\"> <strong>See all e-Mails</strong> <i class=\"fa fa-angle-right\"></i>\n                  </a>\n              </li>\n            </ul>\n          </div>\n        </li>\n        <!-- ============================================================== -->\n        <!-- End Messages -->\n        <!-- ============================================================== -->\n        <!-- ============================================================== -->\n        <!-- Language -->\n        <!-- ============================================================== -->\n        <!-- <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"flag-icon flag-icon-us\"></i></a>\n          <div class=\"dropdown-menu dropdown-menu-right animated bounceInDown\"> <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-icon flag-icon-in\"></i>\n              India</a> <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-icon flag-icon-fr\"></i> French</a> <a class=\"dropdown-item\"\n              href=\"#\"><i class=\"flag-icon flag-icon-cn\"></i> China</a> <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-icon flag-icon-de\"></i>\n              Dutch</a> </div>\n        </li> -->\n        <!-- ============================================================== -->\n        <!-- Profile -->\n        <!-- ============================================================== -->\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><img\n              src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"profile-pic\" /></a>\n          <div class=\"dropdown-menu dropdown-menu-right animated fadeIn\">\n            <ul class=\"dropdown-user\">\n              <li>\n                <div class=\"dw-user-box\">\n                  <div class=\"u-img\"><img src=\"assets/images/users/1.jpg\" alt=\"user\"></div>\n                  <div class=\"u-text\">\n                    <h4>Steave Jobs</h4>\n                    <p class=\"text-muted\">varun@gmail.com</p><a href=\"pages-profile.html\" class=\"btn btn-rounded btn-danger btn-sm\">View\n                      Profile</a></div>\n                </div>\n              </li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a href=\"#\"><i class=\"ti-user\"></i> My Profile</a></li>\n              <li><a href=\"#\"><i class=\"ti-wallet\"></i> My Balance</a></li>\n              <li><a href=\"#\"><i class=\"ti-email\"></i> Inbox</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a href=\"#\"><i class=\"ti-settings\"></i> Account Setting</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a href=\"#\"><i class=\"fa fa-power-off\"></i> Logout</a></li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n<!-- ============================================================== -->\n<!-- End Topbar header -->\n<!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/nopagefound/nopagefound.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/nopagefound/nopagefound.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nopagefound works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/nopagefound/nopagefound.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/nopagefound/nopagefound.component.ts ***!
  \*************************************************************/
/*! exports provided: NopagefoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NopagefoundComponent", function() { return NopagefoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NopagefoundComponent = /** @class */ (function () {
    function NopagefoundComponent() {
    }
    NopagefoundComponent.prototype.ngOnInit = function () {
    };
    NopagefoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nopagefound',
            template: __webpack_require__(/*! ./nopagefound.component.html */ "./src/app/shared/nopagefound/nopagefound.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], NopagefoundComponent);
    return NopagefoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "./src/app/shared/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nopagefound/nopagefound.component */ "./src/app/shared/nopagefound/nopagefound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_6__["NopagefoundComponent"]
            ],
            exports: [
                _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_6__["NopagefoundComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Left Sidebar - style you can find in sidebar.scss  -->\n<!-- ============================================================== -->\n<aside class=\"left-sidebar\">\n  <!-- Sidebar scroll-->\n  <div class=\"scroll-sidebar\">\n    <!-- Sidebar navigation-->\n    <nav class=\"sidebar-nav\">\n      <ul id=\"sidebarnav\">\n        <li class=\"user-profile\">\n          <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><img src=\"assets/images/users/profile.png\"\n              alt=\"user\" /><span class=\"hide-menu\">Steave Jobs </span></a>\n          <ul aria-expanded=\"false\" class=\"collapse\">\n            <li><a href=\"javascript:void()\">My Profile </a></li>\n            <li><a href=\"javascript:void()\">My Balance</a></li>\n            <li><a href=\"javascript:void()\">Inbox</a></li>\n            <li><a href=\"javascript:void()\">Account Setting</a></li>\n            <li><a href=\"javascript:void()\">Logout</a></li>\n          </ul>\n        </li>\n        <li class=\"nav-devider\"></li>\n        <li class=\"nav-small-cap\">MODULOS</li>\n\n        <li *ngFor=\"let menu of _sidebar.menu\"> \n          <a class=\"has-arrow waves-effect waves-dark\" aria-expanded=\"false\"><i [class]=\"menu.icono\"></i><span\n              class=\"hide-menu\">{{ menu.modulo }} <span class=\"label label-rouded label-themecolor pull-right\">{{ menu.submenu.length }}</span></span></a>\n          <ul aria-expanded=\"false\" class=\"collapse\">\n            <li *ngFor=\"let submenu of menu.submenu\">\n              <a [routerLink]=\"[ submenu.url ]\" routerLinkActive=\"active\">{{ submenu.titulo }}</a></li>\n          </ul>\n        </li>\n      </ul>\n    </nav>\n    <!-- End Sidebar navigation -->\n  </div>\n  <!-- End Sidebar scroll-->\n</aside>\n<!-- ============================================================== -->\n<!-- End Left Sidebar - style you can find in sidebar.scss  -->\n<!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sidebar.service */ "./src/app/services/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_sidebar) {
        this._sidebar = _sidebar;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]])
    ], SidebarComponent);
    return SidebarComponent;
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
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PascualMichelle\Desktop\Consultoria CHR\Mobla\CoreSoftware\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map