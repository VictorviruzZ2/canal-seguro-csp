"use strict";
(self["webpackChunkinsurance_channel"] = self["webpackChunkinsurance_channel"] || []).push([["common"],{

/***/ 1255:
/*!******************************************************!*\
  !*** ./src/app/shared/services/snack-bar.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackBarService: () => (/* binding */ SnackBarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);


class SnackBarService {
  constructor(snackBar) {
    this.snackBar = snackBar;
  }
  openSnackBar(message) {
    return this.snackBar.open(message, 'CERRAR', {
      duration: 5500,
      panelClass: ['blue-snackbar', 'uppercase']
    });
  }
  static #_ = this.ɵfac = function SnackBarService_Factory(t) {
    return new (t || SnackBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SnackBarService,
    factory: SnackBarService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map