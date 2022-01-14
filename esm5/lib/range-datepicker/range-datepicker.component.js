/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
/** @type {?} */
var momentAdpater = ((/** @type {?} */ (moment))).default ? ((/** @type {?} */ (moment))).default : moment;
import { CustomHeader } from './custom-header/custom-header.component';
/** @type {?} */
export var MY_FORMATS = {
    parse: {
        dateInput: 'MMM  YYYY',
    },
    display: {
        dateInput: 'MMM  YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'MMM',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var RangeDatepickerComponent = /** @class */ (function () {
    function RangeDatepickerComponent() {
        this.returnDateEvent = new EventEmitter();
        this.exampleHeader = CustomHeader;
        this.displayButton = false;
        this.inicialDate = new FormControl(momentAdpater());
        this.finalDate = new FormControl(momentAdpater());
        this.validDate = true;
        this.errorMessage = null;
        this.INITIAL_DATE = "initial";
        this.FINAL_DATE = "final";
    }
    /**
     * @return {?}
     */
    RangeDatepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.inicialDate.setValue(momentAdpater().startOf('month'));
        this.finalDate.setValue(momentAdpater().endOf('month'));
    };
    /**
     * @param {?} normalizedYear
     * @param {?} order
     * @return {?}
     */
    RangeDatepickerComponent.prototype.chosenYearHandler = /**
     * @param {?} normalizedYear
     * @param {?} order
     * @return {?}
     */
    function (normalizedYear, order) {
        this.disableClearButton();
        if (order === 'initial') {
            /** @type {?} */
            var ctrlValue = this.inicialDate.value;
            ctrlValue.year(normalizedYear.year());
            this.inicialDate.setValue(ctrlValue);
        }
        else {
            /** @type {?} */
            var ctrlValue = this.finalDate.value;
            ctrlValue.year(normalizedYear.year());
            this.finalDate.setValue(ctrlValue);
        }
    };
    /**
     * @param {?} normalizedMonth
     * @param {?} datepicker
     * @param {?} order
     * @return {?}
     */
    RangeDatepickerComponent.prototype.chosenMonthHandler = /**
     * @param {?} normalizedMonth
     * @param {?} datepicker
     * @param {?} order
     * @return {?}
     */
    function (normalizedMonth, datepicker, order) {
        this.disableClearButton();
        if (order === 'initial') {
            /** @type {?} */
            var ctrlValue = this.inicialDate.value;
            ctrlValue.month(normalizedMonth.month());
            ctrlValue.startOf('month');
            this.inicialDate.setValue(ctrlValue);
            datepicker.close();
        }
        else {
            /** @type {?} */
            var ctrlValue = this.finalDate.value;
            ctrlValue.month(normalizedMonth.month());
            ctrlValue.endOf('month');
            this.finalDate.setValue(ctrlValue);
            datepicker.close();
        }
        if (this.verifyValidDates()) {
            this.returnDateEvent.emit({ "initialDate": this.inicialDate.value, "finalDate": this.finalDate.value });
        }
    };
    /**
     * @return {?}
     */
    RangeDatepickerComponent.prototype.verifyValidDates = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var initial = this.inicialDate.value;
        /** @type {?} */
        var final = this.finalDate.value;
        if (!initial.isBefore(final) && !initial.isSame(final)) {
            this.initialAfterFinalDate();
            this.validDate = false;
        }
        else {
            this.validDate = true;
        }
        return initial.isBefore(final);
    };
    /**
     * @return {?}
     */
    RangeDatepickerComponent.prototype.disableClearButton = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var initial = this.inicialDate.value;
        /** @type {?} */
        var final = this.finalDate.value;
        this.validDate = true;
        this.displayButton = !initial.isSame(final);
    };
    /**
     * @return {?}
     */
    RangeDatepickerComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.inicialDate = new FormControl(momentAdpater());
        this.finalDate = new FormControl(momentAdpater());
        this.returnDateEvent.emit(null);
        this.disableClearButton();
    };
    /**
     * @return {?}
     */
    RangeDatepickerComponent.prototype.initialAfterFinalDate = /**
     * @return {?}
     */
    function () {
        this.errorMessage = 'A data inicial não pode ser superior a data final. ';
    };
    /**
     * @return {?}
     */
    RangeDatepickerComponent.prototype.invalidDate = /**
     * @return {?}
     */
    function () {
        this.errorMessage = 'Data inválida.';
    };
    /**
     * @param {?} input
     * @return {?}
     */
    RangeDatepickerComponent.prototype.getInputValue = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (input.inicialDate.value) {
            /** @type {?} */
            var initial = this.inicialDate.value;
            if (this.verifyCorrectDates(initial)) {
                this.inicialDate.setValue(initial);
            }
        }
        if (input.finalDate.value) {
            /** @type {?} */
            var final = this.finalDate.value;
            if (this.verifyCorrectDates(final)) {
                this.finalDate.setValue(final);
            }
        }
        if (this.verifyValidDates()) {
            this.returnDateEvent.emit({ "initialDate": this.inicialDate.value, "finalDate": this.finalDate.value });
        }
    };
    /**
     * @return {?}
     */
    RangeDatepickerComponent.prototype.getErrorMessage = /**
     * @return {?}
     */
    function () {
        return this.errorMessage;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    RangeDatepickerComponent.prototype.verifyCorrectDates = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (!date.isValid) {
            this.invalidDate();
            return false;
        }
        return true;
    };
    RangeDatepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gualib-range-datepicker',
                    template: "<div fxLayout=\"column\">\n  <div fxLayout=\"row\"  fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\" s>\n\n    <div fxLayout=\"column\" >\n      <label style=\"font-size: 10px;\">Inicial</label>\n      <mat-form-field  [class.alert-error]=\"!validDate\" class=\"date-filter\" appearance=\"none\">\n        <input readonly matInput [min]=\"minDate\" [max]=\"maxDate\"  [matDatepicker]=\"dp\" [formControl]=\"inicialDate\" class=\"date-input\" (dateChange)=\"getInputValue(this)\">   \n        <mat-datepicker-toggle matSuffix [for]=\"dp\" class=\"date-input date-toggle\"></mat-datepicker-toggle>\n        <mat-datepicker #dp startView=\"multi-year\" \n          (yearSelected)=\"chosenYearHandler($event, INITIAL_DATE)\"\n          (monthSelected)=\"chosenMonthHandler($event, dp, INITIAL_DATE)\" \n          [calendarHeaderComponent]=\"exampleHeader\">\n        </mat-datepicker>\n      </mat-form-field>\n    </div>\n    \n    <div fxLayout=\"column\" >\n      <label style=\"font-size: 10px;\">Final</label>\n      <mat-form-field [class.alert-error]=\"!validDate\" class=\"date-filter\" appearance=\"none\">\n        <input readonly matInput [min]=\"minDate\"  [max]=\"maxDate\" [matDatepicker]=\"dp2\"  [formControl]=\"finalDate\" class=\"date-input\" (dateChange)=\"getInputValue(this)\">\n        <mat-datepicker-toggle matSuffix [for]=\"dp2\" class=\"date-input date-toggle\"></mat-datepicker-toggle>\n        <mat-datepicker #dp2 startView=\"multi-year\" \n          (yearSelected)=\"chosenYearHandler($event, FINAL_DATE)\"\n          (monthSelected)=\"chosenMonthHandler($event, dp2, FINAL_DATE)\" \n          [calendarHeaderComponent]=\"exampleHeader\">\n        </mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"column\"  *ngIf=\"displayButton\" \n      class=\"clear-span\" (click)=\"clear()\" >\n      &nbsp;\n        <mat-icon color=\"primary\" class=\"clear-icon\">highlight_off</mat-icon>\n    </div>\n    \n    \n   \n  </div>\n  <mat-error *ngIf=\"!validDate\"><p  style=\"font-size: 12px;\">{{getErrorMessage()}}</p></mat-error>\n</div>",
                    providers: [
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                        },
                        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                    ],
                    styles: [".date-filter{max-width:90px!important;border:1px solid!important;border-radius:5%;color:#e0e0e0;max-height:45px!important}.date-input{color:#000;font-size:12px;margin-bottom:5%}.date-toggle{font-size:12px}.clear-span{cursor:pointer}.alert-error{color:red!important}.material-icons{font-size:20px!important}"]
                }] }
    ];
    /** @nocollapse */
    RangeDatepickerComponent.ctorParameters = function () { return []; };
    RangeDatepickerComponent.propDecorators = {
        returnDateEvent: [{ type: Output }],
        minDate: [{ type: Input }],
        maxDate: [{ type: Input }]
    };
    return RangeDatepickerComponent;
}());
export { RangeDatepickerComponent };
if (false) {
    /** @type {?} */
    RangeDatepickerComponent.prototype.returnDateEvent;
    /** @type {?} */
    RangeDatepickerComponent.prototype.exampleHeader;
    /** @type {?} */
    RangeDatepickerComponent.prototype.displayButton;
    /** @type {?} */
    RangeDatepickerComponent.prototype.inicialDate;
    /** @type {?} */
    RangeDatepickerComponent.prototype.finalDate;
    /** @type {?} */
    RangeDatepickerComponent.prototype.validDate;
    /** @type {?} */
    RangeDatepickerComponent.prototype.errorMessage;
    /** @type {?} */
    RangeDatepickerComponent.prototype.INITIAL_DATE;
    /** @type {?} */
    RangeDatepickerComponent.prototype.FINAL_DATE;
    /** @type {?} */
    RangeDatepickerComponent.prototype.minDate;
    /** @type {?} */
    RangeDatepickerComponent.prototype.maxDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90aGVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3JhbmdlLWRhdGVwaWNrZXIvcmFuZ2UtZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBMkUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hKLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFpQixNQUFNLHdCQUF3QixDQUFDO0FBQ3RHLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSwrQkFBK0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7SUFFM0IsYUFBYSxHQUFHLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFDaEYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUdyRSxNQUFNLEtBQU8sVUFBVSxHQUFHO0lBQ3hCLEtBQUssRUFBRTtRQUNMLFNBQVMsRUFBRSxXQUFXO0tBQ3ZCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLFdBQVc7UUFDdEIsY0FBYyxFQUFFLE1BQU07UUFDdEIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsa0JBQWtCLEVBQUUsV0FBVztLQUNoQztDQUNGO0FBR0Q7SUFnQ0U7UUFoQkEsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JDLGtCQUFhLEdBQUcsWUFBWSxDQUFDO1FBQzdCLGtCQUFhLEdBQVcsS0FBSyxDQUFD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LEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7cUJBQ3BEOztpQkFDQTs7Ozs7a0NBR0UsTUFBTTswQkFXTixLQUFLOzBCQUdMLEtBQUs7O0lBNkdSLCtCQUFDO0NBQUEsQUExSUQsSUEwSUM7U0E3SFksd0JBQXdCOzs7SUFFbkMsbURBQ3FDOztJQUNyQyxpREFBNkI7O0lBQzdCLGlEQUE4Qjs7SUFDOUIsK0NBQStDOztJQUMvQyw2Q0FBNkM7O0lBQzdDLDZDQUF5Qjs7SUFDekIsZ0RBQW9COztJQUNwQixnREFBeUI7O0lBQ3pCLDhDQUFxQjs7SUFFckIsMkNBQ1E7O0lBRVIsMkNBQ1EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIMm1Q29uc29sZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uRGVzdHJveSwgSW5qZWN0LCBDaGFuZ2VEZXRlY3RvclJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRSwgTWF0RGF0ZUZvcm1hdHN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNb21lbnREYXRlQWRhcHRlciwgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OU30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXREYXRlcGlja2VyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7TW9tZW50fSBmcm9tICdtb21lbnQnO1xuY29uc3QgbW9tZW50QWRwYXRlciA9IChtb21lbnQgYXMgYW55KS5kZWZhdWx0ID8gKG1vbWVudCBhcyBhbnkpLmRlZmF1bHQgOiBtb21lbnQ7XG5pbXBvcnQge0N1c3RvbUhlYWRlcn0gZnJvbSAnLi9jdXN0b20taGVhZGVyL2N1c3RvbS1oZWFkZXIuY29tcG9uZW50JztcblxuXG5leHBvcnQgY29uc3QgTVlfRk9STUFUUyA9IHtcbiAgcGFyc2U6IHtcbiAgICBkYXRlSW5wdXQ6ICdNTU0gIFlZWVknLFxuICB9LFxuICBkaXNwbGF5OiB7XG4gICAgZGF0ZUlucHV0OiAnTU1NICBZWVlZJyxcbiAgICBtb250aFllYXJMYWJlbDogJ1lZWVknLFxuICAgIGRhdGVBMTF5TGFiZWw6ICdNTU0nLFxuICAgIG1vbnRoWWVhckExMXlMYWJlbDogJ01NTU0gWVlZWScsXG4gIH0sXG59O1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2d1YWxpYi1yYW5nZS1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhbmdlLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYW5nZS1kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsXG4gICAgICAgIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlcixcbiAgICAgICAgZGVwczogW01BVF9EQVRFX0xPQ0FMRSwgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OU11cbiAgICB9LFxuICAgIHtwcm92aWRlOiBNQVRfREFURV9GT1JNQVRTLCB1c2VWYWx1ZTogTVlfRk9STUFUU30sXG5dXG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpXG4gIHJldHVybkRhdGVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZXhhbXBsZUhlYWRlciA9IEN1c3RvbUhlYWRlcjtcbiAgZGlzcGxheUJ1dHRvbjpib29sZWFuID0gZmFsc2U7XG4gIGluaWNpYWxEYXRlID0gbmV3IEZvcm1Db250cm9sKG1vbWVudEFkcGF0ZXIoKSk7XG4gIGZpbmFsRGF0ZSA9IG5ldyBGb3JtQ29udHJvbChtb21lbnRBZHBhdGVyKCkpO1xuICB2YWxpZERhdGU6Ym9vbGVhbiA9IHRydWU7XG4gIGVycm9yTWVzc2FnZSA9IG51bGw7XG4gIElOSVRJQUxfREFURSA9IFwiaW5pdGlhbFwiO1xuICBGSU5BTF9EQVRFID0gXCJmaW5hbFwiO1xuXG4gIEBJbnB1dCgpXG4gIG1pbkRhdGU7XG5cbiAgQElucHV0KClcbiAgbWF4RGF0ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pY2lhbERhdGUuc2V0VmFsdWUobW9tZW50QWRwYXRlcigpLnN0YXJ0T2YoJ21vbnRoJykpO1xuICAgIHRoaXMuZmluYWxEYXRlLnNldFZhbHVlKG1vbWVudEFkcGF0ZXIoKS5lbmRPZignbW9udGgnKSk7XG4gIH1cblxuICBjaG9zZW5ZZWFySGFuZGxlcihub3JtYWxpemVkWWVhcjogTW9tZW50LCBvcmRlcikge1xuICAgIHRoaXMuZGlzYWJsZUNsZWFyQnV0dG9uKCk7XG4gICAgaWYob3JkZXIgPT09ICdpbml0aWFsJykge1xuICAgICAgY29uc3QgY3RybFZhbHVlID0gdGhpcy5pbmljaWFsRGF0ZS52YWx1ZTtcbiAgICAgIGN0cmxWYWx1ZS55ZWFyKG5vcm1hbGl6ZWRZZWFyLnllYXIoKSk7XG4gICAgICB0aGlzLmluaWNpYWxEYXRlLnNldFZhbHVlKGN0cmxWYWx1ZSk7XG4gICAgfWVsc2Uge1xuICAgICAgY29uc3QgY3RybFZhbHVlID0gdGhpcy5maW5hbERhdGUudmFsdWU7XG4gICAgICBjdHJsVmFsdWUueWVhcihub3JtYWxpemVkWWVhci55ZWFyKCkpO1xuICAgICAgdGhpcy5maW5hbERhdGUuc2V0VmFsdWUoY3RybFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjaG9zZW5Nb250aEhhbmRsZXIobm9ybWFsaXplZE1vbnRoOiBNb21lbnQsIGRhdGVwaWNrZXI6IE1hdERhdGVwaWNrZXI8TW9tZW50Piwgb3JkZXIpIHtcbiAgICB0aGlzLmRpc2FibGVDbGVhckJ1dHRvbigpO1xuICAgIGlmKG9yZGVyID09PSAnaW5pdGlhbCcpIHtcbiAgICAgIGNvbnN0IGN0cmxWYWx1ZSA9IHRoaXMuaW5pY2lhbERhdGUudmFsdWU7XG4gICAgICBjdHJsVmFsdWUubW9udGgobm9ybWFsaXplZE1vbnRoLm1vbnRoKCkpO1xuICAgICAgY3RybFZhbHVlLnN0YXJ0T2YoJ21vbnRoJyk7XG4gICAgICB0aGlzLmluaWNpYWxEYXRlLnNldFZhbHVlKGN0cmxWYWx1ZSk7XG4gICAgICBkYXRlcGlja2VyLmNsb3NlKCk7XG4gICAgfWVsc2Uge1xuICAgICAgY29uc3QgY3RybFZhbHVlID0gdGhpcy5maW5hbERhdGUudmFsdWU7XG4gICAgICBjdHJsVmFsdWUubW9udGgobm9ybWFsaXplZE1vbnRoLm1vbnRoKCkpO1xuICAgICAgY3RybFZhbHVlLmVuZE9mKCdtb250aCcpO1xuICAgICAgdGhpcy5maW5hbERhdGUuc2V0VmFsdWUoY3RybFZhbHVlKTtcbiAgICAgIGRhdGVwaWNrZXIuY2xvc2UoKTsgICAgICBcbiAgICB9XG4gICAgaWYodGhpcy52ZXJpZnlWYWxpZERhdGVzKCkpIHtcbiAgICAgIHRoaXMucmV0dXJuRGF0ZUV2ZW50LmVtaXQoe1wiaW5pdGlhbERhdGVcIjp0aGlzLmluaWNpYWxEYXRlLnZhbHVlLCBcImZpbmFsRGF0ZVwiOnRoaXMuZmluYWxEYXRlLnZhbHVlfSk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgdmVyaWZ5VmFsaWREYXRlcygpOmJvb2xlYW4ge1xuICAgIGNvbnN0IGluaXRpYWw6TW9tZW50ID0gdGhpcy5pbmljaWFsRGF0ZS52YWx1ZTtcbiAgICBjb25zdCBmaW5hbDpNb21lbnQgPSB0aGlzLmZpbmFsRGF0ZS52YWx1ZTtcbiAgICBpZighaW5pdGlhbC5pc0JlZm9yZShmaW5hbCkgJiYgIWluaXRpYWwuaXNTYW1lKGZpbmFsKSkge1xuICAgICAgdGhpcy5pbml0aWFsQWZ0ZXJGaW5hbERhdGUoKVxuICAgICAgdGhpcy52YWxpZERhdGUgID0gZmFsc2U7XG4gICAgfWVsc2Uge1xuICAgICAgdGhpcy52YWxpZERhdGUgID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGluaXRpYWwuaXNCZWZvcmUoZmluYWwpO1xuICB9XG5cbiAgZGlzYWJsZUNsZWFyQnV0dG9uKCkge1xuICAgIGNvbnN0IGluaXRpYWw6TW9tZW50ID0gdGhpcy5pbmljaWFsRGF0ZS52YWx1ZTtcbiAgICBjb25zdCBmaW5hbDpNb21lbnQgPSB0aGlzLmZpbmFsRGF0ZS52YWx1ZTtcbiAgICB0aGlzLnZhbGlkRGF0ZSAgPSB0cnVlO1xuICAgIHRoaXMuZGlzcGxheUJ1dHRvbiA9ICFpbml0aWFsLmlzU2FtZShmaW5hbCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmluaWNpYWxEYXRlID0gbmV3IEZvcm1Db250cm9sKG1vbWVudEFkcGF0ZXIoKSk7XG4gICAgdGhpcy5maW5hbERhdGUgPSBuZXcgRm9ybUNvbnRyb2wobW9tZW50QWRwYXRlcigpKTtcbiAgICB0aGlzLnJldHVybkRhdGVFdmVudC5lbWl0KG51bGwpO1xuICAgIHRoaXMuZGlzYWJsZUNsZWFyQnV0dG9uKCk7XG4gIH1cblxuICBpbml0aWFsQWZ0ZXJGaW5hbERhdGUoKSB7XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnQSBkYXRhIGluaWNpYWwgbsOjbyBwb2RlIHNlciBzdXBlcmlvciBhIGRhdGEgZmluYWwuICc7XG4gIH1cblxuICBpbnZhbGlkRGF0ZSgpIHtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdEYXRhIGludsOhbGlkYS4nO1xuICB9XG5cblxuICBnZXRJbnB1dFZhbHVlKGlucHV0KSB7XG4gICAgaWYoaW5wdXQuaW5pY2lhbERhdGUudmFsdWUpe1xuICAgICAgY29uc3QgaW5pdGlhbDpNb21lbnQgPSB0aGlzLmluaWNpYWxEYXRlLnZhbHVlO1xuICAgICAgaWYodGhpcy52ZXJpZnlDb3JyZWN0RGF0ZXMoaW5pdGlhbCkpIHtcbiAgICAgICAgdGhpcy5pbmljaWFsRGF0ZS5zZXRWYWx1ZShpbml0aWFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoaW5wdXQuZmluYWxEYXRlLnZhbHVlKSB7XG4gICAgICBjb25zdCBmaW5hbDpNb21lbnQgPSB0aGlzLmZpbmFsRGF0ZS52YWx1ZTtcbiAgICAgIGlmKHRoaXMudmVyaWZ5Q29ycmVjdERhdGVzKGZpbmFsKSl7XG4gICAgICAgIHRoaXMuZmluYWxEYXRlLnNldFZhbHVlKGZpbmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYodGhpcy52ZXJpZnlWYWxpZERhdGVzKCkpIHtcbiAgICAgIHRoaXMucmV0dXJuRGF0ZUV2ZW50LmVtaXQoe1wiaW5pdGlhbERhdGVcIjp0aGlzLmluaWNpYWxEYXRlLnZhbHVlLCBcImZpbmFsRGF0ZVwiOnRoaXMuZmluYWxEYXRlLnZhbHVlfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXJyb3JNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9yTWVzc2FnZTtcbiAgfVxuXG4gIHZlcmlmeUNvcnJlY3REYXRlcyhkYXRlOiBNb21lbnQpIHtcbiAgICBpZighZGF0ZS5pc1ZhbGlkKSB7XG4gICAgICB0aGlzLmludmFsaWREYXRlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuXG4gIH1cbn1cblxuIl19