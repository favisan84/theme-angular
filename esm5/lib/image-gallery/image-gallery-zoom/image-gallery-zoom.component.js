/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
var ImageGalleryZoomComponent = /** @class */ (function () {
    function ImageGalleryZoomComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @param {?} closeDialog
     * @return {?}
     */
    ImageGalleryZoomComponent.prototype.closeDialog = /**
     * @param {?} closeDialog
     * @return {?}
     */
    function (closeDialog) {
        if (closeDialog)
            return;
        this.dialogRef.close();
    };
    ImageGalleryZoomComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gua-image-gallery-zoom',
                    template: "<div [style.color]=\"data?.color\" class=\"close-button\">\n  <button mat-icon-button (click)=\"closeDialog(false)\" [style.background-color]=\"data?.background\">\n    <i class=\"material-icons\">close</i>\n  </button>\n</div>\n<div class=\"image\" (click)=\"closeDialog(data?.disableClose)\">\n  <img cdkFocusInitial [src]=\"data.url\">\n</div>\n",
                    styles: [":host{background-color:#000}:host .image{display:flex;align-items:center;justify-content:center;align-items:center;height:100%}:host img{align-content:center;height:inherit}:host .close-button{color:#000;position:absolute;right:10px;top:10px}:host .mat-icon-button{height:auto;width:auto}:host .material-icons{font-size:50px}"]
                }] }
    ];
    /** @nocollapse */
    ImageGalleryZoomComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return ImageGalleryZoomComponent;
}());
export { ImageGalleryZoomComponent };
if (false) {
    /** @type {?} */
    ImageGalleryZoomComponent.prototype.dialogRef;
    /** @type {?} */
    ImageGalleryZoomComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RoZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LXpvb20vaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRTtJQU9FLG1DQUFtQixTQUFrRCxFQUFrQyxJQUFTO1FBQTdGLGNBQVMsR0FBVCxTQUFTLENBQXlDO1FBQWtDLFNBQUksR0FBSixJQUFJLENBQUs7SUFBSSxDQUFDOzs7OztJQUVySCwrQ0FBVzs7OztJQUFYLFVBQVksV0FBb0I7UUFDOUIsSUFBSSxXQUFXO1lBQ2IsT0FBTztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLHdXQUFrRDs7aUJBRW5EOzs7O2dCQU55QixZQUFZO2dEQVNvQyxNQUFNLFNBQUMsZUFBZTs7SUFPaEcsZ0NBQUM7Q0FBQSxBQWRELElBY0M7U0FUWSx5QkFBeUI7OztJQUV4Qiw4Q0FBeUQ7O0lBQUUseUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdndWEtaW1hZ2UtZ2FsbGVyeS16b29tJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWdhbGxlcnktem9vbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLWdhbGxlcnktem9vbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlR2FsbGVyeVpvb21Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxJbWFnZUdhbGxlcnlab29tQ29tcG9uZW50PiwgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHsgfVxuXG4gIGNsb3NlRGlhbG9nKGNsb3NlRGlhbG9nOiBib29sZWFuKSB7XG4gICAgaWYgKGNsb3NlRGlhbG9nKVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==