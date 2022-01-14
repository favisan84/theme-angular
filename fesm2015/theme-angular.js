import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DateAdapter as DateAdapter$1, MAT_DATE_FORMATS as MAT_DATE_FORMATS$1, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import * as moment from 'moment';
import moment__default, {  } from 'moment';
import { NgModule, Component, Input, ViewEncapsulation, Output, EventEmitter, Inject, Injectable, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule, MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatCalendar, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { takeUntil } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MaterialModule {
}
MaterialModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    CdkTableModule,
                    CdkTreeModule,
                    DragDropModule,
                    MatAutocompleteModule,
                    MatBadgeModule,
                    MatBottomSheetModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatChipsModule,
                    MatStepperModule,
                    MatDatepickerModule,
                    MatDialogModule,
                    MatDividerModule,
                    MatExpansionModule,
                    MatGridListModule,
                    MatIconModule,
                    MatInputModule,
                    MatListModule,
                    MatMenuModule,
                    MatNativeDateModule,
                    MatPaginatorModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatRadioModule,
                    MatRippleModule,
                    MatSelectModule,
                    MatSidenavModule,
                    MatSliderModule,
                    MatSlideToggleModule,
                    MatSnackBarModule,
                    MatSortModule,
                    MatTableModule,
                    MatTabsModule,
                    MatToolbarModule,
                    MatTooltipModule,
                    MatTreeModule,
                    ScrollingModule,
                    FlexLayoutModule
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = {};
/** @type {?} */
const fakeActivatedRoute = (/** @type {?} */ ({
    snapshot: { data: ɵ0 }
}));
const ɵ1 = fakeActivatedRoute, ɵ2 = fakeActivatedRoute;
class SharedModule {
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    CommonModule,
                    RouterModule,
                    MaterialModule,
                    FormsModule,
                    ReactiveFormsModule,
                    BrowserAnimationsModule
                ],
                providers: [
                    { provide: ActivatedRoute, useValue: ɵ1 },
                    { provide: Router, useValue: ɵ2 },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GualibSelectSearchComponent {
    constructor() {
        this.selectionChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filterElement('');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectionChange(event) {
        this.selectionChange.emit(event.value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    filterElement(value) {
        if (this.itens) {
            this.itensFiltrados = this.itens.filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return item.value.toString().toLowerCase().indexOf(value) > -1;
            }));
        }
    }
}
GualibSelectSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'gualib-select-search',
                template: "<mat-select #select [(ngModel)]=\"initSelectedValue\" (selectionChange)=\"onSelectionChange($event)\">\n  <input #inputSearch matInput class=\"input-search-select\" placeholder=\"Pesquisar...\" type=\"text\"\n    (keyup)=\"filterElement($event.target.value)\">\n  <mat-option *ngFor=\"let item of itensFiltrados\" [value]=\"item.key\">\n    <div style=\"display: flex; flex-direction: row;align-items: center;\" *ngIf=\"item\">\n      {{item.value}}\n    </div>\n  </mat-option>\n</mat-select>",
                encapsulation: ViewEncapsulation.None,
                styles: [".input-search-select{padding-left:10px;border:none;border-bottom:1px solid #e5e2e2;width:100%;outline:0!important}.formfieldPadrao{width:100%}"]
            }] }
];
/** @nocollapse */
GualibSelectSearchComponent.ctorParameters = () => [];
GualibSelectSearchComponent.propDecorators = {
    itens: [{ type: Input }],
    initSelectedValue: [{ type: Input }],
    selectionChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GualibSelectSearchModule {
}
GualibSelectSearchModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GualibSelectSearchComponent],
                imports: [
                    SharedModule
                ],
                exports: [
                    GualibSelectSearchComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageGalleryZoomComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageGalleryComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GualibImageGalleryModule {
}
GualibImageGalleryModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    SharedModule
                ],
                declarations: [
                    ImageGalleryComponent,
                    ImageGalleryZoomComponent,
                ],
                entryComponents: [ImageGalleryZoomComponent],
                exports: [ImageGalleryComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingOverlayComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingOverlayService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GualibLoadingOverlayModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: GualibLoadingOverlayModule,
            providers: [LoadingOverlayService, LoadingOverlayComponent]
        };
    }
}
GualibLoadingOverlayModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    LoadingOverlayComponent
                ],
                imports: [
                    SharedModule
                ],
                exports: [
                    LoadingOverlayComponent
                ],
                providers: [
                    LoadingOverlayService
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GualibSearchChipsSelectComponent {
    constructor() {
        this.chips = [];
        this.inputValue = '';
        this.inputChange = new EventEmitter();
        this.selectLabel = '';
        this.selectChoices = [];
        // tslint:disable-next-line: no-output-on-prefix
        this.onChangeSelect = new EventEmitter();
        // tslint:disable-next-line: no-output-on-prefix
        this.onCloseChip = new EventEmitter();
        // tslint:disable-next-line: no-output-on-prefix
        this.onSearch = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get input() {
        return this.inputValue;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set input(val) {
        this.inputValue = val;
    }
    /**
     * @param {?} chipKey
     * @param {?} $event
     * @return {?}
     */
    onClickCloseChip(chipKey, $event) {
        $event.stopPropagation();
        this.onCloseChip.emit(chipKey);
    }
    /**
     * @return {?}
     */
    onInputFocus() {
        this.inputRef.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    onClickSearch() {
        this.onSearch.emit(this.inputValue);
    }
    /**
     * @return {?}
     */
    onSelectionChange() {
        this.onChangeSelect.emit(this.selectValue);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onKeyUp($event) {
        this.inputChange.emit(this.inputValue);
        if ($event.code === 'Enter') {
            this.onClickSearch();
        }
    }
}
GualibSearchChipsSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'gualib-search-chips-select',
                template: "<div fxFlex=\"100\" style=\"height: 100%;\">\n  <div fxFlex=\"20\" fxFlex.xs=\"25\"  fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"input-container\">\n    <input #inputRef [(ngModel)]=\"inputValue\" fxFlex=\"100\" class=\"input\" (keyup)=\"onKeyUp($event)\">\n  </div>\n  <div fxFlex=\"55\" fxFlex.xs=\"35\" fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"chips-container\" fxLayoutGap=\"10px\" (click)=\"onInputFocus()\">\n    <div fxLayoutAlign=\"start center\" *ngFor=\"let chip of chips\" class=\"chip\" (click)=\"$event.stopPropagation();\">\n      <div class=\"chip-value\">{{chip.value}}</div>\n      <mat-icon (click)=\"onClickCloseChip(chip.key, $event)\" style=\"cursor: pointer !important;\">close</mat-icon>\n    </div>\n  </div>\n  <div fxFlex=\"20\" fxFlex.xs=\"30\" fxLayoutAlign=\"start center\" class=\"select-container\" (click)=\"onInputFocus()\">\n    <div fxFlex=\"50\" *ngIf=\"selectLabel\" [ngStyle.xs]=\"{'white-space': 'normal', 'line-height': '12px', 'text-align': 'center'}\" fxLayoutAlign=\"end center\" class=\"select-label\">{{selectLabel}}</div>\n    <div fxFlex=\"50\" class=\"select-select\">\n      <mat-select *ngIf=\"selectChoices.length\" [(ngModel)]=\"selectValue\" (click)=\"$event.stopPropagation();\" (selectionChange)=\"onSelectionChange()\">\n        <mat-option *ngFor=\"let choice of selectChoices\" [value]=\"choice.key\">\n          {{choice.value}}\n        </mat-option>\n      </mat-select>\n    </div>\n  </div>\n  <div fxFlex=\"5\" fxFlex.xs=\"10\" class=\"btn-container\" fxLayoutAlign=\"center center\">\n    <button fxLayoutAlign=\"center center\" class=\"btn\" (click)=\"onClickSearch()\">\n      <mat-icon>search</mat-icon>\n    </button>\n  </div>\n</div>",
                styles: [":host{font-size:11px}.input-container{border-radius:5px 0 0 5px;border-left:1px solid silver;border-top:1px solid silver;border-bottom:1px solid silver}.input{background-color:transparent;height:100%;border:0;padding-left:10px;padding-right:10px;font-size:14px;outline-width:0!important}.chips-container{overflow-y:auto;border-top:1px solid silver;border-bottom:1px solid silver}.chip{white-space:nowrap;height:80%;border-radius:5px;background-color:#f3f4f6}.chip-value{padding-left:10px;padding-right:10px}.chip-btn{padding:0;margin:0;width:auto;height:auto}.select-container{border-top:1px solid silver;border-bottom:1px solid silver}.select-label{padding-right:2px;white-space:nowrap;font-weight:bolder}.select-select{padding-right:10px}.btn-container{cursor:pointer!important;border-radius:0 5px 5px 0;border:1px solid #007bfc;background-color:#007bfc}.btn{cursor:pointer!important;color:#fff;border:0;height:100%;width:100%;border-radius:0 5px 5px 0;background-color:transparent;box-shadow:none}"]
            }] }
];
GualibSearchChipsSelectComponent.propDecorators = {
    inputRef: [{ type: ViewChild, args: ['inputRef',] }],
    selectValue: [{ type: Input }],
    chips: [{ type: Input }],
    input: [{ type: Input }],
    inputChange: [{ type: Output }],
    selectLabel: [{ type: Input }],
    selectChoices: [{ type: Input }],
    onChangeSelect: [{ type: Output }],
    onCloseChip: [{ type: Output }],
    onSearch: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GualibSearchChipsSelectModule {
}
GualibSearchChipsSelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    GualibSearchChipsSelectComponent
                ],
                imports: [
                    SharedModule
                ],
                exports: [
                    GualibSearchChipsSelectComponent
                ],
                providers: [],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template D
 */
class CustomHeader {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const momentAdpater = moment__default ? moment__default : moment;
/** @type {?} */
const MY_FORMATS$1 = {
    parse: {
        dateInput: 'MMM  YYYY',
    },
    display: {
        dateInput: 'MMM  YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'MMM',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
class RangeDatepickerComponent {
    constructor() {
        this.returnDateEvent = new EventEmitter();
        this.exampleHeader = CustomHeader;
        this.displayButton = false;
        this.inicialDate = new FormControl(momentAdpater());
        this.finalDate = new FormControl(momentAdpater());
        this.validDate = true;
        this.errorMessage = null;
        this.INITIAL_DATE = "initial";
        this.FINAL_DATE = "final";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inicialDate.setValue(momentAdpater().startOf('month'));
        this.finalDate.setValue(momentAdpater().endOf('month'));
    }
    /**
     * @param {?} normalizedYear
     * @param {?} order
     * @return {?}
     */
    chosenYearHandler(normalizedYear, order) {
        this.disableClearButton();
        if (order === 'initial') {
            /** @type {?} */
            const ctrlValue = this.inicialDate.value;
            ctrlValue.year(normalizedYear.year());
            this.inicialDate.setValue(ctrlValue);
        }
        else {
            /** @type {?} */
            const ctrlValue = this.finalDate.value;
            ctrlValue.year(normalizedYear.year());
            this.finalDate.setValue(ctrlValue);
        }
    }
    /**
     * @param {?} normalizedMonth
     * @param {?} datepicker
     * @param {?} order
     * @return {?}
     */
    chosenMonthHandler(normalizedMonth, datepicker, order) {
        this.disableClearButton();
        if (order === 'initial') {
            /** @type {?} */
            const ctrlValue = this.inicialDate.value;
            ctrlValue.month(normalizedMonth.month());
            ctrlValue.startOf('month');
            this.inicialDate.setValue(ctrlValue);
            datepicker.close();
        }
        else {
            /** @type {?} */
            const ctrlValue = this.finalDate.value;
            ctrlValue.month(normalizedMonth.month());
            ctrlValue.endOf('month');
            this.finalDate.setValue(ctrlValue);
            datepicker.close();
        }
        if (this.verifyValidDates()) {
            this.returnDateEvent.emit({ "initialDate": this.inicialDate.value, "finalDate": this.finalDate.value });
        }
    }
    /**
     * @return {?}
     */
    verifyValidDates() {
        /** @type {?} */
        const initial = this.inicialDate.value;
        /** @type {?} */
        const final = this.finalDate.value;
        if (!initial.isBefore(final) && !initial.isSame(final)) {
            this.initialAfterFinalDate();
            this.validDate = false;
        }
        else {
            this.validDate = true;
        }
        return initial.isBefore(final);
    }
    /**
     * @return {?}
     */
    disableClearButton() {
        /** @type {?} */
        const initial = this.inicialDate.value;
        /** @type {?} */
        const final = this.finalDate.value;
        this.validDate = true;
        this.displayButton = !initial.isSame(final);
    }
    /**
     * @return {?}
     */
    clear() {
        this.inicialDate = new FormControl(momentAdpater());
        this.finalDate = new FormControl(momentAdpater());
        this.returnDateEvent.emit(null);
        this.disableClearButton();
    }
    /**
     * @return {?}
     */
    initialAfterFinalDate() {
        this.errorMessage = 'A data inicial não pode ser superior a data final. ';
    }
    /**
     * @return {?}
     */
    invalidDate() {
        this.errorMessage = 'Data inválida.';
    }
    /**
     * @param {?} input
     * @return {?}
     */
    getInputValue(input) {
        if (input.inicialDate.value) {
            /** @type {?} */
            const initial = this.inicialDate.value;
            if (this.verifyCorrectDates(initial)) {
                this.inicialDate.setValue(initial);
            }
        }
        if (input.finalDate.value) {
            /** @type {?} */
            const final = this.finalDate.value;
            if (this.verifyCorrectDates(final)) {
                this.finalDate.setValue(final);
            }
        }
        if (this.verifyValidDates()) {
            this.returnDateEvent.emit({ "initialDate": this.inicialDate.value, "finalDate": this.finalDate.value });
        }
    }
    /**
     * @return {?}
     */
    getErrorMessage() {
        return this.errorMessage;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    verifyCorrectDates(date) {
        if (!date.isValid) {
            this.invalidDate();
            return false;
        }
        return true;
    }
}
RangeDatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gualib-range-datepicker',
                template: "<div fxLayout=\"column\">\n  <div fxLayout=\"row\"  fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\" s>\n\n    <div fxLayout=\"column\" >\n      <label style=\"font-size: 10px;\">Inicial</label>\n      <mat-form-field  [class.alert-error]=\"!validDate\" class=\"date-filter\" appearance=\"none\">\n        <input readonly matInput [min]=\"minDate\" [max]=\"maxDate\"  [matDatepicker]=\"dp\" [formControl]=\"inicialDate\" class=\"date-input\" (dateChange)=\"getInputValue(this)\">   \n        <mat-datepicker-toggle matSuffix [for]=\"dp\" class=\"date-input date-toggle\"></mat-datepicker-toggle>\n        <mat-datepicker #dp startView=\"multi-year\" \n          (yearSelected)=\"chosenYearHandler($event, INITIAL_DATE)\"\n          (monthSelected)=\"chosenMonthHandler($event, dp, INITIAL_DATE)\" \n          [calendarHeaderComponent]=\"exampleHeader\">\n        </mat-datepicker>\n      </mat-form-field>\n    </div>\n    \n    <div fxLayout=\"column\" >\n      <label style=\"font-size: 10px;\">Final</label>\n      <mat-form-field [class.alert-error]=\"!validDate\" class=\"date-filter\" appearance=\"none\">\n        <input readonly matInput [min]=\"minDate\"  [max]=\"maxDate\" [matDatepicker]=\"dp2\"  [formControl]=\"finalDate\" class=\"date-input\" (dateChange)=\"getInputValue(this)\">\n        <mat-datepicker-toggle matSuffix [for]=\"dp2\" class=\"date-input date-toggle\"></mat-datepicker-toggle>\n        <mat-datepicker #dp2 startView=\"multi-year\" \n          (yearSelected)=\"chosenYearHandler($event, FINAL_DATE)\"\n          (monthSelected)=\"chosenMonthHandler($event, dp2, FINAL_DATE)\" \n          [calendarHeaderComponent]=\"exampleHeader\">\n        </mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"column\"  *ngIf=\"displayButton\" \n      class=\"clear-span\" (click)=\"clear()\" >\n      &nbsp;\n        <mat-icon color=\"primary\" class=\"clear-icon\">highlight_off</mat-icon>\n    </div>\n    \n    \n   \n  </div>\n  <mat-error *ngIf=\"!validDate\"><p  style=\"font-size: 12px;\">{{getErrorMessage()}}</p></mat-error>\n</div>",
                providers: [
                    {
                        provide: DateAdapter$1,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS$1, useValue: MY_FORMATS$1 },
                ],
                styles: [".date-filter{max-width:90px!important;border:1px solid!important;border-radius:5%;color:#e0e0e0;max-height:45px!important}.date-input{color:#000;font-size:12px;margin-bottom:5%}.date-toggle{font-size:12px}.clear-span{cursor:pointer}.alert-error{color:red!important}.material-icons{font-size:20px!important}"]
            }] }
];
/** @nocollapse */
RangeDatepickerComponent.ctorParameters = () => [];
RangeDatepickerComponent.propDecorators = {
    returnDateEvent: [{ type: Output }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GuaLibRangeDatepickerModule {
}
GuaLibRangeDatepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    SharedModule
                ],
                declarations: [
                    RangeDatepickerComponent,
                    RangeDatepickerComponent,
                    CustomHeader
                ],
                entryComponents: [RangeDatepickerComponent, CustomHeader],
                exports: [RangeDatepickerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GuaThemeAngularModule {
}
GuaThemeAngularModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    GualibLoadingOverlayModule,
                    GualibImageGalleryModule,
                    GualibSelectSearchModule,
                    GualibSearchChipsSelectModule,
                    GuaLibRangeDatepickerModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GuaThemeAngularModule, LoadingOverlayService, ImageGalleryZoomComponent as ɵg, ImageGalleryComponent as ɵf, GualibImageGalleryModule as ɵe, LoadingOverlayComponent as ɵb, GualibLoadingOverlayModule as ɵa, MaterialModule as ɵd, CustomHeader as ɵo, MY_FORMATS$1 as ɵm, RangeDatepickerComponent as ɵn, GuaLibRangeDatepickerModule as ɵl, GualibSearchChipsSelectComponent as ɵk, GualibSearchChipsSelectModule as ɵj, GualibSelectSearchComponent as ɵi, GualibSelectSearchModule as ɵh, SharedModule as ɵc };

//# sourceMappingURL=theme-angular.js.map