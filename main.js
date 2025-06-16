"use strict";
(self["webpackChunkinsurance_channel"] = self["webpackChunkinsurance_channel"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 1391);
/* harmony import */ var _guards_verify_identity_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/verify-identity.guard */ 340);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/not-found/not-found.component */ 4740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






const routes = [{
  path: 'verify-identity',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_verify-identity_verify-identity_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./verify-identity/verify-identity.module */ 6646)).then(m => m.VerifyIdentityModule),
  canActivate: [_guards_verify_identity_guard__WEBPACK_IMPORTED_MODULE_1__.VerifyIdentityGuard]
}, {
  path: 'dashboard',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 5667)).then(m => m.DashboardModule),
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: '**',
  pathMatch: 'full',
  component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/store */ 655);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _shared_services_init_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/init-app.service */ 8006);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);






class AppComponent {
  constructor(store, initAppService) {
    this.store = store;
    this.initAppService = initAppService;
    console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.VERSION);
  }
  unloadNotification($event) {
    sessionStorage.setItem('isReloading', 'true');
  }
  ngOnInit() {
    this.initAppService.initApp();
    const isReloading = sessionStorage.getItem('isReloading') === 'true';
    if (isReloading) {
      setTimeout(() => {
        this.store.dispatch(_shared_store__WEBPACK_IMPORTED_MODULE_0__.TokenActions.checkToken());
        sessionStorage.removeItem('isReloading');
      }, 100);
    } else {
      this.store.dispatch(_shared_store__WEBPACK_IMPORTED_MODULE_0__.TokenActions.checkToken());
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_init_app_service__WEBPACK_IMPORTED_MODULE_2__.InitAppService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("beforeunload", function AppComponent_beforeunload_HostBindingHandler($event) {
          return ctx.unloadNotification($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
      }
    },
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ 448);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 6208);














class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreModule.forRoot({}, {}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.EffectsModule.forRoot([]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__.StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.isDevMode)()
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__.StoreDevtoolsModule]
  });
})();

/***/ }),

/***/ 2265:
/*!************************************************************!*\
  !*** ./src/app/dashboard/store/actions/insured.actions.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadInsurance: () => (/* binding */ loadInsurance),
/* harmony export */   loadInsuranceFailure: () => (/* binding */ loadInsuranceFailure),
/* harmony export */   loadedInsurance: () => (/* binding */ loadedInsurance),
/* harmony export */   resetInsurance: () => (/* binding */ resetInsurance)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const loadInsurance = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dashboard Page] Load Insurance');
const loadedInsurance = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dashboard Page] Loaded Insurance', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadInsuranceFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Dashboard Page] Failure Insurance', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetInsurance = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Insurance Reset]');

/***/ }),

/***/ 7841:
/*!******************************************!*\
  !*** ./src/app/dashboard/store/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsuredActions: () => (/* reexport module object */ _actions_insured_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   InsuredReducer: () => (/* reexport module object */ _reducers_insured_reducer__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   InsuredSelectors: () => (/* reexport module object */ _selectors_insured_selectors__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _actions_insured_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/insured.actions */ 2265);
/* harmony import */ var _reducers_insured_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/insured.reducer */ 360);
/* harmony import */ var _selectors_insured_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors/insured.selectors */ 499);




/***/ }),

/***/ 360:
/*!*************************************************************!*\
  !*** ./src/app/dashboard/store/reducers/insured.reducer.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   insuredActionReducerKey: () => (/* binding */ insuredActionReducerKey),
/* harmony export */   insuredReducer: () => (/* binding */ insuredReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 7841);


const insuredActionReducerKey = 'insuredData';
const initInsuredState = {
  customer: null,
  maximumProtectionInsurance: [],
  familyLifeInsurance: [],
  xsInsurance: [],
  oncologicalInsurance: [],
  sapInsurance: [],
  error: null
};
const insuredReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initInsuredState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.InsuredActions.loadInsurance, state => ({
  ...state
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.InsuredActions.loadedInsurance, (state, {
  customer,
  maximumProtectionInsurance,
  familyLifeInsurance,
  xsInsurance,
  oncologicalInsurance,
  sapInsurance
}) => ({
  ...state,
  customer,
  maximumProtectionInsurance,
  familyLifeInsurance,
  xsInsurance,
  oncologicalInsurance,
  sapInsurance
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.InsuredActions.loadInsuranceFailure, (state, {
  error
}) => ({
  ...state,
  error
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.InsuredActions.resetInsurance, state => ({
  ...state,
  client: null,
  maximumProtectionInsurance: [],
  familyLifeInsurance: [],
  xsInsurance: [],
  oncologicalInsurance: [],
  sapInsurance: []
})));

/***/ }),

/***/ 499:
/*!****************************************************************!*\
  !*** ./src/app/dashboard/store/selectors/insured.selectors.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customer: () => (/* binding */ customer),
/* harmony export */   error: () => (/* binding */ error),
/* harmony export */   familyLifeInsurance: () => (/* binding */ familyLifeInsurance),
/* harmony export */   insuredSelector: () => (/* binding */ insuredSelector),
/* harmony export */   maximumProtectionInsurance: () => (/* binding */ maximumProtectionInsurance),
/* harmony export */   oncologicalInsurance: () => (/* binding */ oncologicalInsurance),
/* harmony export */   sapInsurance: () => (/* binding */ sapInsurance),
/* harmony export */   xsInsurance: () => (/* binding */ xsInsurance)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 7841);


const insuredSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(___WEBPACK_IMPORTED_MODULE_0__.InsuredReducer.insuredActionReducerKey);
const customer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(insuredSelector, ({
  customer
}) => customer);
const maximumProtectionInsurance = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(insuredSelector, ({
  maximumProtectionInsurance
}) => maximumProtectionInsurance);
const familyLifeInsurance = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(insuredSelector, ({
  familyLifeInsurance
}) => familyLifeInsurance);
const xsInsurance = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(insuredSelector, ({
  xsInsurance
}) => xsInsurance);
const oncologicalInsurance = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(insuredSelector, ({
  oncologicalInsurance
}) => oncologicalInsurance);
const sapInsurance = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(insuredSelector, ({
  sapInsurance
}) => sapInsurance);
const error = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(insuredSelector, ({
  error
}) => error);

/***/ }),

/***/ 1391:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/store */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);





class AuthGuard {
  constructor(store, router) {
    this.store = store;
    this.router = router;
  }
  canActivate() {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      try {
        const {
          token
        } = JSON.parse(userInfo);
        if (token) {
          this.store.dispatch(_shared_store__WEBPACK_IMPORTED_MODULE_0__.TokenActions.saveToken({
            token
          }));
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
        }
      } catch (e) {
        console.error('Error parsing userInfo', e);
      }
    }
    return this.store.select(_shared_store__WEBPACK_IMPORTED_MODULE_0__.TokenSelectors.hasToken).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(hasToken => {
      if (hasToken) return true;
      this.router.navigate(['/verify-identity']);
      return false;
    }));
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 340:
/*!*************************************************!*\
  !*** ./src/app/guards/verify-identity.guard.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyIdentityGuard: () => (/* binding */ VerifyIdentityGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/store */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);





class VerifyIdentityGuard {
  constructor(store, router) {
    this.store = store;
    this.router = router;
  }
  canActivate() {
    return this.store.select(_shared_store__WEBPACK_IMPORTED_MODULE_0__.TokenSelectors.hasToken).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(hasToken => {
      if (hasToken) {
        this.router.navigate(['/dashboard/my-insurance']);
        return false;
      }
      return true;
    }));
  }
  static #_ = this.ɵfac = function VerifyIdentityGuard_Factory(t) {
    return new (t || VerifyIdentityGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: VerifyIdentityGuard,
    factory: VerifyIdentityGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 654:
/*!*******************************************!*\
  !*** ./src/app/material/material.conf.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPaginatorIntl: () => (/* binding */ getPaginatorIntl)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ 9687);

const getPaginatorIntl = () => {
  const paginatorIntl = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__.MatPaginatorIntl();
  paginatorIntl.itemsPerPageLabel = 'Registros por página:';
  paginatorIntl.nextPageLabel = 'Página siguiente ';
  paginatorIntl.previousPageLabel = 'Página anterior';
  paginatorIntl.firstPageLabel = 'Primera página';
  paginatorIntl.lastPageLabel = 'Última página';
  return paginatorIntl;
};

/***/ }),

/***/ 6889:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _material_conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.conf */ 654);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 8740);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ 6272);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);






















class MaterialModule {
  static #_ = this.ɵfac = function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MaterialModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: false
      }
    }, {
      provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginatorIntl,
      useValue: (0,_material_conf__WEBPACK_IMPORTED_MODULE_0__.getPaginatorIntl)()
    }],
    imports: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginatorModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginatorModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule]
  });
})();

/***/ }),

/***/ 7249:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/global-dialog/global-dialog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalDialogComponent: () => (/* binding */ GlobalDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);





function GlobalDialogComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlobalDialogComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GlobalDialogComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aceptar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
  }
}
class GlobalDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  static #_ = this.ɵfac = function GlobalDialogComponent_Factory(t) {
    return new (t || GlobalDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GlobalDialogComponent,
    selectors: [["app-global-dialog"]],
    decls: 9,
    vars: 4,
    consts: [["mat-dialog-title", "", 1, "text-yellow-500", "font-roundkey", "uppercase"], ["mat-dialog-content", ""], [1, "text-lg", "uppercase"], ["mat-dialog-actions", "", 1, "flex", "justify-center"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["class", "bg-primary text-lg uppercase py-1 px-5 rounded-full", 3, "mat-dialog-close", 4, "ngIf"], ["mat-button", "", "color", "warn", 3, "click"], [1, "bg-primary", "text-lg", "uppercase", "py-1", "px-5", "rounded-full", 3, "mat-dialog-close"]],
    template: function GlobalDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GlobalDialogComponent_button_7_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GlobalDialogComponent_button_8_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.cancelButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.acceptButton);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnbG9iYWwtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2xvYmFsLWRpYWxvZy9nbG9iYWwtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4816:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/info-user/info-user.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoUserComponent: () => (/* binding */ InfoUserComponent)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ 655);
/* harmony import */ var src_app_dashboard_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dashboard/store */ 7841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ 8082);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);









class InfoUserComponent {
  constructor(store, dialogService) {
    this.store = store;
    this.dialogService = dialogService;
    this.customer$ = this.store.select(src_app_dashboard_store__WEBPACK_IMPORTED_MODULE_1__.InsuredSelectors.customer);
  }
  onLogout() {
    const loader = this.dialogService.openLoader();
    setTimeout(() => {
      this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.TokenActions.removeToken());
      loader.close();
    }, 1000);
  }
  static #_ = this.ɵfac = function InfoUserComponent_Factory(t) {
    return new (t || InfoUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: InfoUserComponent,
    selectors: [["app-info-user"]],
    decls: 19,
    vars: 7,
    consts: [["mat-button", "", 3, "matMenuTriggerFor"], [1, "hidden", "sm:block", "uppercase", "text-[#0f5dac]", "ml-2"], [1, "scale-[2]", "text-gradient"], ["menu", "matMenu"], ["mat-menu-item", "", "disabled", ""], [1, "text-gradient"], [1, "uppercase"], ["mat-menu-item", "", 3, "click"]],
    template: function InfoUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-menu", null, 3)(8, "button", 4)(9, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InfoUserComponent_Template_button_click_14_listener() {
          return ctx.onLogout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Cerrar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, ctx.customer$)) == null ? null : tmp_1_0.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 5, ctx.customer$)) == null ? null : tmp_2_0.fullName);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: [".mat-mdc-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-mdc-menu-submenu-icon[_ngcontent-%COMP%] {\n  color: #e91c89;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tdXNlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEZJRSUyMFRBUkVBUyUyMDA2LTE2JTIwQUpVU1RFJTIwRjUlMjBTT1NURU5JQklMSURBRFxcbXNhLWluc3VyYW5jZWNoYW5uZWwtdmlld1xcc3JjXFxpbnN1cmFuY2UtY2hhbm5lbFxcc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcaW5mby11c2VyXFxpbmZvLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoiaW5mby11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1tZGMtbWVudS1pdGVtIC5tYXQtaWNvbi1uby1jb2xvciwgLm1hdC1tZGMtbWVudS1zdWJtZW51LWljb24ge1xyXG4gIGNvbG9yOiAjZTkxYzg5O1xyXG59XHJcbiIsIi5tYXQtbWRjLW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsIC5tYXQtbWRjLW1lbnUtc3VibWVudS1pY29uIHtcbiAgY29sb3I6ICNlOTFjODk7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5mby11c2VyL2luZm8tdXNlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0ZJRSUyMFRBUkVBUyUyMDA2LTE2JTIwQUpVU1RFJTIwRjUlMjBTT1NURU5JQklMSURBRC9tc2EtaW5zdXJhbmNlY2hhbm5lbC12aWV3L3NyYy9pbnN1cmFuY2UtY2hhbm5lbC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2luZm8tdXNlci9pbmZvLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7QURDQSxneEJBQWd4QiIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbWRjLW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsIC5tYXQtbWRjLW1lbnUtc3VibWVudS1pY29uIHtcclxuICBjb2xvcjogI2U5MWM4OTtcclxufVxyXG4iLCIubWF0LW1kYy1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLCAubWF0LW1kYy1tZW51LXN1Ym1lbnUtaWNvbiB7XG4gIGNvbG9yOiAjZTkxYzg5O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9185:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);


class LoaderComponent {
  static #_ = this.ɵfac = function LoaderComponent_Factory(t) {
    return new (t || LoaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoaderComponent,
    selectors: [["app-loader"]],
    decls: 4,
    vars: 1,
    consts: [[1, "flex", "justify-center", "items-center", "gap-4", "py-5"], ["mode", "indeterminate", 3, "diameter"], [1, "text-2xl", "text-gray-600"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Conectando...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 35);
      }
    },
    dependencies: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__.MatProgressSpinner],
    styles: [".mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #5c5c5c !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEZJRSUyMFRBUkVBUyUyMDA2LTE2JTIwQUpVU1RFJTIwRjUlMjBTT1NURU5JQklMSURBRFxcbXNhLWluc3VyYW5jZWNoYW5uZWwtdmlld1xcc3JjXFxpbnN1cmFuY2UtY2hhbm5lbFxcc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbG9hZGVyXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQ0NGIiwiZmlsZSI6ImxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xyXG4gIHN0cm9rZTogIzVjNWM1YyAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xuICBzdHJva2U6ICM1YzVjNWMgIWltcG9ydGFudDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0ZJRSUyMFRBUkVBUyUyMDA2LTE2JTIwQUpVU1RFJTIwRjUlMjBTT1NURU5JQklMSURBRC9tc2EtaW5zdXJhbmNlY2hhbm5lbC12aWV3L3NyYy9pbnN1cmFuY2UtY2hhbm5lbC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQ0NGO0FEQ0Esd3ZCQUF3dkIiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcclxuICBzdHJva2U6ICM1YzVjNWMgIWltcG9ydGFudDtcclxufVxyXG4iLCIubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcbiAgc3Ryb2tlOiAjNWM1YzVjICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 140:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/logo/logo.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoComponent: () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class LogoComponent {
  constructor() {
    this.whidthLogo = '100px';
    this.heightLogo = 'auto'; //'90px'
  }
  static #_ = this.ɵfac = function LogoComponent_Factory(t) {
    return new (t || LogoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LogoComponent,
    selectors: [["app-logo"]],
    inputs: {
      whidthLogo: "whidthLogo"
    },
    decls: 1,
    vars: 4,
    consts: [["src", "../../../../assets/images/fie-insurance.png", "alt", "Logo Banco Fie S.A."]],
    template: function LogoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.whidthLogo)("height", ctx.heightLogo);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4740:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class NotFoundComponent {
  static #_ = this.ɵfac = function NotFoundComponent_Factory(t) {
    return new (t || NotFoundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotFoundComponent,
    selectors: [["app-not-found"]],
    decls: 13,
    vars: 0,
    consts: [[1, "flex", "flex-col", "items-center", "justify-center", "h-screen", "bg-gray-100"], [1, "mb-4", "text-9xl", "font-semibold", "text-gradient"], [1, "mb-4", "text-2xl", "text-gray-600"], [1, "animate-bounce"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "mx-auto", "h-16", "w-16", "text-pink-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"], [1, "mt-4", "text-gray-600", "text-xl"], ["routerLink", "/verify-identity", 1, "text-blue-500"]],
    template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A1Oops! No pudimos encontrar lo que buscabas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Te guiamos de vuelta al ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2170:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidenav/sidenav.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavComponent: () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/sidenav.service */ 87);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 3228);









function SidenavComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_a_3_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onNavigate(item_r1.route));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 5)(2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.currentRoute === item_r1.route ? "border-l-[10px] border-pink-600" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.description);
  }
}
class SidenavComponent {
  get isMobile() {
    return this.sidenavService.isMobile;
  }
  constructor(observer, router, sidenavService) {
    this.observer = observer;
    this.router = router;
    this.sidenavService = sidenavService;
    this.currentRoute = '';
    this.navItems = [{
      icon: 'verified_user',
      route: '/dashboard/my-insurance',
      description: 'Mis seguros',
      submenu: false
    }
    // {
    //   icon: 'assured_workload',
    //   route: '/dashboard/digital-products',
    //   description: 'Productos y Servicios',
    //   submenu: false
    // },
    // {
    //   icon: 'language',
    //   route: '/dashboard/digital-services',
    //   description: 'Servicios Digitales',
    //   submenu: false
    // },
    ];
  }

  ngOnInit() {
    this.currentRoute = this.router.url;
    this.observer.observe(['(max-width: 800px)']).subscribe(screenSize => {
      screenSize.matches ? this.sidenavService.setMobile(true) : this.sidenavService.setMobile(false);
    });
  }
  ngAfterViewInit() {
    this.sidenavService.setMatSidenav(this.sidenav);
  }
  onNavigate(route) {
    this.currentRoute = route;
    this.router.navigateByUrl(route);
    if (this.sidenavService.isMobile) this.sidenavService.close();
  }
  static #_ = this.ɵfac = function SidenavComponent_Factory(t) {
    return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sidenav_service__WEBPACK_IMPORTED_MODULE_0__.SidenavService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SidenavComponent,
    selectors: [["app-sidenav"]],
    viewQuery: function SidenavComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenav, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
      }
    },
    decls: 7,
    vars: 3,
    consts: [["autosize", "", 1, "fixed", "bg-transparent"], [3, "opened", "mode"], ["mat-list-item", "", "class", "pl-[10px]", 3, "click", 4, "ngFor", "ngForOf"], [1, "w-[95%]", "lg:w-[90%]", "mx-auto", "p-2", "lg:p-4", "rounded-xl", "mt-4", "h-full"], ["mat-list-item", "", 1, "pl-[10px]", 3, "click"], [1, "entry", 3, "ngClass"], [1, "text-gradient", "scale-[1.4]"], [1, "text-xl", "text-[#5c5c5c]", "uppercase"]],
    template: function SidenavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1)(2, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidenavComponent_a_3_Template, 6, 3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-sidenav-content")(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opened", true)("mode", ctx.isMobile ? "over" : "side");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.navItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContent],
    styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  z-index: 2;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  padding-top: 3.5rem;\n  height: 100vh;\n}\n@media screen and (min-width: 600px) {\n  mat-sidenav[_ngcontent-%COMP%] {\n    width: 250px;\n    padding-top: 4rem;\n  }\n}\nmat-sidenav[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1.75rem;\n}\n\na.mdc-list-item[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  padding-top: 3.5rem;\n}\n@media screen and (min-width: 600px) {\n  mat-sidenav-content[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxGSUUlMjBUQVJFQVMlMjAwNi0xNiUyMEFKVVNURSUyMEY1JTIwU09TVEVOSUJJTElEQURcXG1zYS1pbnN1cmFuY2VjaGFubmVsLXZpZXdcXHNyY1xcaW5zdXJhbmNlLWNoYW5uZWxcXHNyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNpZGVuYXZcXHNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQ0FGO0FEQ0U7RUFIRjtJQUlJLFlBQUE7SUFDQSxpQkFBQTtFQ0VGO0FBQ0Y7QURBRTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0VOOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREdBO0VBQ0UsbUJBQUE7QUNBRjtBRENFO0VBRkY7SUFHTSxpQkFBQTtFQ0VKO0FBQ0YiLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFye1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIHRvcDowO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OjEwMHZoO1xyXG59XHJcblxyXG4vLyBNb3ZlIHRoZSBjb250ZW50IGRvd24gc28gdGhhdCBpdCB3b24ndCBiZSBoaWRkZW4gYnkgdGhlIHRvb2xiYXJcclxubWF0LXNpZGVuYXYge1xyXG4gIHBhZGRpbmctdG9wOiAzLjVyZW07XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgfVxyXG5cclxuICAuZW50cnl7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMS41cmVtO1xyXG4gICAgICBwYWRkaW5nOiAxLjc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuYS5tZGMtbGlzdC1pdGVtIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi8vIE1vdmUgdGhlIGNvbnRlbnQgZG93biBzbyB0aGF0IGl0IHdvbid0IGJlIGhpZGRlbiBieSB0aGUgdG9vbGJhclxyXG5tYXQtc2lkZW5hdi1jb250ZW50e1xyXG4gIHBhZGRpbmctdG9wOiAzLjVyZW07XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgICAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgfVxyXG59XHJcbiIsIm1hdC10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgcGFkZGluZy10b3A6IDMuNXJlbTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIG1hdC1zaWRlbmF2IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG4gIH1cbn1cbm1hdC1zaWRlbmF2IC5lbnRyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS41cmVtO1xuICBwYWRkaW5nOiAxLjc1cmVtO1xufVxuXG5hLm1kYy1saXN0LWl0ZW0ge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMy41cmVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG4gIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vRklFJTIwVEFSRUFTJTIwMDYtMTYlMjBBSlVTVEUlMjBGNSUyMFNPU1RFTklCSUxJREFEL21zYS1pbnN1cmFuY2VjaGFubmVsLXZpZXcvc3JjL2luc3VyYW5jZS1jaGFubmVsL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNBRjtBRENFO0VBSEY7SUFJSSxZQUFBO0lBQ0EsaUJBQUE7RUNFRjtBQUNGO0FEQUU7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNFTjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7QURDRTtFQUZGO0lBR00saUJBQUE7RUNFSjtBQUNGO0FEQ0Esb2pGQUFvakYiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhcntcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICB0b3A6MDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDoxMDB2aDtcclxufVxyXG5cclxuLy8gTW92ZSB0aGUgY29udGVudCBkb3duIHNvIHRoYXQgaXQgd29uJ3QgYmUgaGlkZGVuIGJ5IHRoZSB0b29sYmFyXHJcbm1hdC1zaWRlbmF2IHtcclxuICBwYWRkaW5nLXRvcDogMy41cmVtO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgLmVudHJ5e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDEuNXJlbTtcclxuICAgICAgcGFkZGluZzogMS43NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbmEubWRjLWxpc3QtaXRlbSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4vLyBNb3ZlIHRoZSBjb250ZW50IGRvd24gc28gdGhhdCBpdCB3b24ndCBiZSBoaWRkZW4gYnkgdGhlIHRvb2xiYXJcclxubWF0LXNpZGVuYXYtY29udGVudHtcclxuICBwYWRkaW5nLXRvcDogMy41cmVtO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gIH1cclxufVxyXG4iLCJtYXQtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHBhZGRpbmctdG9wOiAzLjVyZW07XG4gIGhlaWdodDogMTAwdmg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBtYXQtc2lkZW5hdiB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICB9XG59XG5tYXQtc2lkZW5hdiAuZW50cnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuNXJlbTtcbiAgcGFkZGluZzogMS43NXJlbTtcbn1cblxuYS5tZGMtbGlzdC1pdGVtIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDMuNXJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6065:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/title-card/title-card.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitleCardComponent: () => (/* binding */ TitleCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6515);



class TitleCardComponent {
  constructor() {
    this.iconText = 'warning';
    this.principalText = 'No implemento ningun texto!';
    this.secondText = 'No implemento ningun texto!';
  }
  static #_ = this.ɵfac = function TitleCardComponent_Factory(t) {
    return new (t || TitleCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TitleCardComponent,
    selectors: [["app-title-card"]],
    inputs: {
      iconText: "iconText",
      principalText: "principalText",
      secondText: "secondText"
    },
    decls: 8,
    vars: 3,
    consts: [[1, "flex", "flex-col"], [1, "text-3xl", "uppercase", "font-bold", "text-[#0f5dac]"], [1, "scale-[1.6]", "mr-2", "text-[#e91c89]"], [1, "text-lg", "text-[#5c5c5c]", "mb-2", "uppercase"]],
    template: function TitleCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header", 0)(2, "h2", 1)(3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.iconText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.principalText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.secondText);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aXRsZS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGl0bGUtY2FyZC90aXRsZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5226:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/toolbar/toolbar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarComponent: () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/sidenav.service */ 87);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo/logo.component */ 140);
/* harmony import */ var _info_user_info_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info-user/info-user.component */ 4816);
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidenav/sidenav.component */ 2170);








class ToolbarComponent {
  constructor(sidenavService) {
    this.sidenavService = sidenavService;
  }
  openBottomSheet() {
    this.sidenavService.toggleMenu();
  }
  get isMobile() {
    return this.sidenavService.isMobile;
  }
  static #_ = this.ɵfac = function ToolbarComponent_Factory(t) {
    return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_sidenav_service__WEBPACK_IMPORTED_MODULE_0__.SidenavService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ToolbarComponent,
    selectors: [["app-toolbar"]],
    decls: 8,
    vars: 1,
    consts: [[1, "flex", "justify-between", "items-center", "shadow-md"], [1, "flex"], ["mat-icon-button", "", 3, "click"], [1, "text-gradient", "scale-[1.5]"], [3, "whidthLogo"]],
    template: function ToolbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_2_listener() {
          return ctx.openBottomSheet();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-logo", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-info-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-sidenav");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("whidthLogo", ctx.isMobile ? "95px" : "115px");
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__.LogoComponent, _info_user_info_user_component__WEBPACK_IMPORTED_MODULE_2__.InfoUserComponent, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__.SidenavComponent],
    styles: [".mat-toolbar-single-row[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxGSUUlMjBUQVJFQVMlMjAwNi0xNiUyMEFKVVNURSUyMEY1JTIwU09TVEVOSUJJTElEQURcXG1zYS1pbnN1cmFuY2VjaGFubmVsLXZpZXdcXHNyY1xcaW5zdXJhbmNlLWNoYW5uZWxcXHNyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHRvb2xiYXJcXHRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4iLCIubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vRklFJTIwVEFSRUFTJTIwMDYtMTYlMjBBSlVTVEUlMjBGNSUyMFNPU1RFTklCSUxJREFEL21zYS1pbnN1cmFuY2VjaGFubmVsLXZpZXcvc3JjL2luc3VyYW5jZS1jaGFubmVsL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjtBRENBLDRxQkFBNHFCIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuIiwiLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3031:
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/disable-paste.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisablePasteDirective: () => (/* binding */ DisablePasteDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class DisablePasteDirective {
  constructor() {}
  blockPaste(e) {
    e.preventDefault();
  }
  blockCopy(e) {
    e.preventDefault();
  }
  blockCut(e) {
    e.preventDefault();
  }
  static #_ = this.ɵfac = function DisablePasteDirective_Factory(t) {
    return new (t || DisablePasteDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: DisablePasteDirective,
    selectors: [["", "appDisablePaste", ""]],
    hostBindings: function DisablePasteDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function DisablePasteDirective_paste_HostBindingHandler($event) {
          return ctx.blockPaste($event);
        })("copy", function DisablePasteDirective_copy_HostBindingHandler($event) {
          return ctx.blockCopy($event);
        })("cut", function DisablePasteDirective_cut_HostBindingHandler($event) {
          return ctx.blockCut($event);
        });
      }
    }
  });
}

/***/ }),

/***/ 5717:
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/restrict-input.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RestrictInputDirective: () => (/* binding */ RestrictInputDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class RestrictInputDirective {
  constructor() {
    this.allowedPattern = '';
  }
  // Intercepta cada tecla presionada
  onKeyPress(event) {
    const inputChar = String.fromCharCode(event.keyCode);
    const regex = new RegExp(this.allowedPattern);
    if (!regex.test(inputChar)) event.preventDefault();
  }
  static #_ = this.ɵfac = function RestrictInputDirective_Factory(t) {
    return new (t || RestrictInputDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: RestrictInputDirective,
    selectors: [["", "appRestrictInput", ""]],
    hostBindings: function RestrictInputDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function RestrictInputDirective_keypress_HostBindingHandler($event) {
          return ctx.onKeyPress($event);
        });
      }
    },
    inputs: {
      allowedPattern: ["appRestrictInput", "allowedPattern"]
    }
  });
}

/***/ }),

/***/ 5002:
/*!***************************************************************!*\
  !*** ./src/app/shared/interceptors/Inactivity.interceptor.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InactivityInterceptor: () => (/* binding */ InactivityInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);





class InactivityInterceptor {
  constructor(store, router) {
    this.store = store;
    this.router = router;
    this.INACTIVITY_TIMEOUT = 10 * 60 * 1000;
    this.resetTimer();
    this.startListening();
  }
  intercept(req, next) {
    this.resetTimer();
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)({
      error: () => this.resetTimer()
    }));
  }
  startListening() {
    const events = ['mousemove', 'keydown', 'click', 'touchstart'];
    events.forEach(event => {
      window.addEventListener(event, () => this.resetTimer());
    });
  }
  resetTimer() {
    clearTimeout(this.inactivityTimer);
    this.inactivityTimer = setTimeout(() => this.handleInactivity(), this.INACTIVITY_TIMEOUT);
  }
  handleInactivity() {
    this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.TokenActions.removeToken());
    this.router.navigate(['/verify-identity']);
  }
  static #_ = this.ɵfac = function InactivityInterceptor_Factory(t) {
    return new (t || InactivityInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: InactivityInterceptor,
    factory: InactivityInterceptor.ɵfac
  });
}

/***/ }),

/***/ 2257:
/*!***********************************************************!*\
  !*** ./src/app/shared/interceptors/header.interceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderInterceptor: () => (/* binding */ HeaderInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HeaderInterceptor {
  constructor() {}
  intercept(request, next) {
    const clonedRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'X-Frame-Options': 'DENY',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Content-Security-Policy': "default-src 'self'; script-src 'self' https://apis.google.com"
      }
    });
    return next.handle(clonedRequest);
  }
  static #_ = this.ɵfac = function HeaderInterceptor_Factory(t) {
    return new (t || HeaderInterceptor)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: HeaderInterceptor,
    factory: HeaderInterceptor.ɵfac
  });
}

/***/ }),

/***/ 106:
/*!************************************************************!*\
  !*** ./src/app/shared/interceptors/loading.interceptor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingInterceptor: () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7474);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dialog.service */ 8082);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);





class LoadingInterceptor {
  constructor(dialogService, store) {
    this.dialogService = dialogService;
    this.store = store;
  }
  intercept(req, next) {
    const dialogRef = this.dialogService.openLoader();
    this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.LoaderActions.showLoader());
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
      dialogRef.close();
      this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.LoaderActions.hideLoader());
    }));
  }
  static #_ = this.ɵfac = function LoadingInterceptor_Factory(t) {
    return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: LoadingInterceptor,
    factory: LoadingInterceptor.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8082:
/*!***************************************************!*\
  !*** ./src/app/shared/services/dialog.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogService: () => (/* binding */ DialogService)
/* harmony export */ });
/* harmony import */ var _components_global_dialog_global_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/global-dialog/global-dialog.component */ 7249);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loader/loader.component */ 9185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 7401);




class DialogService {
  constructor(dialog) {
    this.dialog = dialog;
  }
  openDialog(data) {
    const dialogRef = this.dialog.open(_components_global_dialog_global_dialog_component__WEBPACK_IMPORTED_MODULE_0__.GlobalDialogComponent, {
      data,
      width: '400px',
      disableClose: true,
      hasBackdrop: true
    });
    return dialogRef.afterClosed();
  }
  openLoader() {
    return this.dialog.open(_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, {
      width: '200px',
      disableClose: true,
      backdropClass: 'blurred-backdrop',
      panelClass: 'transparent-dialog-panel',
      hasBackdrop: true
    });
  }
  static #_ = this.ɵfac = function DialogService_Factory(t) {
    return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: DialogService,
    factory: DialogService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8006:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/init-app.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitAppService: () => (/* binding */ InitAppService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var src_app_verify_identity_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/verify-identity/store */ 5988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);





class InitAppService {
  constructor(httpClient, store) {
    this.httpClient = httpClient;
    this.store = store;
    this.baseApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_ENDPOINT + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.INSURANCE_AUTH_API;
    this.constants_ = {
      attemptsAllowed: 3,
      inactivationTimeSeconds: 3600
    };
  }
  get constants() {
    return {
      ...this.constants_
    };
  }
  initApp() {
    this.httpClient.post(this.baseApiUrl + '/initApp', {}).subscribe(resp => {
      this.constants_ = resp.result;
      this.store.dispatch(src_app_verify_identity_store__WEBPACK_IMPORTED_MODULE_1__.AttemptsActions.loadAttempts());
    });
  }
  static #_ = this.ɵfac = function InitAppService_Factory(t) {
    return new (t || InitAppService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: InitAppService,
    factory: InitAppService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8829:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/local-storage.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageService: () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class LocalStorageService {
  constructor() {
    this.attemptsStorageKey = 'attemptsData';
    this.tokenStorageKey = 'userInfo';
  }
  saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getLocalStorageFromKey(key, isJSON) {
    return isJSON ? JSON.parse(localStorage.getItem(key)) : localStorage.getItem(key);
  }
  getObsLocalStorageFromKey(key, isJSON) {
    return isJSON ? (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(JSON.parse(localStorage.getItem(key))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(localStorage.getItem(key));
  }
  removeItemLocalStorage(key) {
    return localStorage.removeItem(key);
  }
  static #_ = this.ɵfac = function LocalStorageService_Factory(t) {
    return new (t || LocalStorageService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LocalStorageService,
    factory: LocalStorageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 87:
/*!****************************************************!*\
  !*** ./src/app/shared/services/sidenav.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavService: () => (/* binding */ SidenavService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SidenavService {
  constructor() {
    this._isMobile = true;
  }
  setMatSidenav(matSidenav) {
    this.sidenav = matSidenav;
  }
  setMobile(isMobile) {
    this._isMobile = isMobile;
  }
  get isMobile() {
    return this._isMobile;
  }
  toggleMenu() {
    this.sidenav && this.sidenav.toggle();
  }
  close() {
    this.sidenav && this.sidenav.close();
  }
  static #_ = this.ɵfac = function SidenavService_Factory(t) {
    return new (t || SidenavService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SidenavService,
    factory: SidenavService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/logo/logo.component */ 140);
/* harmony import */ var _components_global_dialog_global_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/global-dialog/global-dialog.component */ 7249);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/material.module */ 6889);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ 655);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loader/loader.component */ 9185);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/loading.interceptor */ 106);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _store_effects_token_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/effects/token.effects */ 6428);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ 5226);
/* harmony import */ var _components_info_user_info_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/info-user/info-user.component */ 4816);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/title-card/title-card.component */ 6065);
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ 2170);
/* harmony import */ var _interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interceptors/header.interceptor */ 2257);
/* harmony import */ var _directives_disable_paste_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/disable-paste.directive */ 3031);
/* harmony import */ var _directives_restrict_input_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/restrict-input.directive */ 5717);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/not-found/not-found.component */ 4740);
/* harmony import */ var _interceptors_Inactivity_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interceptors/Inactivity.interceptor */ 5002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1699);
























class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
      useClass: _interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_11__.HeaderInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
      useClass: _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_5__.LoadingInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
      useClass: _interceptors_Inactivity_interceptor__WEBPACK_IMPORTED_MODULE_15__.InactivityInterceptor,
      multi: true
    }],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_20__.StoreModule.forFeature(_store__WEBPACK_IMPORTED_MODULE_3__.LoaderReducer.actionReducerLoaderKey, _store__WEBPACK_IMPORTED_MODULE_3__.LoaderReducer.loaderReducer), _ngrx_store__WEBPACK_IMPORTED_MODULE_20__.StoreModule.forFeature(_store__WEBPACK_IMPORTED_MODULE_3__.TokenReducer.actionReducerTokenKey, _store__WEBPACK_IMPORTED_MODULE_3__.TokenReducer.tokenReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__.EffectsModule.forFeature([_store_effects_token_effects__WEBPACK_IMPORTED_MODULE_6__.TokenEffects])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent, _components_global_dialog_global_dialog_component__WEBPACK_IMPORTED_MODULE_1__.GlobalDialogComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _components_info_user_info_user_component__WEBPACK_IMPORTED_MODULE_8__.InfoUserComponent, _components_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_9__.TitleCardComponent, _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_10__.SidenavComponent, _directives_disable_paste_directive__WEBPACK_IMPORTED_MODULE_12__.DisablePasteDirective, _directives_restrict_input_directive__WEBPACK_IMPORTED_MODULE_13__.RestrictInputDirective, _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__.NotFoundComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_20__.StoreFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_20__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__.EffectsFeatureModule],
    exports: [_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.ToolbarComponent, _components_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_9__.TitleCardComponent, _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__.NotFoundComponent, _directives_disable_paste_directive__WEBPACK_IMPORTED_MODULE_12__.DisablePasteDirective, _directives_restrict_input_directive__WEBPACK_IMPORTED_MODULE_13__.RestrictInputDirective]
  });
})();

/***/ }),

/***/ 3200:
/*!********************************************************!*\
  !*** ./src/app/shared/store/actions/loader.actions.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideLoader: () => (/* binding */ hideLoader),
/* harmony export */   showLoader: () => (/* binding */ showLoader)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const showLoader = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Loader] Show Loader');
const hideLoader = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Loader] Hide Loader');

/***/ }),

/***/ 3553:
/*!*******************************************************!*\
  !*** ./src/app/shared/store/actions/token.actions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkToken: () => (/* binding */ checkToken),
/* harmony export */   removeToken: () => (/* binding */ removeToken),
/* harmony export */   saveToken: () => (/* binding */ saveToken)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const checkToken = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Token] Check Token');
const saveToken = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Token] Save Token', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removeToken = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Token] Remove Token');

/***/ }),

/***/ 6428:
/*!*******************************************************!*\
  !*** ./src/app/shared/store/effects/token.effects.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenEffects: () => (/* binding */ TokenEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 655);
/* harmony import */ var src_app_dashboard_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dashboard/store */ 7841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local-storage.service */ 8829);










class TokenEffects {
  constructor(store, actions$, router, localStorageService) {
    this.store = store;
    this.actions$ = actions$;
    this.router = router;
    this.localStorageService = localStorageService;
    this.checkToken$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.TokenActions.checkToken), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => this.localStorageService.getObsLocalStorageFromKey(this.localStorageService.tokenStorageKey, true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(lsToken => !lsToken ? ___WEBPACK_IMPORTED_MODULE_0__.TokenActions.removeToken() : ___WEBPACK_IMPORTED_MODULE_0__.TokenActions.saveToken({
      token: lsToken.token
    }))))));
    this.saveToken$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.TokenActions.saveToken), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(({
      token
    }) => this.localStorageService.saveToLocalStorage(this.localStorageService.tokenStorageKey, {
      token
    }))), {
      dispatch: false
    });
    this.removeToken$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.TokenActions.removeToken), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {
      this.localStorageService.removeItemLocalStorage(this.localStorageService.tokenStorageKey);
      this.store.dispatch(src_app_dashboard_store__WEBPACK_IMPORTED_MODULE_1__.InsuredActions.resetInsurance());
      this.router.navigateByUrl('/verify-identity');
    })), {
      dispatch: false
    });
  }
  static #_ = this.ɵfac = function TokenEffects_Factory(t) {
    return new (t || TokenEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: TokenEffects,
    factory: TokenEffects.ɵfac
  });
}

/***/ }),

/***/ 655:
/*!***************************************!*\
  !*** ./src/app/shared/store/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderActions: () => (/* reexport module object */ _actions_loader_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   LoaderReducer: () => (/* reexport module object */ _reducers_loader_reducer__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   LoaderSelectors: () => (/* reexport module object */ _selectors_loader_selectors__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   TokenActions: () => (/* reexport module object */ _actions_token_actions__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   TokenReducer: () => (/* reexport module object */ _reducers_token_reducer__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   TokenSelectors: () => (/* reexport module object */ _selectors_token_selectors__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _actions_loader_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/loader.actions */ 3200);
/* harmony import */ var _reducers_loader_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/loader.reducer */ 8806);
/* harmony import */ var _selectors_loader_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors/loader.selectors */ 1705);
/* harmony import */ var _actions_token_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/token.actions */ 3553);
/* harmony import */ var _reducers_token_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/token.reducer */ 1549);
/* harmony import */ var _selectors_token_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors/token.selectors */ 9808);







/***/ }),

/***/ 8806:
/*!*********************************************************!*\
  !*** ./src/app/shared/store/reducers/loader.reducer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actionReducerLoaderKey: () => (/* binding */ actionReducerLoaderKey),
/* harmony export */   initLoaderState: () => (/* binding */ initLoaderState),
/* harmony export */   loaderReducer: () => (/* binding */ loaderReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 655);


const actionReducerLoaderKey = 'loader';
const initLoaderState = {
  isLoading: false
};
const loaderReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initLoaderState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.LoaderActions.showLoader, state => ({
  ...state,
  isLoading: true
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.LoaderActions.hideLoader, state => ({
  ...state,
  isLoading: false
})));

/***/ }),

/***/ 1549:
/*!********************************************************!*\
  !*** ./src/app/shared/store/reducers/token.reducer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actionReducerTokenKey: () => (/* binding */ actionReducerTokenKey),
/* harmony export */   initTokenState: () => (/* binding */ initTokenState),
/* harmony export */   tokenReducer: () => (/* binding */ tokenReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/store */ 655);


const actionReducerTokenKey = 'token';
const initTokenState = {
  token: null
};
const tokenReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initTokenState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_shared_store__WEBPACK_IMPORTED_MODULE_0__.TokenActions.checkToken, state => ({
  ...state
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_shared_store__WEBPACK_IMPORTED_MODULE_0__.TokenActions.saveToken, (state, {
  token
}) => ({
  ...state,
  token
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_shared_store__WEBPACK_IMPORTED_MODULE_0__.TokenActions.removeToken, state => ({
  ...state,
  token: null
})));

/***/ }),

/***/ 1705:
/*!************************************************************!*\
  !*** ./src/app/shared/store/selectors/loader.selectors.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loader: () => (/* binding */ loader)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 655);


const loaderSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(___WEBPACK_IMPORTED_MODULE_0__.LoaderReducer.actionReducerLoaderKey);
const loader = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(loaderSelector, ({
  isLoading
}) => isLoading);

/***/ }),

/***/ 9808:
/*!***********************************************************!*\
  !*** ./src/app/shared/store/selectors/token.selectors.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasToken: () => (/* binding */ hasToken),
/* harmony export */   token: () => (/* binding */ token)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 655);


const tokenSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(___WEBPACK_IMPORTED_MODULE_0__.TokenReducer.actionReducerTokenKey);
const token = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(tokenSelector, ({
  token
}) => token);
const hasToken = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(token, token => token ? true : false);

/***/ }),

/***/ 2994:
/*!*******************************************************************!*\
  !*** ./src/app/verify-identity/store/actions/attempts.actions.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attemptsLoaded: () => (/* binding */ attemptsLoaded),
/* harmony export */   incrementOtpAttempts: () => (/* binding */ incrementOtpAttempts),
/* harmony export */   incremetAttempts: () => (/* binding */ incremetAttempts),
/* harmony export */   loadAttempts: () => (/* binding */ loadAttempts),
/* harmony export */   resetAttempts: () => (/* binding */ resetAttempts),
/* harmony export */   resetOtpAttempts: () => (/* binding */ resetOtpAttempts)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

// Client validation attemps
const loadAttempts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Attempts] Load Attempts');
const attemptsLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Attempts] Attempts Loaded', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const incremetAttempts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Attempts] Attempts Increment');
const resetAttempts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Attempts] Reset Attempts');
// OTP validation attemps
const incrementOtpAttempts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[OTP Attempts] Increment OTP Attempts');
const resetOtpAttempts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[OTP Attempts] Reset OTP Attempts');

/***/ }),

/***/ 9915:
/*!*******************************************************************!*\
  !*** ./src/app/verify-identity/store/actions/customer.actions.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadUserInfo: () => (/* binding */ loadUserInfo),
/* harmony export */   loadUserInfoFailure: () => (/* binding */ loadUserInfoFailure),
/* harmony export */   loadUserInfoSuccess: () => (/* binding */ loadUserInfoSuccess),
/* harmony export */   resetError: () => (/* binding */ resetError),
/* harmony export */   resetUserInfo: () => (/* binding */ resetUserInfo),
/* harmony export */   sendCode: () => (/* binding */ sendCode),
/* harmony export */   successSendCode: () => (/* binding */ successSendCode),
/* harmony export */   validateOtpCode: () => (/* binding */ validateOtpCode)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

const loadUserInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Verify Identity] Load User Info', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadUserInfoSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Verify Identity] Load User Info Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadUserInfoFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Verify Identity] Load User Info Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Verify Identity] Reset Error');
const sendCode = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Verify Identity] Send OTP Code');
const successSendCode = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Verify Identity] Success Send OTP Code');
const validateOtpCode = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Verify Identity] Validate OTP Code', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetUserInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Verify Identity] Clear User Info');

/***/ }),

/***/ 5988:
/*!************************************************!*\
  !*** ./src/app/verify-identity/store/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttemptsActions: () => (/* reexport module object */ _actions_attempts_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   AttemptsReducer: () => (/* reexport module object */ _reducers_attempts_reducer__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   AttemptsSelectors: () => (/* reexport module object */ _selectors_attempts_selectors__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   CustomerActions: () => (/* reexport module object */ _actions_customer_actions__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   CustomerReducer: () => (/* reexport module object */ _reducers_customer_reducer__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   CustomerSelectors: () => (/* reexport module object */ _selectors_customer_selectors__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _actions_attempts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/attempts.actions */ 2994);
/* harmony import */ var _actions_customer_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/customer.actions */ 9915);
/* harmony import */ var _reducers_attempts_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/attempts.reducer */ 9057);
/* harmony import */ var _reducers_customer_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/customer.reducer */ 7309);
/* harmony import */ var _selectors_attempts_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors/attempts.selectors */ 7697);
/* harmony import */ var _selectors_customer_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors/customer.selectors */ 1551);







/***/ }),

/***/ 9057:
/*!********************************************************************!*\
  !*** ./src/app/verify-identity/store/reducers/attempts.reducer.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actionReducerAttemptsKey: () => (/* binding */ actionReducerAttemptsKey),
/* harmony export */   attemptsReducer: () => (/* binding */ attemptsReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 5988);


const actionReducerAttemptsKey = 'attempts';
const initCounterState = {
  attempts: 0,
  otpAttempts: 0
};
const attemptsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initCounterState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.loadAttempts, state => ({
  ...state
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.attemptsLoaded, (state, {
  attempts
}) => ({
  ...state,
  attempts
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.incremetAttempts, state => ({
  ...state,
  attempts: state.attempts + 1
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.resetAttempts, state => ({
  ...state,
  attempts: 0
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.incrementOtpAttempts, state => ({
  ...state,
  otpAttempts: state.otpAttempts + 1
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.resetAttempts, state => ({
  ...state,
  otpAttempts: 0
})));

/***/ }),

/***/ 7309:
/*!********************************************************************!*\
  !*** ./src/app/verify-identity/store/reducers/customer.reducer.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actionReducerCustomerKey: () => (/* binding */ actionReducerCustomerKey),
/* harmony export */   customerReducer: () => (/* binding */ customerReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 5988);


const actionReducerCustomerKey = 'customer';
const initCustomerState = {
  customer: null,
  error: null
};
const customerReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initCustomerState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.CustomerActions.loadUserInfo, state => ({
  ...state
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.CustomerActions.loadUserInfoSuccess, (state, {
  customer
}) => ({
  ...state,
  customer
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.CustomerActions.loadUserInfoFailure, (state, {
  error
}) => ({
  ...state,
  error
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.CustomerActions.resetError, state => ({
  ...state,
  error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.CustomerActions.sendCode, state => ({
  ...state
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.CustomerActions.successSendCode, state => ({
  ...state
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.CustomerActions.validateOtpCode, state => ({
  ...state
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(___WEBPACK_IMPORTED_MODULE_0__.CustomerActions.resetUserInfo, state => ({
  ...state,
  customer: null
})));

/***/ }),

/***/ 7697:
/*!***********************************************************************!*\
  !*** ./src/app/verify-identity/store/selectors/attempts.selectors.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attempts: () => (/* binding */ attempts),
/* harmony export */   canTry: () => (/* binding */ canTry),
/* harmony export */   canTryOtp: () => (/* binding */ canTryOtp),
/* harmony export */   otpAttempts: () => (/* binding */ otpAttempts)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 5988);


const attemptsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(___WEBPACK_IMPORTED_MODULE_0__.AttemptsReducer.actionReducerAttemptsKey);
const attempts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(attemptsState, ({
  attempts
}) => attempts);
const canTry = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(attempts, attempts => attempts < 3);
const otpAttempts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(attemptsState, ({
  otpAttempts
}) => otpAttempts);
const canTryOtp = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(otpAttempts, otpAttempts => otpAttempts < 3);

/***/ }),

/***/ 1551:
/*!***********************************************************************!*\
  !*** ./src/app/verify-identity/store/selectors/customer.selectors.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customer: () => (/* binding */ customer),
/* harmony export */   error: () => (/* binding */ error),
/* harmony export */   hasError: () => (/* binding */ hasError)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 5988);


const customerSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(___WEBPACK_IMPORTED_MODULE_0__.CustomerReducer.actionReducerCustomerKey);
const customer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(customerSelector, ({
  customer
}) => customer);
const error = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(customerSelector, ({
  error
}) => error);
const hasError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(customerSelector, ({
  error
}) => error !== null);

/***/ }),

/***/ 7337:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  RECAPTCHA: {
    SITE_KEY: '6LfKmXAqAAAAAD21qGJe0anwv8BKtRCfDDwS6HX7',
    LANGUAGE: 'es'
  },
  API_ENDPOINT: 'https://seguros.bancofie.com.bo/fie/msm',
  INSURANCE_AUTH_API: '/insurance/insuranceoperations/v1.0/noa',
  INSURANCE_API: '/insurance/insuranceoperations/v1.0',
  PRODUCTION: true,
  VERSION: '1.0.2 prod'
};

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  RECAPTCHA: {
    SITE_KEY: '6Le0YKwqAAAAANwgtxxDmtbSjSzm7N-JPm4ZIlf3',
    LANGUAGE: 'es'
  },
  API_ENDPOINT: 'http://kong-http-kong.ocpdes.local/fie/msm',
  INSURANCE_AUTH_API: '/insurance/insuranceoperations/v1.0/noa',
  INSURANCE_API: '/insurance/insuranceoperations/v1.0',
  PRODUCTION: false,
  VERSION: '1.0.2 dev'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment.prod */ 7337);




if (_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.PRODUCTION) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map