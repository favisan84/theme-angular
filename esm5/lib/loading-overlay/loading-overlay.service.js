/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var LoadingOverlayService = /** @class */ (function () {
    function LoadingOverlayService() {
        this.loading = false;
        this.quantidade = 0;
    }
    /**
     * @return {?}
     */
    LoadingOverlayService.prototype.startLoading = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.setLoading(true);
        }));
    };
    /**
     * @return {?}
     */
    LoadingOverlayService.prototype.endLoading = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.setLoading(false);
        }));
    };
    /**
     * @private
     * @param {?} load
     * @return {?}
     */
    LoadingOverlayService.prototype.setLoading = /**
     * @private
     * @param {?} load
     * @return {?}
     */
    function (load) {
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
    };
    /**
     * @return {?}
     */
    LoadingOverlayService.prototype.getLoading = /**
     * @return {?}
     */
    function () {
        return this.loading;
    };
    LoadingOverlayService.decorators = [
        { type: Injectable }
    ];
    return LoadingOverlayService;
}());
export { LoadingOverlayService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90aGVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2xvYWRpbmctb3ZlcmxheS9sb2FkaW5nLW92ZXJsYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUFBO1FBRVksWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsQ0FBQyxDQUFDO0lBNkIzQixDQUFDOzs7O0lBM0JHLDRDQUFZOzs7SUFBWjtRQUFBLGlCQUlDO1FBSEcsVUFBVTs7O1FBQUM7WUFDUCxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELDBDQUFVOzs7SUFBVjtRQUFBLGlCQUlDO1FBSEcsVUFBVTs7O1FBQUM7WUFDUCxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7O0lBRU8sMENBQVU7Ozs7O0lBQWxCLFVBQW1CLElBQWE7UUFDNUIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDdkI7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4QjtTQUNKO0lBQ0wsQ0FBQzs7OztJQUVELDBDQUFVOzs7SUFBVjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOztnQkEvQkosVUFBVTs7SUFnQ1gsNEJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQS9CWSxxQkFBcUI7Ozs7OztJQUM5Qix3Q0FBd0I7Ozs7O0lBQ3hCLDJDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9hZGluZ092ZXJsYXlTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGxvYWRpbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIHF1YW50aWRhZGUgPSAwO1xuXG4gICAgc3RhcnRMb2FkaW5nKCk6IHZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW5kTG9hZGluZygpOiB2b2lkIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldExvYWRpbmcobG9hZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAobG9hZCkge1xuICAgICAgICAgICAgdGhpcy5xdWFudGlkYWRlKys7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5xdWFudGlkYWRlLS07XG4gICAgICAgICAgICBpZiAodGhpcy5xdWFudGlkYWRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nO1xuICAgIH1cbn1cbiJdfQ==