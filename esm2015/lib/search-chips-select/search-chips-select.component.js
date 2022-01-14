/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
export class GualibSearchChipsSelectComponent {
    constructor() {
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
    /**
     * @return {?}
     */
    get input() {
        return this.inputValue;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set input(val) {
        this.inputValue = val;
    }
    /**
     * @param {?} chipKey
     * @param {?} $event
     * @return {?}
     */
    onClickCloseChip(chipKey, $event) {
        $event.stopPropagation();
        this.onCloseChip.emit(chipKey);
    }
    /**
     * @return {?}
     */
    onInputFocus() {
        this.inputRef.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    onClickSearch() {
        this.onSearch.emit(this.inputValue);
    }
    /**
     * @return {?}
     */
    onSelectionChange() {
        this.onChangeSelect.emit(this.selectValue);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onKeyUp($event) {
        this.inputChange.emit(this.inputValue);
        if ($event.code === 'Enter') {
            this.onClickSearch();
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWNoaXBzLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90aGVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlYXJjaC1jaGlwcy1zZWxlY3Qvc2VhcmNoLWNoaXBzLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU85RixNQUFNLE9BQU8sZ0NBQWdDO0lBTDdDO1FBU2EsVUFBSyxHQUEwQixFQUFFLENBQUM7UUFDM0MsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQVNoQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBMEIsRUFBRSxDQUFDOztRQUV6QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRXBDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7UUFFakMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUF5QjVDLENBQUM7Ozs7SUF6Q0csSUFDSSxLQUFLO1FBQ0wsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBQ0QsSUFBSSxLQUFLLENBQUMsR0FBRztRQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQVlELGdCQUFnQixDQUFDLE9BQWUsRUFBRSxNQUFrQjtRQUNoRCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQXFCO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtJQUNMLENBQUM7OztZQW5ESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsK3NEQUFtRDs7YUFFdEQ7Ozt1QkFFSSxTQUFTLFNBQUMsVUFBVTswQkFFcEIsS0FBSztvQkFDTCxLQUFLO29CQUVMLEtBQUs7MEJBT0wsTUFBTTswQkFFTixLQUFLOzRCQUNMLEtBQUs7NkJBRUwsTUFBTTswQkFFTixNQUFNO3VCQUVOLE1BQU07Ozs7SUFyQlAsb0RBQTRDOztJQUU1Qyx1REFBcUI7O0lBQ3JCLGlEQUEyQzs7SUFDM0Msc0RBQWdCOztJQVFoQix1REFDaUM7O0lBQ2pDLHVEQUEwQjs7SUFDMUIseURBQW1EOztJQUVuRCwwREFBOEM7O0lBRTlDLHVEQUEyQzs7SUFFM0Msb0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2d1YWxpYi1zZWFyY2gtY2hpcHMtc2VsZWN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWNoaXBzLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWNoaXBzLXNlbGVjdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEd1YWxpYlNlYXJjaENoaXBzU2VsZWN0Q29tcG9uZW50IHtcbiAgICBAVmlld0NoaWxkKCdpbnB1dFJlZicpIGlucHV0UmVmOiBFbGVtZW50UmVmO1xuXG4gICAgQElucHV0KCkgc2VsZWN0VmFsdWU7XG4gICAgQElucHV0KCkgY2hpcHM6IEFycmF5PHsga2V5LCB2YWx1ZSB9PiA9IFtdO1xuICAgIGlucHV0VmFsdWUgPSAnJztcbiAgICBASW5wdXQoKVxuICAgIGdldCBpbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZTtcbiAgICB9XG4gICAgc2V0IGlucHV0KHZhbCkge1xuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWw7XG4gICAgfVxuICAgIEBPdXRwdXQoKVxuICAgIGlucHV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBJbnB1dCgpIHNlbGVjdExhYmVsID0gJyc7XG4gICAgQElucHV0KCkgc2VsZWN0Q2hvaWNlczogQXJyYXk8eyBrZXksIHZhbHVlIH0+ID0gW107XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtb24tcHJlZml4XG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tb3V0cHV0LW9uLXByZWZpeFxuICAgIEBPdXRwdXQoKSBvbkNsb3NlQ2hpcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1vbi1wcmVmaXhcbiAgICBAT3V0cHV0KCkgb25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBvbkNsaWNrQ2xvc2VDaGlwKGNoaXBLZXk6IHN0cmluZywgJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlQ2hpcC5lbWl0KGNoaXBLZXkpO1xuICAgIH1cblxuICAgIG9uSW5wdXRGb2N1cygpIHtcbiAgICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgb25DbGlja1NlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5vblNlYXJjaC5lbWl0KHRoaXMuaW5wdXRWYWx1ZSk7XG4gICAgfVxuXG4gICAgb25TZWxlY3Rpb25DaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2VTZWxlY3QuZW1pdCh0aGlzLnNlbGVjdFZhbHVlKTtcbiAgICB9XG5cbiAgICBvbktleVVwKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodGhpcy5pbnB1dFZhbHVlKTtcbiAgICAgICAgaWYgKCRldmVudC5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2tTZWFyY2goKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==