(self["webpackChunkngx_nomad_form"] = self["webpackChunkngx_nomad_form"] || []).push([["main"],{

/***/ 6504:
/*!************************************************!*\
  !*** ./projects/demo/src/app/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_nomad_form_src_lib_ngx_nomad_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ngx-nomad-form/src/lib/ngx-nomad-form.component */ 6416);




class AppComponent {
    constructor() {
        this.title = 'demo';
        this.fields = [{
                type: 'input',
                label: 'Username',
                inputType: 'text',
                name: 'name',
                col: 6,
                validations: [{
                        name: 'required',
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
                        message: 'Name Required'
                    }, {
                        name: 'pattern',
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('^[a-zA-Z]+$'),
                        message: 'Accept only text'
                    }]
            }, {
                type: 'input',
                label: 'Email Address',
                inputType: 'email',
                name: 'email',
                col: 6,
                validations: [{
                        name: 'required',
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
                        message: 'Email Required'
                    }, {
                        name: 'pattern',
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
                        message: 'Invalid email'
                    }]
            }, {
                type: 'input',
                label: 'Password',
                inputType: 'password',
                name: 'password',
                col: 12,
                validations: [{
                        name: 'required',
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
                        message: 'Password Required'
                    }]
            }, {
                type: 'radiobutton',
                label: 'Gender',
                name: 'gender',
                options: ['Male', 'Female'],
                value: 'Male',
                col: 6,
            }, {
                type: 'date',
                label: 'Date of Birth',
                name: 'dob',
                col: 12,
                validations: [{
                        name: 'required',
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
                        message: 'Date of Birth Required'
                    }]
            }, {
                type: 'select',
                label: 'Country',
                name: 'country',
                value: 'Africa',
                col: 6,
                options: ['America', 'Africa']
            }, {
                type: 'checkbox',
                label: 'Accept Terms',
                name: 'term',
                col: 6,
                value: true
            }, {
                type: 'button',
                color: 'danger',
                label: 'Save'
            }];
    }
    get fieldInput() {
        return JSON.stringify(this.fields, null, 2);
    }
    set fieldInput(v) {
        try {
            this.fields = JSON.parse(v);
        }
        catch (e) {
            console.log('error occored while you were typing the JSON');
        }
        ;
    }
    callBack(value) {
        console.log(value);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 2, consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "text-center", "mt-5"], ["src", "assets/ngx-nomad-form.jpg", "width", "100", "alt", "Nomad Form"], [1, "col-6"], ["rows", "20", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-6", "pt-2"], [3, "fields", "callBack"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_textarea_ngModelChange_5_listener($event) { return ctx.fieldInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nf-form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("callBack", function AppComponent_Template_nf_form_callBack_7_listener($event) { return ctx.callBack($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.fieldInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fields", ctx.fields);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _ngx_nomad_form_src_lib_ngx_nomad_form_component__WEBPACK_IMPORTED_MODULE_0__.NgxNomadFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7200:
/*!*********************************************!*\
  !*** ./projects/demo/src/app/app.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6504);
/* harmony import */ var projects_ngx_nomad_form_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/ngx-nomad-form/src/public-api */ 3814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            projects_ngx_nomad_form_src_public_api__WEBPACK_IMPORTED_MODULE_1__.NgxNomadFormModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        projects_ngx_nomad_form_src_public_api__WEBPACK_IMPORTED_MODULE_1__.NgxNomadFormModule] }); })();


/***/ }),

/***/ 3585:
/*!*******************************************************!*\
  !*** ./projects/demo/src/environments/environment.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 873:
/*!***********************************!*\
  !*** ./projects/demo/src/main.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 7200);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 3585);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 2241:
/*!*******************************************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/components/button/button.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



class ButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["nf-button"]], decls: 3, vars: 3, consts: [[1, "mt-2", "text-center", "d-grid", "gap-2", "col-6", "mx-auto", 3, "formGroup"], ["type", "submit", 1, "btn", "btn-block", 3, "ngClass"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.field == null ? null : ctx.field.color) ? "btn-" + (ctx.field == null ? null : ctx.field.color) : "btn-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.label);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4795:
/*!*************************************************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/components/check-box/check-box.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckBoxComponent": () => (/* binding */ CheckBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);


class CheckBoxComponent {
    constructor() { }
    ngOnInit() {
    }
}
CheckBoxComponent.ɵfac = function CheckBoxComponent_Factory(t) { return new (t || CheckBoxComponent)(); };
CheckBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckBoxComponent, selectors: [["nf-check-box"]], decls: 4, vars: 3, consts: [[1, "form-check", "mt-2", 3, "formGroup"], [1, "form-check-label"], ["type", "checkbox", 1, "form-check-input", 3, "formControlName"]], template: function CheckBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.field.label, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1ib3guY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3729:
/*!***************************************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/components/date/date.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateComponent": () => (/* binding */ DateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function DateComponent_ng_container_4_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](validation_r1.message);
} }
function DateComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DateComponent_ng_container_4_small_1_Template, 2, 1, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.validate(ctx_r0.field.name, validation_r1.name));
} }
class DateComponent {
    constructor() { }
    ngOnInit() {
    }
    validate(field, validation) {
        const title = this.group.get(field ? field : '');
        if (title) {
            return title.touched && title.hasError(validation);
        }
        else {
            return null;
        }
    }
}
DateComponent.ɵfac = function DateComponent_Factory(t) { return new (t || DateComponent)(); };
DateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DateComponent, selectors: [["nf-date"]], decls: 5, vars: 7, consts: [[1, "form-group", 3, "formGroup"], [3, "for"], ["type", "date", 1, "form-control", 3, "formControlName", "placeholder", "id"], [4, "ngFor", "ngForOf"], ["class", "form-text text-danger", 4, "ngIf"], [1, "form-text", "text-danger"]], template: function DateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DateComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.field.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.field.validations);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2253:
/*!*******************************************************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/components/dynamic-form/dynamic-form.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormComponent": () => (/* binding */ DynamicFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _directives_dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/dynamic-field/dynamic-field.directive */ 6221);






function DynamicFormComponent_1_ng_template_0_Template(rf, ctx) { }
function DynamicFormComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DynamicFormComponent_1_ng_template_0_Template, 0, 0, "ng-template", 2);
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("field", field_r1)("group", ctx_r0.form);
} }
class DynamicFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.fields = [];
        // eslint-disable-next-line @angular-eslint/no-output-native
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.form = this.createControl();
    }
    get value() { var _a; return (_a = this.form) === null || _a === void 0 ? void 0 : _a.value; }
    createControl() {
        const group = this.fb.group({});
        this.fields.forEach((field) => {
            if (field.type === 'button') {
                return;
            }
            const control = this.fb.control(field.value, this.bindValidations(field.validations || []));
            group.addControl(field.name, control);
        });
        return group;
    }
    bindValidations(validations) {
        if (validations.length > 0) {
            const validList = [];
            validations.forEach((valid) => {
                validList.push(valid.validator);
            });
            return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose(validList);
        }
        return null;
    }
    onSubmit(event) {
        var _a;
        event.preventDefault();
        event.stopPropagation();
        if ((_a = this.form) === null || _a === void 0 ? void 0 : _a.valid) {
            this.submit.emit(this.form.value);
        }
        else {
            this.validateAllFormFields(this.form);
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            control.markAsTouched({
                onlySelf: true
            });
        });
    }
}
DynamicFormComponent.ɵfac = function DynamicFormComponent_Factory(t) { return new (t || DynamicFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
DynamicFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DynamicFormComponent, selectors: [["nf-dynamic-form"]], inputs: { fields: "fields" }, outputs: { submit: "submit" }, decls: 2, vars: 2, consts: [[1, "dynamic-form", 3, "formGroup", "submit"], [4, "ngFor", "ngForOf"], ["nf-dynamicField", "", 3, "field", "group"]], template: function DynamicFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function DynamicFormComponent_Template_form_submit_0_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DynamicFormComponent_1_Template, 1, 2, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fields);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _directives_dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_0__.DynamicFieldDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8087:
/*!*************************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/components/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": () => (/* reexport safe */ _button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent),
/* harmony export */   "CheckBoxComponent": () => (/* reexport safe */ _check_box_check_box_component__WEBPACK_IMPORTED_MODULE_1__.CheckBoxComponent),
/* harmony export */   "DateComponent": () => (/* reexport safe */ _date_date_component__WEBPACK_IMPORTED_MODULE_2__.DateComponent),
/* harmony export */   "DynamicFormComponent": () => (/* reexport safe */ _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__.DynamicFormComponent),
/* harmony export */   "InputComponent": () => (/* reexport safe */ _input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent),
/* harmony export */   "RadioComponent": () => (/* reexport safe */ _radio_radio_component__WEBPACK_IMPORTED_MODULE_5__.RadioComponent),
/* harmony export */   "SelectComponent": () => (/* reexport safe */ _select_select_component__WEBPACK_IMPORTED_MODULE_6__.SelectComponent)
/* harmony export */ });
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button/button.component */ 2241);
/* harmony import */ var _check_box_check_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-box/check-box.component */ 4795);
/* harmony import */ var _date_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date/date.component */ 3729);
/* harmony import */ var _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-form/dynamic-form.component */ 2253);
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input/input.component */ 5959);
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio/radio.component */ 982);
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select/select.component */ 1730);









/***/ }),

/***/ 5959:
/*!*****************************************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/components/input/input.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function InputComponent_ng_container_4_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](validation_r1.message);
} }
function InputComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputComponent_ng_container_4_small_1_Template, 2, 1, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.validate(ctx_r0.field.name, validation_r1.name));
} }
class InputComponent {
    constructor() { }
    ngOnInit() {
    }
    validate(field, validation) {
        const title = this.group.get(field ? field : '');
        if (title) {
            return title.touched && title.hasError(validation);
        }
        else {
            return null;
        }
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["nf-input"]], decls: 5, vars: 8, consts: [[1, "form-group", "mt-2", 3, "formGroup"], [3, "for"], [1, "form-control", 3, "type", "formControlName", "placeholder", "id"], [4, "ngFor", "ngForOf"], ["class", "form-text text-danger", 4, "ngIf"], [1, "form-text", "text-danger"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.field.inputType)("placeholder", ctx.field.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.field.validations);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 982:
/*!*****************************************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/components/radio/radio.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioComponent": () => (/* binding */ RadioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function RadioComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", ctx_r0.field.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r0.field.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1, " ");
} }
class RadioComponent {
    constructor() { }
    ngOnInit() {
    }
}
RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(); };
RadioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RadioComponent, selectors: [["nf-radio"]], decls: 4, vars: 4, consts: [[1, "mt-2", 3, "formGroup"], [3, "for"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "radio", 1, "form-check-input", 3, "formControlName", "value", "id"], [1, "form-check-label"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RadioComponent_div_3_Template, 4, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.field.options);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1730:
/*!*******************************************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/components/select/select.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function SelectComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
class SelectComponent {
    constructor() { }
    ngOnInit() {
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); };
SelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["nf-select"]], decls: 5, vars: 6, consts: [[1, "form-group", "mt-1", 3, "formGroup"], [3, "for"], [1, "form-control", 3, "formControlName", "id"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectComponent_option_4_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field == null ? null : ctx.field.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.field == null ? null : ctx.field.options);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6221:
/*!*********************************************************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/directives/dynamic-field/dynamic-field.directive.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFieldDirective": () => (/* binding */ DynamicFieldDirective)
/* harmony export */ });
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button/button.component */ 2241);
/* harmony import */ var _components_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/check-box/check-box.component */ 4795);
/* harmony import */ var _components_date_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/date/date.component */ 3729);
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/input/input.component */ 5959);
/* harmony import */ var _components_radio_radio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/radio/radio.component */ 982);
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/select/select.component */ 1730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);







const componentMapper = {
    input: _components_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent,
    button: _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent,
    select: _components_select_select_component__WEBPACK_IMPORTED_MODULE_5__.SelectComponent,
    date: _components_date_date_component__WEBPACK_IMPORTED_MODULE_2__.DateComponent,
    radiobutton: _components_radio_radio_component__WEBPACK_IMPORTED_MODULE_4__.RadioComponent,
    checkbox: _components_check_box_check_box_component__WEBPACK_IMPORTED_MODULE_1__.CheckBoxComponent
};
class DynamicFieldDirective {
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    ngOnInit() {
        var _a;
        const factory = this.resolver.resolveComponentFactory(componentMapper[(_a = this.field) === null || _a === void 0 ? void 0 : _a.type]);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    }
}
DynamicFieldDirective.ɵfac = function DynamicFieldDirective_Factory(t) { return new (t || DynamicFieldDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewContainerRef)); };
DynamicFieldDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({ type: DynamicFieldDirective, selectors: [["", "nf-dynamicField", ""]], inputs: { field: "field", group: "group" } });


/***/ }),

/***/ 7308:
/*!********************************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/interfaces/field-config.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 565:
/*!*****************************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/interfaces/validator.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9062:
/*!******************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/nf-config.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NF_CONFIG_TOKEN": () => (/* binding */ NF_CONFIG_TOKEN)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

;
const NF_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NF_CONFIG');


/***/ }),

/***/ 6416:
/*!*********************************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/ngx-nomad-form.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxNomadFormComponent": () => (/* binding */ NgxNomadFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 8087);
/* harmony import */ var _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dynamic-form/dynamic-form.component */ 2253);




class NgxNomadFormComponent {
    constructor() {
        this.fields = [];
        this.callBack = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    submit(value) {
        this.callBack.emit(value);
    }
    ngOnInit() {
    }
}
NgxNomadFormComponent.ɵfac = function NgxNomadFormComponent_Factory(t) { return new (t || NgxNomadFormComponent)(); };
NgxNomadFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NgxNomadFormComponent, selectors: [["nf-form"]], viewQuery: function NgxNomadFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_components__WEBPACK_IMPORTED_MODULE_0__.DynamicFormComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, inputs: { fields: "fields" }, outputs: { callBack: "callBack" }, decls: 1, vars: 1, consts: [[3, "fields", "submit"]], template: function NgxNomadFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nf-dynamic-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function NgxNomadFormComponent_Template_nf_dynamic_form_submit_0_listener($event) { return ctx.submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fields", ctx.fields);
    } }, directives: [_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_1__.DynamicFormComponent], encapsulation: 2 });


/***/ }),

/***/ 6834:
/*!******************************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/ngx-nomad-form.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxNomadFormModule": () => (/* binding */ NgxNomadFormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _nf_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nf-config */ 9062);
/* harmony import */ var _ngx_nomad_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-nomad-form.component */ 6416);
/* harmony import */ var _ngx_nomad_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-nomad-form.service */ 3307);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ 8087);
/* harmony import */ var _directives_dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/dynamic-field/dynamic-field.directive */ 6221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);








const formElements = [
    _components__WEBPACK_IMPORTED_MODULE_3__.InputComponent,
    _components__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent,
    _components__WEBPACK_IMPORTED_MODULE_3__.SelectComponent,
    _components__WEBPACK_IMPORTED_MODULE_3__.DateComponent,
    _components__WEBPACK_IMPORTED_MODULE_3__.RadioComponent,
    _components__WEBPACK_IMPORTED_MODULE_3__.CheckBoxComponent,
];
class NgxNomadFormModule {
    static forRoot(config) {
        return {
            ngModule: NgxNomadFormModule,
            providers: [{ provide: _nf_config__WEBPACK_IMPORTED_MODULE_0__.NF_CONFIG_TOKEN, useValue: config }],
        };
    }
}
NgxNomadFormModule.ɵfac = function NgxNomadFormModule_Factory(t) { return new (t || NgxNomadFormModule)(); };
NgxNomadFormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: NgxNomadFormModule });
NgxNomadFormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_ngx_nomad_form_service__WEBPACK_IMPORTED_MODULE_2__.NgxNomadFormService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NgxNomadFormModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_3__.InputComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.SelectComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.DateComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.RadioComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.CheckBoxComponent, _components__WEBPACK_IMPORTED_MODULE_3__.DynamicFormComponent,
        _directives_dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_4__.DynamicFieldDirective,
        _ngx_nomad_form_component__WEBPACK_IMPORTED_MODULE_1__.NgxNomadFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule], exports: [_components__WEBPACK_IMPORTED_MODULE_3__.InputComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.SelectComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.DateComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.RadioComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.CheckBoxComponent, _ngx_nomad_form_component__WEBPACK_IMPORTED_MODULE_1__.NgxNomadFormComponent] }); })();


/***/ }),

/***/ 3307:
/*!*******************************************************************!*\
  !*** ./projects/ngx-nomad-form/src/lib/ngx-nomad-form.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxNomadFormService": () => (/* binding */ NgxNomadFormService)
/* harmony export */ });
/* harmony import */ var _nf_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nf-config */ 9062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class NgxNomadFormService {
    constructor(config) {
        this.config = config;
    }
}
NgxNomadFormService.ɵfac = function NgxNomadFormService_Factory(t) { return new (t || NgxNomadFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_nf_config__WEBPACK_IMPORTED_MODULE_0__.NF_CONFIG_TOKEN, 8)); };
NgxNomadFormService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NgxNomadFormService, factory: NgxNomadFormService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3814:
/*!***************************************************!*\
  !*** ./projects/ngx-nomad-form/src/public-api.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxNomadFormComponent": () => (/* reexport safe */ _lib_ngx_nomad_form_component__WEBPACK_IMPORTED_MODULE_0__.NgxNomadFormComponent),
/* harmony export */   "NgxNomadFormModule": () => (/* reexport safe */ _lib_ngx_nomad_form_module__WEBPACK_IMPORTED_MODULE_1__.NgxNomadFormModule),
/* harmony export */   "DynamicFieldDirective": () => (/* reexport safe */ _lib_directives_dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_4__.DynamicFieldDirective),
/* harmony export */   "ButtonComponent": () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent),
/* harmony export */   "CheckBoxComponent": () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_5__.CheckBoxComponent),
/* harmony export */   "DateComponent": () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_5__.DateComponent),
/* harmony export */   "DynamicFormComponent": () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_5__.DynamicFormComponent),
/* harmony export */   "InputComponent": () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_5__.InputComponent),
/* harmony export */   "RadioComponent": () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_5__.RadioComponent),
/* harmony export */   "SelectComponent": () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_5__.SelectComponent)
/* harmony export */ });
/* harmony import */ var _lib_ngx_nomad_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-nomad-form.component */ 6416);
/* harmony import */ var _lib_ngx_nomad_form_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ngx-nomad-form.module */ 6834);
/* harmony import */ var _lib_interfaces_field_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/interfaces/field-config */ 7308);
/* harmony import */ var _lib_interfaces_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/interfaces/validator */ 565);
/* harmony import */ var _lib_directives_dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/directives/dynamic-field/dynamic-field.directive */ 6221);
/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/components */ 8087);








/***/ }),

/***/ 9153:
/*!*********************************************************************!*\
  !*** ./projects/demo/$_lazy_route_resources/ lazy namespace object ***!
  \*********************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 9153;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(873)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map