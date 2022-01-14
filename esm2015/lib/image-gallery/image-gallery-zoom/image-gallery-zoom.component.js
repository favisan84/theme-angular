/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
export class ImageGalleryZoomComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @param {?} closeDialog
     * @return {?}
     */
    closeDialog(closeDialog) {
        if (closeDialog)
            return;
        this.dialogRef.close();
    }
}
ImageGalleryZoomComponent.decorators = [
    { type: Component, args: [{
                selector: 'gua-image-gallery-zoom',
                template: "<div [style.color]=\"data?.color\" class=\"close-button\">\n  <button mat-icon-button (click)=\"closeDialog(false)\" [style.background-color]=\"data?.background\">\n    <i class=\"material-icons\">close</i>\n  </button>\n</div>\n<div class=\"image\" (click)=\"closeDialog(data?.disableClose)\">\n  <img cdkFocusInitial [src]=\"data.url\">\n</div>\n",
                styles: [":host{background-color:#000}:host .image{display:flex;align-items:center;justify-content:center;align-items:center;height:100%}:host img{align-content:center;height:inherit}:host .close-button{color:#000;position:absolute;right:10px;top:10px}:host .mat-icon-button{height:auto;width:auto}:host .material-icons{font-size:50px}"]
            }] }
];
/** @nocollapse */
ImageGalleryZoomComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    ImageGalleryZoomComponent.prototype.dialogRef;
    /** @type {?} */
    ImageGalleryZoomComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RoZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LXpvb20vaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU9sRSxNQUFNLE9BQU8seUJBQXlCOzs7OztJQUVwQyxZQUFtQixTQUFrRCxFQUFrQyxJQUFTO1FBQTdGLGNBQVMsR0FBVCxTQUFTLENBQXlDO1FBQWtDLFNBQUksR0FBSixJQUFJLENBQUs7SUFBSSxDQUFDOzs7OztJQUVySCxXQUFXLENBQUMsV0FBb0I7UUFDOUIsSUFBSSxXQUFXO1lBQ2IsT0FBTztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHdXQUFrRDs7YUFFbkQ7Ozs7WUFOeUIsWUFBWTs0Q0FTb0MsTUFBTSxTQUFDLGVBQWU7Ozs7SUFBbEYsOENBQXlEOztJQUFFLHlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3VhLWltYWdlLWdhbGxlcnktem9vbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1nYWxsZXJ5LXpvb20uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS1nYWxsZXJ5LXpvb20uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUdhbGxlcnlab29tQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8SW1hZ2VHYWxsZXJ5Wm9vbUNvbXBvbmVudD4sIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7IH1cblxuICBjbG9zZURpYWxvZyhjbG9zZURpYWxvZzogYm9vbGVhbikge1xuICAgIGlmIChjbG9zZURpYWxvZylcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iXX0=