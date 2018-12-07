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
        this.title = 'Mobla Core';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_2__["APP_ROUTES"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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
/* harmony import */ var _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/nopagefound/nopagefound.component */ "./src/app/shared/nopagefound/nopagefound.component.ts");



var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: '**', component: _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_2__["NopagefoundComponent"] }
];
var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: false });


/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: URL_SERVICIOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SERVICIOS", function() { return URL_SERVICIOS; });
//URL Producción
var URL_SERVICIOS = 'https://api.moblacore.com';
//URL Development
// export const URL_SERVICIOS = "http://localhost:3000";


/***/ }),

/***/ "./src/app/directives/infinite-scroll/infinite-scroll.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/directives/infinite-scroll/infinite-scroll.directive.ts ***!
  \*************************************************************************/
/*! exports provided: InfiniteScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function() { return InfiniteScrollDirective; });
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

var InfiniteScrollDirective = /** @class */ (function () {
    function InfiniteScrollDirective() {
        this.habilitado = false;
        //Config inputs
        this.scrollUpPercentage = 10;
        this.scrollDownPercentage = 80;
        //Output callbacks
        this.scrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lastScrollTop = 0;
        this.cajaAltura = 0;
        this.addScrollListener();
    }
    InfiniteScrollDirective.prototype.ngAfterViewInit = function () {
        this.addScrollListener();
    };
    InfiniteScrollDirective.prototype.addScrollListener = function () {
        var _this = this;
        var box = document.getElementById(this.boxId);
        if (box) {
            document
                .getElementById(this.boxId)
                .addEventListener("scroll", function (evento) {
                //Leyendo altura de caja,altura del scroll y posición del scroll
                _this.cajaAltura = evento.target.clientHeight;
                _this.scrollHeight = evento.target.scrollHeight;
                _this.scrollTop = evento.target.scrollTop;
                //validando dirección scroll
                var direccion = _this.validateScrollDirection(evento.target.scrollTop);
                //trigger callback
                if (direccion == "down") {
                    var porcentaje = ((_this.scrollTop + _this.cajaAltura) / _this.scrollHeight) * 100;
                    // console.log(porcentaje);
                    if (porcentaje >= _this.scrollDownPercentage) {
                        _this.trigger("down");
                    }
                    return;
                }
                if (direccion == "up") {
                    var porcentaje = ((_this.scrollTop) / _this.scrollHeight) * 100;
                    // console.log(porcentaje);
                    if (porcentaje <= _this.scrollUpPercentage) {
                        _this.trigger("up");
                    }
                    return;
                }
            });
        }
    };
    InfiniteScrollDirective.prototype.validateScrollDirection = function (scrollTop) {
        var direccion;
        if (scrollTop > this.lastScrollTop) {
            direccion = "down";
        }
        else {
            direccion = "up";
        }
        this.lastScrollTop = scrollTop;
        return direccion;
    };
    InfiniteScrollDirective.prototype.trigger = function (direccion) {
        if (this.habilitado) {
            if (direccion == "up") {
                this.scrollUp.emit();
            }
            else {
                this.scrollDown.emit();
            }
        }
        return;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InfiniteScrollDirective.prototype, "boxId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InfiniteScrollDirective.prototype, "habilitado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InfiniteScrollDirective.prototype, "scrollUpPercentage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InfiniteScrollDirective.prototype, "scrollDownPercentage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InfiniteScrollDirective.prototype, "scrollUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InfiniteScrollDirective.prototype, "scrollDown", void 0);
    InfiniteScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[infiniteScroll]"
        }),
        __metadata("design:paramtypes", [])
    ], InfiniteScrollDirective);
    return InfiniteScrollDirective;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nTemplate Name: Admin pro Admin\nAuthor: Wrappixel\nEmail: niravjoshi87@gmail.com\nFile: scss\n*/\n/*\nTemplate Name: Admin Pro Admin\nAuthor: Wrappixel\nEmail: niravjoshi87@gmail.com\nFile: scss\n*/\n/*Theme Colors*/\n/*bootstrap Color*/\n/*Light colors*/\n/*Normal Color*/\n/*Extra Variable*/\n/*******************\nLogin register and recover password Page\n******************/\n.login-register {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 100%;\n  width: 100%;\n  padding: 10% 0;\n  position: fixed; }\n.login-box {\n  width: 400px;\n  margin: 0 auto; }\n.login-box .footer {\n    width: 100%;\n    left: 0px;\n    right: 0px; }\n.login-box .social {\n    display: block;\n    margin-bottom: 30px; }\n#recoverform {\n  display: none; }\n.login-sidebar {\n  padding: 0px;\n  margin-top: 0px; }\n.login-sidebar .login-box {\n    right: 0px;\n    position: absolute;\n    height: 100%; }\n.logo{\n  width: 150px;\n}\n.btn-mobla{\n  background-color: #278395;\n  border: 1px solid #278395;\n}\n[type=\"checkbox\"].filled-in:checked.chk-col-light-blue + label:after {\n    border: 2px solid #278395;\n    background-color: #278395;\n}\n.form-material \n.form-control, \n.form-material .form-control.focus, \n.form-material .form-control:focus {\n    background-image: linear-gradient(#278395, #278395), linear-gradient(#e9edf2, #e9edf2);\n}\n.mobile-login{\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.mobile-box{\n      width: 100vw;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n\r\n<!-- ============================================================== -->\r\n<!-- Imagen de background para el Login -->\r\n<!-- ============================================================== -->\r\n<section id=\"wrapper\" \r\n         class=\"login-register login-sidebar\" \r\n         style=\"background-image:url(assets/images/background/login-register.jpg);\">\r\n<!-- ============================================================== -->\r\n<!-- FIN de Imagen de background para el Login -->\r\n<!-- ============================================================== -->\r\n \r\n  <div class=\"login-box card\" [ngClass]=\"{'mobile-box': movil==true}\">\r\n    <div class=\"card-body\" [ngClass]=\"{'mobile-login': movil==true}\">\r\n      \r\n      <!-- ============================================================== -->\r\n      <!-- Logo de la empresa para el Login -->\r\n      <!-- ============================================================== -->\r\n      <div class=\"text-center p-t-20\">\r\n        <img\r\n            class=\"logo\"\r\n            src=\"assets/images/mobla-logo.png\" alt=\"Home\">\r\n      </div>\r\n      <!-- ============================================================== -->\r\n      <!-- FIN de Logo de la empresa para el Login -->\r\n      <!-- ============================================================== -->\r\n\r\n      <!-- ============================================================== -->\r\n      <!-- Formulario de login -->\r\n      <!-- ============================================================== -->\r\n      <form ngNativeValidate \r\n            #forma=\"ngForm\" \r\n            class=\"form-horizontal form-material\" \r\n            (ngSubmit)=\"login( forma )\" \r\n            id=\"loginform\" \r\n            action=\"index.html\">\r\n        \r\n        <!-- ============================================================== -->\r\n        <!-- Campo email del formulario -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"form-group m-t-40\">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" \r\n                   type=\"email\"\r\n                   placeholder=\"Correo del usuario\" \r\n                   required\r\n                   [(ngModel)]=\"email\"\r\n                   name=\"email\">\r\n          </div>\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- FIN de Campo email del formulario -->\r\n        <!-- ============================================================== -->\r\n\r\n        <!-- ============================================================== -->\r\n        <!-- Campo contraseña del formulario -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"form-group\">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\"\r\n                   type=\"password\" \r\n                   placeholder=\"Contraseña\" \r\n                   required\r\n                   ngModel\r\n                   name=\"password\">\r\n          </div>\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- FIN de Campo contraseña del formulario -->\r\n        <!-- ============================================================== -->\r\n\r\n        <!-- ============================================================== -->\r\n        <!-- Check box para recordar contraseña -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-12\">\r\n\r\n            <div class=\"checkbox checkbox-primary pull-left p-t-0\">\r\n              <input id=\"checkbox-signup\" \r\n                     type=\"checkbox\" \r\n                     class=\"filled-in chk-col-light-blue\"\r\n                     [(ngModel)]=\"recordarPassword\"\r\n                     name=\"recordarPassword\">\r\n              <label for=\"checkbox-signup\"> Recordarme </label>\r\n            </div>\r\n\r\n            <a href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark pull-right\">\r\n              <i class=\"fa fa-lock m-r-5\"></i> \r\n              Olvidó su contraseña?</a>\r\n          </div>\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- FIN de Check box para recordar contraseña -->\r\n        <!-- ============================================================== -->\r\n\r\n        <!-- ============================================================== -->\r\n        <!-- Botón submit del formulario -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"form-group text-center m-t-20\">\r\n          <div class=\"col-xs-12\">\r\n            <button class=\"btn btn-info btn-lg btn-block text-uppercase btn-rounded btn-mobla\" \r\n                    type=\"submit\">Log In</button>\r\n          </div>\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- FIN de Botón submit del formulario -->\r\n        <!-- ============================================================== -->\r\n\r\n        <!-- <div class=\"form-group m-b-0\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            Aún no tiene una cuenta? <a href=\"pages-register2.html\" class=\"text-primary m-l-5\"><b>Registrarse</b></a>\r\n          </div>\r\n        </div> -->\r\n      \r\n      </form>\r\n      <!-- ============================================================== -->\r\n      <!-- FIN de Formulario de login -->\r\n      <!-- ============================================================== -->\r\n\r\n      <form class=\"form-horizontal\" id=\"recoverform\" action=\"index.html\">\r\n        <div class=\"form-group \">\r\n          <div class=\"col-xs-12\">\r\n            <h3>Recuperar Contraseña</h3>\r\n            <p class=\"text-muted\">Ingresa tu Email y te enviaremos las instrucciones!</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group \">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Email\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group text-center m-t-20\">\r\n          <div class=\"col-xs-12\">\r\n            <button class=\"btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Reset</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- ============================================================== -->\r\n<!-- End Wrapper -->\r\n<!-- ============================================================== -->"

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
/* harmony import */ var _services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
/* harmony import */ var _models_usuario_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/usuario.model */ "./src/app/models/usuario.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
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
    function LoginComponent(_usuarioService, router) {
        var _this = this;
        this._usuarioService = _usuarioService;
        this.router = router;
        this.recordarPassword = false;
        this.movil = false;
        window.addEventListener("resize", function () {
            _this.validarMovil();
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        init_plugins();
        this.email = localStorage.getItem("email") || "";
        if (this.email.length > 1) {
            this.recordarPassword = true;
        }
        this.validarMovil();
    };
    LoginComponent.prototype.validarMovil = function () {
        if (window.innerWidth <= 600 && window.innerHeight <= 850) {
            this.movil = true;
        }
        else {
            this.movil = false;
        }
    };
    LoginComponent.prototype.login = function (forma) {
        var _this = this;
        //Validando que la forma sea válida
        if (forma.invalid) {
            return;
        }
        //---->
        //Construyendo el objeto usuario con los valores del formulario
        var usuario = new _models_usuario_model__WEBPACK_IMPORTED_MODULE_2__["Usuario"](null, forma.value.email, forma.value.password);
        //---->
        // Enviando los datos de acceso a través de nuestro servicio login y recibiendo
        // true o false dependiendo si el login fue exitoso o no
        this._usuarioService
            .login(usuario, forma.value.recordarPassword)
            .subscribe(function (correcto) {
            if (correcto) {
                _this.router.navigate(["/dashboard"]);
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("Error en Login:", "El usuario o la contraseña son incorrectos", "warning");
            }
        });
        //---->
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/cliente.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/cliente.model.ts ***!
  \*****************************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono, direccion, email, estatus, img, _id, usuarioCreador, usuarioUltimaModificacion) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.email = email;
        this.estatus = estatus;
        this.img = img;
        this._id = _id;
        this.usuarioCreador = usuarioCreador;
        this.usuarioUltimaModificacion = usuarioUltimaModificacion;
    }
    return Cliente;
}());



/***/ }),

/***/ "./src/app/models/producto.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/producto.model.ts ***!
  \******************************************/
/*! exports provided: Producto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto", function() { return Producto; });
var Producto = /** @class */ (function () {
    function Producto(codigo, nombre, familia, precio, usuarioCreador, usuarioUltimaModificacion, img, tCarpinteria, tPulido1, tFondo, tPulido2, tTerminado, tEmpaque, _id) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.familia = familia;
        this.precio = precio;
        this.usuarioCreador = usuarioCreador;
        this.usuarioUltimaModificacion = usuarioUltimaModificacion;
        this.img = img;
        this.tCarpinteria = tCarpinteria;
        this.tPulido1 = tPulido1;
        this.tFondo = tFondo;
        this.tPulido2 = tPulido2;
        this.tTerminado = tTerminado;
        this.tEmpaque = tEmpaque;
        this._id = _id;
    }
    return Producto;
}());



/***/ }),

/***/ "./src/app/models/proyecto.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/proyecto.model.ts ***!
  \******************************************/
/*! exports provided: Proyecto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proyecto", function() { return Proyecto; });
var Proyecto = /** @class */ (function () {
    function Proyecto(nombre, descripcion, clienteId, estatus, chatId, usuarioCreador, usuarioUltimaModificacion, _id, img) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.clienteId = clienteId;
        this.estatus = estatus;
        this.chatId = chatId;
        this.usuarioCreador = usuarioCreador;
        this.usuarioUltimaModificacion = usuarioUltimaModificacion;
        this._id = _id;
        this.img = img;
    }
    return Proyecto;
}());



/***/ }),

/***/ "./src/app/models/usuario.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/usuario.model.ts ***!
  \*****************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(nombre, email, password, role, img, _id) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.role = role;
        this.img = img;
        this._id = _id;
    }
    return Usuario;
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

/***/ "./src/app/pages/catalogo-productos/catalogo-productos.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/catalogo-productos/catalogo-productos.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.familias{\r\n    margin-bottom:20px;\r\n}\r\n\r\ndiv.familia-tag{\r\n    line-height: 13px;\r\n    font-size: 13px;\r\n    float:left;\r\n    cursor: pointer;\r\n\r\n    margin:5px;\r\n    padding:5px 10px 5px 10px;\r\n\r\n    background-color: #242a33;\r\n    border-bottom: 2px solid green;\r\n    border-radius: 5px;\r\n\r\n    color:rgb(199, 199, 199);\r\n}\r\n\r\ndiv.familia-tag:hover{\r\n    color: white;\r\n    font-weight:400;\r\n    background-color: #2f353f;\r\n}\r\n\r\ndiv.producto{\r\n    width: 200px;\r\n    height: 200px;\r\n    text-align: center;\r\n    align-content: center;\r\n\r\n    display:inline-block;\r\n}\r\n\r\n.image-container {\r\n    position: relative;\r\n    width:120px;\r\n    border-radius: 5px;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n}\r\n\r\n.image {\r\n  width: 120px;\r\n  height: 120px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 5px;\r\n}\r\n\r\n.overlay{\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 100%;\r\n  right: 0;\r\n  background-color: rgba(51, 46, 46, 0.6);\r\n  overflow: hidden;\r\n  width: 0;\r\n  height: 100%;\r\n  transition: .5s ease;\r\n  border-radius: 5px;\r\n}\r\n\r\n.text {\r\n  color: white;\r\n  font-size: 13px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  /* white-space: nowrap; */\r\n\r\n\r\n}\r\n\r\n.image-container:hover .overlay {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n.product-name{\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n}\r\n\r\nul{\r\n    list-style: none;\r\n    margin:0px;\r\n    padding:0px;\r\n}\r\n\r\n.img-lista{\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    clear: both;\r\n}\r\n\r\n.info-lista{\r\n    width:100px;\r\n}\r\n\r\n.nombre-lista{\r\n    font-size: 10px;\r\n    margin-left: 5px;\r\n    margin-bottom:5px;\r\n}\r\n\r\n.precio-lista{\r\n    font-size: 10px;\r\n    margin-left: 5px;\r\n    margin-bottom: 0px\r\n}\r\n\r\n.precio-lista:hover{\r\n    text-decoration: underline;\r\n    color: #2e9bb0;\r\n}\r\n\r\n.descuento-lista{\r\n    float: left;\r\n    font-size: 10px;\r\n    color: darkorange;\r\n    width: 10px;\r\n}\r\n\r\n.cantidad-lista{\r\n    font-size: 10px;\r\n\r\n    background: green;\r\n    color: white;\r\n    min-width: 20px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n\r\n    height: 16px;\r\n    line-height: 16px;\r\n}\r\n\r\n.trash-button{\r\n    color:red;\r\n}\r\n\r\n.right{\r\n    float:right;\r\n}\r\n\r\n.left{\r\n    float: left;\r\n}\r\n\r\n.pointer{\r\n    cursor: pointer;\r\n}\r\n\r\nli{\r\n    min-height: 60px;\r\n    margin-top:5px;\r\n    margin-bottom:5px;\r\n    overflow: visible;\r\n}\r\n\r\n.size-50{\r\n    height: 50px;\r\n    width:50px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.btn-agregar-producto{\r\n    position: fixed;\r\n    bottom: 5px;\r\n    right: 5px;\r\n\r\n    border-radius: 100%;\r\n    width: 50px;\r\n    height: 50px;\r\n    text-align: center;\r\n    padding: 0px;\r\n\r\n    font-size: 18px;\r\n    line-height: 50px;\r\n}\r\n\r\n.height-50{\r\n    height: 50px;\r\n}\r\n\r\n.v-center{\r\n    margin-top:50%;\r\n    margin-bottom: 50%;\r\n}\r\n\r\n.center{\r\n    margin-left: 50%;\r\n    margin-right: 50%;\r\n}\r\n\r\nul.pagination li{\r\n    cursor: pointer;\r\n}\r\n\r\n.pointer{\r\n    cursor: pointer;\r\n}\r\n\r\n.fa-shopping-cart{\r\n    line-height: 24px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/catalogo-productos/catalogo-productos.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/catalogo-productos/catalogo-productos.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <!-- Tags de familias -->\n  <div class=\"row familias\" >\n\n    <div *ngFor=\"let familia of familias\"\n          class=\"familia-tag\"\n          (click)=\"obtenerProductosPorFamilia(familia.nombre,1)\">\n      <i class=\"fa fa-tag\"></i> {{ familia.nombre}}\n    </div>\n\n  </div>\n  <!-- FIN de Tags de familias -->\n\n  <div class=\"row\">\n    \n    <!-- Display de productos -->\n    <div class=\"col col-12 col-md-9 text-center\">\n      \n      <!-- Elemento Producto -->\n        <div *ngFor=\"let producto of productos\" class=\"producto\">\n        \n          <!-- Imagen producto -->\n          <div class=\"image-container\">\n        \n            <img [src]=\"producto.img | imagen: 'producto'\" class=\"image size-100\">\n        \n            <div class=\"overlay\">\n              <div class=\"text\">\n        \n                <button class=\"btn btn-sm btn-success waves-effect waves-light m-b-10\" (click)=\"agregarACarrito(producto)\">\n                  <i class=\"fa fa-plus\"></i>\n                  add</button>\n                \n                <button class=\"btn btn-sm btn-warning waves-effect waves-light\" (click)=\"editarProducto(producto)\">\n                  <i class=\"fa fa-edit\"></i>\n                  edit</button>\n\n                \n        \n              </div>\n            </div>\n        \n          </div>\n          <!-- FIN de Imagen producto -->\n        \n        \n          <div class=\"product-name\">\n            {{ producto.codigo }}\n          </div>\n        \n          <div class=\"product-price\">\n            {{ producto.precio | currency: 'MXN'}}\n          </div>\n        \n        </div>\n\n      \n      <!-- FIN de Elemento Producto -->\n\n      <!-- Componente de paginado   -->\n        <div *ngIf=\"productos.length>0\">\n          <ul class=\"pagination justify-content-center\">\n\n            <li class=\"page-item pointer\"\n                (click)=\"paginaAnterior()\">\n              <a class=\"page-link\" aria-label=\"Previous\">\n                <span aria-hidden=\"true\">«</span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n            </li>\n\n            <li *ngFor=\"let pagina of paginas\" \n                class=\"page-item pointer\"\n                (click)=\"cargarProductosPagina(pagina.pagina)\"\n                [ngClass]=\"{'active': pagina.active }\"><a class=\"page-link\">{{ pagina.pagina }}</a></li>\n\n            <li class=\"page-item pointer\"\n                (click)=\"paginaSiguiente()\">\n              <a class=\"page-link\" aria-label=\"Next\">\n                <span aria-hidden=\"true\">»</span>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </li>\n\n          </ul>\n\n        </div> \n      <!-- FIN de Componente de paginado   -->\n      \n    </div>\n    <!-- FIN de Display de productos -->\n\n    <!-- Carrito de compra -->\n    <div class=\"col col-12 col-md-3\">\n      \n      <div>\n        Carrito\n        <i class=\"fa fa-shopping-cart right\"></i>\n      </div>\n\n      <ul class=\"m-b-15\">\n        <li *ngFor=\"let producto of carrito; let i=index\">\n          \n          <img class=\"img-lista size-50 left\" \n               [src]=\"producto.img | imagen: 'producto'\">\n          \n          <div class=\"info-lista left\">\n            <p class=\"nombre-lista fw-500\">{{ producto.nombre }}</p>\n            <p class=\"precio-lista pointer\"\n               (click)=\"cambiarPrecio(i)\">{{ producto.precio | currency: 'MXN' }}</p>\n            <p *ngIf=\"producto.descuento\" \n               class=\"descuento-lista\"> -{{ producto.descuento | currency: 'MXN' }}</p>\n          </div>\n\n          <div class=\"right height-50\">\n            <span class=\"descuento-lista left m-r-5 pointer v-center\"\n                  (click)=\"agregarDescuento(i)\">\n              <i class=\"fa fa-usd\"></i>\n            </span>\n            <span class=\"cantidad-lista left m-r-5 pointer v-center\"\n                  (click)=\"asignarCantidadManualmente(i)\">{{ producto.cantidad }}</span>\n            <span (click)=\"eliminarElementoDelCarrito(i)\">\n              <i class=\"fa fa-trash trash-button right pointer v-center\"></i>\n            </span>\n          </div>\n\n        </li>\n      </ul>\n\n      <div class=\"botonera\"\n           *ngIf=\"carrito.length>0\">\n        <button class=\"btn btn-success waves-effect waves-light btn-block\"\n                data-toggle=\"modal\"\n                data-target=\"#ticketVenta\">Venta</button>\n        <!-- <button class=\"btn btn-secondary waves-effect-waves-light btn-block\">Cotización</button> -->\n      </div>\n\n      \n\n    </div>\n    <!-- FIN de Carrito de compra -->\n\n  \n  </div>\n</div>\n\n<button \n  class=\"btn btn-success waves-effect waves-light btn-agregar-producto\"\n  data-toggle=\"modal\" \n  data-target=\"#nuevoProducto\">\n    <i class=\"fa fa-plus\"></i>\n</button>\n\n<app-agregar-producto></app-agregar-producto>\n<app-editar-producto\n  [producto]=\"productoAEditar\"\n  (actualizarFamilia)=\"obtenerProductosPorFamilia($event, paginaActual)\"></app-editar-producto>\n  \n<app-ticket\n  [carrito]=\"carrito\"\n  [totalCarrito]=\"totalCarrito\"\n  [totalDescuento]=\"totalDescuento\"\n  [iva]=\"ivaCarrito\"></app-ticket>\n\n  <app-nuevo-cliente\n    (clienteNuevo)=\"registrarClienteNuevo($event)\"\n    (imagenCliente)=\"imagenNuevoCliente($event)\"\n    [toggleTicketModal]=\"true\"></app-nuevo-cliente>\n"

/***/ }),

/***/ "./src/app/pages/catalogo-productos/catalogo-productos.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/catalogo-productos/catalogo-productos.component.ts ***!
  \**************************************************************************/
/*! exports provided: CatalogoProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoProductosComponent", function() { return CatalogoProductosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/productos/producto.service */ "./src/app/services/productos/producto.service.ts");
/* harmony import */ var src_app_services_clientes_cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/clientes/cliente.service */ "./src/app/services/clientes/cliente.service.ts");
/* harmony import */ var src_app_services_subirArchivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/subirArchivo/subir-archivo.service */ "./src/app/services/subirArchivo/subir-archivo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatalogoProductosComponent = /** @class */ (function () {
    function CatalogoProductosComponent(_productoService, _clienteService, _subirArchivoService) {
        this._productoService = _productoService;
        this._clienteService = _clienteService;
        this._subirArchivoService = _subirArchivoService;
        this.productoAEditar = {};
        //Paginado
        this.paginas = [
            {
                pagina: 1,
                active: false
            }
        ];
        //Data
        this.familias = [
            { nombre: "Credenzas" },
            { nombre: "Mesas" },
            { nombre: "Cómodas" },
            { nombre: "Sillas" },
            { nombre: "Sillones" },
            { nombre: "Bancas" },
            { nombre: "Bancos" },
            { nombre: "Libreros" },
            { nombre: "Lámparas" },
            { nombre: "Ocasionales" },
            { nombre: "Salas" },
            { nombre: "Cabeceras" },
            { nombre: "Bases de Cama" }
        ];
        this.productos = [];
        this.carrito = [];
    }
    CatalogoProductosComponent.prototype.ngOnInit = function () { };
    CatalogoProductosComponent.prototype.imagenNuevoCliente = function (file) {
        this.imagenClienteNuevo = file;
    };
    CatalogoProductosComponent.prototype.registrarClienteNuevo = function (nuevoCliente) {
        var _this = this;
        this._clienteService.guardarCliente(nuevoCliente).subscribe(function (resp) {
            var cliente = resp.cliente;
            _this._subirArchivoService.subirArchivo(_this.imagenClienteNuevo, 'cliente', cliente._id)
                .then(function (resp) {
                console.log(resp);
            });
            swal("Registro exitoso", "El cliente " +
                resp.cliente.nombre +
                " se ha guardado correctamente!", "success");
        }, function (error) {
            swal("Registro de cliente fallido", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
    };
    CatalogoProductosComponent.prototype.agregarDescuento = function (index) {
        var _this = this;
        swal("Descuento", "Selecciona $ ó %", "info", {
            buttons: {
                monto: {
                    text: "$",
                    value: "monto"
                },
                porcentaje: {
                    text: "%",
                    value: "porcentaje"
                }
            }
        }).then(function (tipo) {
            swal({
                content: {
                    element: "input",
                    attributes: {
                        type: "number"
                    }
                },
                text: "Ingresa el descuento en " + tipo,
                buttons: [true, "Aceptar"]
            }).then(function (descuento) {
                if (tipo == "monto") {
                    if (descuento > _this.carrito[index].precio) {
                        swal("Descuento", "El descuento, no puede ser mayor que el precio", "error");
                        return;
                    }
                    _this.carrito[index].descuento = descuento;
                    _this.calcularSubTotalCarrito();
                }
                else {
                    if (descuento >= 0 && descuento <= 100) {
                        _this.carrito[index].descuento =
                            _this.carrito[index].precio * (descuento / 100);
                        _this.calcularSubTotalCarrito();
                    }
                    else {
                        swal("Descuento", "El porcentaje debe ser un valor entre 0 y 100", "error");
                    }
                }
            });
        });
    };
    CatalogoProductosComponent.prototype.editarProducto = function (producto) {
        this.productoAEditar = producto;
        $("#editarProducto").modal("toggle");
    };
    CatalogoProductosComponent.prototype.asignarCantidadManualmente = function (i) {
        var _this = this;
        swal({
            content: {
                element: "input"
            },
            text: "Asigna una cantidad",
            buttons: [true, "Aceptar"]
        })
            .then(function (cantidad) {
            if (!cantidad) {
                return;
            }
            _this.carrito[i].cantidad = Number(cantidad);
            //Actualizamos subtotales de cada producto en el carrito
            _this.calcularSubTotalCarrito();
        })
            .catch();
    };
    CatalogoProductosComponent.prototype.eliminarElementoDelCarrito = function (i) {
        this.carrito.splice(i, 1);
    };
    CatalogoProductosComponent.prototype.activarPaginaActual = function (paginaClickeada) {
        var _this = this;
        this.paginas.forEach(function (pagina) {
            if (paginaClickeada === pagina.pagina) {
                pagina.active = true;
                _this.paginaActual = pagina.pagina;
            }
            else {
                pagina.active = false;
            }
        });
    };
    CatalogoProductosComponent.prototype.paginaAnterior = function () {
        var paginaActual = this.paginas.find(function (pagina) {
            return pagina.active;
        });
        if (paginaActual.pagina === 1) {
            return;
        }
        this.cargarProductosPagina(paginaActual.pagina - 1);
    };
    CatalogoProductosComponent.prototype.paginaSiguiente = function () {
        var paginaActual = this.paginas.find(function (pagina) {
            return pagina.active;
        });
        if (paginaActual.pagina * 10 >= this.totalProductos) {
            return;
        }
        this.cargarProductosPagina(paginaActual.pagina + 1);
    };
    CatalogoProductosComponent.prototype.cargarProductosPagina = function (pagina) {
        var _this = this;
        this._productoService
            .obtenerProductosPorFamilia(this.familiaActual, pagina)
            .subscribe(function (resp) {
            _this.productos = resp.productos;
            _this.totalProductos = resp.totalProductos;
            _this.activarPaginaActual(pagina);
        }, function (error) {
            swal("Error al consultar productos", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
    };
    CatalogoProductosComponent.prototype.paginarResultados = function () {
        //Validamos que existan productos
        if (!this.totalProductos) {
            return;
        }
        this.paginas = [];
        var numeroDePaginas = Math.ceil(this.totalProductos / 10);
        var objetoPagina;
        for (var pagina = 1; pagina <= numeroDePaginas; pagina++) {
            objetoPagina = {
                pagina: pagina,
                active: false
            };
            this.paginas.push(objetoPagina);
        }
        this.paginas[0].active = true;
    };
    CatalogoProductosComponent.prototype.obtenerProductosPorFamilia = function (familia, pagina) {
        var _this = this;
        if (pagina === void 0) { pagina = 1; }
        this.familiaActual = familia;
        this._productoService.obtenerProductosPorFamilia(familia, pagina).subscribe(function (resp) {
            _this.productos = resp.productos;
            _this.totalProductos = resp.totalProductos;
            _this.paginarResultados();
        }, function (error) {
            swal("Error al consultar productos", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
    };
    CatalogoProductosComponent.prototype.agregarACarrito = function (producto) {
        var existe = this.checkCarrito(producto);
        if (existe) {
            existe.cantidad += 1;
        }
        else {
            var productoCarrito = {
                codigo: producto.codigo,
                nombre: producto.nombre,
                familia: producto.familia,
                precio: producto.precio,
                img: producto.img,
                _id: producto._id,
                cantidad: 1
            };
            this.carrito.push(productoCarrito);
        }
        //Actualizamos subtotales de cada producto en el carrito
        this.calcularSubTotalCarrito();
    };
    CatalogoProductosComponent.prototype.checkCarrito = function (producto) {
        return this.carrito.find(function (elemento) {
            return elemento._id === producto._id;
        });
    };
    CatalogoProductosComponent.prototype.calcularSubTotalCarrito = function () {
        var _this = this;
        this.totalCarrito = 0;
        this.totalDescuento = 0;
        this.carrito.forEach(function (producto) {
            var cantidad = producto.cantidad;
            var precio = producto.precio;
            var descuento = Number(producto.descuento);
            var total = cantidad * precio;
            producto.total = total;
            _this.totalCarrito += total;
            if (descuento) {
                _this.totalDescuento += descuento;
            }
        });
        this.ivaCarrito = (this.totalCarrito - this.totalDescuento) * 0.16;
    };
    CatalogoProductosComponent.prototype.cambiarPrecio = function (indiceCarrito) {
        var _this = this;
        swal({
            content: {
                element: "input"
            },
            text: "Asigna un nuevo precio",
            buttons: [true, "Aceptar"]
        })
            .then(function (precio) {
            if (!precio) {
                return;
            }
            _this.carrito[indiceCarrito].precio = precio;
            _this.calcularSubTotalCarrito();
        })
            .catch();
    };
    CatalogoProductosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-catalogo-productos",
            template: __webpack_require__(/*! ./catalogo-productos.component.html */ "./src/app/pages/catalogo-productos/catalogo-productos.component.html"),
            styles: [__webpack_require__(/*! ./catalogo-productos.component.css */ "./src/app/pages/catalogo-productos/catalogo-productos.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_1__["ProductoService"],
            src_app_services_clientes_cliente_service__WEBPACK_IMPORTED_MODULE_2__["ClienteService"],
            src_app_services_subirArchivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_3__["SubirArchivoService"]])
    ], CatalogoProductosComponent);
    return CatalogoProductosComponent;
}());



/***/ }),

/***/ "./src/app/pages/crm/crm.component.custom.css":
/*!****************************************************!*\
  !*** ./src/app/pages/crm/crm.component.custom.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-main-box{\r\n    width:100%;\r\n}\r\ninput.form-control{\r\n    color:#2e9bb0;\r\n}\r\ninput.form-control:focus {\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#278395), to(#278395)), -webkit-gradient(linear, left top, left bottom, from(#e9edf2), to(#e9edf2));\r\n}\r\n.chat-clientes{\r\n    max-height:60vh;\r\n    overflow-y:scroll;\r\n}\r\n.buscador::-webkit-input-placeholder{\r\n    border-bottom: 1px solid gray;\r\n}\r\n.buscador::-ms-input-placeholder{\r\n    border-bottom: 1px solid gray;\r\n}\r\n.buscador::placeholder{\r\n    border-bottom: 1px solid gray;\r\n}\r\nli>a{\r\n    padding:5px;\r\n}\r\n.list-cliente:hover{\r\n    background-color: #caebf1;\r\n}\r\nul{\r\n    padding:0px;\r\n    overflow: auto;\r\n}\r\nli{\r\n    list-style: none;\r\n    cursor: pointer;\r\n}\r\n/* ul li i.info-icon{\r\n    position: absolute;\r\n    top:0.5em;\r\n    right:1em;\r\n\r\n    color:#278395;\r\n    font-size: 1.5em;\r\n    z-index: 10;\r\n} */\r\n.box-title{\r\n    padding: 5px;\r\n}\r\nh3{\r\n    color:#2e9bb0;\r\n}\r\nhr{\r\n     border: 0; \r\n     height: 1px; \r\n     background: #278395; \r\n     background-image: linear-gradient(to right, #caebf1, #278395, #caebf1);\r\n}\r\ndiv.chat-placeholder{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    color:rgba(128, 128, 128, 0.3);\r\n}\r\ndiv.chat-placeholder i{\r\n    font-size:180px;\r\n}\r\ndiv.chat-placeholder p{\r\n    font-size: 45px;\r\n}\r\ndiv.bg-mensaje{\r\n    background-color: #caebf1;\r\n}\r\nli.reverse div.bg-mensaje{\r\n    background-color: #f6f6f6;\r\n}\r\ndiv.botonera button{\r\n    margin:5px;\r\n}\r\ntextarea{\r\n    border: 1px solid #2e9bb0;\r\n    color:#2e9bb0;\r\n}\r\ntextarea:focus{\r\n        color:#278395;\r\n        border: 1.5px solid #278395;\r\n}\r\n.chat-list li{\r\n    cursor: auto;\r\n}\r\n.size-45{\r\n   width: 45px !important;\r\n   height: 45px;\r\n   -o-object-fit: cover;\r\n      object-fit: cover;\r\n }\r\n.size-30{\r\n   width:30px !important;\r\n   height: 30px;\r\n   -o-object-fit: cover;\r\n      object-fit: cover;\r\n }\r\n.btn-audio{\r\n    margin:5px 0px !important;\r\n    border-right: 1px solid #e0940f;\r\n}\r\n.btn-audio:last-of-type{\r\n    border-right:0px;\r\n\r\n}\r\n.iniciales-cliente{\r\n    width: 30px;\r\n    float: left;\r\n    text-align: center;\r\n    border-radius: 100%;\r\n    background-color: #063d5a;\r\n    height: 30px;\r\n    color: white;\r\n    display: block;\r\n    line-height: 30px;\r\n    margin-right: 5px;\r\n    font-size: 13px;\r\n\r\n}\r\n.color-animation {\r\n    /* fill: #fff; */\r\n    -webkit-animation: animation-button 2000ms forwards;\r\n    animation: animation-button 2000ms forwards;\r\n\r\n    /* font-size: 25vh; */\r\n}\r\n/* animando cambio de color en botones */\r\n@-webkit-keyframes animation-button {\r\n    0%   {color:#fff; }\r\n    25%  {color:#ff9292; }\r\n    50%  {color:#fa5959; }\r\n    75%  {color:#fd4830; }\r\n    100% {color:#ff0000; }\r\n}\r\n@keyframes animation-button {\r\n    0%   {color:#fff; }\r\n    25%  {color:#ff9292; }\r\n    50%  {color:#fa5959; }\r\n    75%  {color:#fd4830; }\r\n    100% {color:#ff0000; }\r\n}\r\n/* Fin de animación de cambio de color en botones */\r\n.chat-rbox{\r\n    max-height:60vh;\r\n    overflow-y: scroll;\r\n}\r\n::-webkit-scrollbar\r\n{\r\n  width: 3px;  /* for vertical scrollbars */\r\n  height: 3px; /* for horizontal scrollbars */\r\n}\r\n::-webkit-scrollbar-track\r\n{\r\n  background: #caebf1;\r\n  border-radius: 10px;\r\n}\r\n::-webkit-scrollbar-thumb\r\n{\r\n  background: #278395;\r\n  border-radius: 10px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/crm/crm.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/crm/crm.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \r\n  <!-- ============================================================== -->\r\n  <!-- Chat component -->\r\n  <!-- ============================================================== -->\r\n    <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card m-b-0\">\r\n        <!-- .chat-row -->\r\n        <div class=\"chat-main-box\">\r\n          <!-- Clientes .chat-left-panel -->\r\n          <div class=\"row\">\r\n            <div class=\"col col-lg-3 col-md-3 col-sm-12 col-12 m-b-20\">\r\n              \r\n                <div class=\"form-material\" *ngIf=\"!chatProyectos\">\r\n                  <input [(ngModel)]=\"terminoBusqueda\"\r\n                         (keyup)=\"buscarCliente()\"\r\n                         name=\"clientesFiltrados\" \r\n                         class=\"form-control p-20\" type=\"text\" placeholder=\"Buscar Cliente\">\r\n                </div>\r\n                \r\n                <!-- Chat de clientes -->\r\n                <div id=\"clientesDiv\" class=\"chat-clientes\" \r\n                     infiniteScroll \r\n                     [boxId]=\"'clientesDiv'\" \r\n                     [habilitado]=\"infScrollClientes\" \r\n                     (scrollDown)=\"cargarClientes()\" \r\n                     *ngIf=\"!chatProyectos\">\r\n                     \r\n                  <ul class=\"chatonline style-none\">\r\n                    <li *ngFor=\"let cliente of clientesFiltrados; let i=index;\"\r\n                        (click)=\"seleccionarCliente(cliente,i)\">\r\n                      <a class=\"list-cliente\">\r\n                        <img [src]=\"cliente.img | imagen: 'cliente'\" \r\n                             class=\"img-circle size-30\"\r\n                             *ngIf=\"cliente.img\">\r\n                        <div class=\"iniciales-cliente align-content-center\"\r\n                             *ngIf=\"!cliente.img\"\r\n                             [ngStyle]=\"{ 'background-color': cliente.backgroundColor }\">\r\n                          {{ cliente.nombre | iniciales }}\r\n                        </div>\r\n                        <span>\r\n                          {{ cliente.nombre }}\r\n                          <small \r\n                            [ngClass]=\"{\r\n                              'text-success': cliente.estatus=='Activo', \r\n                              'text-muted':cliente.estatus=='Inactivo'\r\n                            }\">\r\n                              {{ cliente.estatus }}\r\n                          </small>\r\n                        </span>\r\n                      </a>\r\n                    </li>\r\n                 \r\n                    <li class=\"p-20\"></li>\r\n                  </ul>\r\n                </div>\r\n\r\n                <div class=\"container\">\r\n                  <button *ngIf=\"!chatProyectos\" \r\n                          class=\"btn btn-success btn-block waves-effect waves-light m-t-20\"\r\n                          data-toggle=\"modal\" \r\n                          data-target=\"#nuevoCliente\">Agregar Cliente</button>\r\n                </div>\r\n\r\n                <!-- Cliente Actual y proyectos -->\r\n\r\n                <!-- -------------------------------------------\r\n                ---- Div cliente actual y separador hr ----\r\n                ------------------------------------------- -->\r\n                <div *ngIf=\"chatProyectos\">\r\n                  <ul class=\"chatonline style-non cliente-actual m-0\">\r\n                    <li data-toggle=\"modal\" data-target=\"#infoCliente\">\r\n                      <a href=\"javascript:void(0)\" class=\"list-cliente\">\r\n                        <img [src]=\"clienteActual.img | imagen: 'cliente'\" \r\n                             *ngIf=\"clienteActual.img\" \r\n                             class=\"img-circle size-30\">\r\n                  \r\n                        <div class=\"iniciales-cliente align-content-center\" [ngStyle]=\"{ 'background-color': clienteActual.backgroundColor }\" *ngIf=\"!clienteActual.img\">\r\n                          {{ clienteActual.nombre | iniciales }}\r\n                        </div>\r\n                  \r\n                        <span>\r\n                          {{ clienteActual.nombre }}\r\n                          <small [ngClass]=\"{\r\n                                  'text-success': clienteActual.estatus=='Activo', \r\n                                  'text-muted':clienteActual.estatus=='Inactivo'\r\n                                                              }\">\r\n                            {{ clienteActual.estatus }}\r\n                          </small>\r\n                        </span>\r\n                        <!-- <i class=\"fa fa-info-circle info-icon\"></i> -->\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                  \r\n                  <hr class=\"m-t-0\">\r\n                </div>\r\n                <!-- ---------------------------------------------\r\n                ---- FIN de Div cliente actual y separador hr ----\r\n                ---------------------------------------------- -->\r\n\r\n                <!-- -------------------------------------------\r\n                ---- Div Proyectos del cliente actual       ----\r\n                -------------------------------------------- -->\r\n                <div class=\"chat-clientes\" *ngIf=\"chatProyectos\">\r\n                  \r\n                  <ul class=\"chatonline style-none\">\r\n                    <li *ngFor=\"let proyecto of proyectos; let i=index;\"\r\n                        (click)=\"mostrarChatProyecto(proyecto)\">\r\n                      <a class=\"list-cliente\">\r\n                        <img [src]=\"proyecto.img\"\r\n                             *ngIf=\"proyecto.img\"\r\n                             class=\"img-circle size-30\">\r\n\r\n                        <div class=\"iniciales-cliente align-content-center\"\r\n                             *ngIf=\"!proyecto.img\"\r\n                             [ngStyle]=\"{ 'background-color': proyecto.backgroundColor }\">\r\n\r\n                          {{ proyecto.nombre | iniciales }}\r\n\r\n                        </div>\r\n                        <span>\r\n                          {{ proyecto.nombre }}\r\n                          <small [ngClass]=\"{\r\n                              'text-warning': (proyecto.estatus!='Entregado' && proyecto.estatus!='Cerrado'), \r\n                              'text-success': proyecto.estatus=='Entregado',\r\n                              'text-danger': proyecto.estatus=='Cancelado'\r\n                            }\">\r\n                            {{ proyecto.estatus }}\r\n                          </small>\r\n                        </span>\r\n                      </a>\r\n                    </li>\r\n                  \r\n                    <li class=\"p-20\"></li>\r\n                  </ul>\r\n\r\n                  \r\n                </div>\r\n                <!-- -------------------------------------------\r\n                ---- FIN de Div Proyectos del cliente actual ---\r\n                -------------------------------------------- -->\r\n                \r\n                <!-- -------------------------------------------\r\n                ---- Div de botones agregar proy y regresar ----\r\n                -------------------------------------------- -->\r\n                <div class=\"m-t-20\" *ngIf=\"chatProyectos\">\r\n\r\n                  <button class=\"btn btn-success waves-effect waves-light btn-block\"\r\n                           type=\"button\"\r\n                           data-toggle=\"modal\" \r\n                           data-target=\"#nuevoProyecto\">Agregar Proyecto</button>\r\n\r\n                  <button class=\"btn btn-danger waves-effect waves-light btn-block\"\r\n                           (click)=\"resetRegresarAVistaCliente()\">Regresar</button>\r\n\r\n                </div>\r\n                <!-- -------------------------------------------\r\n                ---- FIN de botones agregar proy y regresar ----\r\n                -------------------------------------------- -->\r\n                \r\n            </div>\r\n            <!-- End Clientes .chat-left-panel -->\r\n            <!-- .chat-right-panel -->\r\n            \r\n            <div class=\"chat-right-aside chat-historial col col-lg-9 col-md-9 col-sm-12 col-12\">\r\n              \r\n              <div *ngIf=\"proyectoActual.nombre\" class=\"row\">\r\n                <div class=\"col col-12 col-sm-9 col-md-9\">\r\n                  <h3>Historial del proyecto: {{ proyectoActual.nombre }}</h3>\r\n                </div>\r\n\r\n                <div class=\"col col-12 col-sm-3 col-md-3\">\r\n                  <button class=\"btn btn-info waves-effect waves-light float-right\"\r\n                          type=\"button\"\r\n                          data-toggle=\"modal\" \r\n                          data-target=\"#cotizacion\">Cotización <i class=\"fa fa-file-text-o\"></i></button>\r\n                </div>\r\n              </div>\r\n\r\n              <h3 *ngIf=\"!proyectoActual.nombre\">Historial del proyecto</h3>\r\n\r\n                <hr>\r\n\r\n              <!-- Chat Body -->\r\n              <div id=\"chatBody\" infiniteScroll [habilitado]=\"infScrollChats\" [boxId]=\"'chatBody'\" (scrollUp)=\"cargarMensajes()\" class=\"chat-rbox\">\r\n                <ul class=\"chat-list p-20\">\r\n                  <!--chat Row -->\r\n\r\n                  <!-- Placeholder cuando no hay mensajes -->\r\n                  <div class=\"chat-placeholder\"\r\n                       *ngIf=\"chats.length==0\">\r\n                    <i class=\"fa fa-comments\"></i>\r\n                    <p>Sin Mensajes</p>\r\n                  </div>\r\n                  <!-- Fin de placeholder  -->\r\n\r\n                  <!-- Elemento Chat -->\r\n                  <li *ngFor=\"let chat of chats\" [ngClass]=\"{'reverse': chat.usuario._id!=_usuarioService.usuario._id}\">\r\n                   \r\n                    <div *ngIf=\"chat.usuario._id==_usuarioService.usuario._id\" \r\n                         class=\"chat-img\">\r\n                      \r\n                      <img [src]=\"chat.usuario.img | imagen\" \r\n                           *ngIf=\"chat.usuario.img!='' && chat.usuario.img!=null\"\r\n                           class=\"size-45\">\r\n                    \r\n                      <div class=\"iniciales-cliente align-content-center\"\r\n                             *ngIf=\"!chat.usuario.img || chat.usuario.img=='null'\"\r\n                             [ngStyle]=\"{ 'background-color': chat.usuario.backgroundColor }\">\r\n\r\n                          {{ chat.usuario.nombre | iniciales }}\r\n\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n                    <div class=\"chat-content\">\r\n                      <h5>{{ chat.usuario.nombre }}</h5>\r\n                      <div *ngIf=\"!chat.audio\" class=\"box bg-mensaje\">{{ chat.mensaje }}</div>\r\n                      <audio controls [src]=\"chat.audio\" *ngIf=\"chat.audio\">Audio</audio>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"chat.usuario._id!=_usuarioService.usuario._id\" class=\"chat-img\">\r\n                      <img [src]=\"chat.usuario.img | imagen\" \r\n                           *ngIf=\"chat.usuario.img!='' && chat.usuario.img!=null\"\r\n                           class=\"size-45\">\r\n                    \r\n                      <div class=\"iniciales-cliente align-content-center\"\r\n                             *ngIf=\"!chat.usuario.img && chat.usuario.img==null\"\r\n                             [ngStyle]=\"{ 'background-color': chat.usuario.backgroundColor }\">\r\n\r\n                          {{ chat.usuario.nombre | iniciales }}\r\n\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"chat-time\">{{ chat.fecha | date: 'MMM d, y, h:mm a' }}</div>\r\n                  </li>\r\n                  <!-- FIN de Elemento Chat -->\r\n                </ul>\r\n              </div>\r\n\r\n              <hr>\r\n\r\n              <div class=\"card-body b-t\"\r\n                   *ngIf=\"proyectoActual.nombre\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <textarea placeholder=\"Type your message here\" class=\"form-control\"\r\n                              [(ngModel)]=\"mensaje\"\r\n                              (keydown.enter)=\"agregarChat($event,'texto');\"></textarea>\r\n                  </div>\r\n\r\n                  <div class=\"col-12 text-left botonera\">\r\n\r\n                    <button type=\"button\" class=\"btn btn-info waves-effect waves-light\"\r\n                            (click)=\"agregarChat($event,'texto')\"><i class=\"fa fa-paper-plane-o\"></i> Send</button>\r\n                    <button type=\"button\" class=\"btn btn-success waves-effect waves-light\"><i class=\"fa fa-upload\"></i> File</button>\r\n                    <!-- Botonera de grabacion de audio -->\r\n                    <div class=\"btn-group\">\r\n                      <button type=\"button\" \r\n                              (click)=\"recordAudio()\" \r\n                              class=\"btn btn-warning waves-effect waves-light btn-audio\">\r\n                              <i class=\"fa fa-microphone color-animation\"\r\n                                 [ngClass]=\"{'color-animation': grabandoAudio}\"></i></button>\r\n                      <button id=\"stopButton\" \r\n                              (click)=\"stopRecording()\"\r\n                              class=\"btn btn-warning waves-effect waves-light btn-audio\">\r\n                              <i class=\"fa fa-stop\"></i></button>\r\n                      <button class=\"btn btn-warning btn-audio waves-effect waves-light\"\r\n                              (click)=\"playAudio()\"><i class=\"fa fa-play\"></i></button>\r\n                      <button class=\"btn btn-warning btn-audio waves-effect waves-light\"\r\n                              (click)=\"agregarChat($event,'audio')\">Enviar</button>\r\n                    </div>\r\n                    <!-- Termina botonera de grabación de audio -->\r\n\r\n                    <button class=\"btn btn-danger waves-effect waves-light\"\r\n                            [routerLink]=\"['/calendario']\"><i class=\"fa fa-calendar\"></i> Agenda</button>\r\n                    \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n            <!-- .chat-right-panel -->\r\n          </div>\r\n        </div>\r\n        <!-- /.chat-row -->\r\n      </div>\r\n    </div>\r\n    \r\n    </div>\r\n  <!-- ============================================================== -->\r\n  <!-- End Chat Component -->\r\n  <!-- ============================================================== -->\r\n\r\n  <!-- Componente Modal -->\r\n  <app-modal\r\n     tituloModal=\"Nuevo Proyecto\"\r\n     [cliente]=\"clienteActual\"\r\n     (nuevoProyecto)=\"agregarProyecto($event)\"></app-modal>\r\n\r\n   <app-info-client\r\n    [cliente]=\"clienteActual\"\r\n    (cambiosCliente)=\"guardarCambiosCliente($event)\"></app-info-client>\r\n\r\n  <app-nuevo-cliente\r\n    (clienteNuevo)=\"registrarClienteNuevo($event)\"\r\n    (imagenCliente)=\"imagenNuevoCliente($event)\"></app-nuevo-cliente>\r\n\r\n  <app-cotizacion *ngIf=\"proyectoActual.nombre!=null\"\r\n    [proyecto]=\"proyectoActual\"\r\n    [cliente]=\"clienteActual\"></app-cotizacion>"

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
/* harmony import */ var _services_clientes_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/clientes/cliente.service */ "./src/app/services/clientes/cliente.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_proyectos_proyecto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/proyectos/proyecto.service */ "./src/app/services/proyectos/proyecto.service.ts");
/* harmony import */ var _services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
/* harmony import */ var _services_chats_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/chats/chat.service */ "./src/app/services/chats/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_subirArchivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/subirArchivo/subir-archivo.service */ "./src/app/services/subirArchivo/subir-archivo.service.ts");
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
    function CrmComponent(audio, sanitizer, shared, _clientesServicio, _proyectoService, _usuarioService, _chatService, router, _subirArchivoService) {
        this.audio = audio;
        this.sanitizer = sanitizer;
        this.shared = shared;
        this._clientesServicio = _clientesServicio;
        this._proyectoService = _proyectoService;
        this._usuarioService = _usuarioService;
        this._chatService = _chatService;
        this.router = router;
        this._subirArchivoService = _subirArchivoService;
        //------------------------------
        //Variables Generales
        //------------------------------
        this.fechaActual = new Date();
        this.infScrollChats = false;
        this.infScrollClientes = false;
        //Variable de termino de busqueda para buscador de clientes
        this.terminoBusqueda = "";
        //Variables que identifican al cliente seleccionado
        this.clienteActual = {};
        this.mensaje = "";
        //------------------------------
        // FIN de Variables Generales
        //------------------------------
        //-------------------
        //Data
        //-------------------
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
        this.clientesFiltrados = [];
        this.proyectos = [];
        this.proyectoActual = {};
        this.chats = [];
        //-------------------
        //Data
        //-------------------
        //-------------------------------
        //Flag variables
        //-------------------------------
        //Flag - Variable para activar o desactivar la vista chat proyectos
        this.chatProyectos = false;
        //Flag - Variable para controlar la animacion boton grabando
        this.grabandoAudio = false;
        this.obtenerFechaActual();
        this.obtenerClientes(0);
    }
    CrmComponent.prototype.imagenNuevoCliente = function (file) {
        this.imagenClienteNuevo = file;
    };
    CrmComponent.prototype.resetRegresarAVistaCliente = function () {
        this.chatProyectos = false;
        this.infScrollChats = false;
        this.infScrollClientes = true;
        this.chats = [];
        this.proyectos = [];
        this.proyectoActual = {};
        this.obtenerClientes(0);
    };
    CrmComponent.prototype.obtenerFechaActual = function () {
        this.fechaActual = new Date();
    };
    CrmComponent.prototype.obtenerProyectos = function (clienteId, pagina) {
        var _this = this;
        this._proyectoService.getProyectos(clienteId, pagina).subscribe(function (resp) {
            _this.proyectos = resp.proyectos;
        }, function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Carga de proyectos fallida", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
    };
    CrmComponent.prototype.agregarProyecto = function (proyecto) {
        var _this = this;
        this._proyectoService.postProyecto(proyecto).subscribe(function (resp) {
            _this.obtenerProyectos(_this.clienteActual._id, 1);
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Registro de proyecto exitoso", "El proyecto " +
                resp.proyecto.nombre +
                "se ha guardado de manera exitosa.", "success");
        }, function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Registro de proyecto fallido", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
        // this.proyectos.push(proyecto);
    };
    CrmComponent.prototype.obtenerClientes = function (desde) {
        var _this = this;
        this._clientesServicio.obtenerClientes(desde).subscribe(function (resp) {
            _this.clientes = resp.clientes;
            _this.clientesFiltrados = _this.clientes;
            _this.cambiarColorIniciales();
            _this.totalClientes = resp.totalClientes;
            _this.infScrollClientes = true;
        }, function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error en carga inicial de clientes", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
    };
    CrmComponent.prototype.cambiarColorIniciales = function () {
        var _this = this;
        this.clientesFiltrados.forEach(function (cliente, index) {
            var color = _this.randomColor();
            cliente.backgroundColor = color;
            _this.clientesFiltrados[index] = cliente;
        });
    };
    CrmComponent.prototype.seleccionarCliente = function (cliente, index) {
        this.infScrollClientes = false;
        this.obtenerProyectos(cliente._id, 0);
        this.clienteActual = cliente;
        this.indexClienteActual = index;
        this.shared.clienteSeleccionado = cliente;
        this.chatProyectos = true;
    };
    CrmComponent.prototype.registrarClienteNuevo = function (nuevoCliente) {
        var _this = this;
        this._clientesServicio.guardarCliente(nuevoCliente).subscribe(function (resp) {
            _this.obtenerClientes(0);
            var cliente = resp.cliente;
            _this._subirArchivoService.subirArchivo(_this.imagenClienteNuevo, 'cliente', cliente._id)
                .then(function (resp) {
                console.log(resp);
            });
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Registro exitoso", "El cliente " +
                resp.cliente.nombre +
                " se ha guardado correctamente!", "success");
        }, function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Registro de cliente fallido", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
        this.clientes.push(nuevoCliente);
        this.buscarCliente();
    };
    CrmComponent.prototype.guardarCambiosCliente = function (clienteActualizado) {
        var _this = this;
        //Guardando cambios en base de datos
        this._clientesServicio.actualizarCliente(clienteActualizado).subscribe(function (resp) {
            //Actualizando cliente actual localmente con la respuesta del servicio
            _this.clienteActual = resp.cliente;
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Actualización exitosa", "El cliente " +
                clienteActualizado.nombre +
                " se ha actualizado correctamente!", "success");
        }, function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Actualización de cliente fallida", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
    };
    CrmComponent.prototype.buscarCliente = function () {
        var _this = this;
        if (!this.terminoBusqueda) {
            this.obtenerClientes(0);
            return;
        }
        if (this.terminoBusqueda.length <= 3) {
            return;
        }
        this._clientesServicio.buscarCliente(this.terminoBusqueda).subscribe(function (resp) {
            if (resp.cliente.length == 0) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Busqueda no concluyente", "No se encontraron clientes que coincidan con la busqueda: " +
                    _this.terminoBusqueda, "warning");
                return;
            }
            _this.clientesFiltrados = resp.cliente;
        }, function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Busqueda de cliente fallida", "Error al buscar cliente", "error");
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
    CrmComponent.prototype.scrollBottom = function (element) {
        element.scrollTop = element.scrollHeight;
    };
    CrmComponent.prototype.agregarChat = function (event, tipo) {
        var _this = this;
        //Previniendo comportamiento por default del botón enter
        if (event.keyCode == 13) {
            event.preventDefault();
        }
        //------------------------------------------------------
        //Evitando el envío de mensajes de texto vacios
        if (this.mensaje.trim().length <= 0 && tipo != "audio") {
            return;
        }
        //------------------------------------------------------
        //Evitando el envío de mensajes de audio vacios
        if (!this.audio.recordedAudio && tipo == "audio") {
            return;
        }
        //------------------------------------------------------
        //Obteniendo fecha actual
        this.obtenerFechaActual();
        //------------------------------------------------------
        //Construyendo mensaje
        var chat = {
            usuario: this._usuarioService.usuario._id,
            // usuario:{
            //   img:null,
            //   nombre: 'Michelle Felix',
            //   _id:'1111'
            // },
            tipo: tipo,
            proyectoId: this.proyectoActual._id,
            fecha: this.fechaActual,
            mensaje: this.mensaje,
            audio: this.sanitizer.bypassSecurityTrustUrl(this.audio.recordedAudioUrl),
            img: null
        };
        //--------------------------------------------------------
        //Eliminando ruta audio en mensajes de texto
        if (tipo != "audio") {
            chat.audio = null;
        }
        //--------------------------------------------------------
        //Guardando chat en base de datos
        this._chatService.guardarChat(chat, this.chats.length).subscribe(function (resp) {
            _this.mostrarChatProyecto(_this.proyectoActual);
        }, function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error al cargar postear mensaje", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
        //--------------------------------------------------------
        //Agregando el mensaje a arreglo de chats del proyecto
        // this.proyectos[this.indexProyectoActual].chatProyecto.push(chat);
        // this.chats.push(chat);
        //--------------------------------------------------------
        //Actualizando arreglo de chats actuales en chat body
        //--------------------------------------------------------
        //Limpiando text area
        this.mensaje = "";
        //Limpiando audio guardado
        this.audio.recordedAudio = null;
        this.audio.recordedAudioUrl = null;
        //Llamando Scroll
        //-------------------------------------------------------
    };
    CrmComponent.prototype.mostrarChatProyecto = function (proyecto) {
        var _this = this;
        //Seteo el proyecto seleccionado como proyecto actual
        this.proyectoActual = proyecto;
        this.chats = [];
        this.totalChatsProyecto = 0;
        this._chatService.obtenerChats(proyecto._id, this.chats.length).subscribe(function (resp) {
            _this.totalChatsProyecto = resp.totalChats;
            resp.chats.forEach(function (chat) {
                _this.chats.unshift(chat);
            });
            var chatBody = document.getElementById("chatBody");
            setTimeout(function () {
                _this.scrollBottom(chatBody);
            });
            //Habilitamos inf scroll
            _this.infScrollChats = true;
        }, function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error en carga inicial de mensajes", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
        // this.chats = this.proyectos[index].chatProyecto;
        // this.shared.proyectoSeleccionado = this.proyectos[index];
    };
    CrmComponent.prototype.cargarMensajes = function () {
        var _this = this;
        //Deshabilitamos infScrollChats
        this.infScrollChats = false;
        if (this.chats.length >= this.totalChatsProyecto) {
            return;
        }
        else {
            this._chatService
                .obtenerChats(this.proyectoActual._id, this.chats.length)
                .subscribe(function (resp) {
                resp.chats.forEach(function (chat) {
                    _this.chats.unshift(chat);
                });
                //Rehabilitamos infScrollChats
                _this.infScrollChats = true;
            }, function (error) {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error al cargar clientes", error.error.mensaje + " | " + error.error.errors.message, "error");
            });
        }
    };
    CrmComponent.prototype.cargarClientes = function () {
        var _this = this;
        if (this.clientes.length >= this.totalClientes) {
            return;
        }
        this.infScrollClientes = false;
        this._clientesServicio.obtenerClientes(this.clientes.length).subscribe(function (resp) {
            // console.log(resp);
            resp.clientes.forEach(function (cliente) {
                _this.clientes.push(cliente);
            });
            _this.clientesFiltrados = _this.clientes;
            _this.cambiarColorIniciales();
            _this.infScrollClientes = true;
        }, function (error) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error al cargar clientes", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
    };
    CrmComponent.prototype.randomColor = function () {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
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
            _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _services_clientes_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"],
            _services_proyectos_proyecto_service__WEBPACK_IMPORTED_MODULE_6__["ProyectoService"],
            _services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"],
            _services_chats_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _services_subirArchivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_10__["SubirArchivoService"]])
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

/***/ "./src/app/pages/modal/agregarProducto/agregar-producto/agregar-producto.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/modal/agregarProducto/agregar-producto/agregar-producto.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.image-container .after{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 15px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: none;\r\n    color: rgb(200, 200, 200);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.image-container img {display: block;}\r\n\r\n.image-container {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-radius: 15px;\r\n    overflow: hidden;\r\n}\r\n\r\n.image-container:hover .after {\r\n    display: block;\r\n    background: rgba(0, 0, 0, .6);\r\n}\r\n\r\ni.icon-center{\r\n\r\n    font-size: 30px;\r\n    margin-top:50%;\r\n    margin-bottom: 50%;\r\n\r\n    -webkit-transform: translateY(-15px);\r\n\r\n            transform: translateY(-15px);\r\n\r\n}\r\n\r\ni.icon-center-spinner{\r\n    font-size: 30px;\r\n    line-height: 100px;\r\n}"

/***/ }),

/***/ "./src/app/pages/modal/agregarProducto/agregar-producto/agregar-producto.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/modal/agregarProducto/agregar-producto/agregar-producto.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"nuevoProducto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\">\n  \n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n\n    <div class=\"modal-content\">\n      <!-- Modal header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalLabel1\">Registrar Producto</h4>\n        <button (click)=\"resetearModal()\" \n                type=\"button\" \n                class=\"close\" \n                data-dismiss=\"modal\" \n                aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      </div>\n      <!-- Fin de Modal header -->\n      \n      <!-- Modal Body -->\n      <div class=\"modal-body p-l-5 p-r-5 p-t-0 p-b-0\">\n        <div class=\"card-body\">\n\n\n\n              <div class=\"text-center\"\n                (click)=\"agregarImagen()\">\n                <div class=\"image-container\">\n                  <img *ngIf=\"!imagenTemporal\" class=\"profile size-100\" [src]=\"'noImage' | imagen: 'producto'\">\n                  <img *ngIf=\"imagenTemporal\" class=\"profile size-100\" [src]=\"imagenTemporal\">                  \n                  <div class=\"after text-center\">\n                    <i *ngIf=\"!imageLoading\" class=\"fa fa-plus icon-center\"></i>\n                    <i *ngIf=\"imageLoading\" class=\"fa fa-spinner fa-spin icon-center-spinner\"></i>\n                  </div>\n                </div>\n                <!-- <h3 class=\"box-title font-bold\"> nombre </h3> -->\n              </div>\n\n              <hr class=\"m-t-0\">\n\n              <!-- Panel de ingreso de información del cliente -->\n              <div>\n              \n                <form class=\"form-horizontal p-t-20\"\n                      ngNativeValidate \n                      #forma=\"ngForm\"\n                      id=\"formaNuevoProducto\"\n                      (ngSubmit)=\"registrarProducto(forma.value)\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 control-label\">Nombre*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-package\"></i></div>\n                        <input name=\"nombre\" \n                               [(ngModel)]=\"nombre\" \n                               type=\"text\" \n                               class=\"form-control\" \n                               placeholder=\"Nombre del producto\"\n                               required>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 control-label\">Código*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-tag\"></i></div>\n                        <input name=\"codigo\" \n                               [(ngModel)]=\"codigo\" \n                               type=\"text\" \n                               class=\"form-control\" \n                               placeholder=\"Código del producto\"\n                               required>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 control-label\">Precio*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-money\"></i></div>\n                        <input name=\"precio\" \n                               [(ngModel)]=\"precio\" \n                               type=\"number\" \n                               class=\"form-control\" \n                               placeholder=\"Precio de lista\"\n                               required>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row m-b-0\">\n                    <label class=\"col-sm-3 control-label\">Familia*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-layout-grid2\"></i></div>\n                        <select class=\"form-control custom-select\" \n                                data-placeholder=\"Choose a Category\" \n                                name=\"familia\"\n                                [(ngModel)]=\"familia\"\n                                required>\n                          <option *ngFor=\"let familia of familias\" [value]=\"familia\">{{ familia }}</option>\n                        </select>\n                        <!-- <input (keyup)=\"validarFormulario()\" name=\"correo\" [(ngModel)]=\"correo\" type=\"email\" class=\"form-control\" placeholder=\"Correo electrónico\"> -->\n                      </div>\n                    </div>\n                  </div>\n              \n                </form>\n              \n              </div>\n              <!-- Fin de panel de edición de información del cliente -->\n            \n        </div>\n      </div>\n\n      <!-- Modal Footer -->\n      <div class=\"modal-footer\">\n\n        <!-- Botones -->\n        <button type=\"submit\"\n                form=\"formaNuevoProducto\"\n                class=\"btn btn-success waves-effect waves-light\">Registrar</button>\n\n        <button type=\"button\"\n                (click)=\"resetearModal()\" \n                class=\"btn btn-danger waves-effect waves-light\" \n                data-dismiss=\"modal\">Salir</button>\n        <!-- Fin de botones -->\n\n      </div>\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/modal/agregarProducto/agregar-producto/agregar-producto.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/modal/agregarProducto/agregar-producto/agregar-producto.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AgregarProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarProductoComponent", function() { return AgregarProductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_producto_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/producto.model */ "./src/app/models/producto.model.ts");
/* harmony import */ var _services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
/* harmony import */ var src_app_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/productos/producto.service */ "./src/app/services/productos/producto.service.ts");
/* harmony import */ var src_app_services_subirArchivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/subirArchivo/subir-archivo.service */ "./src/app/services/subirArchivo/subir-archivo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgregarProductoComponent = /** @class */ (function () {
    function AgregarProductoComponent(_usuarioService, _productoService, _subirArchivoService) {
        this._usuarioService = _usuarioService;
        this._productoService = _productoService;
        this._subirArchivoService = _subirArchivoService;
        this.img = null;
        this.imageLoading = false;
        this.actualizarFamilia = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.familias = [
            "Credenzas",
            "Mesas",
            "Cómodas",
            "Sillas",
            "Sillones",
            "Bancas",
            "Bancos",
            "Mesas",
            "Libreros",
            "Lámparas",
            "Ocasionales",
            "Salas",
            "Cabeceras",
            "Bases de Cama",
            "Libreros"
        ];
        this.formaValida = false;
    }
    AgregarProductoComponent.prototype.ngOnInit = function () {
        this.usuarioCreador = this._usuarioService.id;
        this.usuarioUltimaModificacion = this._usuarioService.id;
    };
    AgregarProductoComponent.prototype.resetearModal = function () {
        this.codigo = null;
        this.nombre = null;
        this.familia = null;
        this.img = null;
        this.precio = null;
        this.imagenSubir = null;
        this.imagenTemporal = null;
        this.producto = null;
        this.imageLoading = false;
    };
    AgregarProductoComponent.prototype.agregarImagen = function () {
        var _this = this;
        var input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onclick = function () {
            _this.imageLoading = true;
        };
        input.onchange = function () {
            var file = input.files[0];
            if (!file) {
                _this.imagenSubir = null;
                _this.imagenTemporal = null;
                return;
            }
            if (file.type.indexOf("image") < 0) {
                swal("Típo de archivo inválido", "Seleccione una imágen", "error");
                _this.imagenSubir = null;
                return;
            }
            _this.imagenSubir = file;
            var reader = new FileReader();
            var urlImagenTemporal = reader.readAsDataURL(file);
            reader.onloadend = function () {
                _this.imagenTemporal = reader.result;
                _this.imageLoading = false;
            };
        };
        input.click();
    };
    AgregarProductoComponent.prototype.validarFormulario = function () { };
    AgregarProductoComponent.prototype.registrarProducto = function (forma) {
        var _this = this;
        //Creamos el objeto producto con la información de la forma
        var producto = new _models_producto_model__WEBPACK_IMPORTED_MODULE_1__["Producto"](forma.codigo, forma.nombre, forma.familia, forma.precio, this.usuarioCreador, this.usuarioUltimaModificacion, null);
        //Ejecutamos la petición html para crear el producto
        this._productoService.registrarProducto(producto).subscribe(function (resp) {
            //Validamos existencia de imagen
            if (!_this.imagenSubir) {
                //Refrescamos familia
                _this.actualizarFamilia.emit(producto.familia);
                swal("Producto registrado exitosamente", "El producto: " +
                    producto.nombre +
                    " se registró exitosamente, aunque no se selecciono una imagen para el mismo", "warning");
                $("#nuevoProducto").modal("toggle");
                _this.resetearModal();
            }
            else {
                //Hacemos la carga de la imagen con el id que se genero al crear el producto
                var producto_1 = resp.producto;
                _this._subirArchivoService
                    .subirArchivo(_this.imagenSubir, "producto", producto_1._id)
                    .then(function (resp) {
                    swal("Producto registrado exitosamente", "El producto: " + producto_1.nombre + " se registró exitosamente", "success");
                    //Refrescamos familia
                    _this.actualizarFamilia.emit(producto_1.familia);
                    $("#nuevoProducto").modal("toggle");
                    _this.resetearModal();
                })
                    .catch(function (error) {
                    console.log(error);
                    swal("La información del producto se registró, pero ocurrió un error al subir la imagen", error.error.mensaje + " | " + error.error.errors.message, "warning");
                    $("#nuevoProducto").modal("toggle");
                    _this.resetearModal();
                    return;
                });
            }
        }, function (error) {
            swal("Error al registrar producto", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgregarProductoComponent.prototype, "actualizarFamilia", void 0);
    AgregarProductoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-agregar-producto",
            template: __webpack_require__(/*! ./agregar-producto.component.html */ "./src/app/pages/modal/agregarProducto/agregar-producto/agregar-producto.component.html"),
            styles: [__webpack_require__(/*! ./agregar-producto.component.css */ "./src/app/pages/modal/agregarProducto/agregar-producto/agregar-producto.component.css")]
        }),
        __metadata("design:paramtypes", [_services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"],
            src_app_services_subirArchivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_4__["SubirArchivoService"]])
    ], AgregarProductoComponent);
    return AgregarProductoComponent;
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

module.exports = "<div class=\"modal fade\" id=\"cotizacion\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\">\n\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n\n    <div class=\"modal-content\">\n      <!-- Modal header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalLabel1\">Cotización: {{ proyecto.nombre }}</h4>\n        <button (click)=\"resetearModal()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      </div>\n      <!-- Fin de Modal header -->\n\n      <!-- Modal Body -->\n      <div class=\"modal-body p-l-5 p-r-5 p-t-0 p-b-0\">\n        <div class=\"card-body\">\n\n          <!-- Documento Cotización -->\n          <div id=\"documento-cotizacion\" class=\"container print-content\">\n\n            <!-- Header de cotizacion -->\n            <div class=\"row m-b-5\">\n\n              <div class=\"col col-md-12 m-b-30\">\n                <img class=\"logo pull-left\" src=\"../assets/images/mobla-logo.png\" alt=\"\">\n              </div>\n              \n            </div>\n            <div class=\"row\">\n              <div class=\"col col-md-12\">\n                <span class=\"pull-left\">\n                  Cotización: {{ cliente.nombre }}\n                </span>\n\n                <span class=\"pull-right\">\n                  León Gto. al {{ fecha | date:'fullDate'}}\n                </span>\n              </div>\n            </div>\n            <!-- Fin de header de cotizacion -->\n\n            <!-- Tabla de productos -->\n            <div class=\"row m-b-30\">\n              <div class=\"col col-md-12 p-l-10 p-r-10 table-responsive\">\n\n                <table  id=\"tablaCotizacion\" \n                        class=\"table editable-table table-bordered table-striped\">\n                  <thead>\n                    <tr>\n                      <th>Imágen</th>\n                      <th>Producto</th>\n                      <th>Descripción</th>\n                      <th>Cant.</th>\n                      <th [ngClass]=\"{'no-print': totalDescuento==0}\">Descuento</th>\n                      <th>Precio</th>\n                      <th>Importe</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let producto of productos; let i=index;\">\n                      <td class=\"text-center\"><img class=\"product-image\" src=\"../assets/images/gallery/chair2.jpg\"></td>\n                      <td>{{ producto.nombre }}</td>\n                      <td>{{ producto.descripcion }}</td>\n                      <td (click)=\"clearFieldCantidad($event,i)\" \n                          (keyup.enter)=\"loseFocus(i)\" \n                          (blur)=\"loseFocus(i)\" \n                          (input)=\"actualizandoCantidad($event,i)\" \n                          class=\"text-center clickable\"\n                           [ngClass]=\"{'editando': producto.editandoCantidad}\"\n                          contenteditable=\"true\">0</td>\n                      <td (click)=\"clearFieldDescuento($event,i)\"\n                          (keyup.enter)=\"loseFocusDescuento(i)\"\n                          (blur)=\"loseFocusDescuento(i)\"\n                          (input)=\"actualizarDescuento($event,i)\"\n                          class=\"text-center clickable\"\n                          [ngClass]=\"{\n                            'editando': producto.editandoDescuento,\n                            'no-print':totalDescuento==0\n                          }\"\n                          contenteditable=\"true\">0</td>\n                      <td (click)=\"clearFieldPrecio($event,i)\" \n                          (keyup.enter)=\"loseFocusPrecio(i)\" \n                          (blur)=\"loseFocusPrecio(i)\" \n                          (input)=\"actualizarPrecio($event,i)\" \n                          class=\"text-center clickable\"\n                          [ngClass]=\"{'editando': producto.editandoPrecio}\"\n                          contenteditable=\"true\">$8,000.00</td>\n                      <td class=\"text-center\">{{ (producto.precio * producto.cantidad) - producto.descuento | currency:'MXN' }}</td>\n                    </tr>\n                  </tbody>\n                  <tfoot>\n                    <tr>\n                      <th><strong>SUBTOTAL</strong></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th [ngClass]=\"{'no-print': totalDescuento==0}\"></th>\n                      <th></th>\n                      <th class=\"text-center\">{{ totalImporte | currency:'MXN' }}</th>\n                    </tr>\n                    <tr [ngClass]=\"{'oculto': totalDescuento==0}\">\n                      <th><strong>DESCUENTO</strong></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th [ngClass]=\"{'no-print': totalDescuento==0}\"></th>\n                      <th></th>\n                      <th class=\"text-center\">{{ totalDescuento | currency:'MXN' }}</th>\n                    </tr>\n                    <tr>\n                      <th><strong>TOTAL</strong></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th [ngClass]=\"{'no-print': totalDescuento==0}\"></th>\n                      <th></th>\n                      <th class=\"text-center\">{{ totalImporte - totalDescuento | currency:'MXN' }}</th>\n                    </tr>\n                  </tfoot>\n\n                </table>\n                \n              </div>\n            </div>\n            <!-- Fin de tabla de productos -->\n\n            <!-- Políticas -->\n            <div class=\"politicas\">\n              <span><strong>Imágenes meramente ilustrativas</strong></span>\n            \n              <ol class=\"p-l-0 m-l-10\">\n                <li *ngFor=\"let politica of politicas\"\n                    class=\"m-0\">{{ politica }}</li>\n              </ol>\n            </div>\n            <!-- Fin de Políticas -->\n          \n\n          </div>\n          <!-- Fin de documento Cotización -->\n\n        </div>\n      </div>\n      <!-- Final de Modal Body -->\n\n      <!-- Modal Footer -->\n      <div class=\"modal-footer\">\n\n        <!-- Botones -->\n\n        <button type=\"button\"\n                class=\"btn btn-success waves-effect waves-light\"\n                (click)=\"imprimirCotizacion()\"\n                >Imprimir</button>\n\n        <button type=\"button\"\n                class=\"btn btn-warning waves-effect waves-light\"\n                 (click)=\"guardarCotizacion()\"\n                [ngClass]=\"{'disabled': !notaValida}\"\n                [attr.data-toggle]=\"(!notaValida)?'tooltip':null\"\n                [attr.data-original-title]=\"(!notaValida)?'Favor de validar la nota':null\"\n                [attr.data-placement]=\"(!notaValida)?'bottom':null\">Guardar</button>\n\n        <button type=\"button\"\n                (click)=\"resetearModal()\" \n                class=\"btn btn-danger waves-effect waves-light\" \n                data-dismiss=\"modal\">Salir</button>\n        <!-- Fin de botones -->\n\n      </div>\n      <!-- Fin de Modal Footer -->\n\n    </div>\n  </div>\n</div>\n\n"

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

/***/ "./src/app/pages/modal/editar-producto/editar-producto.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/modal/editar-producto/editar-producto.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.image-container .after{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 15px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: none;\r\n    color: rgb(200, 200, 200);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.image-container img {display: block;}\r\n\r\n.image-container {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-radius: 15px;\r\n    overflow: hidden;\r\n}\r\n\r\n.image-container:hover .after {\r\n    display: block;\r\n    background: rgba(0, 0, 0, .6);\r\n}\r\n\r\ni.icon-center{\r\n\r\n    font-size: 30px;\r\n    margin-top:50%;\r\n    margin-bottom: 50%;\r\n\r\n    -webkit-transform: translateY(-15px);\r\n\r\n            transform: translateY(-15px);\r\n\r\n}\r\n\r\ni.icon-center-spinner{\r\n    font-size: 30px;\r\n    line-height: 100px;\r\n}"

/***/ }),

/***/ "./src/app/pages/modal/editar-producto/editar-producto.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/modal/editar-producto/editar-producto.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"editarProducto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\">\n\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n\n    <div class=\"modal-content\">\n      <!-- Modal header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalLabel1\">Editar Producto</h4>\n        <button (click)=\"resetearModal()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n            aria-hidden=\"true\">&times;</span></button>\n      </div>\n      <!-- Fin de Modal header -->\n\n      <!-- Modal Body -->\n      <div class=\"modal-body p-l-5 p-r-5 p-t-0 p-b-0\">\n        <div class=\"card-body\">\n\n\n\n          <div class=\"text-center\" (click)=\"agregarImagen()\">\n            <div class=\"image-container\">\n              <img *ngIf=\"!imagenTemporal\" class=\"profile size-100\" [src]=\"producto.img | imagen: 'producto'\">\n              <img *ngIf=\"imagenTemporal\" class=\"profile size-100\" [src]=\"imagenTemporal\">\n              <div class=\"after text-center\">\n                <i *ngIf=\"!imageLoading\" class=\"fa fa-plus icon-center\"></i>\n                <i *ngIf=\"imageLoading\" class=\"fa fa-spinner fa-spin icon-center-spinner\"></i>\n              </div>\n            </div>\n            <!-- <h3 class=\"box-title font-bold\"> nombre </h3> -->\n          </div>\n\n          <hr class=\"m-t-0\">\n\n          <!-- Panel de ingreso de información del cliente -->\n          <div>\n\n            <form class=\"form-horizontal p-t-20\" ngNativeValidate #formaActualizar=\"ngForm\" id=\"formaActualizarProducto\" (ngSubmit)=\"actualizarProducto(formaActualizar.value)\">\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 control-label\">Nombre*</label>\n                <div class=\"col-sm-9\">\n                  <div class=\"input-group\">\n                    <div class=\"input-group-addon\"><i class=\"ti-package\"></i></div>\n                    <input name=\"nombre\" [(ngModel)]=\"nombre\" type=\"text\" class=\"form-control\" placeholder=\"Nombre del producto\"\n                      required>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 control-label\">Código*</label>\n                <div class=\"col-sm-9\">\n                  <div class=\"input-group\">\n                    <div class=\"input-group-addon\"><i class=\"ti-tag\"></i></div>\n                    <input name=\"codigo\" [(ngModel)]=\"codigo\" type=\"text\" class=\"form-control\" placeholder=\"Código del producto\"\n                      required>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 control-label\">Precio*</label>\n                <div class=\"col-sm-9\">\n                  <div class=\"input-group\">\n                    <div class=\"input-group-addon\"><i class=\"ti-money\"></i></div>\n                    <input name=\"precio\" [(ngModel)]=\"precio\" type=\"number\" class=\"form-control\" placeholder=\"Precio de lista\"\n                      required>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row m-b-0\">\n                <label class=\"col-sm-3 control-label\">Familia*</label>\n                <div class=\"col-sm-9\">\n                  <div class=\"input-group\">\n                    <div class=\"input-group-addon\"><i class=\"ti-layout-grid2\"></i></div>\n                    <select class=\"form-control custom-select\" data-placeholder=\"Choose a Category\" name=\"familia\"\n                      [(ngModel)]=\"familia\" required>\n                      <option *ngFor=\"let familia of familias\" [value]=\"familia\">{{ familia }}</option>\n                    </select>\n                    <!-- <input (keyup)=\"validarFormulario()\" name=\"correo\" [(ngModel)]=\"correo\" type=\"email\" class=\"form-control\" placeholder=\"Correo electrónico\"> -->\n                  </div>\n                </div>\n              </div>\n\n            </form>\n\n          </div>\n          <!-- Fin de panel de edición de información del cliente -->\n\n        </div>\n      </div>\n\n      <!-- Modal Footer -->\n      <div class=\"modal-footer\">\n\n        <!-- Botones -->\n        <button type=\"submit\" form=\"formaActualizarProducto\" class=\"btn btn-success waves-effect waves-light\">Actualizar</button>\n\n        <button class=\"btn btn-warning waves-effect waves-light\" (click)=\"eliminarProucto()\">Eliminar</button>\n        \n        <button type=\"button\" (click)=\"resetearModal()\" class=\"btn btn-danger waves-effect waves-light\" data-dismiss=\"modal\">Salir</button>\n        <!-- Fin de botones -->\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/modal/editar-producto/editar-producto.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/modal/editar-producto/editar-producto.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditarProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarProductoComponent", function() { return EditarProductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_producto_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/producto.model */ "./src/app/models/producto.model.ts");
/* harmony import */ var src_app_services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
/* harmony import */ var src_app_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/productos/producto.service */ "./src/app/services/productos/producto.service.ts");
/* harmony import */ var src_app_services_subirArchivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/subirArchivo/subir-archivo.service */ "./src/app/services/subirArchivo/subir-archivo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditarProductoComponent = /** @class */ (function () {
    function EditarProductoComponent(_usuarioService, _productoService, _subirArchivoService) {
        this._usuarioService = _usuarioService;
        this._productoService = _productoService;
        this._subirArchivoService = _subirArchivoService;
        this.img = null;
        this.imageLoading = false;
        this.familias = [
            "Credenzas",
            "Mesas",
            "Cómodas",
            "Sillas",
            "Sillones",
            "Bancas",
            "Bancos",
            "Mesas",
            "Libreros",
            "Lámparas",
            "Ocasionales",
            "Salas",
            "Cabeceras",
            "Bases de Cama",
            "Libreros"
        ];
        this.formaValida = false;
        this.actualizarFamilia = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EditarProductoComponent.prototype.ngOnInit = function () {
        this.usuarioCreador = this._usuarioService.id;
        this.usuarioUltimaModificacion = this._usuarioService.id;
    };
    EditarProductoComponent.prototype.ngOnChanges = function () {
        this.nombre = this.producto.nombre;
        this.codigo = this.producto.codigo;
        this.familia = this.producto.familia;
        this.precio = this.producto.precio;
    };
    EditarProductoComponent.prototype.resetearModal = function () {
        this.codigo = this.producto.codigo;
        this.nombre = this.producto.nombre;
        this.familia = this.producto.familia;
        this.img = this.producto.img;
        this.precio = this.producto.precio;
        this.imagenSubir = null;
        this.imagenTemporal = null;
        this.imageLoading = false;
    };
    EditarProductoComponent.prototype.agregarImagen = function () {
        var _this = this;
        var input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onclick = function () {
            _this.imageLoading = true;
        };
        input.onchange = function () {
            var file = input.files[0];
            if (!file) {
                _this.imagenSubir = null;
                _this.imagenTemporal = null;
                return;
            }
            if (file.type.indexOf("image") < 0) {
                swal("Típo de archivo inválido", "Seleccione una imágen", "error");
                _this.imagenSubir = null;
                return;
            }
            _this.imagenSubir = file;
            var reader = new FileReader();
            var urlImagenTemporal = reader.readAsDataURL(file);
            reader.onloadend = function () {
                _this.imagenTemporal = reader.result;
                _this.imageLoading = false;
            };
        };
        input.click();
    };
    EditarProductoComponent.prototype.eliminarProucto = function () {
        var _this = this;
        swal("Confirmar eliminación", "Se eliminará el producto, ¿Esta seguro de que desea continuar?", "warning", {
            buttons: {
                aceptar: {
                    text: "Aceptar",
                    value: true
                },
                cancelar: {
                    text: "Cancelar",
                    value: false
                }
            }
        }).then(function (eliminar) {
            if (eliminar) {
                _this._productoService.eliminarProductoPorId(_this.producto._id).subscribe(function (resp) {
                    _this.actualizarFamilia.emit(resp.producto.familia);
                    swal("Producto Eliminado", "Producto: " + resp.producto.nombre + ", eliminado exitosamente", "success");
                    $("#editarProducto").modal("toggle");
                }, function (error) {
                    swal("Error al eliminar producto", error.error.mensaje + " | " + error.error.errors.message, "error");
                });
            }
            else {
                return;
            }
        });
    };
    EditarProductoComponent.prototype.validarFormulario = function () { };
    EditarProductoComponent.prototype.actualizarProducto = function (forma) {
        var _this = this;
        //Leemos los valores a actualizar de la forma
        var producto = {
            nombre: this.nombre,
            codigo: this.codigo,
            precio: this.precio,
            familia: this.familia,
            _id: this.producto._id
        };
        //Ejecutamos la petición html para actualizar el producto
        this._productoService.actualizarProducto(producto)
            .subscribe(function (resp) {
            if (!_this.imagenSubir) {
                //Refrescamos familia
                _this.actualizarFamilia.emit(producto.familia);
                swal("Producto actualizado exitosamente", "El producto: " +
                    producto.nombre +
                    " se actualizó exitosamente", "success");
                $("#editarProducto").modal("toggle");
                _this.resetearModal();
            }
            else {
                //Hacemos la carga de la imagen con el id que se genero al crear el producto
                var producto_1 = resp.producto;
                _this._subirArchivoService
                    .subirArchivo(_this.imagenSubir, "producto", producto_1._id)
                    .then(function (resp) {
                    swal("Producto actualizado exitosamente", "El producto: " + producto_1.nombre + " se actualizó exitosamente", "success");
                    //Refrescamos familia
                    _this.actualizarFamilia.emit(producto_1.familia);
                    $("#editarProducto").modal("toggle");
                    _this.resetearModal();
                })
                    .catch(function (error) {
                    console.log(error);
                    swal("La información del producto se actualizó, pero ocurrió un error al subir la imagen", error.error.mensaje + " | " + error.error.errors.message, "warning");
                    $("#editarProducto").modal("toggle");
                    _this.resetearModal();
                    return;
                });
            }
        }, function (error) {
            swal("Error al actualizar el producto", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditarProductoComponent.prototype, "actualizarFamilia", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_models_producto_model__WEBPACK_IMPORTED_MODULE_1__["Producto"])
    ], EditarProductoComponent.prototype, "producto", void 0);
    EditarProductoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editar-producto',
            template: __webpack_require__(/*! ./editar-producto.component.html */ "./src/app/pages/modal/editar-producto/editar-producto.component.html"),
            styles: [__webpack_require__(/*! ./editar-producto.component.css */ "./src/app/pages/modal/editar-producto/editar-producto.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_3__["ProductoService"],
            src_app_services_subirArchivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_4__["SubirArchivoService"]])
    ], EditarProductoComponent);
    return EditarProductoComponent;
}());



/***/ }),

/***/ "./src/app/pages/modal/image-upload/image-upload.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/modal/image-upload/image-upload.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w150{\r\n    width: 150px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.disabled{\r\n    cursor: not-allowed;\r\n}"

/***/ }),

/***/ "./src/app/pages/modal/image-upload/image-upload.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/modal/image-upload/image-upload.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Ejemplo botton -->\n\n<!-- <button *ngIf=\"!chatProyectos\" \n                          class=\"btn btn-success btn-block waves-effect waves-light\"\n                          data-toggle=\"modal\" \n                          data-target=\"#cargarImagen\">Agregar Cliente</button> -->\n\n<div class=\"modal fade\" id=\"cargarImagen\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\">\n\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n\n    <div class=\"modal-content\">\n      <!-- Modal header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalLabel1\">Actualizar imagen de {{ _imageUploadService.tipo }}</h4>\n        <button (click)=\"resetearModal()\" \n                type=\"button\" \n                class=\"close\" \n                data-dismiss=\"modal\" \n                aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body p-l-5 p-r-5 p-t-0 p-b-0\">\n        <div class=\"card-body text-center\">\n\n          <img *ngIf=\"!imagenTemporal\" [src]=\"'default' | imagen:'producto'\" class=\"w150 m-b-20\">\n          <img *ngIf=\"imagenTemporal\" [src]=\"imagenTemporal\" class=\"w150 m-b-20\">\n\n\n        <label class=\"custom-file d-block m-b-20\">\n          <input (change)=\"seleccionImagen( $event )\" \n                 type=\"file\" \n                 id=\"file\" \n                 class=\"custom-file-input pointer\">\n          <span *ngIf=\"imagenSubir\" class=\"custom-file-control pointer text-left\">{{ imagenSubir.name }}</span>\n          <span *ngIf=\"!imagenSubir\" class=\"custom-file-control pointer text-left\"></span>\n        </label>\n\n        </div>\n      </div>\n  \n\n      <div class=\"modal-footer\">\n\n        <!-- Botones -->\n        <button \n                type=\"button\"\n                class=\"btn btn-success waves-effect waves-light\"\n                (click)=\"subirImagen()\"\n                [ngClass]=\"{ 'disabled': !hayImagen }\"\n                [disabled]=\"!hayImagen\">Subir Imagen</button>\n\n        <button type=\"button\"\n                (click)=\"resetearModal()\" \n                class=\"btn btn-danger waves-effect waves-light\" \n                data-dismiss=\"modal\">Cancelar</button>\n        <!-- Fin de botones -->\n\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/modal/image-upload/image-upload.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/modal/image-upload/image-upload.component.ts ***!
  \********************************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_subirArchivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/subirArchivo/subir-archivo.service */ "./src/app/services/subirArchivo/subir-archivo.service.ts");
/* harmony import */ var _image_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-upload.service */ "./src/app/pages/modal/image-upload/image-upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent(_subirArchivoService, _imageUploadService) {
        this._subirArchivoService = _subirArchivoService;
        this._imageUploadService = _imageUploadService;
        this.hayImagen = false;
    }
    ImageUploadComponent.prototype.ngOnInit = function () { };
    ImageUploadComponent.prototype.subirImagen = function () {
        var _this = this;
        this._subirArchivoService.subirArchivo(this.imagenSubir, this._imageUploadService.tipo, this._imageUploadService.id)
            .then(function (resp) {
            _this._imageUploadService.notificacion.emit(resp);
            _this._imageUploadService.resetearModal();
            _this.resetearModal();
            swal("Carga de imagen exitosa", "La imagen se ha guardado de manera exitosa", "success");
        })
            .catch(function (error) {
            swal("Error al guardar imagen", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
        $('#cargarImagen').modal("toggle");
        $('#infoCliente').modal('toggle');
    };
    ImageUploadComponent.prototype.resetearModal = function () {
        this.imagenTemporal = null;
        this.imagenSubir = null;
        this.hayImagen = false;
        this._imageUploadService.resetearModal();
    };
    ImageUploadComponent.prototype.seleccionImagen = function (evento) {
        var _this = this;
        var file = evento.target.files[0];
        if (!file) {
            this.imagenSubir = null;
            this.hayImagen = false;
            this.imagenTemporal = null;
            return;
        }
        if (file.type.indexOf('image') < 0) {
            swal('Típo de archivo inválido', 'Seleccione una imágen', 'error');
            this.imagenSubir = null;
            return;
        }
        this.imagenSubir = file;
        this.hayImagen = true;
        var reader = new FileReader();
        var urlImagenTemporal = reader.readAsDataURL(file);
        reader.onloadend = function () { return _this.imagenTemporal = reader.result; };
    };
    ImageUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-image-upload",
            template: __webpack_require__(/*! ./image-upload.component.html */ "./src/app/pages/modal/image-upload/image-upload.component.html"),
            styles: [__webpack_require__(/*! ./image-upload.component.css */ "./src/app/pages/modal/image-upload/image-upload.component.css")]
        }),
        __metadata("design:paramtypes", [_services_subirArchivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_1__["SubirArchivoService"],
            _image_upload_service__WEBPACK_IMPORTED_MODULE_2__["ImageUploadService"]])
    ], ImageUploadComponent);
    return ImageUploadComponent;
}());



/***/ }),

/***/ "./src/app/pages/modal/image-upload/image-upload.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/modal/image-upload/image-upload.service.ts ***!
  \******************************************************************/
/*! exports provided: ImageUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadService", function() { return ImageUploadService; });
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

var ImageUploadService = /** @class */ (function () {
    function ImageUploadService() {
        this.notificacion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ImageUploadService.prototype.inicializarModal = function (tipo, id) {
        this.id = id;
        this.tipo = tipo;
        $("#cargarImagen").modal('toggle');
    };
    ImageUploadService.prototype.resetearModal = function () {
        this.tipo = null;
        this.id = null;
    };
    ImageUploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ImageUploadService);
    return ImageUploadService;
}());



/***/ }),

/***/ "./src/app/pages/modal/info-client/info-client.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modal/info-client/info-client.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nimg.profile{\r\n    width:100px;\r\n}\r\n\r\nlabel{\r\n    font-weight: bold;\r\n}\r\n\r\nhr{\r\n     border: 0; \r\n     height: 1px; \r\n     background: #278395; \r\n     background-image: linear-gradient(to right, #caebf1, #278395, #caebf1);\r\n}\r\n\r\n.size-100{\r\n    height: 100px;\r\n    width: 100px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\ndiv.image-container .after{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: none;\r\n    color: rgb(200, 200, 200);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.image-container img {display: block;}\r\n\r\n.image-container {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.image-container:hover .after {\r\n    display: block;\r\n    background: rgba(0, 0, 0, .6);\r\n}\r\n\r\ni.icon-center{\r\n\r\n    font-size: 30px;\r\n    margin-top:50%;\r\n    margin-bottom: 50%;\r\n\r\n    -webkit-transform: translateY(-15px);\r\n\r\n            transform: translateY(-15px);\r\n\r\n}\r\n\r\n/* h3,label{\r\n    color:#278395; \r\n} */\r\n\r\n/* span{\r\n    color:#2e9bb0;\r\n} */"

/***/ }),

/***/ "./src/app/pages/modal/info-client/info-client.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/modal/info-client/info-client.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"infoCliente\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\">\n \n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n\n    <div class=\"modal-content\">\n      <!-- Modal header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalLabel1\">Información de: <small>{{ cliente.nombre }}</small></h4>\n        <button (click)=\"resetearModal();\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      </div>\n      <!-- Fin de Modal header -->\n\n      <!-- Modal Body -->\n      <div class=\"modal-body p-l-5 p-r-5 p-t-0 p-b-0\">\n\n        <!-- Vista de información -->\n        <div class=\"card-body\">\n          <form class=\"form-horizontal\" role=\"form\">\n            <div class=\"form-body\">\n\n              <div class=\"text-center\">\n                  \n                <img class=\"profile img-circle size-100\" \n                     [src]=\"cliente.img | imagen: 'cliente'\"\n                     *ngIf=\"!editando\">\n\n\n                <div class=\"image-container\" *ngIf='editando'\n                     (click)=\"actualizarImagen(cliente)\">\n                  <img class=\"profile img-circle size-100\" [src]=\"cliente.img | imagen: 'cliente'\">                  \n                  <div class=\"after text-center\"><i class=\"fa fa-edit icon-center\"></i></div>\n                </div>\n\n                <h3 class=\"box-title font-bold\">{{ cliente.nombre }}</h3>\n\n              </div>\n              \n              <hr class=\"m-t-0\"\n                  [ngClass]=\"{\n                    'm-b-40': !editando\n                  }\">\n\n              <!-- Alineación de información centrada -->\n              <div *ngIf=\"!editando\"\n                   class=\"animated\"\n                   [ngClass]=\"{ \n                      'bounceInDown': !editando, \n                      'bounceOutDown': outAnimation}\">\n                <div class=\"text-center\">\n                  <label class=\"control-label\">Nombre:</label>\n                  <span class=\"form-control-static\"> {{ cliente.nombre }} </span>\n                </div>\n                \n                <br>\n                \n                <div class=\"text-center\">\n                  <label class=\"control-label\">Teléfono:</label>\n                  <span class=\"form-control-static\"> {{ cliente.telefono}} </span>\n                </div>\n                \n                <br>\n                \n                <div class=\"text-center\">\n                  <label class=\"control-label\">Dirección:</label>\n                  <span class=\"form-control-static\"> {{ cliente.direccion }} </span>\n                </div>\n                \n                <br>\n                \n                <div class=\"text-center\">\n                  <label class=\"control-label\">Email:</label>\n                  <span class=\"form-control-static\"> {{ cliente.email }} </span>\n                </div>\n              </div>\n              <!-- Fin de información centrada\n\n              <!-- Alineación de información izquierda (basada en columnas) -->\n              <!-- <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group row\">\n                    <label class=\"control-label text-right col-md-3\">Nombre:</label>\n                    <div class=\"col-md-9\">\n                      <p class=\"form-control-static\"> {{ cliente.nombre }} </p>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group row\">\n                    <label class=\"control-label text-right col-md-3\">Teléfono:</label>\n                    <div class=\"col-md-9\">\n                      <p class=\"form-control-static\"> 477-238-25-25 </p>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group row\">\n                    <label class=\"control-label text-right col-md-3\">Dirección</label>\n                    <div class=\"col-md-9\">\n                      <p class=\"form-control-static\"> Violetas 110, Jardínes de Jerez, León, Gto. </p>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group row\">\n                    <label class=\"control-label text-right col-md-3\">Email:</label>\n                    <div class=\"col-md-9\">\n                      <p class=\"form-control-static\"> mich.feloz@gmail.com </p>\n                    </div>\n                  </div>\n                </div>\n              </div> -->\n\n              <!-- Fin de información izquierda -->\n\n              <!-- Panel de edición de información del cliente -->\n              <div *ngIf=\"editando\"\n                   class=\"animated\"\n                   [ngClass]=\"{\n                                'bounceInDown': editando,\n                                 'bounceOutDown': outAnimation\n                              }\">\n\n                <form class=\"form-horizontal p-t-20\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 control-label\">Nombre*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-user\"></i></div>\n                        <input  name=\"nuevoNombre\"\n                                [(ngModel)]=\"nuevoNombre\"\n                                type=\"text\" class=\"form-control\" placeholder=\"Nombre del Cliente\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label  class=\"col-sm-3 control-label\">Teléfono*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-mobile\"></i></div>\n                        <input  name=\"nuevoTelefono\"\n                                [(ngModel)]=\"nuevoTelefono\" \n                                type=\"text\" class=\"form-control\" placeholder=\"Teléfono (sólo números)\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 control-label\">Dirección*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-location-pin\"></i></div>\n                        <input  name=\"nuevaDireccion\" \n                                [(ngModel)]=\"nuevaDireccion\"\n                                type=\"text\" class=\"form-control\" placeholder=\"Calle #, Colonia, Ciudad, Estado\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row m-b-0\">\n                    <label class=\"col-sm-3 control-label\">Email</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-email\"></i></div>\n                        <input  name=\"nuevoCorreo\"\n                                [(ngModel)]=\"nuevoCorreo\"\n                                type=\"email\" class=\"form-control\" placeholder=\"Correo electrónico\">\n                      </div>\n                    </div>\n                  </div>\n                  \n                </form>\n\n              </div>\n              <!-- Fin de panel de edición de información del cliente -->\n\n            </div>\n          </form>\n        </div>\n\n      </div>\n      <!-- Fin de Modal Body -->\n\n      <!-- Modal Footer -->\n      <div class=\"modal-footer\">\n\n        <!-- Botones vista información -->\n        <button *ngIf=\"!editando\"\n                (click)=\"cerrarInformacion()\"\n                type=\"button\" class=\"btn btn-success waves-effect waves-light\">Editar</button>\n        <button *ngIf=\"!editando\"\n                type=\"button\" class=\"btn btn-danger waves-effect waves-light\" data-dismiss=\"modal\">Salir</button>\n        <!-- Fin de botones vista información -->\n\n        <!-- Botones vista edición -->\n        <button *ngIf=\"editando\" \n                (click)=\"guardarCambios()\"\n                class=\"btn btn-warning waves-effect waves-light\">Guardar</button>\n        <button *ngIf=\"editando\"\n                (click)=\"cerrarEdicion()\" \n                class=\"btn btn-danger waves-effect waves-light\">Cancelar</button>\n        <!-- Fin de botones vista edición -->\n\n      </div>\n      <!-- Fin de Modal Footer -->\n    </div>\n\n  </div>\n\n</div>"

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
/* harmony import */ var _models_cliente_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/cliente.model */ "./src/app/models/cliente.model.ts");
/* harmony import */ var _services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
/* harmony import */ var _image_upload_image_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-upload/image-upload.service */ "./src/app/pages/modal/image-upload/image-upload.service.ts");
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
    function InfoClientComponent(_usuarioService, _imageUploadService) {
        this._usuarioService = _usuarioService;
        this._imageUploadService = _imageUploadService;
        this.cliente = {};
        this.cambiosCliente = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editando = false;
        this.outAnimation = false;
    }
    InfoClientComponent.prototype.ngOnInit = function () { };
    InfoClientComponent.prototype.actualizarImagen = function (cliente) {
        var _this = this;
        this._imageUploadService.notificacion.subscribe(function (resp) {
            _this.cliente = resp.cliente;
        });
        this._imageUploadService.inicializarModal('cliente', cliente._id);
        $("#infoCliente").modal('toggle');
        $("#cargarImagen").modal("toggle");
    };
    InfoClientComponent.prototype.resetearModal = function () {
        this.editando = false;
        this.outAnimation = false;
    };
    InfoClientComponent.prototype.ngOnChanges = function () {
        this.nombre = this.cliente.nombre;
        this.telefono = this.cliente.telefono;
        this.direccion = this.cliente.direccion;
        this.email = this.cliente.email;
    };
    InfoClientComponent.prototype.guardarCambios = function () {
        this.nombre = this.nuevoNombre;
        this.telefono = this.nuevoTelefono;
        this.direccion = this.nuevaDireccion;
        this.email = this.nuevoCorreo;
        var clienteActualizado = new _models_cliente_model__WEBPACK_IMPORTED_MODULE_1__["Cliente"](this.nuevoNombre, this.nuevoTelefono, this.nuevaDireccion, this.nuevoCorreo, this.cliente.estatus, this.cliente.img, this.cliente._id, this.cliente.usuarioCreador, this._usuarioService.usuario._id);
        this.cambiosCliente.emit(clienteActualizado);
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
        this.nuevoCorreo = this.email;
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
        __metadata("design:paramtypes", [_services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _image_upload_image_upload_service__WEBPACK_IMPORTED_MODULE_3__["ImageUploadService"]])
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
/* harmony import */ var _models_proyecto_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/proyecto.model */ "./src/app/models/proyecto.model.ts");
/* harmony import */ var _models_cliente_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/cliente.model */ "./src/app/models/cliente.model.ts");
/* harmony import */ var _services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
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
    function ModalComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
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
        var proyecto = new _models_proyecto_model__WEBPACK_IMPORTED_MODULE_1__["Proyecto"](this.nombreProyecto, this.descripcionProyecto, this.cliente._id, 'Concepto', null, this._usuarioService.id, this._usuarioService.id);
        this.nuevoProyecto.emit(proyecto);
        this.nombreProyecto = "";
        this.descripcionProyecto = "";
        $('#nuevoProyecto').modal('toggle');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "tituloModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_cliente_model__WEBPACK_IMPORTED_MODULE_2__["Cliente"])
    ], ModalComponent.prototype, "cliente", void 0);
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
        __metadata("design:paramtypes", [_services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
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

module.exports = "img.profile{\r\n    width:100px;\r\n    height:100px;\r\n    border-radius:100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\nlabel{\r\n    font-weight: bold;\r\n}\r\n\r\nbutton.disabled{\r\n    cursor: not-allowed;\r\n}\r\n\r\nhr{\r\n     border: 0; \r\n     height: 1px; \r\n     background: #278395; \r\n     background-image: linear-gradient(to right, #caebf1, #278395, #caebf1);\r\n}\r\n\r\ndiv.image-container .after{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: none;\r\n    color: rgb(200, 200, 200);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.image-container img {display: block;}\r\n\r\n.image-container {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.image-container:hover .after {\r\n    display: block;\r\n    background: rgba(0, 0, 0, .6);\r\n}\r\n\r\ni.icon-center{\r\n\r\n    font-size: 30px;\r\n    margin-top:50%;\r\n    margin-bottom: 50%;\r\n\r\n    -webkit-transform: translateY(-15px);\r\n\r\n            transform: translateY(-15px);\r\n\r\n}"

/***/ }),

/***/ "./src/app/pages/modal/nuevo-cliente/nuevo-cliente.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/modal/nuevo-cliente/nuevo-cliente.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"nuevoCliente\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\">\n  \n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n\n    <div class=\"modal-content\">\n      <!-- Modal header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalLabel1\">Registrar Cliente</h4>\n        <button (click)=\"resetearModal()\" \n                type=\"button\" \n                class=\"close\" \n                data-dismiss=\"modal\" \n                aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      </div>\n      <!-- Fin de Modal header -->\n      \n      <!-- Modal Body -->\n      <div class=\"modal-body p-l-5 p-r-5 p-t-0 p-b-0\">\n        <div class=\"card-body\">\n          <form class=\"form-horizontal\" role=\"form\">\n            <div class=\"form-body\">\n\n              <div class=\"text-center\"\n                (click)=\"agregarImagen()\">\n                <div class=\"image-container\">\n                  <img *ngIf=\"!imagenTemporal\" class=\"profile img-circle\" src=\"../assets/images/users/default.png\">\n                  <img *ngIf=\"imagenTemporal\" class=\"profile img-circle\" [src]=\"imagenTemporal\">                  \n                  <div class=\"after text-center\"><i class=\"fa fa-plus icon-center\"></i></div>\n                </div>\n                <h3 class=\"box-title font-bold\">{{ nombre }}</h3>\n              </div>\n\n              <hr class=\"m-t-0\">\n\n              <!-- Panel de ingreso de información del cliente -->\n              <div>\n              \n                <form class=\"form-horizontal p-t-20\">\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 control-label\">Nombre*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-user\"></i></div>\n                        <input (keyup)=\"validarFormulario()\" name=\"nombre\" [(ngModel)]=\"nombre\" type=\"text\" class=\"form-control\" placeholder=\"Nombre del Cliente\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 control-label\">Teléfono*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-mobile\"></i></div>\n                        <input (keyup)=\"validarFormulario()\" name=\"telefono\" [(ngModel)]=\"telefono\" type=\"text\" class=\"form-control\" placeholder=\"Teléfono (sólo números)\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 control-label\">Dirección*</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-location-pin\"></i></div>\n                        <input (keyup)=\"validarFormulario()\" name=\"direccion\" [(ngModel)]=\"direccion\" type=\"text\" class=\"form-control\" placeholder=\"Calle #, Colonia, Ciudad, Estado\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row m-b-0\">\n                    <label class=\"col-sm-3 control-label\">Email</label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-addon\"><i class=\"ti-email\"></i></div>\n                        <input (keyup)=\"validarFormulario()\" name=\"correo\" [(ngModel)]=\"correo\" type=\"email\" class=\"form-control\" placeholder=\"Correo electrónico\">\n                      </div>\n                    </div>\n                  </div>\n              \n                </form>\n              \n              </div>\n              <!-- Fin de panel de edición de información del cliente -->\n            \n            </div>\n          </form>\n        </div>\n      </div>\n\n      <!-- Modal Footer -->\n      <div class=\"modal-footer\">\n\n        <!-- Botones -->\n        <button (click)=\"registrarCliente()\"\n                type=\"button\"\n                [attr.data-toggle]=\"(!completo)?'tooltip':null\"\n                [attr.data-title]=\"(!completo)?mensajeRequeridos:null\"\n                [attr.data-placement]=\"(!completo)?'bottom':null\"\n                [ngClass]=\"{ 'disabled': !completo }\"\n                class=\"btn btn-success waves-effect waves-light\">Registrar</button>\n\n        <button type=\"button\"\n                (click)=\"resetearModal()\" \n                class=\"btn btn-danger waves-effect waves-light\" \n                data-dismiss=\"modal\">Salir</button>\n        <!-- Fin de botones -->\n\n      </div>\n\n    </div>\n  </div>\n\n</div>"

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
/* harmony import */ var _models_cliente_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/cliente.model */ "./src/app/models/cliente.model.ts");
/* harmony import */ var _services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
/* harmony import */ var _image_upload_image_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-upload/image-upload.service */ "./src/app/pages/modal/image-upload/image-upload.service.ts");
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
    function NuevoClienteComponent(_usuarioService, _imageUploadService) {
        this._usuarioService = _usuarioService;
        this._imageUploadService = _imageUploadService;
        this.toggleTicketModal = false;
        this.clienteNuevo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imagenCliente = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    NuevoClienteComponent.prototype.agregarImagen = function () {
        var _this = this;
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        var promesa = new Promise(function (resolve, reject) {
            input.onchange = function () {
                var file = input.files[0];
                if (!file) {
                    _this.imagenSubir = null;
                    _this.imagenTemporal = null;
                    return;
                }
                if (file.type.indexOf('image') < 0) {
                    swal('Típo de archivo inválido', 'Seleccione una imágen', 'error');
                    _this.imagenSubir = null;
                    return;
                }
                _this.imagenSubir = file;
                var reader = new FileReader();
                var urlImagenTemporal = reader.readAsDataURL(file);
                reader.onloadend = function () { return _this.imagenTemporal = reader.result; };
            };
            input.click();
        });
        promesa.then();
    };
    NuevoClienteComponent.prototype.resetearModal = function () {
        this.nombre = "";
        this.telefono = "";
        this.direccion = "";
        this.correo = "";
        this.imagenTemporal = null;
        this.imagenSubir = null;
        if (this.toggleTicketModal) {
            $("#nuevoCliente").on("hidden.bs.modal", function (event) {
                // Open your second one in here
                $("#ticketVenta").modal('toggle');
                $("#nuevoCliente").off("hidden.bs.modal");
            });
        }
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
        var nuevoCliente = new _models_cliente_model__WEBPACK_IMPORTED_MODULE_1__["Cliente"](this.nombre, this.telefono, this.direccion, this.correo, 'Activo', null, null, this._usuarioService.id, this._usuarioService.id);
        this.clienteNuevo.emit(nuevoCliente);
        if (this.imagenSubir) {
            this.imagenCliente.emit(this.imagenSubir);
        }
        $("#nuevoCliente").modal("toggle");
        this.resetearModal();
        this.validarFormulario();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NuevoClienteComponent.prototype, "toggleTicketModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NuevoClienteComponent.prototype, "clienteNuevo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NuevoClienteComponent.prototype, "imagenCliente", void 0);
    NuevoClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-nuevo-cliente",
            template: __webpack_require__(/*! ./nuevo-cliente.component.html */ "./src/app/pages/modal/nuevo-cliente/nuevo-cliente.component.html"),
            styles: [__webpack_require__(/*! ./nuevo-cliente.component.css */ "./src/app/pages/modal/nuevo-cliente/nuevo-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [_services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _image_upload_image_upload_service__WEBPACK_IMPORTED_MODULE_3__["ImageUploadService"]])
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

/***/ "./src/app/pages/modal/ticket/ticket.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/modal/ticket/ticket.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#documento-ticket{\r\n    width: 200px;\r\n    color: black;\r\n}\r\n\r\n#documento-ticket .titulo{\r\n    text-align: center;\r\n    font-size: 20px;\r\n    width: 200px;\r\n\r\n    margin-bottom: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n#documento-ticket p{\r\n    font-size: 12px;\r\n    width: 200px;\r\n    text-align: center;\r\n    margin: 0px;\r\n}\r\n\r\n#documento-ticket p.big{\r\n    font-size: 24px;\r\n    width:200px;\r\n    \r\n}\r\n\r\n#documento-ticket ul.lista-productos{\r\n    list-style: none;\r\n    padding: 0px;\r\n}\r\n\r\n#documento-ticket p.descripcion-item-producto{\r\n    text-align: left;\r\n    padding-left: 24px;\r\n}\r\n\r\n#documento-ticket p.nombre-item-producto{\r\n        text-align: left;\r\n}\r\n\r\nul.clientes{\r\n    list-style: none;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    margin-top: 3px;\r\n    max-height: 200px;\r\n    overflow: auto;\r\n}\r\n\r\nli.cliente{\r\n    padding: 5px 5px 5px 41px;\r\n    border-bottom: 1px solid lightgray;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\nli.cliente:hover{\r\n    background-color: #caebf1;\r\n\r\n}\r\n\r\n::-webkit-scrollbar\r\n{\r\n  width: 3px;  /* for vertical scrollbars */\r\n  height: 3px; /* for horizontal scrollbars */\r\n}\r\n\r\n::-webkit-scrollbar-track\r\n{\r\n  background: #caebf1;\r\n  border-radius: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb\r\n{\r\n  background: #278395;\r\n  border-radius: 10px;\r\n}\r\n\r\n.big{\r\n    font-size: 24px\r\n}\r\n\r\n.fw-500{\r\n    font-weight: 500;\r\n}\r\n\r\n.color-white{\r\n    color:white;\r\n}\r\n\r\n.left{\r\n    float: left;\r\n}\r\n\r\n.right{\r\n    float: right;\r\n}\r\n\r\n.borde{\r\n    border: 1px solid black;\r\n    overflow: auto;\r\n    padding: 5px;\r\n}\r\n\r\n.sin-borde-top{\r\n    border-top: 0px;\r\n}\r\n\r\n.disabled{\r\n    cursor: not-allowed;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/modal/ticket/ticket.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/modal/ticket/ticket.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"ticketVenta\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\">\n\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n\n    <div class=\"modal-content\">\n      <!-- Modal header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalLabel1\">Venta</h4>\n        <button (click)=\"resetearModal()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n            aria-hidden=\"true\">&times;</span></button>\n      </div>\n      <!-- Fin de Modal header -->\n\n      <!-- Modal Body -->\n      <div class=\"modal-body p-l-5 p-r-5 p-t-0 p-b-0\">\n        <div class=\"card-body\">\n\n          <!-- Metodo de pago -->\n          <form class=\"form-horizontal p-t-20\"\n                      ngNativeValidate \n                      #forma=\"ngForm\">\n\n            <div class=\"form-group row m-t-20\">\n              <label class=\"col-sm-3 control-label\">Cliente*</label>\n              <div class=\"col-sm-9\">\n                <div class=\"input-group\">\n                   <div class=\"input-group-addon\"><i class=\"ti-user\"></i></div>\n                    <input name=\"clienteNombre\"\n                           id=\"clienteInput\"\n                           (keyup)=\"buscarCliente()\" \n                               [(ngModel)]=\"clienteNombre\" \n                               type=\"string\" \n                               class=\"form-control\" \n                               placeholder=\"Ingresa el nombre del cliente\"\n                               required>\n\n                    <div class=\"input-group-addon btn btn-info color-white\"\n                      (click)=\"abrirRegistroDeCliente($event)\"><i class=\"ti-plus\"></i>\n                    </div>\n                 </div>\n\n                <div *ngIf=\"clientes.length>0\">\n                  <ul class=\"clientes\">\n                    <li *ngFor=\"let cliente of clientes\"\n                        class=\"cliente\"\n                        (click)=\"seleccionarcliente(cliente)\">{{ cliente.nombre }}</li>\n                  </ul>\n                </div>\n               </div>\n            </div>\n\n            <div class=\"form-group row m-b-0\">\n              <label class=\"col-sm-3 control-label\">Proyecto</label>\n              <div class=\"col-sm-9\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-addon\"><i class=\"ti-archive\"></i></div>\n                  <select class=\"form-control custom-select\" data-placeholder=\"Selecciona un proyecto\" \n                    name=\"proyectoSeleccionado\"\n                    [(ngModel)]=\"proyectoSeleccionado\">\n                    <option *ngFor=\"let proyecto of proyectos\" \n                            [value]=\"proyecto._id\">{{ proyecto.nombre }}</option>\n                  </select>\n                  <!-- <input (keyup)=\"validarFormulario()\" name=\"correo\" [(ngModel)]=\"correo\" type=\"email\" class=\"form-control\" placeholder=\"Correo electrónico\"> -->\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row m-t-20\">\n              <label class=\"col-sm-3 control-label\">Método de Pago*</label>\n              <div class=\"col-sm-9\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-addon\"><i class=\"ti-exchange-vertical\"></i></div>\n                  <select class=\"form-control custom-select\" \n                          data-placeholder=\"Selecciona un método de págo\" \n                          name=\"tipoPago\"\n                          [(ngModel)]=\"tipoPago\"\n                          required>\n                    <option value=\"efectivo\">Efectivo</option>\n                    <option value=\"tarjeta\">Tarjeta</option>\n                    <option value=\"transferencia\">Transferencia</option>\n                    <option value=\"cheque\">Cheque</option>\n                    <option value=\"otro\">Otro</option>\n                  </select>\n                  <!-- <input (keyup)=\"validarFormulario()\" name=\"correo\" [(ngModel)]=\"correo\" type=\"email\" class=\"form-control\" placeholder=\"Correo electrónico\"> -->\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row m-t-20\">\n              <label class=\"col-sm-3 control-label\">Monto Recibido*</label>\n              <div class=\"col-sm-9\">\n                <div class=\"input-group\">\n                   <div class=\"input-group-addon\"><i class=\"ti-money\"></i></div>\n                    <input name=\"efectivo\" \n                               [(ngModel)]=\"efectivo\" \n                               type=\"string\" \n                               class=\"form-control\" \n                               placeholder=\"Ingresa el efectivo recibido\"\n                               required>\n                 </div>\n               </div>\n            </div>\n\n            <div class=\"form-group row m-t-20\">\n              <div class=\"offset-sm-3 col-sm-9\">\n                <div class=\"checkbox checkbox-success\">\n                  <input id=\"checkbox34\" \n                         type=\"checkbox\"\n                         name=\"seleccionIva\"\n                         [(ngModel)]=\"seleccionIva\">\n                  <label for=\"checkbox34\">Agregar IVA?</label>\n                </div>\n              </div>\n            </div>\n\n        </form>\n            \n          <!-- FIN de Metodo de pago -->\n\n          <!-- Documento ticket -->\n          <div id=\"documento-ticket\" class=\"container print-content\">\n\n            <!-- Header de cotizacion -->\n            <div class=\"row m-b-5\">\n\n              <div class=\"col col-md-12 m-b-10 p-0\">\n                  <p class=\"titulo\">MOBLA - MUEBLES E INTERIORISMO</p>\n                  <p>Paseo de los Insurgentes 2403, 37300 León, Gto.</p>\n                  <p>Teléfono: +52 (477) 290-54-01</p>\n                  <p>ventas@mobla.com.mx</p>\n                  \n                  <hr>\n\n                  <!-- <p class=\"big fw-500\">Original</p> -->\n\n                  <p class=\"fw-500\">{{ fecha | date:'fullDate' }} a las {{ fecha | date:'h:mm a' }}</p>\n\n              </div>\n\n            </div>\n            <!-- Fin de header de cotizacion -->\n\n            <!-- Lista de productos -->\n            <div class=\"row m-b-30\">\n              <hr>\n                <ul class=\"lista-productos\">\n                  <li *ngFor=\"let producto of carrito\">\n                    <p class=\"nombre-item-producto\">{{ producto.nombre }}</p>\n                      <p class=\"descripcion-item-producto\">\n                        {{ producto.cantidad }} x {{ producto.precio | number:'1.2-2' }} \n                        <span class=\"right\">{{ producto.total | number:'1.2-2' }}</span></p>\n                      <p *ngIf=\"producto.descuento>0\"\n                          class=\"descripcion-item-producto\">Descuento: <span class=\"right\">-{{ producto.descuento | number:'1.2-2' }}</span></p>\n                  </li>\n                  <br>\n                </ul>\n              <hr>\n\n              <p><span class=\"left\">Subtotal</span> <span class=\"right\">{{ (totalCarrito - totalDescuento) | currency:'MXN' }}</span></p>\n                \n              <!-- Detalle de venta con Iva  -->\n                <p *ngIf=\"seleccionIva\"><span class=\"left p-b-10\">IVA 16%</span> <span class=\"right\">{{ iva | currency:'MXN' }}</span></p>\n                <p *ngIf=\"seleccionIva\" class=\"fw-500\"><span class=\"left\">Total</span> <span class=\"right big m-b-20\">{{ (totalCarrito - totalDescuento + iva) | currency:'MXN' }}</span></p>\n              <!-- FIN de Detalle de venta con Iva  -->\n\n              <!-- Detalle de Venta sin Iva -->\n              <p *ngIf=\"!seleccionIva\"><span class=\"left p-b-10\">IVA 0%</span> <span class=\"right\">{{ 0 | currency:'MXN' }}</span></p>\n                <p *ngIf=\"!seleccionIva\" class=\"fw-500\"><span class=\"left\">Total</span> <span class=\"right big m-b-20\">{{ (totalCarrito - totalDescuento) | currency:'MXN' }}</span></p>\n              <!-- FIN de Detalle de Venta sin Iva -->\n\n              <!-- Pago en efectivo -->\n                <!-- sin Iva   -->\n                <div *ngIf=\"tipoPago==='efectivo' && seleccionIva===false\">\n                  <p class=\"borde\"><span class=\"fw-500 left\">Efectivo: </span>  <span class=\"fw-500 right\">{{ efectivo | currency:'MXN'}}</span></p>\n                  <p *ngIf=\"!anticipo\" class=\"borde sin-borde-top fw-500\"><span class=\"left\">Cambio: </span> <span class=\"right\">{{ (efectivo - totalCarrito + totalDescuento) | currency:'MXN' }}</span></p>\n                \n                  <p *ngIf=\"anticipo\" class=\"borde sin-borde-top fw-500\"><span class=\"left\">Saldo: </span> <span class=\"right\">{{ saldo | currency:'MXN' }}</span></p>\n                </div>\n                <!-- FIN de sin Iva -->\n\n                <!-- con Iva -->\n                <div *ngIf=\"tipoPago==='efectivo' && seleccionIva===true\">\n                  <p class=\"borde\"><span class=\"fw-500 left\">Efectivo: </span> <span class=\"right fw-500\">{{ efectivo | currency:'MXN'}}</span></p>\n                  <p *ngIf=\"!anticipo\" class=\"borde sin-borde-top fw-500\"><span class=\"left\">Cambio: </span> <span class=\"right\">{{ efectivo - (totalCarrito - totalDescuento +\n                      iva) | currency:'MXN' }}</span></p>\n\n                  <p *ngIf=\"anticipo\" class=\"borde sin-borde-top fw-500\"><span class=\"left\">Saldo: </span> <span class=\"right\">{{ saldo | currency:'MXN' }}</span></p>\n\n                </div>\n                <!-- FIN de con Iva -->\n              <!-- FIN de Pago en efectivo -->\n              \n              <!-- Pago con tarjeta -->\n              <div *ngIf=\"tipoPago==='tarjeta'\">\n                <p class=\"borde fw-500\">Pago con tarjeta </p>\n                <p *ngIf=\"!anticipo\" class=\"borde sin-borde-top fw-500\">Liquidado</p>\n                \n                <p *ngIf=\"anticipo\" class=\"borde sin-borde-top fw-500\">\n                  <span class=\"left\">Anticipo: </span>\n                  <span class=\"right\">{{ efectivo | currency:'MXN' }}</span>\n                </p>\n\n                <p *ngIf=\"anticipo\" class=\"borde sin-borde-top fw-500\">\n                  <span class=\"left\">Saldo: </span>\n                  <span class=\"right\">{{ saldo | currency:'MXN' }}</span>\n                </p>\n              </div>\n              <!-- FIN de Pago con tarjeta -->\n\n              <!-- Pago con transferencia -->\n              <div *ngIf=\"tipoPago==='transferencia'\">\n                <p class=\"borde fw-500\">Pago con transferencia</p>\n                <p *ngIf=\"!anticipo\" class=\"borde sin-borde-top fw-500\">Liquidado</p>\n                \n                <p *ngIf=\"anticipo\" class=\"borde sin-borde-top fw-500\">\n                  <span class=\"left\">Anticipo: </span>\n                  <span class=\"right\">{{ efectivo | currency:'MXN' }}</span>\n                </p>\n                \n                <p *ngIf=\"anticipo\" class=\"borde sin-borde-top fw-500\">\n                  <span class=\"left\">Saldo: </span>\n                  <span class=\"right\">{{ saldo | currency:'MXN' }}</span>\n                </p>\n\n              </div>\n              <!-- FIN de Pago con transferencia -->\n\n              <!-- Pago con cheque -->\n              <div *ngIf=\"tipoPago==='cheque'\">\n                <p class=\"borde fw-500\">Pago con cheque</p>\n                <p *ngIf=\"!anticipo\" class=\"borde sin-borde-top fw-500\">Liquidado</p>\n                \n                <p *ngIf=\"anticipo\" class=\"borde sin-borde-top fw-500\">\n                  <span class=\"left\">Anticipo: </span>\n                  <span class=\"right\">{{ efectivo | currency:'MXN' }}</span>\n                </p>\n                \n                <p *ngIf=\"anticipo\" class=\"borde sin-borde-top fw-500\">\n                  <span class=\"left\">Saldo: </span>\n                  <span class=\"right\">{{ saldo | currency:'MXN' }}</span>\n                </p>\n\n              </div>\n              <!-- FIN de Pago con cheque -->\n\n              <!-- Pago con otro -->\n              <div *ngIf=\"tipoPago==='otro'\">\n                <p class=\"borde fw-500\">Pago con otro</p>\n                <p *ngIf=\"!anticipo\" class=\"borde sin-borde-top fw-500\">Liquidado</p>\n                \n                <p *ngIf=\"anticipo\" class=\"borde sin-borde-top fw-500\">\n                  <span class=\"left\">Anticipo: </span>\n                  <span class=\"right\">{{ efectivo | currency:'MXN' }}</span>\n                </p>\n                \n                <p *ngIf=\"anticipo\" class=\"borde sin-borde-top fw-500\">\n                  <span class=\"left\">Saldo: </span>\n                  <span class=\"right\">{{ saldo | currency:'MXN' }}</span>\n                </p>\n\n              </div>\n              <!-- FIN de Pago con otro -->\n\n\n            </div>\n            <!-- Fin de tabla de productos -->\n\n            <!-- Recepción de efectivo -->\n\n\n          \n\n\n          </div>\n          <!-- Fin de documento Cotización -->\n\n        </div>\n      </div>\n      <!-- Final de Modal Body -->\n\n      <!-- Modal Footer -->\n      <div class=\"modal-footer\">\n\n        <!-- Botones -->\n\n        <button [ngClass]=\"{'disabled': !ventaConfirmada}\" type=\"button\" class=\"btn btn-success waves-effect waves-light\" (click)=\"imprimirTicket()\">Imprimir</button>\n\n        <button type=\"button\" class=\"btn btn-warning waves-effect waves-light\" \n                (click)=\"generarVenta()\">Confirmar Venta</button>\n\n        <button type=\"button\" (click)=\"resetearModal()\" class=\"btn btn-danger waves-effect waves-light\" data-dismiss=\"modal\">Salir</button>\n        <!-- Fin de botones -->\n\n      </div>\n      <!-- Fin de Modal Footer -->\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/modal/ticket/ticket.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/modal/ticket/ticket.component.ts ***!
  \********************************************************/
/*! exports provided: TicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketComponent", function() { return TicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_carrito_carrito_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/carrito/carrito.service */ "./src/app/services/carrito/carrito.service.ts");
/* harmony import */ var src_app_ventas_ventas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ventas/ventas.service */ "./src/app/ventas/ventas.service.ts");
/* harmony import */ var src_app_services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
/* harmony import */ var src_app_services_clientes_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/clientes/cliente.service */ "./src/app/services/clientes/cliente.service.ts");
/* harmony import */ var src_app_services_proyectos_proyecto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/proyectos/proyecto.service */ "./src/app/services/proyectos/proyecto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TicketComponent = /** @class */ (function () {
    function TicketComponent(_carritoService, _ventasService, _usuarioService, _clienteService, _proyectoService) {
        this._carritoService = _carritoService;
        this._ventasService = _ventasService;
        this._usuarioService = _usuarioService;
        this._clienteService = _clienteService;
        this._proyectoService = _proyectoService;
        this.seleccionIva = false;
        this.clientes = [];
        this.proyectos = [];
        this.proyectoSeleccionado = {};
        this.anticipo = false;
        this.saldo = 0;
        this.ventaConfirmada = false;
        this.fecha = new Date();
    }
    TicketComponent.prototype.ngOnInit = function () {
        // this.carrito=this._carritoService.carrito;
    };
    TicketComponent.prototype.abrirRegistroDeCliente = function (event) {
        event.preventDefault();
        event.stopPropagation();
        $("#ticketVenta").modal("toggle");
        $("#ticketVenta").on("hidden.bs.modal", function (event) {
            // Open your second one in here
            $("#nuevoCliente").modal("toggle");
            $("#ticketVenta").off("hidden.bs.modal");
        });
    };
    TicketComponent.prototype.seleccionarcliente = function (cliente) {
        this.cliente = cliente;
        this.clienteNombre = cliente.nombre;
        this.clientes = [];
        this.cargarProyectosDelCliente();
    };
    TicketComponent.prototype.cargarProyectosDelCliente = function () {
        var _this = this;
        this._proyectoService
            .getProyectos(this.cliente._id, 0)
            .subscribe(function (resp) {
            _this.proyectos = resp.proyectos;
        });
    };
    TicketComponent.prototype.buscarCliente = function () {
        var _this = this;
        var termino = this.clienteNombre;
        if (termino.length === 0) {
            this.clientes = [];
            return;
        }
        if (termino.length < 3) {
            return;
        }
        this._clienteService.buscarCliente(termino).subscribe(function (resp) {
            _this.clientes = resp.cliente;
        }, function (error) {
            swal("Error al buscar Cliente", error.error.mensaje + " | " + error.error.errors.message, "error");
        });
    };
    TicketComponent.prototype.obtenerCarrito = function () {
        this.carrito = this._carritoService.carrito;
    };
    TicketComponent.prototype.enviarCarrito = function () {
        this._carritoService.carrito = this.carrito;
    };
    TicketComponent.prototype.resetearModal = function () {
        this.ventaConfirmada = false;
    };
    TicketComponent.prototype.imprimirTicket = function () {
        if (!this.ventaConfirmada) {
            return;
        }
        var ticket = document.getElementById("documento-ticket");
        var domClone = ticket.cloneNode(true);
        var printSection = document.getElementById("printSection");
        printSection.innerHTML = "";
        printSection.appendChild(domClone);
        window.print();
    };
    TicketComponent.prototype.generarVenta = function () {
        var _this = this;
        if (!this.cliente) {
            swal("Cliente", "Favor de seleccionar un cliente o registrar uno nuevo", "warning");
            return;
        }
        if (!this.tipoPago) {
            swal("Metodo de pago", "No se ha seleccionado un método de pago", "warning");
            return;
        }
        if (!this.efectivo) {
            swal("Monto Recibido", "Favor de ingresar el monto recibido", "warning");
            return;
        }
        this.fecha = new Date();
        var venta = {
            subtotal: this.totalCarrito,
            cliente: this.cliente._id,
            iva: 0,
            total: this.totalCarrito,
            vendedor: this._usuarioService.id,
            fecha: this.fecha,
            carrito: this.carrito,
            tipoDePago: this.tipoPago,
            montoPagado: null,
            saldoPendiente: 0,
            estatus: "Liquidada",
            proyecto: this.proyectoSeleccionado
        };
        if (this.seleccionIva) {
            venta.iva = this.iva;
            venta.total = this.totalCarrito + this.iva;
        }
        venta.montoPagado = this.efectivo;
        if (this.efectivo < venta.total) {
            swal("Anticipo", "El monto recibido es menor que el monto total, desea realizar la venta con anticipo?", "warning", {
                buttons: {
                    monto: {
                        text: "Sí",
                        value: true
                    },
                    porcentaje: {
                        text: "No",
                        value: false
                    }
                }
            }).then(function (anticipo) {
                if (anticipo) {
                    venta.saldoPendiente = venta.total - venta.montoPagado;
                    _this.saldo = venta.saldoPendiente;
                    venta.estatus = "Saldo Pendiente";
                    _this.anticipo = anticipo;
                    _this._ventasService.generarVenta(venta).subscribe(function (resp) {
                        _this.ventaConfirmada = true;
                        swal("Venta exitosa", "La venta se a registrado exitosamente", "success");
                    }, function (error) {
                        swal("Error al registrar Venta", error.error.mensaje + " | " + error.error.errors.message, "error");
                    });
                    return;
                }
                else {
                    _this.anticipo = anticipo;
                    return;
                }
            });
        }
        else {
            // console.log(venta);
            this._ventasService.generarVenta(venta).subscribe(function (resp) {
                _this.ventaConfirmada = true;
                swal("Venta exitosa", "La venta se ha registrado exitosamente", "success");
            }, function (error) {
                swal("Error al registrar Venta", error.error.mensaje + " | " + error.error.errors.message, "error");
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TicketComponent.prototype, "carrito", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TicketComponent.prototype, "totalCarrito", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TicketComponent.prototype, "totalDescuento", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TicketComponent.prototype, "iva", void 0);
    TicketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-ticket",
            template: __webpack_require__(/*! ./ticket.component.html */ "./src/app/pages/modal/ticket/ticket.component.html"),
            styles: [__webpack_require__(/*! ./ticket.component.css */ "./src/app/pages/modal/ticket/ticket.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_carrito_carrito_service__WEBPACK_IMPORTED_MODULE_1__["CarritoService"],
            src_app_ventas_ventas_service__WEBPACK_IMPORTED_MODULE_2__["VentasService"],
            src_app_services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            src_app_services_clientes_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"],
            src_app_services_proyectos_proyecto_service__WEBPACK_IMPORTED_MODULE_5__["ProyectoService"]])
    ], TicketComponent);
    return TicketComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Main wrapper - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<div id=\"main-wrapper\">\n\n  <app-header></app-header>\n\n  <app-sidebar></app-sidebar>\n\n  <!-- ============================================================== -->\n  <!-- Page wrapper  -->\n  <!-- ============================================================== -->\n  <div class=\"page-wrapper\">\n\n    <!-- ============================================================== -->\n    <!-- Container fluid  -->\n    <!-- ============================================================== -->\n    <div class=\"container-fluid\">\n      <!-- <app-breadcrumbs></app-breadcrumbs> -->\n      <!-- ============================================================== -->\n      <!-- Start Page Content -->\n      <!-- ============================================================== -->\n\n      <router-outlet></router-outlet>\n\n      <!-- <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            This is some text within a card block.\n                        </div>\n                    </div>\n                </div>\n            </div> -->\n      <!-- ============================================================== -->\n      <!-- End PAge Content -->\n      <!-- ============================================================== -->\n    </div>\n    <!-- ============================================================== -->\n    <!-- END Container fluid  -->\n    <!-- ============================================================== -->\n\n  </div>\n  <!-- ============================================================== -->\n  <!-- END Page wrapper  -->\n  <!-- ============================================================== -->\n</div>\n\n<!-- Modal Image Upload -->\n<app-image-upload></app-image-upload>"

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
        init_plugins();
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
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/es-MX */ "./node_modules/@angular/common/locales/es-MX.js");
/* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./graficas1/graficas1.component */ "./src/app/pages/graficas1/graficas1.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/pages/progress/progress.component.ts");
/* harmony import */ var _crm_crm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crm/crm.component */ "./src/app/pages/crm/crm.component.ts");
/* harmony import */ var _calendario_calendario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendario/calendario.component */ "./src/app/pages/calendario/calendario.component.ts");
/* harmony import */ var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./usuarios/usuarios.component */ "./src/app/pages/usuarios/usuarios.component.ts");
/* harmony import */ var _catalogo_productos_catalogo_productos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./catalogo-productos/catalogo-productos.component */ "./src/app/pages/catalogo-productos/catalogo-productos.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/pages/modal/modal.component.ts");
/* harmony import */ var _modal_info_client_info_client_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modal/info-client/info-client.component */ "./src/app/pages/modal/info-client/info-client.component.ts");
/* harmony import */ var _modal_cotizacion_cotizacion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modal/cotizacion/cotizacion.component */ "./src/app/pages/modal/cotizacion/cotizacion.component.ts");
/* harmony import */ var _modal_nuevo_cliente_nuevo_cliente_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modal/nuevo-cliente/nuevo-cliente.component */ "./src/app/pages/modal/nuevo-cliente/nuevo-cliente.component.ts");
/* harmony import */ var _modal_nuevo_evento_nuevo_evento_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/nuevo-evento/nuevo-evento.component */ "./src/app/pages/modal/nuevo-evento/nuevo-evento.component.ts");
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages.routes */ "./src/app/pages/pages.routes.ts");
/* harmony import */ var _directives_infinite_scroll_infinite_scroll_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../directives/infinite-scroll/infinite-scroll.directive */ "./src/app/directives/infinite-scroll/infinite-scroll.directive.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _modal_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modal/image-upload/image-upload.component */ "./src/app/pages/modal/image-upload/image-upload.component.ts");
/* harmony import */ var _modal_agregarProducto_agregar_producto_agregar_producto_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modal/agregarProducto/agregar-producto/agregar-producto.component */ "./src/app/pages/modal/agregarProducto/agregar-producto/agregar-producto.component.ts");
/* harmony import */ var _modal_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modal/ticket/ticket.component */ "./src/app/pages/modal/ticket/ticket.component.ts");
/* harmony import */ var _modal_editar_producto_editar_producto_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modal/editar-producto/editar-producto.component */ "./src/app/pages/modal/editar-producto/editar-producto.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Modulos



//Locales

Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_5___default.a, "es-Mx");
//Pages








//Modals





//Routes

//Directivas






var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _pages_routes__WEBPACK_IMPORTED_MODULE_19__["PAGES_ROUTES"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]
            ],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'es-Mx' }
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_8__["Graficas1Component"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_9__["ProgressComponent"],
                _pages_component__WEBPACK_IMPORTED_MODULE_6__["PagesComponent"],
                _crm_crm_component__WEBPACK_IMPORTED_MODULE_10__["CrmComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["ModalComponent"],
                _modal_info_client_info_client_component__WEBPACK_IMPORTED_MODULE_15__["InfoClientComponent"],
                _modal_nuevo_cliente_nuevo_cliente_component__WEBPACK_IMPORTED_MODULE_17__["NuevoClienteComponent"],
                _modal_cotizacion_cotizacion_component__WEBPACK_IMPORTED_MODULE_16__["CotizacionComponent"],
                _calendario_calendario_component__WEBPACK_IMPORTED_MODULE_11__["CalendarioComponent"],
                _modal_nuevo_evento_nuevo_evento_component__WEBPACK_IMPORTED_MODULE_18__["NuevoEventoComponent"],
                _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_12__["UsuariosComponent"],
                _directives_infinite_scroll_infinite_scroll_directive__WEBPACK_IMPORTED_MODULE_20__["InfiniteScrollDirective"],
                _catalogo_productos_catalogo_productos_component__WEBPACK_IMPORTED_MODULE_13__["CatalogoProductosComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                _modal_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_22__["ImageUploadComponent"],
                _modal_agregarProducto_agregar_producto_agregar_producto_component__WEBPACK_IMPORTED_MODULE_23__["AgregarProductoComponent"],
                _modal_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_24__["TicketComponent"],
                _modal_editar_producto_editar_producto_component__WEBPACK_IMPORTED_MODULE_25__["EditarProductoComponent"]
            ],
            exports: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_8__["Graficas1Component"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_9__["ProgressComponent"],
                _pages_component__WEBPACK_IMPORTED_MODULE_6__["PagesComponent"]
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
/* harmony import */ var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./usuarios/usuarios.component */ "./src/app/pages/usuarios/usuarios.component.ts");
/* harmony import */ var _services_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/guards/login-guard.guard */ "./src/app/services/guards/login-guard.guard.ts");
/* harmony import */ var _catalogo_productos_catalogo_productos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catalogo-productos/catalogo-productos.component */ "./src/app/pages/catalogo-productos/catalogo-productos.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/profile/profile.component.ts");











var pagesRoutes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
        canActivate: [_services_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_8__["LoginGuardGuard"]],
        children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
            { path: 'progress', component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_3__["ProgressComponent"] },
            { path: 'catalogoProductos', component: _catalogo_productos_catalogo_productos_component__WEBPACK_IMPORTED_MODULE_9__["CatalogoProductosComponent"] },
            { path: 'graficas1', component: _graficas1_graficas1_component__WEBPACK_IMPORTED_MODULE_4__["Graficas1Component"] },
            { path: 'crm', component: _crm_crm_component__WEBPACK_IMPORTED_MODULE_5__["CrmComponent"] },
            { path: 'calendario', component: _calendario_calendario_component__WEBPACK_IMPORTED_MODULE_6__["CalendarioComponent"] },
            { path: 'colaboradores', component: _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_7__["UsuariosComponent"] },
            { path: 'perfil', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
];
var PAGES_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(pagesRoutes);


/***/ }),

/***/ "./src/app/pages/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer{\r\n    cursor: pointer;\r\n}\r\n\r\n.disabled{\r\n    cursor: not-allowed;\r\n}\r\n\r\n.w150{\r\n    width: 150px;\r\n    border-radius: 5px;\r\n}"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-lg-7\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Perfil de usuario</h4>\n        <h6 class=\"card-subtitle\">{{ usuario.nombre }}</h6>\n\n\n        <form ngNativeValidate #forma=\"ngForm\"\n              (ngSubmit)=\"actualizarUsuario( forma.value )\"\n              class=\"form p-t-20\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputuname\">Nombre de Usuario</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-addon\"><i class=\"ti-user\"></i></div>\n              <input [ngModel]=\"usuario.nombre\"\n                     name=\"nombre\" \n                     type=\"text\" \n                     class=\"form-control\" \n                     id=\"exampleInputuname\" \n                     placeholder=\"Nombre de usuario\" \n                     required>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Correo del usuario</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-addon\"><i class=\"ti-email\"></i></div>\n              <input [ngModel]=\"usuario.email\"\n                     name=\"email\"\n                     type=\"email\" \n                     class=\"form-control\" \n                     id=\"exampleInputEmail1\" \n                     placeholder=\"Ingresa un correo\"\n                     required>\n            </div>\n          </div>\n\n          <!-- <div class=\"form-group\">\n            <label for=\"pwd1\">Password</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-addon\"><i class=\"ti-lock\"></i></div>\n              <input type=\"password\" \n                     class=\"form-control\" \n                     id=\"pwd1\" \n                     placeholder=\"Ingresa tu contraseña\"\n                     name=\"password\"\n                     required>\n            </div>\n          </div> -->\n\n          <button type=\"submit\" \n                  class=\"btn btn-success btn-block waves-effect waves-light m-r-10\">\n                  <i class=\"fa fa-save\"></i>\n                  Guardar\n          </button>\n          \n        </form>\n      </div>\n    </div>\n  </div>\n\n\n    <div class=\"col-lg-5\">\n      <div class=\"card\">\n        <div class=\"card-body text-center\"> \n          <h4 class=\"card-title\">Imagen del usuario</h4>\n          <h6 class=\"card-subtitle\">{{ usuario.nombre }}</h6>\n\n          <img *ngIf=\"!imagenTemporal\" [src]=\"usuario.img | imagen\" class=\"w150 m-b-20\">\n          <img *ngIf=\"imagenTemporal\" [src]=\"imagenTemporal\" class=\"w150 m-b-20\">\n\n\n        <label class=\"custom-file d-block m-b-20\">\n          <input (change)=\"seleccionImagen( $event )\" \n                 type=\"file\" \n                 id=\"file\" \n                 class=\"custom-file-input pointer\">\n          <span *ngIf=\"imagenSubir\" class=\"custom-file-control pointer text-left\">{{ imagenSubir.name }}</span>\n          <span *ngIf=\"!imagenSubir\" class=\"custom-file-control pointer text-left\"></span>\n        </label>\n\n          <button type=\"submit\" \n                  class=\"btn btn-success btn-block waves-effect waves-light m-r-10\"\n                  (click)=\"subirImagen()\"\n                  [ngClass]=\"{ 'disabled': !hayImagen }\"\n                  [disabled]=\"!hayImagen\">\n                  <i class=\"fa fa-save\"></i>\n                  Actualizar imagen\n          </button>\n\n        </div>\n      </div>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.hayImagen = false;
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.usuario = this._usuarioService.usuario;
    };
    ProfileComponent.prototype.actualizarUsuario = function (usuario) {
        this.usuario.nombre = usuario.nombre;
        this.usuario.email = usuario.email;
        this._usuarioService.actualizarUsuario(this.usuario).subscribe();
    };
    ProfileComponent.prototype.seleccionImagen = function (evento) {
        var _this = this;
        var file = evento.target.files[0];
        if (!file) {
            this.imagenSubir = null;
            this.hayImagen = false;
            this.imagenTemporal = null;
            return;
        }
        if (file.type.indexOf('image') < 0) {
            swal('Típo de archivo inválido', 'Seleccione una imágen', 'error');
            this.imagenSubir = null;
            return;
        }
        this.imagenSubir = file;
        this.hayImagen = true;
        var reader = new FileReader();
        var urlImagenTemporal = reader.readAsDataURL(file);
        reader.onloadend = function () { return _this.imagenTemporal = reader.result; };
    };
    ProfileComponent.prototype.subirImagen = function () {
        if (!this.subirImagen) {
            return;
        }
        this._usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/pages/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



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

/***/ "./src/app/pages/usuarios/usuarios.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* Paleta de colores */\r\n.paleta-de-colores{\r\n    color: #278395;\r\n    color: #2e9bb0;\r\n    color: #caebf1;\r\n    color: #f6f6f6;\r\n}\r\n*{\r\n    color: #278395;\r\n}\r\nul{\r\n}\r\nli{\r\n    list-style: none;\r\n\r\n    \r\n}\r\n.small{\r\n    line-height: 80%;\r\n    font-size:80%;\r\n    /* font-weight:400; */\r\n}\r\ndiv.v-center{\r\n    /* display: flex; */\r\n    /* align-items: center; */\r\n    /* height: 50px; */\r\n    margin:auto;\r\n}\r\nspan.linea{\r\n    display: block;\r\n    width: 100%;\r\n    -ms-grid-row-align: center;\r\n        align-self: center\r\n\r\n}\r\n.img-profile{\r\n    width:50px;\r\n    border-radius: 100%;\r\n\r\n    margin-top: 50%;\r\n    margin-bottom: 50%;\r\n}"

/***/ }),

/***/ "./src/app/pages/usuarios/usuarios.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n\n      <h1>Empleados</h1>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col col-md-3\">\n      \n      <ul class=\"p-0\">\n        <li>\n          <div class=\"row\">\n            \n            <div class=\"col col-md-3 p-0\">\n              <img src=\"/src/assets/images/users/1.jpg\" class=\"img-profile left\">\n            </div>\n  \n            <div class=\"col col-md-9 v-center p-0\">\n              <span class=\"linea\">Michelle Felix</span>\n              <span class=\"linea small\">Consultor</span>\n  \n            </div>\n  \n          </div>\n        </li>\n      </ul>\n\n    </div>\n\n    <div class=\"col col-md-9\">\n      Hola\n    </div>\n\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/usuarios/usuarios.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.component.ts ***!
  \******************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
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

var UsuariosComponent = /** @class */ (function () {
    function UsuariosComponent() {
    }
    UsuariosComponent.prototype.ngOnInit = function () {
    };
    UsuariosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuarios',
            template: __webpack_require__(/*! ./usuarios.component.html */ "./src/app/pages/usuarios/usuarios.component.html"),
            styles: [__webpack_require__(/*! ./usuarios.component.css */ "./src/app/pages/usuarios/usuarios.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsuariosComponent);
    return UsuariosComponent;
}());



/***/ }),

/***/ "./src/app/pipes/imagen.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/imagen.pipe.ts ***!
  \**************************************/
/*! exports provided: ImagenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenPipe", function() { return ImagenPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ImagenPipe = /** @class */ (function () {
    function ImagenPipe() {
    }
    ImagenPipe.prototype.transform = function (img, tipo) {
        if (tipo === void 0) { tipo = 'usuario'; }
        var url = _config_config__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICIOS"] + '/img';
        if (!img && tipo == 'usuario') {
            return url + '/usuario/default';
        }
        switch (tipo) {
            case 'usuario':
                url += '/usuario/' + img;
                break;
            case 'cliente':
                url += '/cliente/' + img;
                break;
            case 'proyecto':
                url += '/proyecto/' + img;
                break;
            case 'producto':
                url += "/producto/" + img;
                break;
            default:
                console.log('El tipo de imagen utilizado en el pipe no existe');
                url += '/usuario/default';
        }
        return url;
    };
    ImagenPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'imagen'
        })
    ], ImagenPipe);
    return ImagenPipe;
}());



/***/ }),

/***/ "./src/app/pipes/iniciales.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/iniciales.pipe.ts ***!
  \*****************************************/
/*! exports provided: InicialesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicialesPipe", function() { return InicialesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InicialesPipe = /** @class */ (function () {
    function InicialesPipe() {
    }
    InicialesPipe.prototype.transform = function (nombre) {
        var nombreSeparado = nombre.split(' ');
        var nombre1 = nombreSeparado[0];
        var nombre2 = nombreSeparado[nombreSeparado.length - 1];
        var iniciales;
        if (nombreSeparado.length === 1) {
            iniciales = nombre1.substr(0, 1) + ' ';
        }
        else {
            iniciales = nombre1.substr(0, 1) + nombre2.substr(0, 1);
        }
        return iniciales;
    };
    InicialesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'iniciales'
        })
    ], InicialesPipe);
    return InicialesPipe;
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

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mes_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mes.pipe */ "./src/app/pipes/mes.pipe.ts");
/* harmony import */ var _iniciales_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iniciales.pipe */ "./src/app/pipes/iniciales.pipe.ts");
/* harmony import */ var _imagen_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imagen.pipe */ "./src/app/pipes/imagen.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [
                _mes_pipe__WEBPACK_IMPORTED_MODULE_1__["MesPipe"],
                _iniciales_pipe__WEBPACK_IMPORTED_MODULE_2__["InicialesPipe"],
                _imagen_pipe__WEBPACK_IMPORTED_MODULE_3__["ImagenPipe"]
            ],
            exports: [
                _mes_pipe__WEBPACK_IMPORTED_MODULE_1__["MesPipe"],
                _iniciales_pipe__WEBPACK_IMPORTED_MODULE_2__["InicialesPipe"],
                _imagen_pipe__WEBPACK_IMPORTED_MODULE_3__["ImagenPipe"]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/services/carrito/carrito.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/carrito/carrito.service.ts ***!
  \*****************************************************/
/*! exports provided: CarritoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoService", function() { return CarritoService; });
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

var CarritoService = /** @class */ (function () {
    function CarritoService() {
    }
    CarritoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CarritoService);
    return CarritoService;
}());



/***/ }),

/***/ "./src/app/services/chats/chat.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/chats/chat.service.ts ***!
  \************************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = /** @class */ (function () {
    function ChatService(http, _usuarioService) {
        this.http = http;
        this._usuarioService = _usuarioService;
    }
    ChatService.prototype.guardarChat = function (chat, chatsCargados) {
        var token = this._usuarioService.token;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + '/chat?token=' + token + '&chatCargados=' + chatsCargados;
        return this.http.post(url, chat);
    };
    ChatService.prototype.obtenerChats = function (proyectoId, chatsCargados) {
        var token = this._usuarioService.token;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + '/chat/' + proyectoId + '?token=' + token + '&chatsCargados=' + chatsCargados;
        return this.http.get(url);
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/clientes/cliente.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/clientes/cliente.service.ts ***!
  \******************************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClienteService = /** @class */ (function () {
    function ClienteService(http, _usuarioService) {
        this.http = http;
        this._usuarioService = _usuarioService;
    }
    ClienteService.prototype.obtenerClientes = function (pagina) {
        var token = this._usuarioService.token;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + '/cliente?token=' + token + '&desde=' + pagina;
        return this.http.get(url);
    };
    ClienteService.prototype.guardarCliente = function (cliente) {
        var token = this._usuarioService.token;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + '/cliente?token=' + token;
        return this.http.post(url, cliente);
    };
    ClienteService.prototype.actualizarCliente = function (cliente) {
        var token = this._usuarioService.token;
        var clientId = cliente._id;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + '/cliente/' + clientId + '?token=' + token;
        return this.http.put(url, cliente);
    };
    ClienteService.prototype.buscarCliente = function (termino) {
        var token = this._usuarioService.token;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + '/busqueda/coleccion/cliente/' + termino + '?token=' + token;
        return this.http.get(url);
    };
    ClienteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], ClienteService);
    return ClienteService;
}());



/***/ }),

/***/ "./src/app/services/guards/login-guard.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/services/guards/login-guard.guard.ts ***!
  \******************************************************/
/*! exports provided: LoginGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardGuard", function() { return LoginGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
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





var LoginGuardGuard = /** @class */ (function () {
    function LoginGuardGuard(_usuarioService, router) {
        this._usuarioService = _usuarioService;
        this.router = router;
    }
    LoginGuardGuard.prototype.canActivate = function () {
        var _this = this;
        return this._usuarioService.validarLogin().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            if (resp.ok) {
                return true;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.router.navigate(['/login']);
            // swal( err.error.mensaje + ':', 'Aún no ha iniciado sesión o su sesión ha expirado, favor de iniciar sesión.','warning');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    LoginGuardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginGuardGuard);
    return LoginGuardGuard;
}());



/***/ }),

/***/ "./src/app/services/productos/producto.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/productos/producto.service.ts ***!
  \********************************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
/* harmony import */ var src_app_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/config */ "./src/app/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductoService = /** @class */ (function () {
    function ProductoService(http, _usuarioService) {
        this.http = http;
        this._usuarioService = _usuarioService;
    }
    ProductoService.prototype.actualizarProducto = function (producto) {
        var token = this._usuarioService.token;
        var url = src_app_config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + ("/producto/" + producto._id + "?token=" + token);
        return this.http.put(url, producto);
    };
    ProductoService.prototype.registrarProducto = function (producto) {
        var token = this._usuarioService.token;
        var url = src_app_config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + ("/producto?token=" + token);
        return this.http.post(url, producto);
    };
    ProductoService.prototype.obtenerProductosPorFamilia = function (familia, pagina) {
        if (pagina === void 0) { pagina = 1; }
        var token = this._usuarioService.token;
        var desde = (pagina - 1) * 10;
        var url = src_app_config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + ("/producto/familia/" + familia + "?token=" + token + "&desde=" + desde);
        return this.http.get(url);
    };
    ProductoService.prototype.eliminarProductoPorId = function (id) {
        var token = this._usuarioService.token;
        var url = src_app_config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + ("/producto/" + id + "?token=" + token);
        return this.http.delete(url);
    };
    ProductoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], ProductoService);
    return ProductoService;
}());



/***/ }),

/***/ "./src/app/services/proyectos/proyecto.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/proyectos/proyecto.service.ts ***!
  \********************************************************/
/*! exports provided: ProyectoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectoService", function() { return ProyectoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProyectoService = /** @class */ (function () {
    function ProyectoService(http, _usuarioService) {
        this.http = http;
        this._usuarioService = _usuarioService;
    }
    ProyectoService.prototype.getProyectos = function (clienteId, pagina) {
        var token = this._usuarioService.token;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + '/proyecto/' + clienteId + '?token=' + token + '&deste=' + pagina;
        return this.http.get(url);
    };
    ProyectoService.prototype.postProyecto = function (proyecto) {
        var token = this._usuarioService.token;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + '/proyecto?token=' + token;
        return this.http.post(url, proyecto);
    };
    ProyectoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], ProyectoService);
    return ProyectoService;
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
                modulo: "Ventas",
                icono: "mdi mdi-cash-usd",
                submenu: [
                    { titulo: "CRM", url: "/crm" },
                    { titulo: "Reporte de Ventas", url: "/dashboard" },
                    { titulo: "Catálogo de Productos", url: "/catalogoProductos" }
                ]
            }
        ];
    }
    SidebarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "./src/app/services/subirArchivo/subir-archivo.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/subirArchivo/subir-archivo.service.ts ***!
  \****************************************************************/
/*! exports provided: SubirArchivoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirArchivoService", function() { return SubirArchivoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubirArchivoService = /** @class */ (function () {
    function SubirArchivoService() {
    }
    SubirArchivoService.prototype.subirArchivo = function (archivo, tipo, id) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append('imagen', archivo, archivo.name);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // console.log('Imagen subida');
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        // console.log('Fallo la subida');
                        reject(xhr.response);
                    }
                }
            };
            var url = _config_config__WEBPACK_IMPORTED_MODULE_1__["URL_SERVICIOS"] + '/upload/imagen/' + tipo + '/' + id;
            xhr.open('PUT', url, true);
            xhr.send(formData);
        });
    };
    SubirArchivoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SubirArchivoService);
    return SubirArchivoService;
}());



/***/ }),

/***/ "./src/app/services/usuarios/usuario.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/usuarios/usuario.service.ts ***!
  \******************************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subirArchivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subirArchivo/subir-archivo.service */ "./src/app/services/subirArchivo/subir-archivo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsuarioService = /** @class */ (function () {
    function UsuarioService(http, router, _subirArchivoService) {
        this.http = http;
        this.router = router;
        this._subirArchivoService = _subirArchivoService;
        this.cargarStorage();
    }
    //------------------------
    // Función de login
    //------------------------
    UsuarioService.prototype.login = function (usuario, recordar) {
        var _this = this;
        if (recordar === void 0) { recordar = false; }
        //Guardamos o borramos el email del local storage, segun las preferencias del usuario
        if (recordar) {
            localStorage.setItem("email", usuario.email);
        }
        else {
            localStorage.removeItem("email");
        }
        // ---->
        //Construimos ruta del servicio
        var url = _config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + "/login";
        // ---->
        // Realizamos petición de login al backend
        return this.http.post(url, usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            // Guardamos los datos del usuario, su token e id
            _this.guardarStorage(resp.id, resp.token, resp.usuario);
            return true;
            // ---->
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }));
        // FIN de Petición al backend
    };
    //------------------------
    // FIN de Función login
    //------------------------
    //---------------------------
    // Función de logout
    //---------------------------
    UsuarioService.prototype.logout = function () {
        this.usuario = null;
        this.token = "";
        this.id = "";
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem("usuario");
        this.router.navigate(["/login"]);
    };
    //---------------------------
    // Fin de Función de logout
    //---------------------------
    //-------------------------------------
    // Función crear Usuario
    //-------------------------------------
    UsuarioService.prototype.crearUsuario = function (usuario) {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + "/usuario";
        return this.http.post(url, usuario);
    };
    //-------------------------------------
    // FIN de Función crear Usuario
    //-------------------------------------
    //-------------------------------
    // Función actualizar usuario
    //-------------------------------
    UsuarioService.prototype.actualizarUsuario = function (usuario) {
        var _this = this;
        var token = this.token;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + '/usuario/' + usuario._id + '?token=' + token;
        return this.http.put(url, usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            swal('Actualización exitosa', 'La información de usuario se ha actualizado correctamente', 'success');
            var usuarioDB = resp.usuario;
            _this.guardarStorage(usuarioDB._id, _this.token, usuarioDB);
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            swal('Error al actualizar usuario', err.error.mensaje + ' | ' + err.error.errors.message, 'error');
            return err;
        }));
    };
    //--------------------------------------
    // FIN de Función actualizar usuario
    //--------------------------------------
    //------------------------------------------------------------------
    // Función para guardar datos del usuario en localstorage
    //------------------------------------------------------------------
    UsuarioService.prototype.guardarStorage = function (id, token, usuario) {
        localStorage.setItem("id", id);
        localStorage.setItem("token", token);
        localStorage.setItem("usuario", JSON.stringify(usuario));
        this.usuario = usuario;
        this.token = token;
        this.id = id;
    };
    //------------------------------------------------------------------
    // FIN de Función para guardar datos del usuario en localstorage
    //------------------------------------------------------------------
    UsuarioService.prototype.cambiarImagen = function (file, id) {
        var _this = this;
        this._subirArchivoService.subirArchivo(file, 'usuario', id)
            .then(function (resp) {
            _this.usuario.img = resp.usuario.img;
            swal('Imagen actualizada', 'Se ha actualizado la imagen de: ' + _this.usuario.nombre, 'success');
            _this.guardarStorage(id, _this.token, _this.usuario);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    //-------------------------------------------------------------------------
    // Función para cargar los datos del usuario desde el localstorage
    //-------------------------------------------------------------------------
    UsuarioService.prototype.cargarStorage = function () {
        if (localStorage.getItem("token")) {
            this.token = localStorage.getItem("token");
            this.usuario = JSON.parse(localStorage.getItem("usuario"));
            this.id = localStorage.getItem("id");
        }
        else {
            this.token = "";
            this.usuario = null;
            this.id = "";
        }
    };
    //-------------------------------------------------------------------------
    // FIN de Función para cargar los datos del usuario desde el localstorage
    //-------------------------------------------------------------------------
    //--------------------------------------------------------------
    // Función para validar si el usuario esta logueado o no
    //--------------------------------------------------------------
    UsuarioService.prototype.validarLogin = function () {
        var url = _config_config__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + "/validarToken";
        return this.http.post(url, {
            token: this.token
        });
    };
    UsuarioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _subirArchivo_subir_archivo_service__WEBPACK_IMPORTED_MODULE_6__["SubirArchivoService"]])
    ], UsuarioService);
    return UsuarioService;
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

module.exports = "<!-- ============================================================== -->\n<!-- Topbar header - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<header class=\"topbar\">\n  <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n    <!-- ============================================================== -->\n    <!-- Logo -->\n    <!-- ============================================================== -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"index.html\">\n        <!-- Logo icon --><b>\n          <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\n          <!-- Dark Logo icon -->\n          <img src=\"assets/images/mobla-logo-letra.PNG\" alt=\"homepage\" class=\"logo dark-logo\" />\n          <!-- Light Logo icon -->\n          <img src=\"assets/images/mobla-logo-letra.PNG\" alt=\"homepage\" class=\"logo light-logo\" />\n        </b>\n        <!--End Logo icon -->\n        <!-- Logo text --><span>\n          <!-- dark Logo text -->\n          <img src=\"assets/images/mobla-logo.png\" alt=\"homepage\" class=\"logo logo-text dark-logo\" />\n          <!-- Light Logo text -->\n          <img src=\"assets/images/mobla-logo.png\" class=\"logo logo-text light-logo\" alt=\"homepage\" /></span> </a>\n    </div>\n    <!-- ============================================================== -->\n    <!-- End Logo -->\n    <!-- ============================================================== -->\n    <div class=\"navbar-collapse\">\n      <!-- ============================================================== -->\n      <!-- toggle and nav items -->\n      <!-- ============================================================== -->\n      <ul class=\"navbar-nav mr-auto\">\n        <!-- This is  -->\n        <li class=\"nav-item\"> <a class=\"nav-link nav-toggler hidden-md-up waves-effect waves-dark\" href=\"javascript:void(0)\"><i\n              class=\"ti-menu\"></i></a> </li>\n        <li class=\"nav-item\"> <a class=\"nav-link sidebartoggler hidden-sm-down waves-effect waves-dark\" href=\"javascript:void(0)\"><i\n              class=\"ti-menu\"></i></a> </li>\n        <li class=\"nav-item hidden-sm-down\"></li>\n      </ul>\n      <!-- ============================================================== -->\n      <!-- User profile and search -->\n      <!-- ============================================================== -->\n      <ul class=\"navbar-nav my-lg-0\">\n        <!-- ============================================================== -->\n        <!-- Search -->\n        <!-- ============================================================== -->\n        <li class=\"nav-item hidden-xs-down search-box\"> <a class=\"nav-link hidden-sm-down waves-effect waves-dark\" href=\"javascript:void(0)\"><i\n              class=\"ti-search\"></i></a>\n          <form class=\"app-search\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search & enter\"> <a class=\"srh-btn\"><i class=\"ti-close\"></i></a>\n            </form>\n        </li>\n        <!-- ============================================================== -->\n        <!-- Messages -->\n        <!-- ============================================================== -->\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" id=\"2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"mdi mdi-email\"></i>\n            <div class=\"notify\"> <span class=\"heartbit\"></span> <span class=\"point\"></span> </div>\n          </a>\n          <div class=\"dropdown-menu mailbox dropdown-menu-right animated fadeIn\" aria-labelledby=\"2\">\n            <ul>\n              <li>\n                <div class=\"drop-title\">You have 4 new messages</div>\n              </li>\n              <li>\n                <div class=\"message-center\">\n                  <!-- Message -->\n                  <a href=\"#\">\n                    <div class=\"user-img\"> <img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status online pull-right\"></span>\n                      </div>\n                    <div class=\"mail-contnet\">\n                      <h5>Pavan kumar</h5> <span class=\"mail-desc\">Just see the my admin!</span> <span class=\"time\">9:30\n                        AM</span> </div>\n                  </a>\n                  <!-- Message -->\n                  <a href=\"#\">\n                    <div class=\"user-img\"> <img src=\"assets/images/users/2.jpg\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status busy pull-right\"></span>\n                      </div>\n                    <div class=\"mail-contnet\">\n                      <h5>Sonu Nigam</h5> <span class=\"mail-desc\">I've sung a song! See you at</span> <span class=\"time\">9:10\n                        AM</span> </div>\n                  </a>\n                  <!-- Message -->\n                  <a href=\"#\">\n                    <div class=\"user-img\"> <img src=\"assets/images/users/3.jpg\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status away pull-right\"></span>\n                      </div>\n                    <div class=\"mail-contnet\">\n                      <h5>Arijit Sinh</h5> <span class=\"mail-desc\">I am a singer!</span> <span class=\"time\">9:08 AM</span>\n                      </div>\n                  </a>\n                  <!-- Message -->\n                  <a href=\"#\">\n                    <div class=\"user-img\"> <img src=\"assets/images/users/4.jpg\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status offline pull-right\"></span>\n                      </div>\n                    <div class=\"mail-contnet\">\n                      <h5>Pavan kumar</h5> <span class=\"mail-desc\">Just see the my admin!</span> <span class=\"time\">9:02\n                        AM</span> </div>\n                  </a>\n                </div>\n              </li>\n              <li>\n                <a class=\"nav-link text-center\" href=\"javascript:void(0);\"> <strong>See all e-Mails</strong> <i class=\"fa fa-angle-right\"></i>\n                  </a>\n              </li>\n            </ul>\n          </div>\n        </li>\n        <!-- ============================================================== -->\n        <!-- End Messages -->\n        <!-- ============================================================== -->\n        <!-- ============================================================== -->\n        <!-- Language -->\n        <!-- ============================================================== -->\n        <!-- <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"flag-icon flag-icon-us\"></i></a>\n          <div class=\"dropdown-menu dropdown-menu-right animated bounceInDown\"> <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-icon flag-icon-in\"></i>\n              India</a> <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-icon flag-icon-fr\"></i> French</a> <a class=\"dropdown-item\"\n              href=\"#\"><i class=\"flag-icon flag-icon-cn\"></i> China</a> <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-icon flag-icon-de\"></i>\n              Dutch</a> </div>\n        </li> -->\n        <!-- ============================================================== -->\n        <!-- Profile -->\n        <!-- ============================================================== -->\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><img\n              [src]=\"usuario.img | imagen\" class=\"profile-pic size-30\" /></a>\n          <div class=\"dropdown-menu dropdown-menu-right animated fadeIn\">\n            <ul class=\"dropdown-user\">\n              <li>\n                <div class=\"dw-user-box\">\n                  <div class=\"u-img\">\n                    <img class=\"size-70\" [src]=\"usuario.img | imagen\"></div>\n                  <div class=\"u-text\">\n                    <h4>{{ usuario.nombre }}</h4>\n                    <p class=\"text-muted\">{{ usuario.email }}</p>\n                    <a [routerLink]=\"['/perfil']\" class=\"btn btn-rounded btn-danger btn-sm\">\n                      Ver Perfil\n                    </a>\n                  </div>\n                </div>\n              </li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a [routerLink]=\"['/perfil']\"><i class=\"ti-user\"></i> Perfil</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a href=\"#\"><i class=\"ti-settings\"></i> Account Setting</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a (click)=\"logout()\" class=\"pointer\"><i class=\"fa fa-power-off\"></i> Logout</a></li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n<!-- ============================================================== -->\n<!-- End Topbar header -->\n<!-- ============================================================== -->"

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
/* harmony import */ var _services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
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
    function HeaderComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.usuario = this._usuarioService.usuario;
    };
    HeaderComponent.prototype.logout = function () {
        this._usuarioService.logout();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]])
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
        init_plugins();
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
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
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
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
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

module.exports = "<!-- ============================================================== -->\n<!-- Left Sidebar - style you can find in sidebar.scss  -->\n<!-- ============================================================== -->\n<aside class=\"left-sidebar\">\n  <!-- Sidebar scroll-->\n  <div class=\"scroll-sidebar\">\n    <!-- Sidebar navigation-->\n    <nav class=\"sidebar-nav\">\n      <ul id=\"sidebarnav\">\n        <li class=\"user-profile\">\n          <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\">\n            <img class=\"size-30\" [src]=\"usuario.img | imagen\"/>\n            <span class=\"hide-menu\">{{ usuario.nombre }}</span></a>\n          <ul aria-expanded=\"false\" class=\"collapse\">\n            <li><a [routerLink]=\"['/perfil']\"\n                    routerLinkActive=\"active\">Perfil </a></li>\n            <li><a href=\"javascript:void()\">My Balance</a></li>\n            <li><a href=\"javascript:void()\">Inbox</a></li>\n            <li><a href=\"javascript:void()\">Account Setting</a></li>\n            <li><a (click)=\"logout()\" class=\"pointer\">Logout</a></li>\n          </ul>\n        </li>\n        <li class=\"nav-devider\"></li>\n        <li class=\"nav-small-cap\">MODULOS</li>\n\n        <li *ngFor=\"let menu of _sidebar.menu\"> \n          <a class=\"has-arrow waves-effect waves-dark\" aria-expanded=\"false\"><i [class]=\"menu.icono\"></i><span\n              class=\"hide-menu\">{{ menu.modulo }} <span class=\"label label-rouded label-themecolor pull-right\">{{ menu.submenu.length }}</span></span></a>\n          <ul aria-expanded=\"false\" class=\"collapse\">\n            <li *ngFor=\"let submenu of menu.submenu\">\n              <a [routerLink]=\"[ submenu.url ]\" routerLinkActive=\"active\" (click)=\"expandCollapsSidebar()\">{{ submenu.titulo }}</a></li>\n          </ul>\n        </li>\n      </ul>\n    </nav>\n    <!-- End Sidebar navigation -->\n  </div>\n  <!-- End Sidebar scroll-->\n</aside>\n<!-- ============================================================== -->\n<!-- End Left Sidebar - style you can find in sidebar.scss  -->\n<!-- ============================================================== -->"

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
/* harmony import */ var _services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
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
    function SidebarComponent(_sidebar, _usuarioService) {
        this._sidebar = _sidebar;
        this._usuarioService = _usuarioService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.usuario = this._usuarioService.usuario;
    };
    SidebarComponent.prototype.logout = function () {
        this._usuarioService.logout();
    };
    SidebarComponent.prototype.expandCollapsSidebar = function () {
        // if ( window.innerWidth <= 800 ) {
        toggleSidebar();
        // }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"],
            _services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/ventas/ventas.service.ts":
/*!******************************************!*\
  !*** ./src/app/ventas/ventas.service.ts ***!
  \******************************************/
/*! exports provided: VentasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasService", function() { return VentasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/usuarios/usuario.service */ "./src/app/services/usuarios/usuario.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VentasService = /** @class */ (function () {
    function VentasService(http, _usuarioService) {
        this.http = http;
        this._usuarioService = _usuarioService;
    }
    VentasService.prototype.generarVenta = function (venta) {
        var token = this._usuarioService.token;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + ("/venta?token=" + token);
        return this.http.post(url, venta);
    };
    VentasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_usuarios_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], VentasService);
    return VentasService;
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