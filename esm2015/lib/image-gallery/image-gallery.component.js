/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ImageGalleryZoomComponent } from './image-gallery-zoom/image-gallery-zoom.component';
export class ImageGalleryComponent {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
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
    ngOnChanges() {
        if (this.images.length) {
            this.selectedImage = this.images[0];
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.height = 'auto';
        if (this.images.length) {
            this.selectedImage = this.images[0];
        }
    }
    /**
     * @return {?}
     */
    openZoom() {
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
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClick($event) {
        this.onAddImage.emit($event);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClickDelete($event) {
        $event.stopPropagation();
        this.onDeleteImage.emit($event);
    }
}
ImageGalleryComponent.decorators = [
    { type: Component, args: [{
                selector: 'gualib-image-gallery',
                template: "<ng-container style=\"height: 100%;\">\n  <div fxFlex style=\"height: 100%;\">\n    <mat-card class=\"imagem-principal\" (click)=\"openZoom()\" fxLayoutAlign=\"center center\">\n      <button *ngIf=\"editMode && images.length\" (click)=\"onClickDelete($event)\" class=\"delete-button gua-btn-primary\" mat-button>\n          <mat-icon class=\"delete-icon gua-color-primary\">delete_outline</mat-icon>\n          Excluir imagem\n      </button>\n      <img *ngIf=\"selectedImage && images.length\" mat-card-image [style.height]=\"height\" [src]=\"selectedImage\">\n      <img *ngIf=\"images.length === 0 && emptyImagePath\" mat-card-image [style.height]=\"height\" [src]=\"emptyImagePath\">\n    </mat-card>\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\n      <div *ngFor=\"let i of images\" fxLayout=\"row\" (click)=\"selectedImage = i;\" class=\"selecao-image\">\n        <mat-card [style.height]=\"height\" fxLayoutAlign=\"center center\">\n          <img mat-card-image [src]=\"i\">\n        </mat-card>\n      </div>\n      <div *ngIf=\"editMode\" fxLayout=\"row\" class=\"selecao-image\">\n        <mat-card class=\"add-btn\" fxLayoutAlign=\"center center\" (click)=\"onClick($event)\">\n          <mat-icon style=\"height: auto;text-align: center;font-size: 50px\" class=\"gua-color-primary\" fxFlex>add_photo_alternate</mat-icon>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</ng-container>",
                styles: [".gua-btn-primary{background-color:#007bfc!important;color:#fff!important}.gua-color-primary{color:#fff!important}:host .imagem-principal{height:80%}:host .material-icons{font-size:18px}:host .delete-button{display:none;position:absolute;right:10px;top:10px}:host .delete-icon{font-size:20px}:host .mat-card{cursor:pointer;border-radius:0;padding:0;margin:0;box-shadow:none!important;background-color:transparent}:host .mat-card>img{border-radius:10px;height:100%;width:100%;margin-top:0}:host .selecao-image{height:100px;width:100px;padding:5px}:host .add-btn{width:100%;border-radius:10px;background-color:rgba(0,0,0,.3)}:host .imagem-principal:hover>.delete-button{display:block}"]
            }] }
];
/** @nocollapse */
ImageGalleryComponent.ctorParameters = () => [
    { type: MatDialog }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90aGVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2ltYWdlLWdhbGxlcnkvaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBTzlGLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFrQmhDLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFoQjNCLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFJdEIsYUFBUSxHQUFHLEtBQUssQ0FBQzs7UUFFaEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRWhDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUM3QixpQkFBWSxHQUFHLEtBQUssQ0FBQztJQUltQixDQUFDOzs7O0lBRXpDLFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtnQkFDMUMsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsSUFBSSxFQUFFO29CQUNKLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYTtvQkFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7b0JBQzVCLFVBQVUsRUFBRSxJQUFJLENBQUMscUJBQXFCO29CQUN0QyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7aUJBQ2hDO2dCQUNELFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTthQUM1QixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQU07UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxNQUFNO1FBQ2xCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDI1Q0FBNkM7O2FBRTlDOzs7O1lBUFEsU0FBUzs7O3FCQVVmLEtBQUs7K0JBQ0wsS0FBSztvQ0FDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFFTCxNQUFNOzRCQUVOLE1BQU07MkJBRU4sS0FBSzs2QkFDTCxLQUFLOzs7O0lBWE4sdUNBQStCOztJQUMvQixpREFBa0M7O0lBQ2xDLHNEQUF1Qzs7SUFDdkMsMkNBQTRCOztJQUM1Qix5Q0FBMEI7O0lBRTFCLDJDQUEwQzs7SUFFMUMsOENBQTZDOztJQUM3Qyx1Q0FBZTs7SUFDZiw2Q0FBOEI7O0lBQzlCLCtDQUE2Qjs7SUFDN0IsNkNBQXFCOztJQUVyQiw4Q0FBc0I7O0lBRVYsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBJbWFnZUdhbGxlcnlab29tQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS1nYWxsZXJ5LXpvb20vaW1hZ2UtZ2FsbGVyeS16b29tLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2d1YWxpYi1pbWFnZS1nYWxsZXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWdhbGxlcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGltYWdlczogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgY2xvc2VCdXR0b25Db2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBjbG9zZUJ1dHRvbkJhY2tncm91bmQ6IHN0cmluZztcbiAgQElucHV0KCkgcGFuZWxDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBlZGl0TW9kZSA9IGZhbHNlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uQWRkSW1hZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgb25EZWxldGVJbWFnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgaGVpZ2h0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVDbG9zZSA9IGZhbHNlO1xuICBASW5wdXQoKSBlbXB0eUltYWdlUGF0aCA9ICcnO1xuICBpc0Rpc3BsYXlCdG4gPSBmYWxzZTtcblxuICBzZWxlY3RlZEltYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW1hZ2UgPSB0aGlzLmltYWdlc1swXTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmhlaWdodCA9ICdhdXRvJztcbiAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW1hZ2UgPSB0aGlzLmltYWdlc1swXTtcbiAgICB9XG4gIH1cblxuICBvcGVuWm9vbSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEltYWdlICYmIHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kaWFsb2cub3BlbihJbWFnZUdhbGxlcnlab29tQ29tcG9uZW50LCB7XG4gICAgICAgIGRpc2FibGVDbG9zZTogZmFsc2UsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMHZ3JyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXJsOiB0aGlzLnNlbGVjdGVkSW1hZ2UsXG4gICAgICAgICAgY29sb3I6IHRoaXMuY2xvc2VCdXR0b25Db2xvcixcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLmNsb3NlQnV0dG9uQmFja2dyb3VuZCxcbiAgICAgICAgICBkaXNhYmxlQ2xvc2U6IHRoaXMuZGlzYWJsZUNsb3NlXG4gICAgICAgIH0sXG4gICAgICAgIHBhbmVsQ2xhc3M6IHRoaXMucGFuZWxDbGFzcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2soJGV2ZW50KSB7XG4gICAgdGhpcy5vbkFkZEltYWdlLmVtaXQoJGV2ZW50KTtcbiAgfVxuXG4gIG9uQ2xpY2tEZWxldGUoJGV2ZW50KSB7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub25EZWxldGVJbWFnZS5lbWl0KCRldmVudCk7XG4gIH1cbn1cbiJdfQ==