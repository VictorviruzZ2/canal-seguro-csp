"use strict";
(self["webpackChunkinsurance_channel"] = self["webpackChunkinsurance_channel"] || []).push([["src_app_verify-identity_verify-identity_module_ts"],{

/***/ 3013:
/*!******************************************************!*\
  !*** ./src/app/shared/services/countdown.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountdownService: () => (/* binding */ CountdownService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);



class CountdownService {
  startCountdown(countdown) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(i => countdown - 1 - i), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(countdown));
  }
  static #_ = this.ɵfac = function CountdownService_Factory(t) {
    return new (t || CountdownService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: CountdownService,
    factory: CountdownService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7993:
/*!*********************************************************************************************!*\
  !*** ./src/app/verify-identity/components/check-information/check-information.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckInformationComponent: () => (/* binding */ CheckInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ 5988);
/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/store */ 655);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ 8082);
/* harmony import */ var _shared_services_countdown_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/countdown.service */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6515);










function CheckInformationComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "C\u00E9dula de identidad: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.secondSurname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.identification);
  }
}
function CheckInformationComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CheckInformationComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.onCheck(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Si, soy yo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CheckInformationComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Por favor, valida tu informaci\u00F3n (", ctx_r2.counter, "s)");
  }
}
function CheckInformationComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CheckInformationComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.onCheck(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No soy yo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class CheckInformationComponent {
  constructor(store, dialogService, countdownService) {
    this.store = store;
    this.dialogService = dialogService;
    this.countdownService = countdownService;
    this.goToStepThree = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.loader$ = this.store.select(_shared_store__WEBPACK_IMPORTED_MODULE_1__.LoaderSelectors.loader);
    this.counter = 5;
  }
  ngOnInit() {
    this.customerSubs = this.store.select(_store__WEBPACK_IMPORTED_MODULE_0__.CustomerSelectors.customer).subscribe(maskedCustomerInfo => {
      this.fullName = maskedCustomerInfo?.firstName + (maskedCustomerInfo?.middleName ? ' ' + maskedCustomerInfo?.middleName : '');
      this.surname = maskedCustomerInfo?.surname;
      this.secondSurname = maskedCustomerInfo?.secondSurname;
      this.identification = maskedCustomerInfo?.identification;
    });
    this.countdownService.startCountdown(this.counter).subscribe({
      next: value => this.counter = value
    });
  }
  ngOnDestroy() {
    this.customerSubs.unsubscribe();
  }
  onCheck(correct) {
    if (!correct) {
      this.dialogService.openDialog({
        title: '¡Aviso!',
        message: 'Por favor, introduzca sus datos correctamente e inténtelo de nuevo.',
        acceptButton: true,
        cancelButton: false
      }).subscribe(_ => {
        this.goToStepThree.emit(correct);
      });
      return;
    }
    this.goToStepThree.emit(correct);
  }
  static #_ = this.ɵfac = function CheckInformationComponent_Factory(t) {
    return new (t || CheckInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_countdown_service__WEBPACK_IMPORTED_MODULE_3__.CountdownService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CheckInformationComponent,
    selectors: [["app-check-information"]],
    outputs: {
      goToStepThree: "goToStepThree"
    },
    decls: 11,
    vars: 6,
    consts: [[1, "text-3xl", "uppercase", "border-l-[16px]", "border-pink-600", "pl-2", "text-[#0f5dac]", "font-bold"], [1, "text-xl", "text-slate-600", "pl-3"], ["class", "flex flex-col justify-center items-center mt-3 text-center", 4, "ngIf"], [1, "flex", "flex-col", "justify-center", "items-center"], ["class", "bg-primary py-2 px-2 rounded-full mt-4 text-lg uppercase w-36 flex justify-center gap-1 animate__animated animate__fadeInUp animate__faster", 3, "click", 4, "ngIf"], ["class", "bg-primary py-2 px-2 rounded-full mt-4 text-lg uppercase w-full lg:w-[50%] flex justify-center gap-1 cursor-not-allowed", 4, "ngIf"], [1, "flex", "flex-col", "justify-center", "items-center", "mt-3", "text-center"], ["src", "../../../../assets/icons/admin.svg", "alt", "", 1, "w-28"], [1, "uppercase", "text-[#e91c89]", "text-lg", "lg:text-xl", "mb-1", "mt-2"], [1, "text-[#0f5dac]", "mr-2", "lg:mr-2"], [1, "text-[#0f5dac]"], [1, "uppercase", "text-[#e91c89]", "text-lg", "lg:text-xl"], [1, "bg-primary", "py-2", "px-2", "rounded-full", "mt-4", "text-lg", "uppercase", "w-36", "flex", "justify-center", "gap-1", "animate__animated", "animate__fadeInUp", "animate__faster", 3, "click"], ["fontIcon", "check"], [1, "bg-primary", "py-2", "px-2", "rounded-full", "mt-4", "text-lg", "uppercase", "w-full", "lg:w-[50%]", "flex", "justify-center", "gap-1", "cursor-not-allowed"], ["fontIcon", "close"]],
    template: function CheckInformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Confirmaci\u00F3n de Identidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Por favor, valide la informaci\u00F3n mostrada:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CheckInformationComponent_div_4_Template, 17, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CheckInformationComponent_button_8_Template, 4, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CheckInformationComponent_button_9_Template, 3, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CheckInformationComponent_button_10_Template, 4, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, ctx.loader$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.counter === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.counter !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.counter === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmVyaWZ5LWlkZW50aXR5L2NvbXBvbmVudHMvY2hlY2staW5mb3JtYXRpb24vY2hlY2staW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6025:
/*!*********************************************************************************!*\
  !*** ./src/app/verify-identity/components/check-phone/check-phone.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckPhoneComponent: () => (/* binding */ CheckPhoneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ 5988);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ 8082);
/* harmony import */ var _shared_services_countdown_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/countdown.service */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);









function CheckPhoneComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CheckPhoneComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.onCheck(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "S\u00ED, es mi n\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CheckPhoneComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Por favor, valida tu informaci\u00F3n (", ctx_r1.counter, "s)");
  }
}
function CheckPhoneComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CheckPhoneComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.onCheck(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No es mi n\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class CheckPhoneComponent {
  constructor(store, dialogService, countdownService) {
    this.store = store;
    this.dialogService = dialogService;
    this.countdownService = countdownService;
    this.goToStepFour = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.customer$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_0__.CustomerSelectors.customer);
    this.counter = 5;
  }
  ngOnInit() {
    this.countdownService.startCountdown(this.counter).subscribe({
      next: value => this.counter = value
    });
  }
  onCheck(correct) {
    if (!correct) {
      this.dialogService.openDialog({
        title: '¡Aviso!',
        message: 'La información en nuestros registros parece estar desactualizada. Por favor, visite una de nuestras agencias para actualizar su información.',
        acceptButton: true,
        cancelButton: false
      }).subscribe(_ => {
        this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.incremetAttempts());
        this.goToStepFour.emit(correct);
      });
      return;
    }
    this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.CustomerActions.sendCode());
    this.goToStepFour.emit(correct);
  }
  static #_ = this.ɵfac = function CheckPhoneComponent_Factory(t) {
    return new (t || CheckPhoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_countdown_service__WEBPACK_IMPORTED_MODULE_2__.CountdownService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CheckPhoneComponent,
    selectors: [["app-check-phone"]],
    outputs: {
      goToStepFour: "goToStepFour"
    },
    decls: 16,
    vars: 6,
    consts: [[1, "text-3xl", "uppercase", "border-l-[16px]", "border-pink-600", "pl-2", "text-[#0f5dac]", "font-bold"], [1, "text-xl", "text-slate-600", "pl-3", "mb-2"], [1, "flex", "flex-col", "justify-center", "items-center", "mt-14", "mb-4"], ["aria-hidden", "false", "fontIcon", "phone_iphone", 1, "scale-[6]", "text-gradient"], [1, "uppercase", "text-[#e91c89]", "text-xl", "mt-[4.5rem]"], [1, "text-[#0f5dac]"], [1, "flex", "flex-col", "justify-center", "items-center"], ["class", "bg-primary py-2 px-2 rounded-full mt-4 text-lg uppercase flex justify-center gap-1 animate__animated animate__fadeInUp animate__faster", 3, "click", 4, "ngIf"], ["class", "bg-primary py-2 px-2 rounded-full mt-4 text-lg uppercase w-full lg:w-[50%] flex justify-center gap-1 cursor-not-allowed", 4, "ngIf"], [1, "bg-primary", "py-2", "px-2", "rounded-full", "mt-4", "text-lg", "uppercase", "flex", "justify-center", "gap-1", "animate__animated", "animate__fadeInUp", "animate__faster", 3, "click"], ["fontIcon", "check"], [1, "bg-primary", "py-2", "px-2", "rounded-full", "mt-4", "text-lg", "uppercase", "w-full", "lg:w-[50%]", "flex", "justify-center", "gap-1", "cursor-not-allowed"], ["fontIcon", "close"]],
    template: function CheckPhoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Verifica tu n\u00FAmero de celular");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Por favor, confirme si este es su n\u00FAmero de celular:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "N\u00FAmero de celular: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CheckPhoneComponent_button_13_Template, 4, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CheckPhoneComponent_button_14_Template, 3, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CheckPhoneComponent_button_15_Template, 4, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 4, ctx.customer$)) == null ? null : tmp_0_0.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.counter === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.counter !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.counter === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1waG9uZS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmVyaWZ5LWlkZW50aXR5L2NvbXBvbmVudHMvY2hlY2stcGhvbmUvY2hlY2stcGhvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2706:
/*!*************************************************************************************************!*\
  !*** ./src/app/verify-identity/components/identification-data/identification-data.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentificationDataComponent: () => (/* binding */ IdentificationDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ 5988);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _services_validators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validators.service */ 6199);
/* harmony import */ var _services_clear_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/clear-data.service */ 7776);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_directives_disable_paste_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directives/disable-paste.directive */ 3031);
/* harmony import */ var _shared_directives_restrict_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/restrict-input.directive */ 5717);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 5309);














function IdentificationDataComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Debe ingresar su cedula de identidad. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IdentificationDataComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Debe ingresar una cedula de identidad v\u00E1lida, con valores num\u00E9ricos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IdentificationDataComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Debe ingresar una complemento v\u00E1lido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IdentificationDataComponent_mat_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const extension_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", extension_r9.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", extension_r9.description, " ");
  }
}
function IdentificationDataComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Seleccione la extensi\u00F3n de su c\u00E9dula de identidad. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IdentificationDataComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Debe ingresar su fecha de nacimiento. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IdentificationDataComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r6.identificationForm.get("birthday")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["invalidBirthdate"], " ");
  }
}
function IdentificationDataComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Continuar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function IdentificationDataComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Alcanzo el l\u00EDmite de intentos permitidos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class IdentificationDataComponent {
  constructor(store, validatorsService, clearDataService) {
    this.store = store;
    this.validatorsService = validatorsService;
    this.clearDataService = clearDataService;
    this.canTry$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_0__.AttemptsSelectors.canTry);
    this.identificationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      document: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]{5,10}$')]),
      complement: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[A-Za-z0-9]{1,2}$')),
      extension: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, this.validatorsService.validateNullValue.bind(this.validatorsService)),
      birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, this.validatorsService.validateBirthday.bind(this.validatorsService)])
    });
    this.extensionCatalog = [{
      code: '',
      description: 'SIN EXTENSIÓN'
    }, {
      code: 'BE',
      description: 'BENI'
    }, {
      code: 'CB',
      description: 'COCHABAMBA'
    }, {
      code: 'CH',
      description: 'CHUQUISACA'
    }, {
      code: 'LP',
      description: 'LA PAZ'
    }, {
      code: 'OR',
      description: 'ORURO'
    }, {
      code: 'PA',
      description: 'PANDO'
    }, {
      code: 'PO',
      description: 'POTOSI'
    }, {
      code: 'SC',
      description: 'SANTA CRUZ'
    }, {
      code: 'TJ',
      description: 'TARIJA'
    }];
    this.goToStepTwo = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    // this.identificationForm.patchValue({ document: '4787798', extension: '', birthday: '1980-03-17' })
  }

  onSubmit() {
    if (!this.identificationForm.valid) {
      this.identificationForm.markAllAsTouched();
      return;
    }
    const formData = {
      identification: this.identificationForm.get('document')?.value + this.identificationForm.get('complement')?.value + this.identificationForm.get('extension')?.value,
      birthdate: this.clearDataService.formatDateString(this.identificationForm.get('birthday')?.value)
    };
    this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.CustomerActions.loadUserInfo(this.clearDataService.cleanData(formData)));
    this.identificationForm.reset({
      document: '',
      complement: '',
      extension: null,
      birthday: ''
    });
  }
  static #_ = this.ɵfac = function IdentificationDataComponent_Factory(t) {
    return new (t || IdentificationDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_validators_service__WEBPACK_IMPORTED_MODULE_1__.ValidatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_clear_data_service__WEBPACK_IMPORTED_MODULE_2__.ClearDataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: IdentificationDataComponent,
    selectors: [["app-identification-data"]],
    outputs: {
      goToStepTwo: "goToStepTwo"
    },
    decls: 34,
    vars: 14,
    consts: [[1, "text-3xl", "uppercase", "border-l-[16px]", "border-pink-600", "pl-2", "text-[#0f5dac]", "font-bold"], [1, "text-xl", "text-slate-600", "pl-3", "mb-2"], ["autocomplete", "off", 1, "w-full", 3, "formGroup", "ngSubmit"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "w-full"], ["for", "document", 1, "text-[#0f5dac]", "text-xl", "uppercase", "block", "my-2", "pl-2"], ["type", "text", "placeholder", "EJ: 9588542", "id", "document", "formControlName", "document", "maxlength", "10", "appDisablePaste", "", "appRestrictInput", "^[0-9]", 1, "border-2", "border-sky-700", "rounded-full", "py-2", "px-3", "focus:outline-none", "focus:border-sky-700", "block", "w-full", "text-xl", "uppercase"], ["class", "alert-error", 4, "ngIf"], ["for", "complement", 1, "text-[#0f5dac]", "text-xl", "uppercase", "block", "my-2", "pl-2"], ["type", "text", "placeholder", "EJ: A1", "id", "complement", "formControlName", "complement", "maxlength", "2", "appDisablePaste", "", "appRestrictInput", "^[a-zA-Z0-9]+$", 1, "border-2", "border-sky-700", "rounded-full", "py-2", "px-3", "focus:outline-none", "focus:border-sky-700", "block", "w-full", "text-xl", "uppercase"], ["for", "extension", 1, "text-[#0f5dac]", "text-xl", "uppercase", "block", "my-2", "pl-2"], ["formControlName", "extension", "placeholder", "EJ: SIN EXTENCI\u00D3N", 1, "rounded-box"], ["id", "extension", 3, "value", 4, "ngFor", "ngForOf"], ["for", "birthDay", 1, "text-[#0f5dac]", "text-xl", "uppercase", "block", "my-2", "pl-2"], ["type", "date", "id", "birthDay", "formControlName", "birthday", "placeholder", "EJ: 01/01/1999", "max", "2099-12-31", "appDisablePaste", "", 1, "border-2", "border-sky-700", "rounded-full", "py-2", "px-3", "focus:outline-none", "focus:border-sky-700", "block", "w-full", "text-xl", "uppercase"], ["class", "bg-primary mt-5 text-lg uppercase py-2 px-8 rounded-full", "type", "submit", 4, "ngIf"], ["class", "select-none rounded-full border mt-5 border-purple-950/40 py-3 px-6 text-center align-middle font-bold uppercase text-gradient transition-all\n    hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-80\n    disabled:shadow-none", "type", "submit", "disabled", "", 4, "ngIf"], [1, "alert-error"], ["id", "extension", 3, "value"], ["type", "submit", 1, "bg-primary", "mt-5", "text-lg", "uppercase", "py-2", "px-8", "rounded-full"], ["type", "submit", "disabled", "", 1, "select-none", "rounded-full", "border", "mt-5", "border-purple-950/40", "py-3", "px-6", "text-center", "align-middle", "font-bold", "uppercase", "text-gradient", "transition-all", "hover:opacity-75", "focus:ring", "focus:ring-gray-300", "active:opacity-[0.85]", "disabled:pointer-events-none", "disabled:opacity-80", "disabled:shadow-none"]],
    template: function IdentificationDataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Datos de identificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Por favor, llena tus datos correctamente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function IdentificationDataComponent_Template_form_ngSubmit_5_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "C\u00E9dula de identidad*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, IdentificationDataComponent_div_11_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, IdentificationDataComponent_div_12_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 4)(14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Complemento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, IdentificationDataComponent_div_17_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 4)(19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Extensi\u00F3n*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, IdentificationDataComponent_mat_option_22_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, IdentificationDataComponent_div_23_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 4)(25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Fecha de nacimiento*:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, IdentificationDataComponent_div_28_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, IdentificationDataComponent_div_29_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, IdentificationDataComponent_button_30_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, IdentificationDataComponent_button_32_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.identificationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.identificationForm.get("document")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) && ((tmp_1_0 = ctx.identificationForm.get("document")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.identificationForm.get("document")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]) && ctx.identificationForm.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.identificationForm.get("complement")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]) && ctx.identificationForm.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.extensionCatalog);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.identificationForm.get("extension")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["nullValue"]) && ((tmp_5_0 = ctx.identificationForm.get("extension")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.identificationForm.get("birthday")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["required"]) && ((tmp_6_0 = ctx.identificationForm.get("birthday")) == null ? null : tmp_6_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.identificationForm.get("birthday")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["invalidBirthdate"]) && ((tmp_7_0 = ctx.identificationForm.get("birthday")) == null ? null : tmp_7_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 10, ctx.canTry$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 12, ctx.canTry$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_directives_disable_paste_directive__WEBPACK_IMPORTED_MODULE_3__.DisablePasteDirective, _shared_directives_restrict_input_directive__WEBPACK_IMPORTED_MODULE_4__.RestrictInputDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZGVudGlmaWNhdGlvbi1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmVyaWZ5LWlkZW50aXR5L2NvbXBvbmVudHMvaWRlbnRpZmljYXRpb24tZGF0YS9pZGVudGlmaWNhdGlvbi1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvTEFBb0wiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 806:
/*!***********************************************************************************!*\
  !*** ./src/app/verify-identity/components/otp-validate/otp-validate.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpValidateComponent: () => (/* binding */ OtpValidateComponent)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ 5988);
/* harmony import */ var _store_selectors_attempts_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/selectors/attempts.selectors */ 7697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/dialog.service */ 8082);
/* harmony import */ var _services_stepper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stepper.service */ 3261);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var angular_code_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-code-input */ 792);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6515);










function OtpValidateComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Por favor, ingrese el c\u00F3digo recibido, asegur\u00E1ndose de usar \u00FAnicamente n\u00FAmeros. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class OtpValidateComponent {
  constructor(store, dialogService, stepperService) {
    this.store = store;
    this.dialogService = dialogService;
    this.stepperService = stepperService;
    this.otpRegex = new RegExp('^\\d{6}$');
    this.otpCode = '';
    this.isValidCode = true;
    this.clickAttempts = 0;
    this.canTryOtp$ = this.store.select(_store_selectors_attempts_selectors__WEBPACK_IMPORTED_MODULE_1__.canTryOtp);
  }
  ngOnInit() {
    this.canTryOtp$.subscribe(canTryOtp => {
      if (canTryOtp) return;
      this.dialogService.openDialog({
        title: '¡Atención!',
        message: 'Has alcanzado el límite de intentos permitidos con el OTP. Por favor, inténtalo más tarde.',
        acceptButton: true,
        cancelButton: false
      }).subscribe(result => {
        this.stepperService.reset();
        for (let i = 0; i < 3; i++) {
          this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.incremetAttempts());
        }
      });
    });
  }
  onCodeChanged(code) {
    this.otpCode = code;
    this.validateOtpCode();
  }
  onCodeCompleted(code) {
    this.otpCode = code;
    this.validateOtpCode();
  }
  onVerifyCode() {
    this.clickAttempts++;
    this.validateOtpCode();
    if (!this.isValidCode) return;
    this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.CustomerActions.validateOtpCode({
      otpCode: this.otpCode
    }));
  }
  validateOtpCode() {
    if (this.otpRegex.test(this.otpCode)) {
      this.isValidCode = true;
      return;
    }
    this.isValidCode = false;
  }
  static #_ = this.ɵfac = function OtpValidateComponent_Factory(t) {
    return new (t || OtpValidateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_stepper_service__WEBPACK_IMPORTED_MODULE_3__.StepperService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: OtpValidateComponent,
    selectors: [["app-otp-validate"]],
    decls: 14,
    vars: 3,
    consts: [[1, "text-3xl", "uppercase", "border-l-[16px]", "border-pink-600", "pl-2", "text-[#0f5dac]", "font-bold"], [1, "text-xl", "text-slate-600", "pl-3"], [1, "flex", "justify-start", "items-center", "gap-2", "text-yellow-500", "mb-2", "pl-2"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "warning"], [1, "text-lg"], [1, "w-full", "lg:w-[50%]", "mx-auto", "mt-8", "mb-3", 3, "isCodeHidden", "codeLength", "codeChanged", "codeCompleted"], ["class", "flex justify-center", 4, "ngIf"], [1, "flex", "justify-center", "mt-5"], [1, "bg-primary", "text-lg", "uppercase", "py-2", "px-8", "rounded-full", "animate__animated", "animate__pulse", "animate__infinite", "infinite", "animate__slow", 3, "click"], [1, "flex", "justify-center"], [1, "alert-error"]],
    template: function OtpValidateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ingresa tu c\u00F3digo de verificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Favor coloca en este campo el c\u00F3digo enviado por mensaje de texto (SMS) al celular que dejaste registrado en agencia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "No compartas esta informaci\u00F3n con terceras personas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "code-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("codeChanged", function OtpValidateComponent_Template_code_input_codeChanged_9_listener($event) {
          return ctx.onCodeChanged($event);
        })("codeCompleted", function OtpValidateComponent_Template_code_input_codeCompleted_9_listener($event) {
          return ctx.onCodeCompleted($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, OtpValidateComponent_div_10_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OtpValidateComponent_Template_button_click_12_listener() {
          return ctx.onVerifyCode();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Ingresar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isCodeHidden", false)("codeLength", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isValidCode);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, angular_code_input__WEBPACK_IMPORTED_MODULE_7__.CodeInputComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon],
    styles: ["code-input[_ngcontent-%COMP%] {\n  --item-height: 4.3rem;\n  --item-border: 1px solid #c0c0c0;\n}\n\n  input.has-value {\n  font-size: 1.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC12YWxpZGF0ZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEZJRSUyMFRBUkVBUyUyMDA2LTE2JTIwQUpVU1RFJTIwRjUlMjBTT1NURU5JQklMSURBRFxcbXNhLWluc3VyYW5jZWNoYW5uZWwtdmlld1xcc3JjXFxpbnN1cmFuY2UtY2hhbm5lbFxcc3JjXFxhcHBcXHZlcmlmeS1pZGVudGl0eVxcY29tcG9uZW50c1xcb3RwLXZhbGlkYXRlXFxvdHAtdmFsaWRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGIiwiZmlsZSI6Im90cC12YWxpZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNvZGUtaW5wdXQge1xyXG4gIC0taXRlbS1oZWlnaHQ6IDQuM3JlbTtcclxuICAtLWl0ZW0tYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGlucHV0Lmhhcy12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4iLCJjb2RlLWlucHV0IHtcbiAgLS1pdGVtLWhlaWdodDogNC4zcmVtO1xuICAtLWl0ZW0tYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbn1cblxuOjpuZy1kZWVwIGlucHV0Lmhhcy12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmVyaWZ5LWlkZW50aXR5L2NvbXBvbmVudHMvb3RwLXZhbGlkYXRlL290cC12YWxpZGF0ZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0ZJRSUyMFRBUkVBUyUyMDA2LTE2JTIwQUpVU1RFJTIwRjUlMjBTT1NURU5JQklMSURBRC9tc2EtaW5zdXJhbmNlY2hhbm5lbC12aWV3L3NyYy9pbnN1cmFuY2UtY2hhbm5lbC9zcmMvYXBwL3ZlcmlmeS1pZGVudGl0eS9jb21wb25lbnRzL290cC12YWxpZGF0ZS9vdHAtdmFsaWRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGO0FEQ0EsNC9CQUE0L0IiLCJzb3VyY2VzQ29udGVudCI6WyJjb2RlLWlucHV0IHtcclxuICAtLWl0ZW0taGVpZ2h0OiA0LjNyZW07XHJcbiAgLS1pdGVtLWJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBpbnB1dC5oYXMtdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiY29kZS1pbnB1dCB7XG4gIC0taXRlbS1oZWlnaHQ6IDQuM3JlbTtcbiAgLS1pdGVtLWJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG59XG5cbjo6bmctZGVlcCBpbnB1dC5oYXMtdmFsdWUge1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7776:
/*!****************************************************************!*\
  !*** ./src/app/verify-identity/services/clear-data.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClearDataService: () => (/* binding */ ClearDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ClearDataService {
  constructor() {}
  cleanData(formData) {
    const cleanedData = {};
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        let value = formData[key];
        if (typeof value === 'string') {
          value = value.trim().toUpperCase();
        }
        cleanedData[key] = value;
      }
    }
    return cleanedData;
  }
  formatDateString(dateString) {
    // Convert 'yyyy-mm-dd' to 'dd/mm/yyyy'
    const parts = dateString.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateString; // return the original string if it doesn't match the expected format
  }
  static #_ = this.ɵfac = function ClearDataService_Factory(t) {
    return new (t || ClearDataService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ClearDataService,
    factory: ClearDataService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8017:
/*!*********************************************************************!*\
  !*** ./src/app/verify-identity/services/identity-verify.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityVerifyService: () => (/* binding */ IdentityVerifyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7592);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);




class IdentityVerifyService {
  constructor(http) {
    this.http = http;
    this.baseApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_ENDPOINT + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.INSURANCE_AUTH_API;
  }
  validateClient(document, birthdate, token) {
    const body = {
      document,
      birthDate: birthdate,
      token
    };
    return this.http.post(this.baseApiUrl + '/validateClient', body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp.result.maskedCustomerInfo));
  }
  sendCode(userCode) {
    const body = {
      userCode: userCode
    };
    return this.http.post(this.baseApiUrl + '/sendCode', body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.delay)(3000));
  }
  validateCode(userCode, otpCode) {
    const body = {
      userCode: userCode,
      code: otpCode
    };
    return this.http.post(this.baseApiUrl + '/validateCode', body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp.result.authInfo.accessToken));
  }
  static #_ = this.ɵfac = function IdentityVerifyService_Factory(t) {
    return new (t || IdentityVerifyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: IdentityVerifyService,
    factory: IdentityVerifyService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3261:
/*!*************************************************************!*\
  !*** ./src/app/verify-identity/services/stepper.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepperService: () => (/* binding */ StepperService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class StepperService {
  setStepper(stepper) {
    this.stepper = stepper;
  }
  nextStep() {
    if (this.stepper) {
      this.stepper.next();
      return;
    }
    throw new Error('Stepper was not provided');
  }
  previousStep() {
    if (this.stepper) {
      this.stepper.previous();
      return;
    }
    throw new Error('Stepper was not provided');
  }
  reset() {
    if (this.stepper) {
      this.stepper.reset();
      return;
    }
    throw new Error('Stepper was not provided');
  }
  static #_ = this.ɵfac = function StepperService_Factory(t) {
    return new (t || StepperService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: StepperService,
    factory: StepperService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6199:
/*!****************************************************************!*\
  !*** ./src/app/verify-identity/services/validators.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidatorsService: () => (/* binding */ ValidatorsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ValidatorsService {
  validateBirthday(control) {
    const value = control.value;
    if (!value) {
      return null;
    }
    const birthdate = new Date(value);
    const today = new Date();
    if (birthdate >= today) {
      return {
        invalidBirthdate: 'La fecha de nacimiento debe ser anterior a la fecha actual.'
      };
    }
    const minAge = 17;
    const maxDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
    if (birthdate > maxDate) {
      return {
        invalidBirthdate: 'La fecha de nacimiento es de un menor de edad.'
      };
    }
    const maxAge = 100;
    const minDate = new Date(today.getFullYear() - maxAge, today.getMonth(), today.getDate());
    if (birthdate < minDate) {
      return {
        invalidBirthdate: 'La fecha de nacimiento es demasiado antigua.'
      };
    }
    return null;
  }
  validateNullValue(control) {
    return control.value === null ? {
      nullValue: 'Por favor, complete el campo requerido'
    } : null;
  }
  static #_ = this.ɵfac = function ValidatorsService_Factory(t) {
    return new (t || ValidatorsService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ValidatorsService,
    factory: ValidatorsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9787:
/*!*******************************************************************!*\
  !*** ./src/app/verify-identity/store/effects/attempts.effects.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttemptsEffects: () => (/* binding */ AttemptsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 5988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/local-storage.service */ 8829);
/* harmony import */ var _shared_services_init_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/init-app.service */ 8006);








class AttemptsEffects {
  constructor(actions$, store, localStorageService, initAppService) {
    this.actions$ = actions$;
    this.store = store;
    this.localStorageService = localStorageService;
    this.initAppService = initAppService;
    this.loadAttempts$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.loadAttempts), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => this.localStorageService.getObsLocalStorageFromKey(this.localStorageService.attemptsStorageKey, true).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(attemptsLsData => {
      if (!attemptsLsData) return ___WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.attemptsLoaded({
        attempts: 0
      });
      const {
        attempts,
        date
      } = attemptsLsData;
      if (attempts < this.initAppService.constants.attemptsAllowed) return ___WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.attemptsLoaded({
        attempts
      });
      const oneHourInMillis = this.initAppService.constants.inactivationTimeSeconds * 1000;
      const hasOneHourPassed = new Date().getTime() - date > oneHourInMillis;
      return hasOneHourPassed ? ___WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.attemptsLoaded({
        attempts: 0
      }) : ___WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.attemptsLoaded({
        attempts: 3
      });
    })))));
    this.incremetAttempts$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.incremetAttempts), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.withLatestFrom)(this.store.select(___WEBPACK_IMPORTED_MODULE_0__.AttemptsSelectors.attempts)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(([action, attempts]) => this.localStorageService.saveToLocalStorage(this.localStorageService.attemptsStorageKey, {
      attempts,
      date: new Date().getTime()
    }))), {
      dispatch: false
    } // Indica que este efecto no despacha una acción
    );

    this.resetAttempts$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.AttemptsActions.resetAttempts), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.withLatestFrom)(this.store.select(___WEBPACK_IMPORTED_MODULE_0__.AttemptsSelectors.attempts)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.localStorageService.removeItemLocalStorage(this.localStorageService.attemptsStorageKey))), {
      dispatch: false
    } // Indica que este efecto no despacha una acción
    );
  }
  static #_ = this.ɵfac = function AttemptsEffects_Factory(t) {
    return new (t || AttemptsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_init_app_service__WEBPACK_IMPORTED_MODULE_2__.InitAppService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: AttemptsEffects,
    factory: AttemptsEffects.ɵfac
  });
}

/***/ }),

/***/ 7279:
/*!*******************************************************************!*\
  !*** ./src/app/verify-identity/store/effects/customer.effects.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerEffects: () => (/* binding */ CustomerEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9877);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 7474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/store */ 655);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ 5988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_identity_verify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/identity-verify.service */ 8017);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-recaptcha */ 8667);
/* harmony import */ var _shared_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/snack-bar.service */ 1255);
/* harmony import */ var _services_stepper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/stepper.service */ 3261);













class CustomerEffects {
  constructor(store, actions$, router, identityVerifyService, reCaptchaV3Service, snackBarService, stepperService) {
    this.store = store;
    this.actions$ = actions$;
    this.router = router;
    this.identityVerifyService = identityVerifyService;
    this.reCaptchaV3Service = reCaptchaV3Service;
    this.snackBarService = snackBarService;
    this.stepperService = stepperService;
    this.loadUserInfo$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(___WEBPACK_IMPORTED_MODULE_1__.CustomerActions.loadUserInfo), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.concatMap)(({
      identification,
      birthdate
    }) => this.reCaptchaV3Service.execute('submit').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.concatMap)(token => this.identityVerifyService.validateClient(identification, birthdate, token).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(maskedCustomerInfo => {
      this.stepperService.nextStep();
      return ___WEBPACK_IMPORTED_MODULE_1__.CustomerActions.loadUserInfoSuccess({
        customer: maskedCustomerInfo
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(httpError => {
      this.stepperService.reset();
      if (httpError.status === 400) this.store.dispatch(___WEBPACK_IMPORTED_MODULE_1__.AttemptsActions.incremetAttempts());
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(___WEBPACK_IMPORTED_MODULE_1__.CustomerActions.loadUserInfoFailure(httpError.status === 500 ? {
        error: httpError.error.cause
      } : {
        error: httpError.error.message
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => this.store.dispatch(___WEBPACK_IMPORTED_MODULE_1__.CustomerActions.resetError()))))))));
    this.sendOtpCode$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(___WEBPACK_IMPORTED_MODULE_1__.CustomerActions.sendCode), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.concatLatestFrom)(() => this.store.select(___WEBPACK_IMPORTED_MODULE_1__.CustomerSelectors.customer)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(([action, customer]) => this.identityVerifyService.sendCode(customer?.userCode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => ___WEBPACK_IMPORTED_MODULE_1__.CustomerActions.successSendCode()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(httpError => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(___WEBPACK_IMPORTED_MODULE_1__.CustomerActions.loadUserInfoFailure({
      error: httpError.error.message
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => this.store.dispatch(___WEBPACK_IMPORTED_MODULE_1__.CustomerActions.resetError()))))));
    this.validateCode$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(___WEBPACK_IMPORTED_MODULE_1__.CustomerActions.validateOtpCode), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.concatLatestFrom)(() => this.store.select(___WEBPACK_IMPORTED_MODULE_1__.CustomerSelectors.customer)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(([action, customer]) => this.identityVerifyService.validateCode(customer?.userCode, action.otpCode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(accessToken => {
      this.router.navigateByUrl('/dashboard/my-insurance');
      this.store.dispatch(___WEBPACK_IMPORTED_MODULE_1__.CustomerActions.resetUserInfo());
      this.store.dispatch(___WEBPACK_IMPORTED_MODULE_1__.AttemptsActions.resetAttempts());
      this.store.dispatch(___WEBPACK_IMPORTED_MODULE_1__.AttemptsActions.resetOtpAttempts());
      this.snackBarService.openSnackBar('¡Validación exitosa!');
      return _shared_store__WEBPACK_IMPORTED_MODULE_0__.TokenActions.saveToken({
        token: accessToken
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(httpError => {
      if (httpError.status === 400) {
        this.store.dispatch(___WEBPACK_IMPORTED_MODULE_1__.AttemptsActions.incrementOtpAttempts());
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(___WEBPACK_IMPORTED_MODULE_1__.CustomerActions.loadUserInfoFailure({
          error: 'EL CÓDIGO OTP INGRESADO ES INCORRECTO. POR FAVOR, INTÉNTELO DE NUEVO.'
        }));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(___WEBPACK_IMPORTED_MODULE_1__.CustomerActions.loadUserInfoFailure({
        error: httpError.error.message
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => this.store.dispatch(___WEBPACK_IMPORTED_MODULE_1__.CustomerActions.resetError()))))));
    this.loadFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(___WEBPACK_IMPORTED_MODULE_1__.CustomerActions.loadUserInfoFailure), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(({
      error
    }) => {
      this.snackBarService.openSnackBar(error ? error : 'EL SERVICIO SOLICITADO NO SE ENCUENTRA DISPONIBLE, POR FAVOR INTENTE MAS TARDE.');
    })), {
      dispatch: false
    });
  }
  static #_ = this.ɵfac = function CustomerEffects_Factory(t) {
    return new (t || CustomerEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_services_identity_verify_service__WEBPACK_IMPORTED_MODULE_2__.IdentityVerifyService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](ng_recaptcha__WEBPACK_IMPORTED_MODULE_16__.ReCaptchaV3Service), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_shared_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__.SnackBarService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_services_stepper_service__WEBPACK_IMPORTED_MODULE_4__.StepperService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
    token: CustomerEffects,
    factory: CustomerEffects.ɵfac
  });
}

/***/ }),

/***/ 4596:
/*!*******************************************************************!*\
  !*** ./src/app/verify-identity/verify-identity-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyIdentityRoutingModule: () => (/* binding */ VerifyIdentityRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _verify_identity_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-identity.component */ 9139);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/not-found/not-found.component */ 4740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _verify_identity_component__WEBPACK_IMPORTED_MODULE_0__.VerifyIdentityComponent
}, {
  path: '**',
  component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent
}];
class VerifyIdentityRoutingModule {
  static #_ = this.ɵfac = function VerifyIdentityRoutingModule_Factory(t) {
    return new (t || VerifyIdentityRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: VerifyIdentityRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VerifyIdentityRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 9139:
/*!**************************************************************!*\
  !*** ./src/app/verify-identity/verify-identity.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyIdentityComponent: () => (/* binding */ VerifyIdentityComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/stepper */ 3507);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ 5988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var _services_stepper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/stepper.service */ 3261);
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/logo/logo.component */ 140);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ 6272);
/* harmony import */ var _components_check_information_check_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/check-information/check-information.component */ 7993);
/* harmony import */ var _components_check_phone_check_phone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/check-phone/check-phone.component */ 6025);
/* harmony import */ var _components_identification_data_identification_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/identification-data/identification-data.component */ 2706);
/* harmony import */ var _components_otp_validate_otp_validate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/otp-validate/otp-validate.component */ 806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6575);















const _c0 = ["stepper"];
function VerifyIdentityComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Introduce tus datos");
  }
}
function VerifyIdentityComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 9)(1, "mat-card-content")(2, "app-identification-data", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("goToStepTwo", function VerifyIdentityComponent_ng_template_11_Template_app_identification_data_goToStepTwo_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.nextStep($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function VerifyIdentityComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Verifica tu identidad");
  }
}
function VerifyIdentityComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 9)(1, "mat-card-content")(2, "app-check-information", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("goToStepThree", function VerifyIdentityComponent_ng_template_14_Template_app_check_information_goToStepThree_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.nextStep($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function VerifyIdentityComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Verifica tu celular");
  }
}
function VerifyIdentityComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 9)(1, "mat-card-content")(2, "app-check-phone", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("goToStepFour", function VerifyIdentityComponent_ng_template_17_Template_app_check_phone_goToStepFour_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.nextStep($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function VerifyIdentityComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Ingresa tu c\u00F3digo");
  }
}
function VerifyIdentityComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 9)(1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-otp-validate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
class VerifyIdentityComponent {
  constructor(store, breakpointObserver, stepperService) {
    this.store = store;
    this.breakpointObserver = breakpointObserver;
    this.stepperService = stepperService;
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(({
      matches
    }) => matches ? 'horizontal' : 'vertical'));
  }
  ngAfterViewInit() {
    this.stepperService.setStepper(this.stepper);
  }
  nextStep(next) {
    if (next) {
      this.stepper.next();
      return;
    }
    this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.CustomerActions.resetUserInfo());
    this.stepper.reset();
  }
  static #_ = this.ɵfac = function VerifyIdentityComponent_Factory(t) {
    return new (t || VerifyIdentityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_stepper_service__WEBPACK_IMPORTED_MODULE_1__.StepperService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: VerifyIdentityComponent,
    selectors: [["app-verify-identity"]],
    viewQuery: function VerifyIdentityComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__.STEPPER_GLOBAL_OPTIONS,
      useValue: {
        displayDefaultIndicatorType: false
      }
    }])],
    decls: 21,
    vars: 4,
    consts: [[1, "top-background"], [1, "w-[95%]", "lg:w-[90%]", "mx-auto", "bg-neutral-100/60", "p-2", "lg:p-4", "rounded-xl"], [1, "flex", "justify-center", "md:justify-end", "my-2", "lg:my-3"], ["whidthLogo", "170px"], [1, "w-full", "mx-auto", "bg-neutral-100/60", "p-2", "lg:p-4", "rounded-xl"], [1, "example-stepper", 3, "orientation", "linear"], ["stepper", ""], ["matStepLabel", ""], ["matStepContent", ""], [1, "w-full", "sm:w-[80%]", "lg:w[90%]", "min-h-[350px]", "mx-auto", "shadow-md", "bg-transparent"], [3, "goToStepTwo"], [3, "goToStepThree"], [3, "goToStepFour"]],
    template: function VerifyIdentityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "picture", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-logo", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "mat-stepper", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, VerifyIdentityComponent_ng_template_10_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, VerifyIdentityComponent_ng_template_11_Template, 3, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, VerifyIdentityComponent_ng_template_13_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, VerifyIdentityComponent_ng_template_14_Template, 3, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, VerifyIdentityComponent_ng_template_16_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, VerifyIdentityComponent_ng_template_17_Template, 3, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, VerifyIdentityComponent_ng_template_19_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, VerifyIdentityComponent_ng_template_20_Template, 3, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("orientation", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 2, ctx.stepperOrientation))("linear", false);
      }
    },
    dependencies: [_shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__.LogoComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepLabel, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepContent, _components_check_information_check_information_component__WEBPACK_IMPORTED_MODULE_3__.CheckInformationComponent, _components_check_phone_check_phone_component__WEBPACK_IMPORTED_MODULE_4__.CheckPhoneComponent, _components_identification_data_identification_data_component__WEBPACK_IMPORTED_MODULE_5__.IdentificationDataComponent, _components_otp_validate_otp_validate_component__WEBPACK_IMPORTED_MODULE_6__.OtpValidateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
    styles: [".mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%] {\n  background-color: transparent;\n  font-family: Roundkey, sans-serif;\n}\n\n  .mat-step-header .mat-step-icon-selected {\n  background-color: #0065AC !important;\n}\n\n  .mat-step-header .mat-step-icon-state-done {\n  background-color: #E1278D !important;\n}\n\n  .mat-step-text-label {\n  font-size: 1.4rem !important;\n  color: #0065AC;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n  .mat-step-header .mat-step-icon {\n  background-color: #b9b9b9;\n  color: #fff;\n}\n\n.mat-mdc-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n  .mat-step-icon.mat-step-icon-state-edit {\n  background-color: #E1278D;\n}\n\n  .mat-step-header {\n  pointer-events: none !important;\n}\n\n  .mat-vertical-content-container {\n  margin-left: 0 !important;\n}\n\n  .mat-vertical-content {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1pZGVudGl0eS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxGSUUlMjBUQVJFQVMlMjAwNi0xNiUyMEFKVVNURSUyMEY1JTIwU09TVEVOSUJJTElEQURcXG1zYS1pbnN1cmFuY2VjaGFubmVsLXZpZXdcXHNyY1xcaW5zdXJhbmNlLWNoYW5uZWxcXHNyY1xcYXBwXFx2ZXJpZnktaWRlbnRpdHlcXHZlcmlmeS1pZGVudGl0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7QUNFRiIsImZpbGUiOiJ2ZXJpZnktaWRlbnRpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBAYXBwbHkgZm9udC1yb3VuZGtleTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY1QUMgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxMjc4RCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLXRleHQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwMDY1QUM7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWI5Yjk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXQtbWRjLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWljb24ubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTEyNzhEO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlcntcclxuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC12ZXJ0aWNhbC1jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC12ZXJ0aWNhbC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLm1hdC1zdGVwcGVyLWhvcml6b250YWwsIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBAYXBwbHkgZm9udC1yb3VuZGtleTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NUFDICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTEyNzhEICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXAtdGV4dC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDA2NUFDO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliOWI5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1tZGMtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwLWljb24ubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxMjc4RDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC12ZXJ0aWNhbC1jb250ZW50LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXZlcnRpY2FsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmVyaWZ5LWlkZW50aXR5L3ZlcmlmeS1pZGVudGl0eS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0ZJRSUyMFRBUkVBUyUyMDA2LTE2JTIwQUpVU1RFJTIwRjUlMjBTT1NURU5JQklMSURBRC9tc2EtaW5zdXJhbmNlY2hhbm5lbC12aWV3L3NyYy9pbnN1cmFuY2UtY2hhbm5lbC9zcmMvYXBwL3ZlcmlmeS1pZGVudGl0eS92ZXJpZnktaWRlbnRpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURDQTtFQUNFLHFCQUFBO0FDRUY7QURDQSxvMUdBQW8xRyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc3RlcHBlci1ob3Jpem9udGFsLCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIEBhcHBseSBmb250LXJvdW5ka2V5O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjVBQyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTEyNzhEICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtdGV4dC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcclxuICBjb2xvcjogIzAwNjVBQztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjliOTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1hdC1tZGMtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaWNvbi5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMTI3OEQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVye1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXZlcnRpY2FsLWNvbnRlbnQtY29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXZlcnRpY2FsLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG4iLCIubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIEBhcHBseSBmb250LXJvdW5ka2V5O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY1QUMgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMTI3OEQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC10ZXh0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDY1QUM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWI5Yjk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LW1kYy1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXAtaWNvbi5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTEyNzhEO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXZlcnRpY2FsLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdmVydGljYWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6646:
/*!***********************************************************!*\
  !*** ./src/app/verify-identity/verify-identity.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyIdentityModule: () => (/* binding */ VerifyIdentityModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _components_check_information_check_information_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/check-information/check-information.component */ 7993);
/* harmony import */ var _components_check_phone_check_phone_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/check-phone/check-phone.component */ 6025);
/* harmony import */ var _components_identification_data_identification_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/identification-data/identification-data.component */ 2706);
/* harmony import */ var _components_otp_validate_otp_validate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/otp-validate/otp-validate.component */ 806);
/* harmony import */ var _verify_identity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verify-identity.component */ 9139);
/* harmony import */ var angular_code_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-code-input */ 792);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material/material.module */ 6889);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _verify_identity_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verify-identity-routing.module */ 4596);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ 5988);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _store_effects_customer_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/effects/customer.effects */ 7279);
/* harmony import */ var _store_effects_attempts_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/effects/attempts.effects */ 9787);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-recaptcha */ 8667);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);






















class VerifyIdentityModule {
  static #_ = this.ɵfac = function VerifyIdentityModule_Factory(t) {
    return new (t || VerifyIdentityModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: VerifyIdentityModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    providers: [{
      provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__.RECAPTCHA_V3_SITE_KEY,
      useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.RECAPTCHA.SITE_KEY
    }, {
      provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__.RECAPTCHA_LANGUAGE,
      useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.RECAPTCHA.LANGUAGE
    }],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__.StoreModule.forFeature(_store__WEBPACK_IMPORTED_MODULE_8__.AttemptsReducer.actionReducerAttemptsKey, _store__WEBPACK_IMPORTED_MODULE_8__.AttemptsReducer.attemptsReducer), _ngrx_store__WEBPACK_IMPORTED_MODULE_16__.StoreModule.forFeature(_store__WEBPACK_IMPORTED_MODULE_8__.CustomerReducer.actionReducerCustomerKey, _store__WEBPACK_IMPORTED_MODULE_8__.CustomerReducer.customerReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__.EffectsModule.forFeature([_store_effects_customer_effects__WEBPACK_IMPORTED_MODULE_9__.CustomerEffects, _store_effects_attempts_effects__WEBPACK_IMPORTED_MODULE_10__.AttemptsEffects]), angular_code_input__WEBPACK_IMPORTED_MODULE_18__.CodeInputModule.forRoot({
      codeLength: 6,
      isCharsCode: true,
      code: ''
    }), _verify_identity_routing_module__WEBPACK_IMPORTED_MODULE_7__.VerifyIdentityRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _material_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__.RecaptchaV3Module]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](VerifyIdentityModule, {
    declarations: [_components_check_information_check_information_component__WEBPACK_IMPORTED_MODULE_0__.CheckInformationComponent, _components_check_phone_check_phone_component__WEBPACK_IMPORTED_MODULE_1__.CheckPhoneComponent, _components_identification_data_identification_data_component__WEBPACK_IMPORTED_MODULE_2__.IdentificationDataComponent, _components_otp_validate_otp_validate_component__WEBPACK_IMPORTED_MODULE_3__.OtpValidateComponent, _verify_identity_component__WEBPACK_IMPORTED_MODULE_4__.VerifyIdentityComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__.StoreFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__.EffectsFeatureModule, angular_code_input__WEBPACK_IMPORTED_MODULE_18__.CodeInputModule, _verify_identity_routing_module__WEBPACK_IMPORTED_MODULE_7__.VerifyIdentityRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _material_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__.RecaptchaV3Module]
  });
})();

/***/ }),

/***/ 3379:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interval: () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 7777);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ 9378);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  if (period < 0) {
    period = 0;
  }
  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(period, period, scheduler);
}

/***/ }),

/***/ 792:
/*!*************************************************************************!*\
  !*** ./node_modules/angular-code-input/fesm2022/angular-code-input.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeInputComponent: () => (/* binding */ CodeInputComponent),
/* harmony export */   CodeInputComponentConfigToken: () => (/* binding */ CodeInputComponentConfigToken),
/* harmony export */   CodeInputModule: () => (/* binding */ CodeInputModule),
/* harmony export */   defaultComponentConfig: () => (/* binding */ defaultComponentConfig)
/* harmony export */ });
/* harmony import */ var D_FIE_TAREAS_06_16_AJUSTE_F5_SOSTENIBILIDAD_msa_insurancechannel_view_src_insurance_channel_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);





const _c0 = ["input"];
function CodeInputComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "input", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CodeInputComponent_span_0_Template_input_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onClick($event));
    })("paste", function CodeInputComponent_span_0_Template_input_paste_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const i_r2 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onPaste($event, i_r2));
    })("input", function CodeInputComponent_span_0_Template_input_input_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const i_r2 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.onInput($event, i_r2));
    })("keydown", function CodeInputComponent_span_0_Template_input_keydown_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const i_r2 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.onKeydown($event, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("code-hidden", ctx_r0.isCodeHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r0.inputType)("disabled", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("inputmode", ctx_r0.inputMode)("autocapitalize", ctx_r0.autocapitalize);
  }
}
const CodeInputComponentConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CodeInputComponentConfig');
const defaultComponentConfig = {
  codeLength: 4,
  inputType: 'tel',
  inputMode: 'numeric',
  initialFocusField: undefined,
  isCharsCode: false,
  isCodeHidden: false,
  isPrevFocusableAfterClearing: true,
  isFocusingOnLastByClickIfFilled: false,
  code: undefined,
  disabled: false,
  autocapitalize: undefined
};
var InputState;
(function (InputState) {
  InputState[InputState["ready"] = 0] = "ready";
  InputState[InputState["reset"] = 1] = "reset";
})(InputState || (InputState = {}));
class CodeInputComponent {
  constructor(config) {
    /** @deprecated Use isCharsCode prop instead. */
    this.isNonDigitsCode = false;
    this.codeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.codeCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.placeholders = [];
    this.inputs = [];
    this.inputsStates = [];
    this.state = {
      isFocusingAfterAppearingCompleted: false,
      isInitialFocusFieldEnabled: false
    };
    Object.assign(this, defaultComponentConfig);
    if (!config) {
      return;
    }
    // filtering for only valid config props
    for (const prop in config) {
      if (!config.hasOwnProperty(prop)) {
        continue;
      }
      if (!defaultComponentConfig.hasOwnProperty(prop)) {
        continue;
      }
      // @ts-ignore
      this[prop] = config[prop];
    }
  }
  /**
   * Life cycle
   */
  ngOnInit() {
    // defining the state
    this.state.isInitialFocusFieldEnabled = !this.isEmpty(this.initialFocusField);
    // initiating the code
    this.onCodeLengthChanges();
  }
  ngAfterViewInit() {
    // initiation of the inputs
    this.inputsListSubscription = this.inputsList.changes.subscribe(this.onInputsListChanges.bind(this));
    this.onInputsListChanges(this.inputsList);
  }
  ngAfterViewChecked() {
    this.focusOnInputAfterAppearing();
  }
  ngOnChanges(changes) {
    if (changes.code) {
      this.onInputCodeChanges();
    }
    if (changes.codeLength) {
      this.onCodeLengthChanges();
    }
  }
  ngOnDestroy() {
    if (this.inputsListSubscription) {
      this.inputsListSubscription.unsubscribe();
    }
  }
  /**
   * Methods
   */
  reset(isChangesEmitting = false) {
    // resetting the code to its initial value or to an empty value
    this.onInputCodeChanges();
    if (this.state.isInitialFocusFieldEnabled) {
      // tslint:disable-next-line:no-non-null-assertion
      this.focusOnField(this.initialFocusField);
    }
    if (isChangesEmitting) {
      this.emitChanges();
    }
  }
  focusOnField(index) {
    if (index >= this._codeLength) {
      throw new Error('The index of the focusing input box should be less than the codeLength.');
    }
    this.inputs[index].focus();
  }
  onClick(e) {
    // handle click events only if the the prop is enabled
    if (!this.isFocusingOnLastByClickIfFilled) {
      return;
    }
    const target = e.target;
    const last = this.inputs[this._codeLength - 1];
    // already focused
    if (target === last) {
      return;
    }
    // check filling
    const isFilled = this.getCurrentFilledCode().length >= this._codeLength;
    if (!isFilled) {
      return;
    }
    // focusing on the last input if is filled
    setTimeout(() => last.focus());
  }
  onInput(e, i) {
    const target = e.target;
    const value = e.data || target.value;
    if (this.isEmpty(value)) {
      return;
    }
    // only digits are allowed if isCharsCode flag is absent/false
    if (!this.canInputValue(value)) {
      e.preventDefault();
      e.stopPropagation();
      this.setInputValue(target, null);
      this.setStateForInput(target, InputState.reset);
      return;
    }
    const values = value.toString().trim().split('');
    for (let j = 0; j < values.length; j++) {
      const index = j + i;
      if (index > this._codeLength - 1) {
        break;
      }
      this.setInputValue(this.inputs[index], values[j]);
    }
    this.emitChanges();
    const next = i + values.length;
    if (next > this._codeLength - 1) {
      target.blur();
      return;
    }
    this.inputs[next].focus();
  }
  onPaste(e, i) {
    e.preventDefault();
    e.stopPropagation();
    const data = e.clipboardData ? e.clipboardData.getData('text').trim() : undefined;
    if (this.isEmpty(data)) {
      return;
    }
    // Convert paste text into iterable
    // tslint:disable-next-line:no-non-null-assertion
    const values = data.split('');
    let valIndex = 0;
    for (let j = i; j < this.inputs.length; j++) {
      // The values end is reached. Loop exit
      if (valIndex === values.length) {
        break;
      }
      const input = this.inputs[j];
      const val = values[valIndex];
      // Cancel the loop when a value cannot be used
      if (!this.canInputValue(val)) {
        this.setInputValue(input, null);
        this.setStateForInput(input, InputState.reset);
        return;
      }
      this.setInputValue(input, val.toString());
      valIndex++;
    }
    this.inputs[i].blur();
    this.emitChanges();
  }
  onKeydown(e, i) {
    var _this = this;
    return (0,D_FIE_TAREAS_06_16_AJUSTE_F5_SOSTENIBILIDAD_msa_insurancechannel_view_src_insurance_channel_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const target = e.target;
      const isTargetEmpty = _this.isEmpty(target.value);
      const prev = i - 1;
      // processing only the backspace and delete key events
      const isBackspaceKey = yield _this.isBackspaceKey(e);
      const isDeleteKey = _this.isDeleteKey(e);
      if (!isBackspaceKey && !isDeleteKey) {
        return;
      }
      e.preventDefault();
      _this.setInputValue(target, null);
      if (!isTargetEmpty) {
        _this.emitChanges();
      }
      // preventing to focusing on the previous field if it does not exist or the delete key has been pressed
      if (prev < 0 || isDeleteKey) {
        return;
      }
      if (isTargetEmpty || _this.isPrevFocusableAfterClearing) {
        _this.inputs[prev].focus();
      }
    })();
  }
  onInputCodeChanges() {
    if (!this.inputs.length) {
      return;
    }
    if (this.isEmpty(this.code)) {
      this.inputs.forEach(input => {
        this.setInputValue(input, null);
      });
      return;
    }
    // tslint:disable-next-line:no-non-null-assertion
    const chars = this.code.toString().trim().split('');
    // checking if all the values are correct
    let isAllCharsAreAllowed = true;
    for (const char of chars) {
      if (!this.canInputValue(char)) {
        isAllCharsAreAllowed = false;
        break;
      }
    }
    this.inputs.forEach((input, index) => {
      const value = isAllCharsAreAllowed ? chars[index] : null;
      this.setInputValue(input, value);
    });
  }
  onCodeLengthChanges() {
    if (!this.codeLength) {
      return;
    }
    this._codeLength = this.codeLength;
    if (this._codeLength > this.placeholders.length) {
      const numbers = Array(this._codeLength - this.placeholders.length).fill(1);
      this.placeholders.splice(this.placeholders.length - 1, 0, ...numbers);
    } else if (this._codeLength < this.placeholders.length) {
      this.placeholders.splice(this._codeLength);
    }
  }
  onInputsListChanges(list) {
    if (list.length > this.inputs.length) {
      const inputsToAdd = list.filter((item, index) => index > this.inputs.length - 1);
      this.inputs.splice(this.inputs.length, 0, ...inputsToAdd.map(item => item.nativeElement));
      const states = Array(inputsToAdd.length).fill(InputState.ready);
      this.inputsStates.splice(this.inputsStates.length, 0, ...states);
    } else if (list.length < this.inputs.length) {
      this.inputs.splice(list.length);
      this.inputsStates.splice(list.length);
    }
    // filling the inputs after changing of their count
    this.onInputCodeChanges();
  }
  focusOnInputAfterAppearing() {
    if (!this.state.isInitialFocusFieldEnabled) {
      return;
    }
    if (this.state.isFocusingAfterAppearingCompleted) {
      return;
    }
    // tslint:disable-next-line:no-non-null-assertion
    this.focusOnField(this.initialFocusField);
    // tslint:disable-next-line:no-non-null-assertion
    this.state.isFocusingAfterAppearingCompleted = document.activeElement === this.inputs[this.initialFocusField];
  }
  emitChanges() {
    setTimeout(() => this.emitCode(), 50);
  }
  emitCode() {
    const code = this.getCurrentFilledCode();
    this.codeChanged.emit(code);
    if (code.length >= this._codeLength) {
      this.codeCompleted.emit(code);
    }
  }
  getCurrentFilledCode() {
    let code = '';
    for (const input of this.inputs) {
      if (!this.isEmpty(input.value)) {
        code += input.value;
      }
    }
    return code;
  }
  isBackspaceKey(e) {
    const isBackspace = e.key && e.key.toLowerCase() === 'backspace' || e.keyCode && e.keyCode === 8;
    if (isBackspace) {
      return Promise.resolve(true);
    }
    // process only key with placeholder keycode on android devices
    if (!e.keyCode || e.keyCode !== 229) {
      return Promise.resolve(false);
    }
    return new Promise(resolve => {
      setTimeout(() => {
        const input = e.target;
        const isReset = this.getStateForInput(input) === InputState.reset;
        if (isReset) {
          this.setStateForInput(input, InputState.ready);
        }
        // if backspace key pressed the caret will have position 0 (for single value field)
        resolve(input.selectionStart === 0 && !isReset);
      });
    });
  }
  isDeleteKey(e) {
    return e.key && e.key.toLowerCase() === 'delete' || e.keyCode && e.keyCode === 46;
  }
  setInputValue(input, value) {
    const isEmpty = this.isEmpty(value);
    const valueClassCSS = 'has-value';
    const emptyClassCSS = 'empty';
    if (isEmpty) {
      input.value = '';
      input.classList.remove(valueClassCSS);
      // tslint:disable-next-line:no-non-null-assertion
      input.parentElement.classList.add(emptyClassCSS);
    } else {
      input.value = value;
      input.classList.add(valueClassCSS);
      // tslint:disable-next-line:no-non-null-assertion
      input.parentElement.classList.remove(emptyClassCSS);
    }
  }
  canInputValue(value) {
    if (this.isEmpty(value)) {
      return false;
    }
    const isDigitsValue = /^[0-9]+$/.test(value.toString());
    return isDigitsValue || this.isCharsCode || this.isNonDigitsCode;
  }
  setStateForInput(input, state) {
    const index = this.inputs.indexOf(input);
    if (index < 0) {
      return;
    }
    this.inputsStates[index] = state;
  }
  getStateForInput(input) {
    const index = this.inputs.indexOf(input);
    return this.inputsStates[index];
  }
  isEmpty(value) {
    return value === null || value === undefined || !value.toString().length;
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function CodeInputComponent_Factory(t) {
    return new (t || CodeInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CodeInputComponentConfigToken, 8));
  };
  /** @nocollapse */
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CodeInputComponent,
    selectors: [["code-input"]],
    viewQuery: function CodeInputComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputsList = _t);
      }
    },
    inputs: {
      codeLength: "codeLength",
      inputType: "inputType",
      inputMode: "inputMode",
      initialFocusField: "initialFocusField",
      isNonDigitsCode: "isNonDigitsCode",
      isCharsCode: "isCharsCode",
      isCodeHidden: "isCodeHidden",
      isPrevFocusableAfterClearing: "isPrevFocusableAfterClearing",
      isFocusingOnLastByClickIfFilled: "isFocusingOnLastByClickIfFilled",
      code: "code",
      disabled: "disabled",
      autocapitalize: "autocapitalize"
    },
    outputs: {
      codeChanged: "codeChanged",
      codeCompleted: "codeCompleted"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    consts: [[3, "code-hidden", 4, "ngFor", "ngForOf"], ["autocomplete", "one-time-code", 3, "type", "disabled", "click", "paste", "input", "keydown"], ["input", ""]],
    template: function CodeInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CodeInputComponent_span_0_Template, 3, 6, "span", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.placeholders);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: ["[_nghost-%COMP%]{--text-security-type: disc;--item-spacing: 4px;--item-height: 4.375em;--item-border: 1px solid #dddddd;--item-border-bottom: 1px solid #dddddd;--item-border-has-value: 1px solid #dddddd;--item-border-bottom-has-value: 1px solid #dddddd;--item-border-focused: 1px solid #dddddd;--item-border-bottom-focused: 1px solid #dddddd;--item-shadow-focused: 0px 1px 5px rgba(221, 221, 221, 1);--item-border-radius: 5px;--item-background: transparent;--item-font-weight: 300;--color: #171516;display:flex;transform:translateZ(0);font-size:inherit;color:var(--color)}[_nghost-%COMP%]   span[_ngcontent-%COMP%]{display:block;flex:1;padding-right:var(--item-spacing)}[_nghost-%COMP%]   span[_ngcontent-%COMP%]:first-child{padding-left:var(--item-spacing)}[_nghost-%COMP%]   span.code-hidden[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{text-security:var(--text-security-type);-webkit-text-security:var(--text-security-type);-moz-text-security:var(--text-security-type)}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:var(--item-height);color:inherit;background:var(--item-background);text-align:center;font-size:inherit;font-weight:var(--item-font-weight);border:var(--item-border);border-bottom:var(--item-border-bottom);border-radius:var(--item-border-radius);-webkit-appearance:none;transform:translateZ(0);-webkit-transform:translate3d(0,0,0);outline:none}[_nghost-%COMP%]   input.has-value[_ngcontent-%COMP%]{border:var(--item-border-has-value);border-bottom:var(--item-border-bottom-has-value)}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus{border:var(--item-border-focused);border-bottom:var(--item-border-bottom-focused);box-shadow:var(--item-shadow-focused)}"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CodeInputComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'code-input',
      template: "<span *ngFor=\"let holder of placeholders; index as i\"\n      [class.code-hidden]=\"isCodeHidden\">\n  <input #input\n         (click)=\"onClick($event)\"\n         (paste)=\"onPaste($event, i)\"\n         (input)=\"onInput($event, i)\"\n         (keydown)=\"onKeydown($event, i)\"\n         [type]=\"inputType\"\n         [disabled]=\"disabled\"\n         [attr.inputmode]=\"inputMode\"\n         [attr.autocapitalize]=\"autocapitalize\"\n         autocomplete=\"one-time-code\"/>\n</span>\n",
      styles: [":host{--text-security-type: disc;--item-spacing: 4px;--item-height: 4.375em;--item-border: 1px solid #dddddd;--item-border-bottom: 1px solid #dddddd;--item-border-has-value: 1px solid #dddddd;--item-border-bottom-has-value: 1px solid #dddddd;--item-border-focused: 1px solid #dddddd;--item-border-bottom-focused: 1px solid #dddddd;--item-shadow-focused: 0px 1px 5px rgba(221, 221, 221, 1);--item-border-radius: 5px;--item-background: transparent;--item-font-weight: 300;--color: #171516;display:flex;transform:translateZ(0);font-size:inherit;color:var(--color)}:host span{display:block;flex:1;padding-right:var(--item-spacing)}:host span:first-child{padding-left:var(--item-spacing)}:host span.code-hidden input{text-security:var(--text-security-type);-webkit-text-security:var(--text-security-type);-moz-text-security:var(--text-security-type)}:host input{width:100%;height:var(--item-height);color:inherit;background:var(--item-background);text-align:center;font-size:inherit;font-weight:var(--item-font-weight);border:var(--item-border);border-bottom:var(--item-border-bottom);border-radius:var(--item-border-radius);-webkit-appearance:none;transform:translateZ(0);-webkit-transform:translate3d(0,0,0);outline:none}:host input.has-value{border:var(--item-border-has-value);border-bottom:var(--item-border-bottom-has-value)}:host input:focus{border:var(--item-border-focused);border-bottom:var(--item-border-bottom-focused);box-shadow:var(--item-shadow-focused)}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [CodeInputComponentConfigToken]
      }]
    }];
  }, {
    inputsList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChildren,
      args: ['input']
    }],
    codeLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inputType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inputMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    initialFocusField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isNonDigitsCode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isCharsCode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isCodeHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isPrevFocusableAfterClearing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isFocusingOnLastByClickIfFilled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    code: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    autocapitalize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    codeChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    codeCompleted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
class CodeInputModule {
  static forRoot(config) {
    return {
      ngModule: CodeInputModule,
      providers: [{
        provide: CodeInputComponentConfigToken,
        useValue: config
      }]
    };
  }
  /** @nocollapse */
  static #_ = this.ɵfac = function CodeInputModule_Factory(t) {
    return new (t || CodeInputModule)();
  };
  /** @nocollapse */
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CodeInputModule
  });
  /** @nocollapse */
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CodeInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [CodeInputComponent],
      exports: [CodeInputComponent]
    }]
  }], null, null);
})();

/*
 * Public API Surface of code-input
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8667:
/*!*************************************************************!*\
  !*** ./node_modules/ng-recaptcha/fesm2022/ng-recaptcha.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECAPTCHA_BASE_URL: () => (/* binding */ RECAPTCHA_BASE_URL),
/* harmony export */   RECAPTCHA_LANGUAGE: () => (/* binding */ RECAPTCHA_LANGUAGE),
/* harmony export */   RECAPTCHA_NONCE: () => (/* binding */ RECAPTCHA_NONCE),
/* harmony export */   RECAPTCHA_SETTINGS: () => (/* binding */ RECAPTCHA_SETTINGS),
/* harmony export */   RECAPTCHA_V3_SITE_KEY: () => (/* binding */ RECAPTCHA_V3_SITE_KEY),
/* harmony export */   ReCaptchaV3Service: () => (/* binding */ ReCaptchaV3Service),
/* harmony export */   RecaptchaComponent: () => (/* binding */ RecaptchaComponent),
/* harmony export */   RecaptchaFormsModule: () => (/* binding */ RecaptchaFormsModule),
/* harmony export */   RecaptchaLoaderService: () => (/* binding */ RecaptchaLoaderService),
/* harmony export */   RecaptchaModule: () => (/* binding */ RecaptchaModule),
/* harmony export */   RecaptchaV3Module: () => (/* binding */ RecaptchaV3Module),
/* harmony export */   RecaptchaValueAccessorDirective: () => (/* binding */ RecaptchaValueAccessorDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);





const RECAPTCHA_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-language");
const RECAPTCHA_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-base-url");
const RECAPTCHA_NONCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-nonce-tag");
const RECAPTCHA_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-settings");
const RECAPTCHA_V3_SITE_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-v3-site-key");
function loadScript(renderMode, onLoaded, urlParams, url, nonce) {
  window.ng2recaptchaloaded = () => {
    onLoaded(grecaptcha);
  };
  const script = document.createElement("script");
  script.innerHTML = "";
  const baseUrl = url || "https://www.google.com/recaptcha/api.js";
  script.src = `${baseUrl}?render=${renderMode}&onload=ng2recaptchaloaded${urlParams}`;
  if (nonce) {
    script.setAttribute('nonce', nonce);
  }
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}
const loader = {
  loadScript
};
class RecaptchaLoaderService {
  /**
   * @internal
   * @nocollapse
   */
  static #_ = this.ready = null;
  constructor(
  // eslint-disable-next-line @typescript-eslint/ban-types
  platformId, language, baseUrl, nonce, v3SiteKey) {
    this.platformId = platformId;
    this.language = language;
    this.baseUrl = baseUrl;
    this.nonce = nonce;
    this.v3SiteKey = v3SiteKey;
    this.init();
    this.ready = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) ? RecaptchaLoaderService.ready.asObservable() : (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)();
  }
  /** @internal */
  init() {
    if (RecaptchaLoaderService.ready) {
      return;
    }
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
      RecaptchaLoaderService.ready = subject;
      const langParam = this.language ? "&hl=" + this.language : "";
      const renderMode = this.v3SiteKey || "explicit";
      loader.loadScript(renderMode, grecaptcha => subject.next(grecaptcha), langParam, this.baseUrl, this.nonce);
    }
  }
  static #_2 = this.ɵfac = function RecaptchaLoaderService_Factory(t) {
    return new (t || RecaptchaLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_LANGUAGE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_BASE_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_NONCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_V3_SITE_KEY, 8));
  };
  static #_3 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RecaptchaLoaderService,
    factory: RecaptchaLoaderService.ɵfac
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaLoaderService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_LANGUAGE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_BASE_URL]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_NONCE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_V3_SITE_KEY]
      }]
    }];
  }, null);
})();
let nextId = 0;
class RecaptchaComponent {
  constructor(elementRef, loader, zone, settings) {
    this.elementRef = elementRef;
    this.loader = loader;
    this.zone = zone;
    this.id = `ngrecaptcha-${nextId++}`;
    this.errorMode = "default";
    this.resolved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * @deprecated `(error) output will be removed in the next major version. Use (errored) instead
     */
    // eslint-disable-next-line @angular-eslint/no-output-native
    this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.errored = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    if (settings) {
      this.siteKey = settings.siteKey;
      this.theme = settings.theme;
      this.type = settings.type;
      this.size = settings.size;
      this.badge = settings.badge;
    }
  }
  ngAfterViewInit() {
    this.subscription = this.loader.ready.subscribe(grecaptcha => {
      if (grecaptcha != null && grecaptcha.render instanceof Function) {
        this.grecaptcha = grecaptcha;
        this.renderRecaptcha();
      }
    });
  }
  ngOnDestroy() {
    // reset the captcha to ensure it does not leave anything behind
    // after the component is no longer needed
    this.grecaptchaReset();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  /**
   * Executes the invisible recaptcha.
   * Does nothing if component's size is not set to "invisible".
   */
  execute() {
    if (this.size !== "invisible") {
      return;
    }
    if (this.widget != null) {
      void this.grecaptcha.execute(this.widget);
    } else {
      // delay execution of recaptcha until it actually renders
      this.executeRequested = true;
    }
  }
  reset() {
    if (this.widget != null) {
      if (this.grecaptcha.getResponse(this.widget)) {
        // Only emit an event in case if something would actually change.
        // That way we do not trigger "touching" of the control if someone does a "reset"
        // on a non-resolved captcha.
        this.resolved.emit(null);
      }
      this.grecaptchaReset();
    }
  }
  /**
   * ⚠️ Warning! Use this property at your own risk!
   *
   * While this member is `public`, it is not a part of the component's public API.
   * The semantic versioning guarantees _will not be honored_! Thus, you might find that this property behavior changes in incompatible ways in minor or even patch releases.
   * You are **strongly advised** against using this property.
   * Instead, use more idiomatic ways to get reCAPTCHA value, such as `resolved` EventEmitter, or form-bound methods (ngModel, formControl, and the likes).å
   */
  get __unsafe_widgetValue() {
    return this.widget != null ? this.grecaptcha.getResponse(this.widget) : null;
  }
  /** @internal */
  expired() {
    this.resolved.emit(null);
  }
  /** @internal */
  onError(args) {
    this.error.emit(args);
    this.errored.emit(args);
  }
  /** @internal */
  captchaResponseCallback(response) {
    this.resolved.emit(response);
  }
  /** @internal */
  grecaptchaReset() {
    if (this.widget != null) {
      this.zone.runOutsideAngular(() => this.grecaptcha.reset(this.widget));
    }
  }
  /** @internal */
  renderRecaptcha() {
    // This `any` can be removed after @types/grecaptcha get updated
    const renderOptions = {
      badge: this.badge,
      callback: response => {
        this.zone.run(() => this.captchaResponseCallback(response));
      },
      "expired-callback": () => {
        this.zone.run(() => this.expired());
      },
      sitekey: this.siteKey,
      size: this.size,
      tabindex: this.tabIndex,
      theme: this.theme,
      type: this.type
    };
    if (this.errorMode === "handled") {
      renderOptions["error-callback"] = (...args) => {
        this.zone.run(() => this.onError(args));
      };
    }
    this.widget = this.grecaptcha.render(this.elementRef.nativeElement, renderOptions);
    if (this.executeRequested === true) {
      this.executeRequested = false;
      this.execute();
    }
  }
  static #_ = this.ɵfac = function RecaptchaComponent_Factory(t) {
    return new (t || RecaptchaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RecaptchaLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RECAPTCHA_SETTINGS, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RecaptchaComponent,
    selectors: [["re-captcha"]],
    hostVars: 1,
    hostBindings: function RecaptchaComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
      }
    },
    inputs: {
      id: "id",
      siteKey: "siteKey",
      theme: "theme",
      type: "type",
      size: "size",
      tabIndex: "tabIndex",
      badge: "badge",
      errorMode: "errorMode"
    },
    outputs: {
      resolved: "resolved",
      error: "error",
      errored: "errored"
    },
    exportAs: ["reCaptcha"],
    decls: 0,
    vars: 0,
    template: function RecaptchaComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      exportAs: "reCaptcha",
      selector: "re-captcha",
      template: ``
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: RecaptchaLoaderService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_SETTINGS]
      }]
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["attr.id"]
    }],
    siteKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    badge: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    errorMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resolved: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    error: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    errored: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class RecaptchaCommonModule {
  static #_ = this.ɵfac = function RecaptchaCommonModule_Factory(t) {
    return new (t || RecaptchaCommonModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: RecaptchaCommonModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaCommonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [RecaptchaComponent],
      exports: [RecaptchaComponent]
    }]
  }], null, null);
})();
class RecaptchaModule {
  static #_ = this.ɵfac = function RecaptchaModule_Factory(t) {
    return new (t || RecaptchaModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: RecaptchaModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [RecaptchaLoaderService],
    imports: [RecaptchaCommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [RecaptchaComponent],
      imports: [RecaptchaCommonModule],
      providers: [RecaptchaLoaderService]
    }]
  }], null, null);
})();

/**
 * The main service for working with reCAPTCHA v3 APIs.
 *
 * Use the `execute` method for executing a single action, and
 * `onExecute` observable for listening to all actions at once.
 */
class ReCaptchaV3Service {
  constructor(zone, siteKey,
  // eslint-disable-next-line @typescript-eslint/ban-types
  platformId, baseUrl, nonce, language) {
    /** @internal */
    this.onLoadComplete = grecaptcha => {
      this.grecaptcha = grecaptcha;
      if (this.actionBacklog && this.actionBacklog.length > 0) {
        this.actionBacklog.forEach(([action, subject]) => this.executeActionWithSubject(action, subject));
        this.actionBacklog = undefined;
      }
    };
    this.zone = zone;
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(platformId);
    this.siteKey = siteKey;
    this.nonce = nonce;
    this.language = language;
    this.baseUrl = baseUrl;
    this.init();
  }
  get onExecute() {
    if (!this.onExecuteSubject) {
      this.onExecuteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.onExecuteObservable = this.onExecuteSubject.asObservable();
    }
    return this.onExecuteObservable;
  }
  get onExecuteError() {
    if (!this.onExecuteErrorSubject) {
      this.onExecuteErrorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.onExecuteErrorObservable = this.onExecuteErrorSubject.asObservable();
    }
    return this.onExecuteErrorObservable;
  }
  /**
   * Executes the provided `action` with reCAPTCHA v3 API.
   * Use the emitted token value for verification purposes on the backend.
   *
   * For more information about reCAPTCHA v3 actions and tokens refer to the official documentation at
   * https://developers.google.com/recaptcha/docs/v3.
   *
   * @param {string} action the action to execute
   * @returns {Observable<string>} an `Observable` that will emit the reCAPTCHA v3 string `token` value whenever ready.
   * The returned `Observable` completes immediately after emitting a value.
   */
  execute(action) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    if (this.isBrowser) {
      if (!this.grecaptcha) {
        if (!this.actionBacklog) {
          this.actionBacklog = [];
        }
        this.actionBacklog.push([action, subject]);
      } else {
        this.executeActionWithSubject(action, subject);
      }
    }
    return subject.asObservable();
  }
  /** @internal */
  executeActionWithSubject(action, subject) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onError = error => {
      this.zone.run(() => {
        subject.error(error);
        if (this.onExecuteErrorSubject) {
          // We don't know any better at this point, unfortunately, so have to resort to `any`
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          this.onExecuteErrorSubject.next({
            action,
            error
          });
        }
      });
    };
    this.zone.runOutsideAngular(() => {
      try {
        this.grecaptcha.execute(this.siteKey, {
          action
        }).then(token => {
          this.zone.run(() => {
            subject.next(token);
            subject.complete();
            if (this.onExecuteSubject) {
              this.onExecuteSubject.next({
                action,
                token
              });
            }
          });
        }, onError);
      } catch (e) {
        onError(e);
      }
    });
  }
  /** @internal */
  init() {
    if (this.isBrowser) {
      if ("grecaptcha" in window) {
        this.grecaptcha = grecaptcha;
      } else {
        const langParam = this.language ? "&hl=" + this.language : "";
        loader.loadScript(this.siteKey, this.onLoadComplete, langParam, this.baseUrl, this.nonce);
      }
    }
  }
  static #_ = this.ɵfac = function ReCaptchaV3Service_Factory(t) {
    return new (t || ReCaptchaV3Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_V3_SITE_KEY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_BASE_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_NONCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_LANGUAGE, 8));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ReCaptchaV3Service,
    factory: ReCaptchaV3Service.ɵfac
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReCaptchaV3Service, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_V3_SITE_KEY]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_BASE_URL]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_NONCE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_LANGUAGE]
      }]
    }];
  }, null);
})();
class RecaptchaV3Module {
  static #_ = this.ɵfac = function RecaptchaV3Module_Factory(t) {
    return new (t || RecaptchaV3Module)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: RecaptchaV3Module
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [ReCaptchaV3Service]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaV3Module, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      providers: [ReCaptchaV3Service]
    }]
  }], null, null);
})();
class RecaptchaValueAccessorDirective {
  constructor(host) {
    this.host = host;
    this.requiresControllerReset = false;
  }
  writeValue(value) {
    if (!value) {
      this.host.reset();
    } else {
      // In this case, it is most likely that a form controller has requested to write a specific value into the component.
      // This isn't really a supported case - reCAPTCHA values are single-use, and, in a sense, readonly.
      // What this means is that the form controller has recaptcha control state of X, while reCAPTCHA itself can't "restore"
      // to that state. In order to make form controller aware of this discrepancy, and to fix the said misalignment,
      // we'll be telling the controller to "reset" the value back to null.
      if (this.host.__unsafe_widgetValue !== value && Boolean(this.host.__unsafe_widgetValue) === false) {
        this.requiresControllerReset = true;
      }
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
    if (this.requiresControllerReset) {
      this.requiresControllerReset = false;
      this.onChange(null);
    }
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  onResolve($event) {
    if (this.onChange) {
      this.onChange($event);
    }
    if (this.onTouched) {
      this.onTouched();
    }
  }
  static #_ = this.ɵfac = function RecaptchaValueAccessorDirective_Factory(t) {
    return new (t || RecaptchaValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RecaptchaComponent));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: RecaptchaValueAccessorDirective,
    selectors: [["re-captcha", "formControlName", ""], ["re-captcha", "formControl", ""], ["re-captcha", "ngModel", ""]],
    hostBindings: function RecaptchaValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resolved", function RecaptchaValueAccessorDirective_resolved_HostBindingHandler($event) {
          return ctx.onResolve($event);
        });
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      multi: true,
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => RecaptchaValueAccessorDirective)
    }])]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaValueAccessorDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      providers: [{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => RecaptchaValueAccessorDirective)
      }],
      selector: "re-captcha[formControlName],re-captcha[formControl],re-captcha[ngModel]"
    }]
  }], function () {
    return [{
      type: RecaptchaComponent
    }];
  }, {
    onResolve: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ["resolved", ["$event"]]
    }]
  });
})();
class RecaptchaFormsModule {
  static #_ = this.ɵfac = function RecaptchaFormsModule_Factory(t) {
    return new (t || RecaptchaFormsModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: RecaptchaFormsModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, RecaptchaCommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaFormsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [RecaptchaValueAccessorDirective],
      exports: [RecaptchaValueAccessorDirective],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, RecaptchaCommonModule]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_verify-identity_verify-identity_module_ts.js.map