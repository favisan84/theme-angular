/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var LoadingOverlayComponent = /** @class */ (function () {
    function LoadingOverlayComponent() {
        this.image = 'assets/image-loading.gif';
    }
    LoadingOverlayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gualib-loading-overlay',
                    template: "<div class=\"loading-overlay\" style=\"display: flex; align-items: center; justify-content: center;\" [class.loading]=\"loading\">\n  <img class=\"image-loading\" [src]=\"image\">\n</div>",
                    styles: [".loading-overlay{background-color:rgba(255,255,255,.7);position:fixed;top:0;left:0;width:100%;height:100%;z-index:10;transition:.25s ease-in-out;opacity:0;visibility:hidden}.loading-overlay.loading{opacity:1;visibility:visible}.image-loading{height:128px}"]
                }] }
    ];
    /** @nocollapse */
    LoadingOverlayComponent.ctorParameters = function () { return []; };
    LoadingOverlayComponent.propDecorators = {
        loading: [{ type: Input }],
        image: [{ type: Input }]
    };
    return LoadingOverlayComponent;
}());
export { LoadingOverlayComponent };
if (false) {
    /** @type {?} */
    LoadingOverlayComponent.prototype.loading;
    /** @type {?} */
    LoadingOverlayComponent.prototype.image;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1vdmVybGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RoZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1vdmVybGF5L2xvYWRpbmctb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBVUU7UUFGUyxVQUFLLEdBQUcsMEJBQTBCLENBQUM7SUFFNUIsQ0FBQzs7Z0JBVmxCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyx1TUFBK0M7O2lCQUVoRDs7Ozs7MEJBR0UsS0FBSzt3QkFDTCxLQUFLOztJQUdSLDhCQUFDO0NBQUEsQUFYRCxJQVdDO1NBTlksdUJBQXVCOzs7SUFFbEMsMENBQTBCOztJQUMxQix3Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3VhbGliLWxvYWRpbmctb3ZlcmxheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLW92ZXJsYXkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nT3ZlcmxheUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbjtcbiAgQElucHV0KCkgaW1hZ2UgPSAnYXNzZXRzL2ltYWdlLWxvYWRpbmcuZ2lmJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19