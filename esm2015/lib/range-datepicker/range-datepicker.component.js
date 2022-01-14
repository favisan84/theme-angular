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
const momentAdpater = ((/** @type {?} */ (moment))).default ? ((/** @type {?} */ (moment))).default : moment;
import { CustomHeader } from './custom-header/custom-header.component';
/** @type {?} */
export const MY_FORMATS = {
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
export class RangeDatepickerComponent {
    constructor() {
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
    ngOnInit() {
        this.inicialDate.setValue(momentAdpater().startOf('month'));
        this.finalDate.setValue(momentAdpater().endOf('month'));
    }
    /**
     * @param {?} normalizedYear
     * @param {?} order
     * @return {?}
     */
    chosenYearHandler(normalizedYear, order) {
        this.disableClearButton();
        if (order === 'initial') {
            /** @type {?} */
            const ctrlValue = this.inicialDate.value;
            ctrlValue.year(normalizedYear.year());
            this.inicialDate.setValue(ctrlValue);
        }
        else {
            /** @type {?} */
            const ctrlValue = this.finalDate.value;
            ctrlValue.year(normalizedYear.year());
            this.finalDate.setValue(ctrlValue);
        }
    }
    /**
     * @param {?} normalizedMonth
     * @param {?} datepicker
     * @param {?} order
     * @return {?}
     */
    chosenMonthHandler(normalizedMonth, datepicker, order) {
        this.disableClearButton();
        if (order === 'initial') {
            /** @type {?} */
            const ctrlValue = this.inicialDate.value;
            ctrlValue.month(normalizedMonth.month());
            ctrlValue.startOf('month');
            this.inicialDate.setValue(ctrlValue);
            datepicker.close();
        }
        else {
            /** @type {?} */
            const ctrlValue = this.finalDate.value;
            ctrlValue.month(normalizedMonth.month());
            ctrlValue.endOf('month');
            this.finalDate.setValue(ctrlValue);
            datepicker.close();
        }
        if (this.verifyValidDates()) {
            this.returnDateEvent.emit({ "initialDate": this.inicialDate.value, "finalDate": this.finalDate.value });
        }
    }
    /**
     * @return {?}
     */
    verifyValidDates() {
        /** @type {?} */
        const initial = this.inicialDate.value;
        /** @type {?} */
        const final = this.finalDate.value;
        if (!initial.isBefore(final) && !initial.isSame(final)) {
            this.initialAfterFinalDate();
            this.validDate = false;
        }
        else {
            this.validDate = true;
        }
        return initial.isBefore(final);
    }
    /**
     * @return {?}
     */
    disableClearButton() {
        /** @type {?} */
        const initial = this.inicialDate.value;
        /** @type {?} */
        const final = this.finalDate.value;
        this.validDate = true;
        this.displayButton = !initial.isSame(final);
    }
    /**
     * @return {?}
     */
    clear() {
        this.inicialDate = new FormControl(momentAdpater());
        this.finalDate = new FormControl(momentAdpater());
        this.returnDateEvent.emit(null);
        this.disableClearButton();
    }
    /**
     * @return {?}
     */
    initialAfterFinalDate() {
        this.errorMessage = 'A data inicial não pode ser superior a data final. ';
    }
    /**
     * @return {?}
     */
    invalidDate() {
        this.errorMessage = 'Data inválida.';
    }
    /**
     * @param {?} input
     * @return {?}
     */
    getInputValue(input) {
        if (input.inicialDate.value) {
            /** @type {?} */
            const initial = this.inicialDate.value;
            if (this.verifyCorrectDates(initial)) {
                this.inicialDate.setValue(initial);
            }
        }
        if (input.finalDate.value) {
            /** @type {?} */
            const final = this.finalDate.value;
            if (this.verifyCorrectDates(final)) {
                this.finalDate.setValue(final);
            }
        }
        if (this.verifyValidDates()) {
            this.returnDateEvent.emit({ "initialDate": this.inicialDate.value, "finalDate": this.finalDate.value });
        }
    }
    /**
     * @return {?}
     */
    getErrorMessage() {
        return this.errorMessage;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    verifyCorrectDates(date) {
        if (!date.isValid) {
            this.invalidDate();
            return false;
        }
        return true;
    }
}
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
RangeDatepickerComponent.ctorParameters = () => [];
RangeDatepickerComponent.propDecorators = {
    returnDateEvent: [{ type: Output }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90aGVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3JhbmdlLWRhdGVwaWNrZXIvcmFuZ2UtZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBMkUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hKLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFpQixNQUFNLHdCQUF3QixDQUFDO0FBQ3RHLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSwrQkFBK0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7TUFFM0IsYUFBYSxHQUFHLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFDaEYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUdyRSxNQUFNLE9BQU8sVUFBVSxHQUFHO0lBQ3hCLEtBQUssRUFBRTtRQUNMLFNBQVMsRUFBRSxXQUFXO0tBQ3ZCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLFdBQVc7UUFDdEIsY0FBYyxFQUFFLE1BQU07UUFDdEIsYUFBYSxFQUFFLEtBQUs7UUFDcEIsa0JBQWtCLEVBQUUsV0FBVztLQUNoQztDQUNGO0FBZ0JELE1BQU0sT0FBTyx3QkFBd0I7SUFtQm5DO1FBaEJBLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxrQkFBYSxHQUFHLFlBQVksQ0FBQztRQUM3Qixr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QVdOLEtBQUs7c0JBR0wsS0FBSzs7OztJQWROLG1EQUNxQzs7SUFDckMsaURBQTZCOztJQUM3QixpREFBOEI7O0lBQzlCLCtDQUErQzs7SUFDL0MsNkNBQTZDOztJQUM3Qyw2Q0FBeUI7O0lBQ3pCLGdEQUFvQjs7SUFDcEIsZ0RBQXlCOztJQUN6Qiw4Q0FBcUI7O0lBRXJCLDJDQUNROztJQUVSLDJDQUNRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCDJtUNvbnNvbGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkRlc3Ryb3ksIEluamVjdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNQVRfREFURV9MT0NBTEUsIE1hdERhdGVGb3JtYXRzfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TW9tZW50RGF0ZUFkYXB0ZXIsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge01vbWVudH0gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudEFkcGF0ZXIgPSAobW9tZW50IGFzIGFueSkuZGVmYXVsdCA/IChtb21lbnQgYXMgYW55KS5kZWZhdWx0IDogbW9tZW50O1xuaW1wb3J0IHtDdXN0b21IZWFkZXJ9IGZyb20gJy4vY3VzdG9tLWhlYWRlci9jdXN0b20taGVhZGVyLmNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGNvbnN0IE1ZX0ZPUk1BVFMgPSB7XG4gIHBhcnNlOiB7XG4gICAgZGF0ZUlucHV0OiAnTU1NICBZWVlZJyxcbiAgfSxcbiAgZGlzcGxheToge1xuICAgIGRhdGVJbnB1dDogJ01NTSAgWVlZWScsXG4gICAgbW9udGhZZWFyTGFiZWw6ICdZWVlZJyxcbiAgICBkYXRlQTExeUxhYmVsOiAnTU1NJyxcbiAgICBtb250aFllYXJBMTF5TGFiZWw6ICdNTU1NIFlZWVknLFxuICB9LFxufTtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdndWFsaWItcmFuZ2UtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYW5nZS1kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmFuZ2UtZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6IERhdGVBZGFwdGVyLFxuICAgICAgICB1c2VDbGFzczogTW9tZW50RGF0ZUFkYXB0ZXIsXG4gICAgICAgIGRlcHM6IFtNQVRfREFURV9MT0NBTEUsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlNdXG4gICAgfSxcbiAgICB7cHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1ZX0ZPUk1BVFN9LFxuXVxufSlcbmV4cG9ydCBjbGFzcyBSYW5nZURhdGVwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBPdXRwdXQoKVxuICByZXR1cm5EYXRlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGV4YW1wbGVIZWFkZXIgPSBDdXN0b21IZWFkZXI7XG4gIGRpc3BsYXlCdXR0b246Ym9vbGVhbiA9IGZhbHNlO1xuICBpbmljaWFsRGF0ZSA9IG5ldyBGb3JtQ29udHJvbChtb21lbnRBZHBhdGVyKCkpO1xuICBmaW5hbERhdGUgPSBuZXcgRm9ybUNvbnRyb2wobW9tZW50QWRwYXRlcigpKTtcbiAgdmFsaWREYXRlOmJvb2xlYW4gPSB0cnVlO1xuICBlcnJvck1lc3NhZ2UgPSBudWxsO1xuICBJTklUSUFMX0RBVEUgPSBcImluaXRpYWxcIjtcbiAgRklOQUxfREFURSA9IFwiZmluYWxcIjtcblxuICBASW5wdXQoKVxuICBtaW5EYXRlO1xuXG4gIEBJbnB1dCgpXG4gIG1heERhdGU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaWNpYWxEYXRlLnNldFZhbHVlKG1vbWVudEFkcGF0ZXIoKS5zdGFydE9mKCdtb250aCcpKTtcbiAgICB0aGlzLmZpbmFsRGF0ZS5zZXRWYWx1ZShtb21lbnRBZHBhdGVyKCkuZW5kT2YoJ21vbnRoJykpO1xuICB9XG5cbiAgY2hvc2VuWWVhckhhbmRsZXIobm9ybWFsaXplZFllYXI6IE1vbWVudCwgb3JkZXIpIHtcbiAgICB0aGlzLmRpc2FibGVDbGVhckJ1dHRvbigpO1xuICAgIGlmKG9yZGVyID09PSAnaW5pdGlhbCcpIHtcbiAgICAgIGNvbnN0IGN0cmxWYWx1ZSA9IHRoaXMuaW5pY2lhbERhdGUudmFsdWU7XG4gICAgICBjdHJsVmFsdWUueWVhcihub3JtYWxpemVkWWVhci55ZWFyKCkpO1xuICAgICAgdGhpcy5pbmljaWFsRGF0ZS5zZXRWYWx1ZShjdHJsVmFsdWUpO1xuICAgIH1lbHNlIHtcbiAgICAgIGNvbnN0IGN0cmxWYWx1ZSA9IHRoaXMuZmluYWxEYXRlLnZhbHVlO1xuICAgICAgY3RybFZhbHVlLnllYXIobm9ybWFsaXplZFllYXIueWVhcigpKTtcbiAgICAgIHRoaXMuZmluYWxEYXRlLnNldFZhbHVlKGN0cmxWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY2hvc2VuTW9udGhIYW5kbGVyKG5vcm1hbGl6ZWRNb250aDogTW9tZW50LCBkYXRlcGlja2VyOiBNYXREYXRlcGlja2VyPE1vbWVudD4sIG9yZGVyKSB7XG4gICAgdGhpcy5kaXNhYmxlQ2xlYXJCdXR0b24oKTtcbiAgICBpZihvcmRlciA9PT0gJ2luaXRpYWwnKSB7XG4gICAgICBjb25zdCBjdHJsVmFsdWUgPSB0aGlzLmluaWNpYWxEYXRlLnZhbHVlO1xuICAgICAgY3RybFZhbHVlLm1vbnRoKG5vcm1hbGl6ZWRNb250aC5tb250aCgpKTtcbiAgICAgIGN0cmxWYWx1ZS5zdGFydE9mKCdtb250aCcpO1xuICAgICAgdGhpcy5pbmljaWFsRGF0ZS5zZXRWYWx1ZShjdHJsVmFsdWUpO1xuICAgICAgZGF0ZXBpY2tlci5jbG9zZSgpO1xuICAgIH1lbHNlIHtcbiAgICAgIGNvbnN0IGN0cmxWYWx1ZSA9IHRoaXMuZmluYWxEYXRlLnZhbHVlO1xuICAgICAgY3RybFZhbHVlLm1vbnRoKG5vcm1hbGl6ZWRNb250aC5tb250aCgpKTtcbiAgICAgIGN0cmxWYWx1ZS5lbmRPZignbW9udGgnKTtcbiAgICAgIHRoaXMuZmluYWxEYXRlLnNldFZhbHVlKGN0cmxWYWx1ZSk7XG4gICAgICBkYXRlcGlja2VyLmNsb3NlKCk7ICAgICAgXG4gICAgfVxuICAgIGlmKHRoaXMudmVyaWZ5VmFsaWREYXRlcygpKSB7XG4gICAgICB0aGlzLnJldHVybkRhdGVFdmVudC5lbWl0KHtcImluaXRpYWxEYXRlXCI6dGhpcy5pbmljaWFsRGF0ZS52YWx1ZSwgXCJmaW5hbERhdGVcIjp0aGlzLmZpbmFsRGF0ZS52YWx1ZX0pO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIHZlcmlmeVZhbGlkRGF0ZXMoKTpib29sZWFuIHtcbiAgICBjb25zdCBpbml0aWFsOk1vbWVudCA9IHRoaXMuaW5pY2lhbERhdGUudmFsdWU7XG4gICAgY29uc3QgZmluYWw6TW9tZW50ID0gdGhpcy5maW5hbERhdGUudmFsdWU7XG4gICAgaWYoIWluaXRpYWwuaXNCZWZvcmUoZmluYWwpICYmICFpbml0aWFsLmlzU2FtZShmaW5hbCkpIHtcbiAgICAgIHRoaXMuaW5pdGlhbEFmdGVyRmluYWxEYXRlKClcbiAgICAgIHRoaXMudmFsaWREYXRlICA9IGZhbHNlO1xuICAgIH1lbHNlIHtcbiAgICAgIHRoaXMudmFsaWREYXRlICA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBpbml0aWFsLmlzQmVmb3JlKGZpbmFsKTtcbiAgfVxuXG4gIGRpc2FibGVDbGVhckJ1dHRvbigpIHtcbiAgICBjb25zdCBpbml0aWFsOk1vbWVudCA9IHRoaXMuaW5pY2lhbERhdGUudmFsdWU7XG4gICAgY29uc3QgZmluYWw6TW9tZW50ID0gdGhpcy5maW5hbERhdGUudmFsdWU7XG4gICAgdGhpcy52YWxpZERhdGUgID0gdHJ1ZTtcbiAgICB0aGlzLmRpc3BsYXlCdXR0b24gPSAhaW5pdGlhbC5pc1NhbWUoZmluYWwpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5pbmljaWFsRGF0ZSA9IG5ldyBGb3JtQ29udHJvbChtb21lbnRBZHBhdGVyKCkpO1xuICAgIHRoaXMuZmluYWxEYXRlID0gbmV3IEZvcm1Db250cm9sKG1vbWVudEFkcGF0ZXIoKSk7XG4gICAgdGhpcy5yZXR1cm5EYXRlRXZlbnQuZW1pdChudWxsKTtcbiAgICB0aGlzLmRpc2FibGVDbGVhckJ1dHRvbigpO1xuICB9XG5cbiAgaW5pdGlhbEFmdGVyRmluYWxEYXRlKCkge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0EgZGF0YSBpbmljaWFsIG7Do28gcG9kZSBzZXIgc3VwZXJpb3IgYSBkYXRhIGZpbmFsLiAnO1xuICB9XG5cbiAgaW52YWxpZERhdGUoKSB7XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnRGF0YSBpbnbDoWxpZGEuJztcbiAgfVxuXG5cbiAgZ2V0SW5wdXRWYWx1ZShpbnB1dCkge1xuICAgIGlmKGlucHV0LmluaWNpYWxEYXRlLnZhbHVlKXtcbiAgICAgIGNvbnN0IGluaXRpYWw6TW9tZW50ID0gdGhpcy5pbmljaWFsRGF0ZS52YWx1ZTtcbiAgICAgIGlmKHRoaXMudmVyaWZ5Q29ycmVjdERhdGVzKGluaXRpYWwpKSB7XG4gICAgICAgIHRoaXMuaW5pY2lhbERhdGUuc2V0VmFsdWUoaW5pdGlhbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGlucHV0LmZpbmFsRGF0ZS52YWx1ZSkge1xuICAgICAgY29uc3QgZmluYWw6TW9tZW50ID0gdGhpcy5maW5hbERhdGUudmFsdWU7XG4gICAgICBpZih0aGlzLnZlcmlmeUNvcnJlY3REYXRlcyhmaW5hbCkpe1xuICAgICAgICB0aGlzLmZpbmFsRGF0ZS5zZXRWYWx1ZShmaW5hbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKHRoaXMudmVyaWZ5VmFsaWREYXRlcygpKSB7XG4gICAgICB0aGlzLnJldHVybkRhdGVFdmVudC5lbWl0KHtcImluaXRpYWxEYXRlXCI6dGhpcy5pbmljaWFsRGF0ZS52YWx1ZSwgXCJmaW5hbERhdGVcIjp0aGlzLmZpbmFsRGF0ZS52YWx1ZX0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEVycm9yTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvck1lc3NhZ2U7XG4gIH1cblxuICB2ZXJpZnlDb3JyZWN0RGF0ZXMoZGF0ZTogTW9tZW50KSB7XG4gICAgaWYoIWRhdGUuaXNWYWxpZCkge1xuICAgICAgdGhpcy5pbnZhbGlkRGF0ZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcblxuICB9XG59XG5cbiJdfQ==