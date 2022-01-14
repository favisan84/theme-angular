/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ChangeDetectorRef, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { MatCalendar, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
/** @type {?} */
export const MY_FORMATS = {
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
export class CustomHeader {
    /**
     * @param {?} calendar
     * @param {?} dateAdapter
     * @param {?} dateFormats
     * @param {?} cdr
     */
    constructor(calendar, dateAdapter, dateFormats, cdr) {
        this.calendar = calendar;
        this.dateAdapter = dateAdapter;
        this.dateFormats = dateFormats;
        this.destroyed = new Subject();
        calendar.stateChanges
            .pipe(takeUntil(this.destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => cdr.markForCheck()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    /**
     * @return {?}
     */
    get periodLabel() {
        return this.dateAdapter
            .format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel)
            .toLocaleUpperCase();
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    previousClicked(mode) {
        this.calendar.activeDate = mode === 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
            this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    nextClicked(mode) {
        this.calendar.activeDate = mode === 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);
    }
}
CustomHeader.decorators = [
    { type: Component, args: [{
                selector: 'custom-header',
                template: "<div class=\"example-header\">\n    <button mat-icon-button  (click)=\"previousClicked('year')\">\n      <mat-icon aria-hidden=\"false\" >keyboard_arrow_left</mat-icon>\n    </button>\n    <span class=\"example-header-label\">{{periodLabel}}</span>\n    <button mat-icon-button  (click)=\"nextClicked('year')\">\n      <mat-icon aria-hidden=\"false\" >keyboard_arrow_right</mat-icon>\n    </button>\n  </div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".example-header{display:flex;align-items:center;padding:.5em}.example-header-label{flex:1;height:1em;font-weight:500;text-align:center}.example-double-arrow .mat-icon{margin:-22%}"]
            }] }
];
/** @nocollapse */
CustomHeader.ctorParameters = () => [
    { type: MatCalendar },
    { type: DateAdapter },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DATE_FORMATS,] }] },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90aGVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3JhbmdlLWRhdGVwaWNrZXIvY3VzdG9tLWhlYWRlci9jdXN0b20taGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBa0IsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxVQUFVLEdBQUc7SUFDdEIsS0FBSyxFQUFFO1FBQ0wsU0FBUyxFQUFFLFdBQVc7S0FDdkI7SUFDRCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsV0FBVztRQUN0QixjQUFjLEVBQUUsTUFBTTtRQUN0QixhQUFhLEVBQUUsSUFBSTtRQUNuQixrQkFBa0IsRUFBRSxXQUFXO0tBQ2hDO0NBQ0Y7Ozs7QUFRSCxNQUFNLE9BQU8sWUFBWTs7Ozs7OztJQUl2QixZQUNZLFFBQXdCLEVBQVUsV0FBMkIsRUFDbkMsV0FBMkIsRUFBRSxHQUFzQjtRQUQ3RSxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUNuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFKekQsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFLdEMsUUFBUSxDQUFDLFlBQVk7YUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVc7YUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQzthQUN6RSxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQXNCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBc0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLG9hQUE2QztnQkFFN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2xEOzs7O1lBckJRLFdBQVc7WUFBRSxXQUFXOzRDQTRCMUIsTUFBTSxTQUFDLGdCQUFnQjtZQTlCMEIsaUJBQWlCOzs7Ozs7O0lBMEJ2RSxpQ0FBd0M7Ozs7O0lBR3BDLGdDQUFnQzs7Ozs7SUFBRSxtQ0FBbUM7Ozs7O0lBQ3JFLG1DQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWF0Q2FsZW5kYXIsIERhdGVBZGFwdGVyLCBNYXREYXRlRm9ybWF0cywgTUFUX0RBVEVfRk9STUFUUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5leHBvcnQgY29uc3QgTVlfRk9STUFUUyA9IHtcbiAgICBwYXJzZToge1xuICAgICAgZGF0ZUlucHV0OiAnTU1NICBZWVlZJyxcbiAgICB9LFxuICAgIGRpc3BsYXk6IHtcbiAgICAgIGRhdGVJbnB1dDogJ01NTSAgWVlZWScsXG4gICAgICBtb250aFllYXJMYWJlbDogJ1lZWVknLFxuICAgICAgZGF0ZUExMXlMYWJlbDogJ0xMJyxcbiAgICAgIG1vbnRoWWVhckExMXlMYWJlbDogJ01NTU0gWVlZWScsXG4gICAgfSxcbiAgfTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjdXN0b20taGVhZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tLWhlYWRlci5jb21wb25lbnQuc2NzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUhlYWRlcjxEPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgXG4gIHByaXZhdGUgZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgY2FsZW5kYXI6IE1hdENhbGVuZGFyPEQ+LCBwcml2YXRlIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxEPixcbiAgICAgIEBJbmplY3QoTUFUX0RBVEVfRk9STUFUUykgcHJpdmF0ZSBkYXRlRm9ybWF0czogTWF0RGF0ZUZvcm1hdHMsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBjYWxlbmRhci5zdGF0ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiBjZHIubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBnZXQgcGVyaW9kTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZUFkYXB0ZXJcbiAgICAgICAgLmZvcm1hdCh0aGlzLmNhbGVuZGFyLmFjdGl2ZURhdGUsIHRoaXMuZGF0ZUZvcm1hdHMuZGlzcGxheS5tb250aFllYXJMYWJlbClcbiAgICAgICAgLnRvTG9jYWxlVXBwZXJDYXNlKCk7XG4gIH1cblxuICBwcmV2aW91c0NsaWNrZWQobW9kZTogJ21vbnRoJyB8ICd5ZWFyJykge1xuICAgIHRoaXMuY2FsZW5kYXIuYWN0aXZlRGF0ZSA9IG1vZGUgPT09ICdtb250aCcgP1xuICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuY2FsZW5kYXIuYWN0aXZlRGF0ZSwgLTEpIDpcbiAgICAgICAgdGhpcy5kYXRlQWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuY2FsZW5kYXIuYWN0aXZlRGF0ZSwgLTEpO1xuICB9XG5cbiAgbmV4dENsaWNrZWQobW9kZTogJ21vbnRoJyB8ICd5ZWFyJykge1xuICAgIHRoaXMuY2FsZW5kYXIuYWN0aXZlRGF0ZSA9IG1vZGUgPT09ICdtb250aCcgP1xuICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuY2FsZW5kYXIuYWN0aXZlRGF0ZSwgMSkgOlxuICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5jYWxlbmRhci5hY3RpdmVEYXRlLCAxKTtcbiAgfVxuICBcbiAgfVxuICAiXX0=