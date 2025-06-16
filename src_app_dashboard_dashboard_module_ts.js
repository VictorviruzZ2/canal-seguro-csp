"use strict";
(self["webpackChunkinsurance_channel"] = self["webpackChunkinsurance_channel"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 9556:
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/frame-modal/frame-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrameModalComponent: () => (/* binding */ FrameModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _shared_services_download_file_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/download-file.service */ 3095);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6515);







class FrameModalComponent {
  constructor(data, sanitizer, downloadFileService) {
    this.data = data;
    this.sanitizer = sanitizer;
    this.downloadFileService = downloadFileService;
  }
  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`data:application/pdf;base64,${this.data.base64Pdf}`);
  }
  downloadPdf() {
    this.downloadFileService.downloadPdfFile(this.data.base64Pdf);
  }
  static #_ = this.ɵfac = function FrameModalComponent_Factory(t) {
    return new (t || FrameModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_download_file_service__WEBPACK_IMPORTED_MODULE_0__.DownloadFileService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FrameModalComponent,
    selectors: [["app-frame-modal"]],
    decls: 15,
    vars: 1,
    consts: [["mat-dialog-title", "", 1, "text-lg", "uppercase", "text-[#e91c89]"], [1, "mat-typography"], [1, "iframe-container"], [1, "responsive-iframe", 3, "src"], ["align", "end"], ["mat-button", "", "color", "accent", "mat-dialog-close", ""], [1, "text-[#0f5dac]"], ["mat-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], [1, "text-[#e91c89]"]],
    template: function FrameModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-dialog-content", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-dialog-actions", 4)(5, "button", 5)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FrameModalComponent_Template_button_click_10_listener() {
          return ctx.downloadPdf();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Descargar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.safeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
    styles: [".iframe-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%; \n\n}\n\n\n\n.responsive-iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRklFJTIwVEFSRUFTJTIwMDYtMTYlMjBBSlVTVEUlMjBGNSUyMFNPU1RFTklCSUxJREFEXFxtc2EtaW5zdXJhbmNlY2hhbm5lbC12aWV3XFxzcmNcXGluc3VyYW5jZS1jaGFubmVsXFxzcmNcXGFwcFxcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxmcmFtZS1tb2RhbFxcZnJhbWUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBLEVBQUEsZ0RBQUE7QUNDRjs7QURFQSxpRkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJmcmFtZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pZnJhbWUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogNTYuMjUlOyAvKiAxNjo5IEFzcGVjdCBSYXRpbyAoZGl2aWRlIDkgYnkgMTYgPSAwLjU2MjUpICovXHJcbn1cclxuXHJcbi8qIFRoZW4gc3R5bGUgdGhlIGlmcmFtZSB0byBmaXQgaW4gdGhlIGNvbnRhaW5lciBkaXYgd2l0aCBmdWxsIGhlaWdodCBhbmQgd2lkdGggKi9cclxuLnJlc3BvbnNpdmUtaWZyYW1lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iLCIuaWZyYW1lLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1Ni4yNSU7IC8qIDE2OjkgQXNwZWN0IFJhdGlvIChkaXZpZGUgOSBieSAxNiA9IDAuNTYyNSkgKi9cbn1cblxuLyogVGhlbiBzdHlsZSB0aGUgaWZyYW1lIHRvIGZpdCBpbiB0aGUgY29udGFpbmVyIGRpdiB3aXRoIGZ1bGwgaGVpZ2h0IGFuZCB3aWR0aCAqL1xuLnJlc3BvbnNpdmUtaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZnJhbWUtbW9kYWwvZnJhbWUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9GSUUlMjBUQVJFQVMlMjAwNi0xNiUyMEFKVVNURSUyMEY1JTIwU09TVEVOSUJJTElEQUQvbXNhLWluc3VyYW5jZWNoYW5uZWwtdmlldy9zcmMvaW5zdXJhbmNlLWNoYW5uZWwvc3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9mcmFtZS1tb2RhbC9mcmFtZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUEsRUFBQSxnREFBQTtBQ0NGOztBREVBLGlGQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0EsZ3ZEQUFndkQiLCJzb3VyY2VzQ29udGVudCI6WyIuaWZyYW1lLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDU2LjI1JTsgLyogMTY6OSBBc3BlY3QgUmF0aW8gKGRpdmlkZSA5IGJ5IDE2ID0gMC41NjI1KSAqL1xyXG59XHJcblxyXG4vKiBUaGVuIHN0eWxlIHRoZSBpZnJhbWUgdG8gZml0IGluIHRoZSBjb250YWluZXIgZGl2IHdpdGggZnVsbCBoZWlnaHQgYW5kIHdpZHRoICovXHJcbi5yZXNwb25zaXZlLWlmcmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIiwiLmlmcmFtZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNTYuMjUlOyAvKiAxNjo5IEFzcGVjdCBSYXRpbyAoZGl2aWRlIDkgYnkgMTYgPSAwLjU2MjUpICovXG59XG5cbi8qIFRoZW4gc3R5bGUgdGhlIGlmcmFtZSB0byBmaXQgaW4gdGhlIGNvbnRhaW5lciBkaXYgd2l0aCBmdWxsIGhlaWdodCBhbmQgd2lkdGggKi9cbi5yZXNwb25zaXZlLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3934:
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/components/insurance-panel-item/insurance-panel-item.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsurancePanelItemComponent: () => (/* binding */ InsurancePanelItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _frame_modal_frame_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frame-modal/frame-modal.component */ 9556);
/* harmony import */ var src_app_shared_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/store */ 655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ 7841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _shared_services_download_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/download-file.service */ 3095);
/* harmony import */ var _services_insurance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/insurance.service */ 8224);
/* harmony import */ var _shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/sidenav.service */ 87);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6575);













function InsurancePanelItemComponent_tr_21_span_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InsurancePanelItemComponent_tr_21_span_15_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.certificateActions(item_r1, "V"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "svg", 21)(2, "defs")(3, "linearGradient", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "stop", 17)(5, "stop", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "path", 23)(7, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function InsurancePanelItemComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 8)(1, "td", 9)(2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 9)(5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 9)(8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 9)(11, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 9)(14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, InsurancePanelItemComponent_tr_21_span_15_Template, 8, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InsurancePanelItemComponent_tr_21_Template_span_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.certificateActions(item_r1, "D"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "svg", 15)(18, "defs")(19, "linearGradient", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "stop", 17)(21, "stop", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.document);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.affiliationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isMobile);
  }
}
class InsurancePanelItemComponent {
  constructor(dialog, store, downloadFileService, insuranceService, sidenavService) {
    this.dialog = dialog;
    this.store = store;
    this.downloadFileService = downloadFileService;
    this.insuranceService = insuranceService;
    this.sidenavService = sidenavService;
    this.insurance = [];
    this.dataSource = [];
    this.displayedColumns = ['NO.', 'TITULAR', 'CÉDULA DE IDENTIDAD', 'FECHA AFILIACIÓN', 'OPCIONES'];
  }
  get isMobile() {
    return this.sidenavService.isMobile;
  }
  ngOnInit() {
    this.dataSource = this.insurance.map((insured, index) => ({
      number: index + 1,
      userCode: insured.userCode,
      fullName: insured.fullName,
      document: insured.document,
      insuredCode: insured.insuredCode,
      certificateNumber: insured.certificateNumber,
      affiliationDate: insured.affiliationDate
    }));
  }
  certificateActions(insured, option) {
    const {
      insuredCode,
      certificateNumber
    } = insured;
    this.store.select(src_app_shared_store__WEBPACK_IMPORTED_MODULE_1__.TokenSelectors.token).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(token => this.insuranceService.reprintInsuranceCertificate({
      insuredCode,
      certificateNumber
    }, token)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(certificate => {
      if (option === 'V') {
        this.dialog.open(_frame_modal_frame_modal_component__WEBPACK_IMPORTED_MODULE_0__.FrameModalComponent, {
          data: {
            base64Pdf: certificate
          },
          width: '80%',
          disableClose: true,
          hasBackdrop: true,
          backdropClass: 'blurred-backdrop',
          panelClass: 'transparent-dialog-panel'
        });
      }
      if (option === 'D') {
        this.downloadFileService.downloadPdfFile(certificate);
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
      this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_2__.InsuredActions.loadInsuranceFailure({
        httpStatus: error.status,
        error: error.error?.message
      }));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(null);
    })).subscribe();
  }
  static #_ = this.ɵfac = function InsurancePanelItemComponent_Factory(t) {
    return new (t || InsurancePanelItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_download_file_service__WEBPACK_IMPORTED_MODULE_3__.DownloadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_insurance_service__WEBPACK_IMPORTED_MODULE_4__.InsuranceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__.SidenavService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: InsurancePanelItemComponent,
    selectors: [["app-insurance-panel-item"]],
    viewQuery: function InsurancePanelItemComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      }
    },
    inputs: {
      insurance: "insurance"
    },
    decls: 28,
    vars: 3,
    consts: [[1, "w-full", "my-3"], [1, "relative", "flex", "flex-col", "w-full", "h-full", "text-gray-700", "bg-white", "shadow-md", "rounded-lg", "bg-clip-border"], [1, "w-full", "text-left", "table-auto", "min-w-max"], [1, "p-4", "border-b", "border-slate-200", "bg-zinc-200"], [1, "uppercase", "text-lg", "font-normal", "leading-none", "text-[#0f5dac]"], ["class", "hover:bg-slate-50 border-b border-slate-200", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "items-center", "px-4", "py-3"], [1, "text-md", "text-slate-500", "ml-4"], [1, "hover:bg-slate-50", "border-b", "border-slate-200"], [1, "p-4", "py-5"], [1, "block", "font-[200]", "text-lg", "text-slate-800"], [1, "text-lg", "font-[200]", "uppercase", "text-[#5c5c5c]"], [1, "flex", "justify-start", "items-center", "gap-5"], ["class", "cursor-pointer", "title", "Ver certificado", 3, "click", 4, "ngIf"], ["title", "Descargar certificado", 1, "cursor-pointer", "text-black", 3, "click"], ["id", "download_black_24dp", "xmlns", "http://www.w3.org/2000/svg", "width", "20px", "height", "20px", "viewBox", "0 0 11.175 13.569", "fill", "currentColor"], ["id", "grad2", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", 2, "stop-color", "#e91c89", "stop-opacity", "1"], ["offset", "100%", 2, "stop-color", "#0f5dac", "stop-opacity", "1"], ["id", "Trazado_654", "data-name", "Trazado 654", "d", "M5,16.569H16.175v-1.6H5Zm11.175-8.78H12.982V3H8.193V7.789H5l5.587,5.587Z", "transform", "translate(-5 -3)", "fill", "url(#grad2)"], ["title", "Ver certificado", 1, "cursor-pointer", 3, "click"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "none", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-gradient", "dark:text-white"], ["id", "grad1", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["stroke", "url(#grad1)", "stroke-width", "2", "d", "M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"], ["stroke", "url(#grad1)", "stroke-width", "2", "d", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"]],
    template: function InsurancePanelItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "table", 2)(3, "thead")(4, "tr")(5, "th", 3)(6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 3)(9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Titular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 3)(12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " C\u00E9dula de Identidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th", 3)(15, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Fecha Afiliaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 3)(18, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Acciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, InsurancePanelItemComponent_tr_21_Template, 23, 5, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " Mostrando ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("1 - ", ctx.dataSource.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" de ", ctx.dataSource.length, " resultado/s ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN1cmFuY2UtcGFuZWwtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvaW5zdXJhbmNlLXBhbmVsLWl0ZW0vaW5zdXJhbmNlLXBhbmVsLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9MQUFvTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7852:
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/insurance-panel/insurance-panel.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsurancePanelComponent: () => (/* binding */ InsurancePanelComponent)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ 7841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _insurance_panel_item_insurance_panel_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../insurance-panel-item/insurance-panel-item.component */ 3934);








function InsurancePanelComponent_mat_tab_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Seguro M\u00E1xima Protecci\u00F3n ");
  }
}
function InsurancePanelComponent_mat_tab_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InsurancePanelComponent_mat_tab_3_ng_template_1_Template, 3, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-insurance-panel-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("insurance", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r0.maximumProtectionInsurance$));
  }
}
function InsurancePanelComponent_mat_tab_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "diversity_1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Seguro Vida Familia ");
  }
}
function InsurancePanelComponent_mat_tab_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InsurancePanelComponent_mat_tab_5_ng_template_1_Template, 3, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-insurance-panel-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("insurance", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r1.familyLifeInsurance$));
  }
}
function InsurancePanelComponent_mat_tab_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "diversity_3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Seguro Inclusivo ");
  }
}
function InsurancePanelComponent_mat_tab_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InsurancePanelComponent_mat_tab_7_ng_template_1_Template, 3, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-insurance-panel-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("insurance", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r2.xsInsurance$));
  }
}
function InsurancePanelComponent_mat_tab_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "diversity_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Seguro Oncol\u00F3gico ");
  }
}
function InsurancePanelComponent_mat_tab_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InsurancePanelComponent_mat_tab_9_ng_template_1_Template, 3, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-insurance-panel-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("insurance", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r3.oncologicalInsurance$));
  }
}
function InsurancePanelComponent_mat_tab_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "diversity_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Seguro SAP ");
  }
}
function InsurancePanelComponent_mat_tab_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InsurancePanelComponent_mat_tab_11_ng_template_1_Template, 3, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-insurance-panel-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("insurance", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx_r4.sapInsurance$));
  }
}
class InsurancePanelComponent {
  constructor(store) {
    this.store = store;
    this.maximumProtectionInsurance$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_0__.InsuredSelectors.maximumProtectionInsurance);
    this.familyLifeInsurance$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_0__.InsuredSelectors.familyLifeInsurance);
    this.oncologicalInsurance$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_0__.InsuredSelectors.oncologicalInsurance);
    this.xsInsurance$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_0__.InsuredSelectors.xsInsurance);
    this.sapInsurance$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_0__.InsuredSelectors.sapInsurance);
  }
  ngOnInit() {
    this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.InsuredActions.loadInsurance());
  }
  static #_ = this.ɵfac = function InsurancePanelComponent_Factory(t) {
    return new (t || InsurancePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: InsurancePanelComponent,
    selectors: [["app-insurance-panel"]],
    decls: 13,
    vars: 15,
    consts: [[1, "bg-transparent"], ["mat-align-tabs", "center"], [4, "ngIf"], ["mat-tab-label", ""], [3, "insurance"], [1, "mr-2"]],
    template: function InsurancePanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content", 0)(2, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, InsurancePanelComponent_mat_tab_3_Template, 4, 3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, InsurancePanelComponent_mat_tab_5_Template, 4, 3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, InsurancePanelComponent_mat_tab_7_Template, 4, 3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, InsurancePanelComponent_mat_tab_9_Template, 4, 3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, InsurancePanelComponent_mat_tab_11_Template, 4, 3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 5, ctx.maximumProtectionInsurance$)) == null ? null : tmp_0_0.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 7, ctx.familyLifeInsurance$)) == null ? null : tmp_1_0.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 9, ctx.xsInsurance$)) == null ? null : tmp_2_0.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 11, ctx.oncologicalInsurance$)) == null ? null : tmp_3_0.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 13, ctx.sapInsurance$)) == null ? null : tmp_4_0.length) > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabGroup, _insurance_panel_item_insurance_panel_item_component__WEBPACK_IMPORTED_MODULE_1__.InsurancePanelItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN1cmFuY2UtcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvaW5zdXJhbmNlLXBhbmVsL2luc3VyYW5jZS1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8802:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRoutingModule: () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 4225);
/* harmony import */ var _pages_my_insurance_my_insurance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/my-insurance/my-insurance.component */ 6887);
/* harmony import */ var _pages_digital_products_digital_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/digital-products/digital-products.component */ 2448);
/* harmony import */ var _pages_digital_services_digital_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/digital-services/digital-services.component */ 8594);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/not-found/not-found.component */ 4740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);








const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
  children: [{
    path: 'my-insurance',
    component: _pages_my_insurance_my_insurance_component__WEBPACK_IMPORTED_MODULE_1__.MyInsuranceComponent
  }, {
    path: 'digital-products',
    component: _pages_digital_products_digital_products_component__WEBPACK_IMPORTED_MODULE_2__.DigitalProductsComponent
  }, {
    path: 'digital-services',
    component: _pages_digital_services_digital_services_component__WEBPACK_IMPORTED_MODULE_3__.DigitalServicesComponent
  }, {
    path: '**',
    component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent
  }]
}];
class DashboardRoutingModule {
  static #_ = this.ɵfac = function DashboardRoutingModule_Factory(t) {
    return new (t || DashboardRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: DashboardRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 4225:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/toolbar/toolbar.component */ 5226);


class DashboardComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 1,
    vars: 0,
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-toolbar");
      }
    },
    dependencies: [_shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent],
    styles: [".mdc-tab__text-label {\n  font-size: 1rem;\n  line-height: 1.75rem;\n  text-transform: uppercase;\n}\n\n  .mat-mdc-table .mat-mdc-header-cell {\n  font-size: 1rem !important;\n  text-transform: uppercase !important;\n  color: #0f5dac;\n}\n\n  .mdc-data-table__row:last-child .mdc-data-table__cell {\n  border-bottom: none;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n\n.mat-tooltip.tooltip-size[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxGSUUlMjBUQVJFQVMlMjAwNi0xNiUyMEFKVVNURSUyMEY1JTIwU09TVEVOSUJJTElEQURcXG1zYS1pbnN1cmFuY2VjaGFubmVsLXZpZXdcXHNyY1xcaW5zdXJhbmNlLWNoYW5uZWxcXHNyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tZGMtdGFiX190ZXh0LWxhYmVsIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtbWRjLXRhYmxlIC5tYXQtbWRjLWhlYWRlci1jZWxsIHtcclxuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwZjVkYWM7IC8vI2U5MWM4OSAxMDAlKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tZGMtZGF0YS10YWJsZV9fcm93Omxhc3QtY2hpbGQgLm1kYy1kYXRhLXRhYmxlX19jZWxsIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubWF0LXRvb2x0aXAudG9vbHRpcC1zaXplIHtcclxuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG4iLCI6Om5nLWRlZXAgLm1kYy10YWJfX3RleHQtbGFiZWwge1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1tZGMtdGFibGUgLm1hdC1tZGMtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzBmNWRhYztcbn1cblxuOjpuZy1kZWVwIC5tZGMtZGF0YS10YWJsZV9fcm93Omxhc3QtY2hpbGQgLm1kYy1kYXRhLXRhYmxlX19jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubWF0LXRvb2x0aXAudG9vbHRpcC1zaXplIHtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0ZJRSUyMFRBUkVBUyUyMDA2LTE2JTIwQUpVU1RFJTIwRjUlMjBTT1NURU5JQklMSURBRC9tc2EtaW5zdXJhbmNlY2hhbm5lbC12aWV3L3NyYy9pbnN1cmFuY2UtY2hhbm5lbC9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtBQ0NGO0FEQ0EsNDhEQUE0OEQiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1kYy10YWJfX3RleHQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1tZGMtdGFibGUgLm1hdC1tZGMtaGVhZGVyLWNlbGwge1xyXG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzBmNWRhYzsgLy8jZTkxYzg5IDEwMCUpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1kYy1kYXRhLXRhYmxlX19yb3c6bGFzdC1jaGlsZCAubWRjLWRhdGEtdGFibGVfX2NlbGwge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5tYXQtdG9vbHRpcC50b29sdGlwLXNpemUge1xyXG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIjo6bmctZGVlcCAubWRjLXRhYl9fdGV4dC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbjo6bmctZGVlcCAubWF0LW1kYy10YWJsZSAubWF0LW1kYy1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMGY1ZGFjO1xufVxuXG46Om5nLWRlZXAgLm1kYy1kYXRhLXRhYmxlX19yb3c6bGFzdC1jaGlsZCAubWRjLWRhdGEtdGFibGVfX2NlbGwge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tYXQtdG9vbHRpcC50b29sdGlwLXNpemUge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5667:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 4225);
/* harmony import */ var _components_insurance_panel_insurance_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/insurance-panel/insurance-panel.component */ 7852);
/* harmony import */ var _components_insurance_panel_item_insurance_panel_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/insurance-panel-item/insurance-panel-item.component */ 3934);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ 8802);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material.module */ 6889);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ 7841);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _store_effects_insured_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/effects/insured.effects */ 5117);
/* harmony import */ var _pages_my_insurance_my_insurance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/my-insurance/my-insurance.component */ 6887);
/* harmony import */ var _pages_digital_products_digital_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/digital-products/digital-products.component */ 2448);
/* harmony import */ var _pages_digital_services_digital_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/digital-services/digital-services.component */ 8594);
/* harmony import */ var _components_frame_modal_frame_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/frame-modal/frame-modal.component */ 9556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);


















class DashboardModule {
  static #_ = this.ɵfac = function DashboardModule_Factory(t) {
    return new (t || DashboardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: DashboardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__.DashboardRoutingModule, _material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__.StoreModule.forFeature(_store__WEBPACK_IMPORTED_MODULE_6__.InsuredReducer.insuredActionReducerKey, _store__WEBPACK_IMPORTED_MODULE_6__.InsuredReducer.insuredReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.EffectsModule.forFeature([_store_effects_insured_effects__WEBPACK_IMPORTED_MODULE_7__.InsuredEffects])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _components_insurance_panel_insurance_panel_component__WEBPACK_IMPORTED_MODULE_1__.InsurancePanelComponent, _components_insurance_panel_item_insurance_panel_item_component__WEBPACK_IMPORTED_MODULE_2__.InsurancePanelItemComponent, _pages_my_insurance_my_insurance_component__WEBPACK_IMPORTED_MODULE_8__.MyInsuranceComponent, _pages_digital_products_digital_products_component__WEBPACK_IMPORTED_MODULE_9__.DigitalProductsComponent, _pages_digital_services_digital_services_component__WEBPACK_IMPORTED_MODULE_10__.DigitalServicesComponent, _components_frame_modal_frame_modal_component__WEBPACK_IMPORTED_MODULE_11__.FrameModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__.DashboardRoutingModule, _material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.EffectsFeatureModule]
  });
})();

/***/ }),

/***/ 2448:
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/pages/digital-products/digital-products.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigitalProductsComponent: () => (/* binding */ DigitalProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class DigitalProductsComponent {
  static #_ = this.ɵfac = function DigitalProductsComponent_Factory(t) {
    return new (t || DigitalProductsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DigitalProductsComponent,
    selectors: [["app-digital-products"]],
    decls: 2,
    vars: 0,
    template: function DigitalProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "digital-products works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWdpdGFsLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2VzL2RpZ2l0YWwtcHJvZHVjdHMvZGlnaXRhbC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8594:
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/pages/digital-services/digital-services.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigitalServicesComponent: () => (/* binding */ DigitalServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class DigitalServicesComponent {
  static #_ = this.ɵfac = function DigitalServicesComponent_Factory(t) {
    return new (t || DigitalServicesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DigitalServicesComponent,
    selectors: [["app-digital-services"]],
    decls: 2,
    vars: 0,
    template: function DigitalServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "digital-services works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWdpdGFsLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2VzL2RpZ2l0YWwtc2VydmljZXMvZGlnaXRhbC1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6887:
/*!************************************************************************!*\
  !*** ./src/app/dashboard/pages/my-insurance/my-insurance.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyInsuranceComponent: () => (/* binding */ MyInsuranceComponent)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ 7841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _shared_components_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/title-card/title-card.component */ 6065);
/* harmony import */ var _components_insurance_panel_insurance_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/insurance-panel/insurance-panel.component */ 7852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);






class MyInsuranceComponent {
  constructor(store) {
    this.store = store;
    this.customer$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_0__.InsuredSelectors.customer);
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function MyInsuranceComponent_Factory(t) {
    return new (t || MyInsuranceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MyInsuranceComponent,
    selectors: [["app-my-insurance"]],
    decls: 6,
    vars: 3,
    consts: [[1, "flex", "flex-col", "gap-4"], ["iconText", "admin_panel_settings", "principalText", "Mis Seguros", "secondText", "En esta secci\u00F3n, encontrar\u00E1s tus seguros activos. Puedes visualizarlos o descargarlos seg\u00FAn tu preferencia.", 1, "max-w-full", "lg:max-w-[60%]"], ["iconText", "account_box", "secondText", "Bienvenido/a", 1, "max-w-full", "lg:max-w-[40%]", 3, "principalText"], [1, "top-background"]],
    template: function MyInsuranceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-title-card", 1)(2, "app-title-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 3)(5, "app-insurance-panel");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("principalText", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx.customer$)) == null ? null : tmp_0_0.fullName);
      }
    },
    dependencies: [_shared_components_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_1__.TitleCardComponent, _components_insurance_panel_insurance_panel_component__WEBPACK_IMPORTED_MODULE_2__.InsurancePanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1pbnN1cmFuY2UuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2VzL215LWluc3VyYW5jZS9teS1pbnN1cmFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8224:
/*!*********************************************************!*\
  !*** ./src/app/dashboard/services/insurance.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsuranceService: () => (/* binding */ InsuranceService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





class InsuranceService {
  constructor(http) {
    this.http = http;
    this.baseApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_ENDPOINT + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.INSURANCE_API;
  }
  getInsuranceData(token) {
    return this.http.post(this.baseApiUrl + '/getInsuranceData', {}, this.getHeadersForToken(token)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp.result));
  }
  reprintInsuranceCertificate(body, token) {
    return this.http.post(this.baseApiUrl + '/reprintInsuranceCertificate', body, this.getHeadersForToken(token)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(resp => resp.result.certificate));
  }
  getHeadersForToken(token) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return {
      headers
    };
  }
  static #_ = this.ɵfac = function InsuranceService_Factory(t) {
    return new (t || InsuranceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: InsuranceService,
    factory: InsuranceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5117:
/*!************************************************************!*\
  !*** ./src/app/dashboard/store/effects/insured.effects.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsuredEffects: () => (/* binding */ InsuredEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2607);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/store */ 655);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ 7841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_insurance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/insurance.service */ 8224);
/* harmony import */ var _shared_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/snack-bar.service */ 1255);










class InsuredEffects {
  constructor(store, actions$, router, insuredService, snackBarService) {
    this.store = store;
    this.actions$ = actions$;
    this.router = router;
    this.insuredService = insuredService;
    this.snackBarService = snackBarService;
    this.loadInsurance$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(___WEBPACK_IMPORTED_MODULE_1__.InsuredActions.loadInsurance), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.concatLatestFrom)(() => this.store.select(_shared_store__WEBPACK_IMPORTED_MODULE_0__.TokenSelectors.token)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(([_, token]) => this.insuredService.getInsuranceData(token).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(({
      customer,
      maximumProtectionInsurance,
      familyLifeInsurance,
      oncologicalInsurance,
      xsInsurance,
      sapInsurance
    }) => ___WEBPACK_IMPORTED_MODULE_1__.InsuredActions.loadedInsurance({
      customer,
      maximumProtectionInsurance,
      familyLifeInsurance,
      oncologicalInsurance,
      xsInsurance,
      sapInsurance
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(httpError => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(___WEBPACK_IMPORTED_MODULE_1__.InsuredActions.loadInsuranceFailure({
      httpStatus: httpError.status,
      error: httpError.error?.message
    })))))));
    this.loadInsuranceFailure$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(___WEBPACK_IMPORTED_MODULE_1__.InsuredActions.loadInsuranceFailure), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(({
      httpStatus,
      error
    }) => {
      if (httpStatus && httpStatus === 401) {
        this.store.dispatch(_shared_store__WEBPACK_IMPORTED_MODULE_0__.TokenActions.removeToken());
        this.store.dispatch(___WEBPACK_IMPORTED_MODULE_1__.InsuredActions.resetInsurance());
        this.snackBarService.openSnackBar('Acceso no autorizado. Por favor, vuelva a autenticarse para continuar.');
        this.router.navigate(['/login']);
        return;
      }
      this.snackBarService.openSnackBar(error);
    })), {
      dispatch: false
    });
  }
  static #_ = this.ɵfac = function InsuredEffects_Factory(t) {
    return new (t || InsuredEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_services_insurance_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__.SnackBarService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: InsuredEffects,
    factory: InsuredEffects.ɵfac
  });
}

/***/ }),

/***/ 3095:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/download-file.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownloadFileService: () => (/* binding */ DownloadFileService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _snack_bar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snack-bar.service */ 1255);


class DownloadFileService {
  constructor(snackBarService) {
    this.snackBarService = snackBarService;
  }
  downloadPdfFile(base64Pdf) {
    const linkSource = `data:application/pdf;base64,${base64Pdf}`;
    const downloadLink = document.createElement('a');
    const fileName = 'certificate.pdf';
    downloadLink.href = linkSource;
    downloadLink.setAttribute('target', '_blank');
    downloadLink.download = fileName;
    downloadLink.click();
    downloadLink.remove();
    this.snackBarService.openSnackBar('¡Archivo descargado!');
  }
  static #_ = this.ɵfac = function DownloadFileService_Factory(t) {
    return new (t || DownloadFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_snack_bar_service__WEBPACK_IMPORTED_MODULE_0__.SnackBarService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DownloadFileService,
    factory: DownloadFileService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map