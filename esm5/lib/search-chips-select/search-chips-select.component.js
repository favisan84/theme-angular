/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
var GualibSearchChipsSelectComponent = /** @class */ (function () {
    function GualibSearchChipsSelectComponent() {
        this.chips = [];
        this.inputValue = '';
        this.inputChange = new EventEmitter();
        this.selectLabel = '';
        this.selectChoices = [];
        // tslint:disable-next-line: no-output-on-prefix
        this.onChangeSelect = new EventEmitter();
        // tslint:disable-next-line: no-output-on-prefix
        this.onCloseChip = new EventEmitter();
        // tslint:disable-next-line: no-output-on-prefix
        this.onSearch = new EventEmitter();
    }
    Object.defineProperty(GualibSearchChipsSelectComponent.prototype, "input", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.inputValue = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} chipKey
     * @param {?} $event
     * @return {?}
     */
    GualibSearchChipsSelectComponent.prototype.onClickCloseChip = /**
     * @param {?} chipKey
     * @param {?} $event
     * @return {?}
     */
    function (chipKey, $event) {
        $event.stopPropagation();
        this.onCloseChip.emit(chipKey);
    };
    /**
     * @return {?}
     */
    GualibSearchChipsSelectComponent.prototype.onInputFocus = /**
     * @return {?}
     */
    function () {
        this.inputRef.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    GualibSearchChipsSelectComponent.prototype.onClickSearch = /**
     * @return {?}
     */
    function () {
        this.onSearch.emit(this.inputValue);
    };
    /**
     * @return {?}
     */
    GualibSearchChipsSelectComponent.prototype.onSelectionChange = /**
     * @return {?}
     */
    function () {
        this.onChangeSelect.emit(this.selectValue);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    GualibSearchChipsSelectComponent.prototype.onKeyUp = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.inputChange.emit(this.inputValue);
        if ($event.code === 'Enter') {
            this.onClickSearch();
        }
    };
    GualibSearchChipsSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gualib-search-chips-select',
                    template: "<div fxFlex=\"100\" style=\"height: 100%;\">\n  <div fxFlex=\"20\" fxFlex.xs=\"25\"  fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"input-container\">\n    <input #inputRef [(ngModel)]=\"inputValue\" fxFlex=\"100\" class=\"input\" (keyup)=\"onKeyUp($event)\">\n  </div>\n  <div fxFlex=\"55\" fxFlex.xs=\"35\" fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"chips-container\" fxLayoutGap=\"10px\" (click)=\"onInputFocus()\">\n    <div fxLayoutAlign=\"start center\" *ngFor=\"let chip of chips\" class=\"chip\" (click)=\"$event.stopPropagation();\">\n      <div class=\"chip-value\">{{chip.value}}</div>\n      <mat-icon (click)=\"onClickCloseChip(chip.key, $event)\" style=\"cursor: pointer !important;\">close</mat-icon>\n    </div>\n  </div>\n  <div fxFlex=\"20\" fxFlex.xs=\"30\" fxLayoutAlign=\"start center\" class=\"select-container\" (click)=\"onInputFocus()\">\n    <div fxFlex=\"50\" *ngIf=\"selectLabel\" [ngStyle.xs]=\"{'white-space': 'normal', 'line-height': '12px', 'text-align': 'center'}\" fxLayoutAlign=\"end center\" class=\"select-label\">{{selectLabel}}</div>\n    <div fxFlex=\"50\" class=\"select-select\">\n      <mat-select *ngIf=\"selectChoices.length\" [(ngModel)]=\"selectValue\" (click)=\"$event.stopPropagation();\" (selectionChange)=\"onSelectionChange()\">\n        <mat-option *ngFor=\"let choice of selectChoices\" [value]=\"choice.key\">\n          {{choice.value}}\n        </mat-option>\n      </mat-select>\n    </div>\n  </div>\n  <div fxFlex=\"5\" fxFlex.xs=\"10\" class=\"btn-container\" fxLayoutAlign=\"center center\">\n    <button fxLayoutAlign=\"center center\" class=\"btn\" (click)=\"onClickSearch()\">\n      <mat-icon>search</mat-icon>\n    </button>\n  </div>\n</div>",
                    styles: [":host{font-size:11px}.input-container{border-radius:5px 0 0 5px;border-left:1px solid silver;border-top:1px solid silver;border-bottom:1px solid silver}.input{background-color:transparent;height:100%;border:0;padding-left:10px;padding-right:10px;font-size:14px;outline-width:0!important}.chips-container{overflow-y:auto;border-top:1px solid silver;border-bottom:1px solid silver}.chip{white-space:nowrap;height:80%;border-radius:5px;background-color:#f3f4f6}.chip-value{padding-left:10px;padding-right:10px}.chip-btn{padding:0;margin:0;width:auto;height:auto}.select-container{border-top:1px solid silver;border-bottom:1px solid silver}.select-label{padding-right:2px;white-space:nowrap;font-weight:bolder}.select-select{padding-right:10px}.btn-container{cursor:pointer!important;border-radius:0 5px 5px 0;border:1px solid #007bfc;background-color:#007bfc}.btn{cursor:pointer!important;color:#fff;border:0;height:100%;width:100%;border-radius:0 5px 5px 0;background-color:transparent;box-shadow:none}"]
                }] }
    ];
    GualibSearchChipsSelectComponent.propDecorators = {
        inputRef: [{ type: ViewChild, args: ['inputRef',] }],
        selectValue: [{ type: Input }],
        chips: [{ type: Input }],
        input: [{ type: Input }],
        inputChange: [{ type: Output }],
        selectLabel: [{ type: Input }],
        selectChoices: [{ type: Input }],
        onChangeSelect: [{ type: Output }],
        onCloseChip: [{ type: Output }],
        onSearch: [{ type: Output }]
    };
    return GualibSearchChipsSelectComponent;
}());
export { GualibSearchChipsSelectComponent };
if (false) {
    /** @type {?} */
    GualibSearchChipsSelectComponent.prototype.inputRef;
    /** @type {?} */
    GualibSearchChipsSelectComponent.prototype.selectValue;
    /** @type {?} */
    GualibSearchChipsSelectComponent.prototype.chips;
    /** @type {?} */
    GualibSearchChipsSelectComponent.prototype.inputValue;
    /** @type {?} */
    GualibSearchChipsSelectComponent.prototype.inputChange;
    /** @type {?} */
    GualibSearchChipsSelectComponent.prototype.selectLabel;
    /** @type {?} */
    GualibSearchChipsSelectComponent.prototype.selectChoices;
    /** @type {?} */
    GualibSearchChipsSelectComponent.prototype.onChangeSelect;
    /** @type {?} */
    GualibSearchChipsSelectComponent.prototype.onCloseChip;
    /** @type {?} */
    GualibSearchChipsSelectComponent.prototype.onSearch;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWNoaXBzLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90aGVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlYXJjaC1jaGlwcy1zZWxlY3Qvc2VhcmNoLWNoaXBzLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RjtJQUFBO1FBU2EsVUFBSyxHQUEwQixFQUFFLENBQUM7UUFDM0MsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQVNoQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBMEIsRUFBRSxDQUFDOztRQUV6QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRXBDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFFakMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUF5QjVDLENBQUM7SUF6Q0csc0JBQ0ksbURBQUs7Ozs7UUFEVDtZQUVJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7OztRQUNELFVBQVUsR0FBRztZQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQzFCLENBQUM7OztPQUhBOzs7Ozs7SUFlRCwyREFBZ0I7Ozs7O0lBQWhCLFVBQWlCLE9BQWUsRUFBRSxNQUFrQjtRQUNoRCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELHVEQUFZOzs7SUFBWjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCx3REFBYTs7O0lBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELDREQUFpQjs7O0lBQWpCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsa0RBQU87Ozs7SUFBUCxVQUFRLE1BQXFCO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtJQUNMLENBQUM7O2dCQW5ESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsK3NEQUFtRDs7aUJBRXREOzs7MkJBRUksU0FBUyxTQUFDLFVBQVU7OEJBRXBCLEtBQUs7d0JBQ0wsS0FBSzt3QkFFTCxLQUFLOzhCQU9MLE1BQU07OEJBRU4sS0FBSztnQ0FDTCxLQUFLO2lDQUVMLE1BQU07OEJBRU4sTUFBTTsyQkFFTixNQUFNOztJQXlCWCx1Q0FBQztDQUFBLEFBcERELElBb0RDO1NBL0NZLGdDQUFnQzs7O0lBQ3pDLG9EQUE0Qzs7SUFFNUMsdURBQXFCOztJQUNyQixpREFBMkM7O0lBQzNDLHNEQUFnQjs7SUFRaEIsdURBQ2lDOztJQUNqQyx1REFBMEI7O0lBQzFCLHlEQUFtRDs7SUFFbkQsMERBQThDOztJQUU5Qyx1REFBMkM7O0lBRTNDLG9EQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdndWFsaWItc2VhcmNoLWNoaXBzLXNlbGVjdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1jaGlwcy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NlYXJjaC1jaGlwcy1zZWxlY3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHdWFsaWJTZWFyY2hDaGlwc1NlbGVjdENvbXBvbmVudCB7XG4gICAgQFZpZXdDaGlsZCgnaW5wdXRSZWYnKSBpbnB1dFJlZjogRWxlbWVudFJlZjtcblxuICAgIEBJbnB1dCgpIHNlbGVjdFZhbHVlO1xuICAgIEBJbnB1dCgpIGNoaXBzOiBBcnJheTx7IGtleSwgdmFsdWUgfT4gPSBbXTtcbiAgICBpbnB1dFZhbHVlID0gJyc7XG4gICAgQElucHV0KClcbiAgICBnZXQgaW5wdXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWU7XG4gICAgfVxuICAgIHNldCBpbnB1dCh2YWwpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsO1xuICAgIH1cbiAgICBAT3V0cHV0KClcbiAgICBpbnB1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBASW5wdXQoKSBzZWxlY3RMYWJlbCA9ICcnO1xuICAgIEBJbnB1dCgpIHNlbGVjdENob2ljZXM6IEFycmF5PHsga2V5LCB2YWx1ZSB9PiA9IFtdO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tb3V0cHV0LW9uLXByZWZpeFxuICAgIEBPdXRwdXQoKSBvbkNoYW5nZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1vbi1wcmVmaXhcbiAgICBAT3V0cHV0KCkgb25DbG9zZUNoaXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtb24tcHJlZml4XG4gICAgQE91dHB1dCgpIG9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgb25DbGlja0Nsb3NlQ2hpcChjaGlwS2V5OiBzdHJpbmcsICRldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMub25DbG9zZUNoaXAuZW1pdChjaGlwS2V5KTtcbiAgICB9XG5cbiAgICBvbklucHV0Rm9jdXMoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tTZWFyY2goKSB7XG4gICAgICAgIHRoaXMub25TZWFyY2guZW1pdCh0aGlzLmlucHV0VmFsdWUpO1xuICAgIH1cblxuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlU2VsZWN0LmVtaXQodGhpcy5zZWxlY3RWYWx1ZSk7XG4gICAgfVxuXG4gICAgb25LZXlVcCgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KHRoaXMuaW5wdXRWYWx1ZSk7XG4gICAgICAgIGlmICgkZXZlbnQuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrU2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=