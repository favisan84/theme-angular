/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class LoadingOverlayComponent {
    constructor() {
        this.image = 'assets/image-loading.gif';
    }
}
LoadingOverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'gualib-loading-overlay',
                template: "<div class=\"loading-overlay\" style=\"display: flex; align-items: center; justify-content: center;\" [class.loading]=\"loading\">\n  <img class=\"image-loading\" [src]=\"image\">\n</div>",
                styles: [".loading-overlay{background-color:rgba(255,255,255,.7);position:fixed;top:0;left:0;width:100%;height:100%;z-index:10;transition:.25s ease-in-out;opacity:0;visibility:hidden}.loading-overlay.loading{opacity:1;visibility:visible}.image-loading{height:128px}"]
            }] }
];
/** @nocollapse */
LoadingOverlayComponent.ctorParameters = () => [];
LoadingOverlayComponent.propDecorators = {
    loading: [{ type: Input }],
    image: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LoadingOverlayComponent.prototype.loading;
    /** @type {?} */
    LoadingOverlayComponent.prototype.image;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RoZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1vdmVybGF5L2xvYWRpbmctb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyx1QkFBdUI7SUFLbEM7UUFGUyxVQUFLLEdBQUcsMEJBQTBCLENBQUM7SUFFNUIsQ0FBQzs7O1lBVmxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyx1TUFBK0M7O2FBRWhEOzs7OztzQkFHRSxLQUFLO29CQUNMLEtBQUs7Ozs7SUFETiwwQ0FBMEI7O0lBQzFCLHdDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdndWFsaWItbG9hZGluZy1vdmVybGF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctb3ZlcmxheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctb3ZlcmxheS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdPdmVybGF5Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBsb2FkaW5nOiBib29sZWFuO1xuICBASW5wdXQoKSBpbWFnZSA9ICdhc3NldHMvaW1hZ2UtbG9hZGluZy5naWYnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=