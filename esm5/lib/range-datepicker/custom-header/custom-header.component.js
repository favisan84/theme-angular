/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ChangeDetectorRef, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { MatCalendar, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
/** @type {?} */
export var MY_FORMATS = {
    parse: {
        dateInput: 'MMM  YYYY',
    },
    display: {
        dateInput: 'MMM  YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/**
 * @template D
 */
var CustomHeader = /** @class */ (function () {
    function CustomHeader(calendar, dateAdapter, dateFormats, cdr) {
        this.calendar = calendar;
        this.dateAdapter = dateAdapter;
        this.dateFormats = dateFormats;
        this.destroyed = new Subject();
        calendar.stateChanges
            .pipe(takeUntil(this.destroyed))
            .subscribe((/**
         * @return {?}
         */
        function () { return cdr.markForCheck(); }));
    }
    /**
     * @return {?}
     */
    CustomHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    Object.defineProperty(CustomHeader.prototype, "periodLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dateAdapter
                .format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel)
                .toLocaleUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} mode
     * @return {?}
     */
    CustomHeader.prototype.previousClicked = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.calendar.activeDate = mode === 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
            this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    CustomHeader.prototype.nextClicked = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.calendar.activeDate = mode === 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);
    };
    CustomHeader.decorators = [
        { type: Component, args: [{
                    selector: 'custom-header',
                    template: "<div class=\"example-header\">\n    <button mat-icon-button  (click)=\"previousClicked('year')\">\n      <mat-icon aria-hidden=\"false\" >keyboard_arrow_left</mat-icon>\n    </button>\n    <span class=\"example-header-label\">{{periodLabel}}</span>\n    <button mat-icon-button  (click)=\"nextClicked('year')\">\n      <mat-icon aria-hidden=\"false\" >keyboard_arrow_right</mat-icon>\n    </button>\n  </div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".example-header{display:flex;align-items:center;padding:.5em}.example-header-label{flex:1;height:1em;font-weight:500;text-align:center}.example-double-arrow .mat-icon{margin:-22%}"]
                }] }
    ];
    /** @nocollapse */
    CustomHeader.ctorParameters = function () { return [
        { type: MatCalendar },
        { type: DateAdapter },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DATE_FORMATS,] }] },
        { type: ChangeDetectorRef }
    ]; };
    return CustomHeader;
}());
export { CustomHeader };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomHeader.prototype.destroyed;
    /**
     * @type {?}
     * @private
     */
    CustomHeader.prototype.calendar;
    /**
     * @type {?}
     * @private
     */
    CustomHeader.prototype.dateAdapter;
    /**
     * @type {?}
     * @private
     */
    CustomHeader.prototype.dateFormats;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90aGVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3JhbmdlLWRhdGVwaWNrZXIvY3VzdG9tLWhlYWRlci9jdXN0b20taGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBa0IsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRzNDLE1BQU0sS0FBTyxVQUFVLEdBQUc7SUFDdEIsS0FBSyxFQUFFO1FBQ0wsU0FBUyxFQUFFLFdBQVc7S0FDdkI7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsV0FBVztRQUN0QixjQUFjLEVBQUUsTUFBTTtRQUN0QixhQUFhLEVBQUUsSUFBSTtRQUNuQixrQkFBa0IsRUFBRSxXQUFXO0tBQ2hDO0NBQ0Y7Ozs7QUFFSDtJQVVFLHNCQUNZLFFBQXdCLEVBQVUsV0FBMkIsRUFDbkMsV0FBMkIsRUFBRSxHQUFzQjtRQUQ3RSxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUNuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFKekQsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFLdEMsUUFBUSxDQUFDLFlBQVk7YUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBbEIsQ0FBa0IsRUFBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxrQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFJLHFDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXO2lCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO2lCQUN6RSxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUFBOzs7OztJQUVELHNDQUFlOzs7O0lBQWYsVUFBZ0IsSUFBc0I7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7OztJQUVELGtDQUFXOzs7O0lBQVgsVUFBWSxJQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsb2FBQTZDO29CQUU3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2xEOzs7O2dCQXJCUSxXQUFXO2dCQUFFLFdBQVc7Z0RBNEIxQixNQUFNLFNBQUMsZ0JBQWdCO2dCQTlCMEIsaUJBQWlCOztJQTJEdkUsbUJBQUM7Q0FBQSxBQXpDSCxJQXlDRztTQW5DVSxZQUFZOzs7Ozs7SUFFdkIsaUNBQXdDOzs7OztJQUdwQyxnQ0FBZ0M7Ozs7O0lBQUUsbUNBQW1DOzs7OztJQUNyRSxtQ0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1hdENhbGVuZGFyLCBEYXRlQWRhcHRlciwgTWF0RGF0ZUZvcm1hdHMsIE1BVF9EQVRFX0ZPUk1BVFMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuZXhwb3J0IGNvbnN0IE1ZX0ZPUk1BVFMgPSB7XG4gICAgcGFyc2U6IHtcbiAgICAgIGRhdGVJbnB1dDogJ01NTSAgWVlZWScsXG4gICAgfSxcbiAgICBkaXNwbGF5OiB7XG4gICAgICBkYXRlSW5wdXQ6ICdNTU0gIFlZWVknLFxuICAgICAgbW9udGhZZWFyTGFiZWw6ICdZWVlZJyxcbiAgICAgIGRhdGVBMTF5TGFiZWw6ICdMTCcsXG4gICAgICBtb250aFllYXJBMTF5TGFiZWw6ICdNTU1NIFlZWVknLFxuICAgIH0sXG4gIH07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY3VzdG9tLWhlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2N1c3RvbS1oZWFkZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21IZWFkZXI8RD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIFxuICBwcml2YXRlIGRlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGNhbGVuZGFyOiBNYXRDYWxlbmRhcjxEPiwgcHJpdmF0ZSBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8RD4sXG4gICAgICBASW5qZWN0KE1BVF9EQVRFX0ZPUk1BVFMpIHByaXZhdGUgZGF0ZUZvcm1hdHM6IE1hdERhdGVGb3JtYXRzLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgY2FsZW5kYXIuc3RhdGVDaGFuZ2VzXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZ2V0IHBlcmlvZExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGVBZGFwdGVyXG4gICAgICAgIC5mb3JtYXQodGhpcy5jYWxlbmRhci5hY3RpdmVEYXRlLCB0aGlzLmRhdGVGb3JtYXRzLmRpc3BsYXkubW9udGhZZWFyTGFiZWwpXG4gICAgICAgIC50b0xvY2FsZVVwcGVyQ2FzZSgpO1xuICB9XG5cbiAgcHJldmlvdXNDbGlja2VkKG1vZGU6ICdtb250aCcgfCAneWVhcicpIHtcbiAgICB0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUgPSBtb2RlID09PSAnbW9udGgnID9cbiAgICAgICAgdGhpcy5kYXRlQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsIC0xKSA6XG4gICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsIC0xKTtcbiAgfVxuXG4gIG5leHRDbGlja2VkKG1vZGU6ICdtb250aCcgfCAneWVhcicpIHtcbiAgICB0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUgPSBtb2RlID09PSAnbW9udGgnID9cbiAgICAgICAgdGhpcy5kYXRlQWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsIDEpIDpcbiAgICAgICAgdGhpcy5kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuY2FsZW5kYXIuYWN0aXZlRGF0ZSwgMSk7XG4gIH1cbiAgXG4gIH1cbiAgIl19