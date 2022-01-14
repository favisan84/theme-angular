/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class LoadingOverlayService {
    constructor() {
        this.loading = false;
        this.quantidade = 0;
    }
    /**
     * @return {?}
     */
    startLoading() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.setLoading(true);
        }));
    }
    /**
     * @return {?}
     */
    endLoading() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.setLoading(false);
        }));
    }
    /**
     * @private
     * @param {?} load
     * @return {?}
     */
    setLoading(load) {
        if (load) {
            this.quantidade++;
            this.loading = true;
        }
        else {
            this.quantidade--;
            if (this.quantidade === 0) {
                this.loading = false;
            }
        }
    }
    /**
     * @return {?}
     */
    getLoading() {
        return this.loading;
    }
}
LoadingOverlayService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoadingOverlayService.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    LoadingOverlayService.prototype.quantidade;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90aGVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2xvYWRpbmctb3ZlcmxheS9sb2FkaW5nLW92ZXJsYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8scUJBQXFCO0lBRGxDO1FBRVksWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsQ0FBQyxDQUFDO0lBNkIzQixDQUFDOzs7O0lBM0JHLFlBQVk7UUFDUixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLElBQWE7UUFDNUIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDdkI7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4QjtTQUNKO0lBQ0wsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7O1lBL0JKLFVBQVU7Ozs7Ozs7SUFFUCx3Q0FBd0I7Ozs7O0lBQ3hCLDJDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9hZGluZ092ZXJsYXlTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGxvYWRpbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIHF1YW50aWRhZGUgPSAwO1xuXG4gICAgc3RhcnRMb2FkaW5nKCk6IHZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW5kTG9hZGluZygpOiB2b2lkIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldExvYWRpbmcobG9hZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAobG9hZCkge1xuICAgICAgICAgICAgdGhpcy5xdWFudGlkYWRlKys7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5xdWFudGlkYWRlLS07XG4gICAgICAgICAgICBpZiAodGhpcy5xdWFudGlkYWRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xuICAgIH1cbn1cbiJdfQ==