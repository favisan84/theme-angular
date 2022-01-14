/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ImageGalleryZoomComponent } from './image-gallery-zoom/image-gallery-zoom.component';
var ImageGalleryComponent = /** @class */ (function () {
    function ImageGalleryComponent(dialog) {
        this.dialog = dialog;
        this.images = [];
        this.editMode = false;
        // tslint:disable-next-line: no-output-on-prefix
        this.onAddImage = new EventEmitter();
        // tslint:disable-next-line: no-output-on-prefix
        this.onDeleteImage = new EventEmitter();
        this.disableClose = false;
        this.emptyImagePath = '';
        this.isDisplayBtn = false;
    }
    /**
     * @return {?}
     */
    ImageGalleryComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.images.length) {
            this.selectedImage = this.images[0];
        }
    };
    /**
     * @return {?}
     */
    ImageGalleryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.height = 'auto';
        if (this.images.length) {
            this.selectedImage = this.images[0];
        }
    };
    /**
     * @return {?}
     */
    ImageGalleryComponent.prototype.openZoom = /**
     * @return {?}
     */
    function () {
        if (this.selectedImage && this.images.length) {
            this.dialog.open(ImageGalleryZoomComponent, {
                disableClose: false,
                height: '100%',
                width: '100%',
                maxWidth: '100vw',
                maxHeight: '100vh',
                data: {
                    url: this.selectedImage,
                    color: this.closeButtonColor,
                    background: this.closeButtonBackground,
                    disableClose: this.disableClose
                },
                panelClass: this.panelClass,
            });
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ImageGalleryComponent.prototype.onClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.onAddImage.emit($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ImageGalleryComponent.prototype.onClickDelete = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
        this.onDeleteImage.emit($event);
    };
    ImageGalleryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gualib-image-gallery',
                    template: "<ng-container style=\"height: 100%;\">\n  <div fxFlex style=\"height: 100%;\">\n    <mat-card class=\"imagem-principal\" (click)=\"openZoom()\" fxLayoutAlign=\"center center\">\n      <button *ngIf=\"editMode && images.length\" (click)=\"onClickDelete($event)\" class=\"delete-button gua-btn-primary\" mat-button>\n          <mat-icon class=\"delete-icon gua-color-primary\">delete_outline</mat-icon>\n          Excluir imagem\n      </button>\n      <img *ngIf=\"selectedImage && images.length\" mat-card-image [style.height]=\"height\" [src]=\"selectedImage\">\n      <img *ngIf=\"images.length === 0 && emptyImagePath\" mat-card-image [style.height]=\"height\" [src]=\"emptyImagePath\">\n    </mat-card>\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\n      <div *ngFor=\"let i of images\" fxLayout=\"row\" (click)=\"selectedImage = i;\" class=\"selecao-image\">\n        <mat-card [style.height]=\"height\" fxLayoutAlign=\"center center\">\n          <img mat-card-image [src]=\"i\">\n        </mat-card>\n      </div>\n      <div *ngIf=\"editMode\" fxLayout=\"row\" class=\"selecao-image\">\n        <mat-card class=\"add-btn\" fxLayoutAlign=\"center center\" (click)=\"onClick($event)\">\n          <mat-icon style=\"height: auto;text-align: center;font-size: 50px\" class=\"gua-color-primary\" fxFlex>add_photo_alternate</mat-icon>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</ng-container>",
                    styles: [".gua-btn-primary{background-color:#007bfc!important;color:#fff!important}.gua-color-primary{color:#fff!important}:host .imagem-principal{height:80%}:host .material-icons{font-size:18px}:host .delete-button{display:none;position:absolute;right:10px;top:10px}:host .delete-icon{font-size:20px}:host .mat-card{cursor:pointer;border-radius:0;padding:0;margin:0;box-shadow:none!important;background-color:transparent}:host .mat-card>img{border-radius:10px;height:100%;width:100%;margin-top:0}:host .selecao-image{height:100px;width:100px;padding:5px}:host .add-btn{width:100%;border-radius:10px;background-color:rgba(0,0,0,.3)}:host .imagem-principal:hover>.delete-button{display:block}"]
                }] }
    ];
    /** @nocollapse */
    ImageGalleryComponent.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    ImageGalleryComponent.propDecorators = {
        images: [{ type: Input }],
        closeButtonColor: [{ type: Input }],
        closeButtonBackground: [{ type: Input }],
        panelClass: [{ type: Input }],
        editMode: [{ type: Input }],
        onAddImage: [{ type: Output }],
        onDeleteImage: [{ type: Output }],
        disableClose: [{ type: Input }],
        emptyImagePath: [{ type: Input }]
    };
    return ImageGalleryComponent;
}());
export { ImageGalleryComponent };
if (false) {
    /** @type {?} */
    ImageGalleryComponent.prototype.images;
    /** @type {?} */
    ImageGalleryComponent.prototype.closeButtonColor;
    /** @type {?} */
    ImageGalleryComponent.prototype.closeButtonBackground;
    /** @type {?} */
    ImageGalleryComponent.prototype.panelClass;
    /** @type {?} */
    ImageGalleryComponent.prototype.editMode;
    /** @type {?} */
    ImageGalleryComponent.prototype.onAddImage;
    /** @type {?} */
    ImageGalleryComponent.prototype.onDeleteImage;
    /** @type {?} */
    ImageGalleryComponent.prototype.height;
    /** @type {?} */
    ImageGalleryComponent.prototype.disableClose;
    /** @type {?} */
    ImageGalleryComponent.prototype.emptyImagePath;
    /** @type {?} */
    ImageGalleryComponent.prototype.isDisplayBtn;
    /** @type {?} */
    ImageGalleryComponent.prototype.selectedImage;
    /** @type {?} */
    ImageGalleryComponent.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90aGVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2ltYWdlLWdhbGxlcnkvaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRTlGO0lBdUJFLCtCQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBaEIzQixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBSXRCLGFBQVEsR0FBRyxLQUFLLENBQUM7O1FBRWhCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztRQUVoQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDN0IsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFJbUIsQ0FBQzs7OztJQUV6QywyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7Z0JBQzFDLFlBQVksRUFBRSxLQUFLO2dCQUNuQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUUsT0FBTztnQkFDakIsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLElBQUksRUFBRTtvQkFDSixHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWE7b0JBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCO29CQUM1QixVQUFVLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtvQkFDdEMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO2lCQUNoQztnQkFDRCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDNUIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELHVDQUFPOzs7O0lBQVAsVUFBUSxNQUFNO1FBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCw2Q0FBYTs7OztJQUFiLFVBQWMsTUFBTTtRQUNsQixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQywyNUNBQTZDOztpQkFFOUM7Ozs7Z0JBUFEsU0FBUzs7O3lCQVVmLEtBQUs7bUNBQ0wsS0FBSzt3Q0FDTCxLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFFTCxNQUFNO2dDQUVOLE1BQU07K0JBRU4sS0FBSztpQ0FDTCxLQUFLOztJQStDUiw0QkFBQztDQUFBLEFBakVELElBaUVDO1NBNURZLHFCQUFxQjs7O0lBRWhDLHVDQUErQjs7SUFDL0IsaURBQWtDOztJQUNsQyxzREFBdUM7O0lBQ3ZDLDJDQUE0Qjs7SUFDNUIseUNBQTBCOztJQUUxQiwyQ0FBMEM7O0lBRTFDLDhDQUE2Qzs7SUFDN0MsdUNBQWU7O0lBQ2YsNkNBQThCOztJQUM5QiwrQ0FBNkI7O0lBQzdCLDZDQUFxQjs7SUFFckIsOENBQXNCOztJQUVWLHVDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgSW1hZ2VHYWxsZXJ5Wm9vbUNvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UtZ2FsbGVyeS16b29tL2ltYWdlLWdhbGxlcnktem9vbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdndWFsaWItaW1hZ2UtZ2FsbGVyeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlR2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBpbWFnZXM6IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgpIGNsb3NlQnV0dG9uQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgY2xvc2VCdXR0b25CYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhbmVsQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgZWRpdE1vZGUgPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBvbkFkZEltYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uRGVsZXRlSW1hZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGhlaWdodDogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlQ2xvc2UgPSBmYWxzZTtcbiAgQElucHV0KCkgZW1wdHlJbWFnZVBhdGggPSAnJztcbiAgaXNEaXNwbGF5QnRuID0gZmFsc2U7XG5cbiAgc2VsZWN0ZWRJbWFnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEltYWdlID0gdGhpcy5pbWFnZXNbMF07XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAnYXV0byc7XG4gICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEltYWdlID0gdGhpcy5pbWFnZXNbMF07XG4gICAgfVxuICB9XG5cbiAgb3Blblpvb20oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbWFnZSAmJiB0aGlzLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGlhbG9nLm9wZW4oSW1hZ2VHYWxsZXJ5Wm9vbUNvbXBvbmVudCwge1xuICAgICAgICBkaXNhYmxlQ2xvc2U6IGZhbHNlLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDB2dycsXG4gICAgICAgIG1heEhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHVybDogdGhpcy5zZWxlY3RlZEltYWdlLFxuICAgICAgICAgIGNvbG9yOiB0aGlzLmNsb3NlQnV0dG9uQ29sb3IsXG4gICAgICAgICAgYmFja2dyb3VuZDogdGhpcy5jbG9zZUJ1dHRvbkJhY2tncm91bmQsXG4gICAgICAgICAgZGlzYWJsZUNsb3NlOiB0aGlzLmRpc2FibGVDbG9zZVxuICAgICAgICB9LFxuICAgICAgICBwYW5lbENsYXNzOiB0aGlzLnBhbmVsQ2xhc3MsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKCRldmVudCkge1xuICAgIHRoaXMub25BZGRJbWFnZS5lbWl0KCRldmVudCk7XG4gIH1cblxuICBvbkNsaWNrRGVsZXRlKCRldmVudCkge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9uRGVsZXRlSW1hZ2UuZW1pdCgkZXZlbnQpO1xuICB9XG59XG4iXX0=