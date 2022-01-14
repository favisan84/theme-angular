(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser/animations'), require('@angular/common'), require('@angular/router'), require('@angular/cdk/drag-drop'), require('@angular/cdk/scrolling'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/flex-layout'), require('@angular/material/core'), require('@angular/material-moment-adapter'), require('@angular/forms'), require('moment'), require('@angular/core'), require('rxjs'), require('@angular/material'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('theme-angular', ['exports', '@angular/platform-browser/animations', '@angular/common', '@angular/router', '@angular/cdk/drag-drop', '@angular/cdk/scrolling', '@angular/cdk/table', '@angular/cdk/tree', '@angular/flex-layout', '@angular/material/core', '@angular/material-moment-adapter', '@angular/forms', 'moment', '@angular/core', 'rxjs', '@angular/material', 'rxjs/operators'], factory) :
    (factory((global['theme-angular'] = {}),global.ng.platformBrowser.animations,global.ng.common,global.ng.router,global.ng.cdk['drag-drop'],global.ng.cdk.scrolling,global.ng.cdk.table,global.ng.cdk.tree,global.ng['flex-layout'],global.ng.material.core,global.ng['material-moment-adapter'],global.ng.forms,global.moment,global.ng.core,global.rxjs,global.ng.material,global.rxjs.operators));
}(this, (function (exports,animations,common,router,dragDrop,scrolling,table,tree,flexLayout,core,materialMomentAdapter,forms,moment,core$1,rxjs,material,operators) { 'use strict';

    var moment__default = 'default' in moment ? moment['default'] : moment;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MaterialModule = /** @class */ (function () {
        function MaterialModule() {
        }
        MaterialModule.decorators = [
            { type: core$1.NgModule, args: [{
                        exports: [
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            dragDrop.DragDropModule,
                            material.MatAutocompleteModule,
                            material.MatBadgeModule,
                            material.MatBottomSheetModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatStepperModule,
                            material.MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatDividerModule,
                            material.MatExpansionModule,
                            material.MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatNativeDateModule,
                            material.MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatRadioModule,
                            material.MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            material.MatSliderModule,
                            material.MatSlideToggleModule,
                            material.MatSnackBarModule,
                            material.MatSortModule,
                            material.MatTableModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule,
                            material.MatTreeModule,
                            scrolling.ScrollingModule,
                            flexLayout.FlexLayoutModule
                        ],
                    },] }
        ];
        return MaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = {};
    /** @type {?} */
    var fakeActivatedRoute = ( /** @type {?} */({
        snapshot: { data: ɵ0 }
    }));
    var ɵ1 = fakeActivatedRoute, ɵ2 = fakeActivatedRoute;
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: core$1.NgModule, args: [{
                        exports: [
                            common.CommonModule,
                            router.RouterModule,
                            MaterialModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            animations.BrowserAnimationsModule
                        ],
                        providers: [
                            { provide: router.ActivatedRoute, useValue: ɵ1 },
                            { provide: router.Router, useValue: ɵ2 },
                        ],
                    },] }
        ];
        return SharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GualibSelectSearchComponent = /** @class */ (function () {
        function GualibSelectSearchComponent() {
            this.selectionChange = new core$1.EventEmitter();
        }
        /**
         * @return {?}
         */
        GualibSelectSearchComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.filterElement('');
            };
        /**
         * @param {?} event
         * @return {?}
         */
        GualibSelectSearchComponent.prototype.onSelectionChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.selectionChange.emit(event.value);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        GualibSelectSearchComponent.prototype.filterElement = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.itens) {
                    this.itensFiltrados = this.itens.filter(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return item.value.toString().toLowerCase().indexOf(value) > -1;
                    }));
                }
            };
        GualibSelectSearchComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'gualib-select-search',
                        template: "<mat-select #select [(ngModel)]=\"initSelectedValue\" (selectionChange)=\"onSelectionChange($event)\">\n  <input #inputSearch matInput class=\"input-search-select\" placeholder=\"Pesquisar...\" type=\"text\"\n    (keyup)=\"filterElement($event.target.value)\">\n  <mat-option *ngFor=\"let item of itensFiltrados\" [value]=\"item.key\">\n    <div style=\"display: flex; flex-direction: row;align-items: center;\" *ngIf=\"item\">\n      {{item.value}}\n    </div>\n  </mat-option>\n</mat-select>",
                        encapsulation: core$1.ViewEncapsulation.None,
                        styles: [".input-search-select{padding-left:10px;border:none;border-bottom:1px solid #e5e2e2;width:100%;outline:0!important}.formfieldPadrao{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        GualibSelectSearchComponent.ctorParameters = function () { return []; };
        GualibSelectSearchComponent.propDecorators = {
            itens: [{ type: core$1.Input }],
            initSelectedValue: [{ type: core$1.Input }],
            selectionChange: [{ type: core$1.Output }]
        };
        return GualibSelectSearchComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GualibSelectSearchModule = /** @class */ (function () {
        function GualibSelectSearchModule() {
        }
        GualibSelectSearchModule.decorators = [
            { type: core$1.NgModule, args: [{
                        declarations: [GualibSelectSearchComponent],
                        imports: [
                            SharedModule
                        ],
                        exports: [
                            GualibSelectSearchComponent
                        ]
                    },] }
        ];
        return GualibSelectSearchModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core$1.Component, args: [{
                        selector: 'gua-image-gallery-zoom',
                        template: "<div [style.color]=\"data?.color\" class=\"close-button\">\n  <button mat-icon-button (click)=\"closeDialog(false)\" [style.background-color]=\"data?.background\">\n    <i class=\"material-icons\">close</i>\n  </button>\n</div>\n<div class=\"image\" (click)=\"closeDialog(data?.disableClose)\">\n  <img cdkFocusInitial [src]=\"data.url\">\n</div>\n",
                        styles: [":host{background-color:#000}:host .image{display:flex;align-items:center;justify-content:center;align-items:center;height:100%}:host img{align-content:center;height:inherit}:host .close-button{color:#000;position:absolute;right:10px;top:10px}:host .mat-icon-button{height:auto;width:auto}:host .material-icons{font-size:50px}"]
                    }] }
        ];
        /** @nocollapse */
        ImageGalleryZoomComponent.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return ImageGalleryZoomComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImageGalleryComponent = /** @class */ (function () {
        function ImageGalleryComponent(dialog) {
            this.dialog = dialog;
            this.images = [];
            this.editMode = false;
            // tslint:disable-next-line: no-output-on-prefix
            this.onAddImage = new core$1.EventEmitter();
            // tslint:disable-next-line: no-output-on-prefix
            this.onDeleteImage = new core$1.EventEmitter();
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
            { type: core$1.Component, args: [{
                        selector: 'gualib-image-gallery',
                        template: "<ng-container style=\"height: 100%;\">\n  <div fxFlex style=\"height: 100%;\">\n    <mat-card class=\"imagem-principal\" (click)=\"openZoom()\" fxLayoutAlign=\"center center\">\n      <button *ngIf=\"editMode && images.length\" (click)=\"onClickDelete($event)\" class=\"delete-button gua-btn-primary\" mat-button>\n          <mat-icon class=\"delete-icon gua-color-primary\">delete_outline</mat-icon>\n          Excluir imagem\n      </button>\n      <img *ngIf=\"selectedImage && images.length\" mat-card-image [style.height]=\"height\" [src]=\"selectedImage\">\n      <img *ngIf=\"images.length === 0 && emptyImagePath\" mat-card-image [style.height]=\"height\" [src]=\"emptyImagePath\">\n    </mat-card>\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\n      <div *ngFor=\"let i of images\" fxLayout=\"row\" (click)=\"selectedImage = i;\" class=\"selecao-image\">\n        <mat-card [style.height]=\"height\" fxLayoutAlign=\"center center\">\n          <img mat-card-image [src]=\"i\">\n        </mat-card>\n      </div>\n      <div *ngIf=\"editMode\" fxLayout=\"row\" class=\"selecao-image\">\n        <mat-card class=\"add-btn\" fxLayoutAlign=\"center center\" (click)=\"onClick($event)\">\n          <mat-icon style=\"height: auto;text-align: center;font-size: 50px\" class=\"gua-color-primary\" fxFlex>add_photo_alternate</mat-icon>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</ng-container>",
                        styles: [".gua-btn-primary{background-color:#007bfc!important;color:#fff!important}.gua-color-primary{color:#fff!important}:host .imagem-principal{height:80%}:host .material-icons{font-size:18px}:host .delete-button{display:none;position:absolute;right:10px;top:10px}:host .delete-icon{font-size:20px}:host .mat-card{cursor:pointer;border-radius:0;padding:0;margin:0;box-shadow:none!important;background-color:transparent}:host .mat-card>img{border-radius:10px;height:100%;width:100%;margin-top:0}:host .selecao-image{height:100px;width:100px;padding:5px}:host .add-btn{width:100%;border-radius:10px;background-color:rgba(0,0,0,.3)}:host .imagem-principal:hover>.delete-button{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        ImageGalleryComponent.ctorParameters = function () {
            return [
                { type: material.MatDialog }
            ];
        };
        ImageGalleryComponent.propDecorators = {
            images: [{ type: core$1.Input }],
            closeButtonColor: [{ type: core$1.Input }],
            closeButtonBackground: [{ type: core$1.Input }],
            panelClass: [{ type: core$1.Input }],
            editMode: [{ type: core$1.Input }],
            onAddImage: [{ type: core$1.Output }],
            onDeleteImage: [{ type: core$1.Output }],
            disableClose: [{ type: core$1.Input }],
            emptyImagePath: [{ type: core$1.Input }]
        };
        return ImageGalleryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GualibImageGalleryModule = /** @class */ (function () {
        function GualibImageGalleryModule() {
        }
        GualibImageGalleryModule.decorators = [
            { type: core$1.NgModule, args: [{
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
        return GualibImageGalleryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoadingOverlayComponent = /** @class */ (function () {
        function LoadingOverlayComponent() {
            this.image = 'assets/image-loading.gif';
        }
        LoadingOverlayComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'gualib-loading-overlay',
                        template: "<div class=\"loading-overlay\" style=\"display: flex; align-items: center; justify-content: center;\" [class.loading]=\"loading\">\n  <img class=\"image-loading\" [src]=\"image\">\n</div>",
                        styles: [".loading-overlay{background-color:rgba(255,255,255,.7);position:fixed;top:0;left:0;width:100%;height:100%;z-index:10;transition:.25s ease-in-out;opacity:0;visibility:hidden}.loading-overlay.loading{opacity:1;visibility:visible}.image-loading{height:128px}"]
                    }] }
        ];
        /** @nocollapse */
        LoadingOverlayComponent.ctorParameters = function () { return []; };
        LoadingOverlayComponent.propDecorators = {
            loading: [{ type: core$1.Input }],
            image: [{ type: core$1.Input }]
        };
        return LoadingOverlayComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                setTimeout(( /**
                 * @return {?}
                 */function () {
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
                setTimeout(( /**
                 * @return {?}
                 */function () {
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
            { type: core$1.Injectable }
        ];
        return LoadingOverlayService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GualibLoadingOverlayModule = /** @class */ (function () {
        function GualibLoadingOverlayModule() {
        }
        /**
         * @return {?}
         */
        GualibLoadingOverlayModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: GualibLoadingOverlayModule,
                    providers: [LoadingOverlayService, LoadingOverlayComponent]
                };
            };
        GualibLoadingOverlayModule.decorators = [
            { type: core$1.NgModule, args: [{
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
        return GualibLoadingOverlayModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GualibSearchChipsSelectComponent = /** @class */ (function () {
        function GualibSearchChipsSelectComponent() {
            this.chips = [];
            this.inputValue = '';
            this.inputChange = new core$1.EventEmitter();
            this.selectLabel = '';
            this.selectChoices = [];
            // tslint:disable-next-line: no-output-on-prefix
            this.onChangeSelect = new core$1.EventEmitter();
            // tslint:disable-next-line: no-output-on-prefix
            this.onCloseChip = new core$1.EventEmitter();
            // tslint:disable-next-line: no-output-on-prefix
            this.onSearch = new core$1.EventEmitter();
        }
        Object.defineProperty(GualibSearchChipsSelectComponent.prototype, "input", {
            get: /**
             * @return {?}
             */ function () {
                return this.inputValue;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this.inputValue = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} chipKey
         * @param {?} $event
         * @return {?}
         */
        GualibSearchChipsSelectComponent.prototype.onClickCloseChip = /**
         * @param {?} chipKey
         * @param {?} $event
         * @return {?}
         */
            function (chipKey, $event) {
                $event.stopPropagation();
                this.onCloseChip.emit(chipKey);
            };
        /**
         * @return {?}
         */
        GualibSearchChipsSelectComponent.prototype.onInputFocus = /**
         * @return {?}
         */
            function () {
                this.inputRef.nativeElement.focus();
            };
        /**
         * @return {?}
         */
        GualibSearchChipsSelectComponent.prototype.onClickSearch = /**
         * @return {?}
         */
            function () {
                this.onSearch.emit(this.inputValue);
            };
        /**
         * @return {?}
         */
        GualibSearchChipsSelectComponent.prototype.onSelectionChange = /**
         * @return {?}
         */
            function () {
                this.onChangeSelect.emit(this.selectValue);
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        GualibSearchChipsSelectComponent.prototype.onKeyUp = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.inputChange.emit(this.inputValue);
                if ($event.code === 'Enter') {
                    this.onClickSearch();
                }
            };
        GualibSearchChipsSelectComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'gualib-search-chips-select',
                        template: "<div fxFlex=\"100\" style=\"height: 100%;\">\n  <div fxFlex=\"20\" fxFlex.xs=\"25\"  fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"input-container\">\n    <input #inputRef [(ngModel)]=\"inputValue\" fxFlex=\"100\" class=\"input\" (keyup)=\"onKeyUp($event)\">\n  </div>\n  <div fxFlex=\"55\" fxFlex.xs=\"35\" fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"chips-container\" fxLayoutGap=\"10px\" (click)=\"onInputFocus()\">\n    <div fxLayoutAlign=\"start center\" *ngFor=\"let chip of chips\" class=\"chip\" (click)=\"$event.stopPropagation();\">\n      <div class=\"chip-value\">{{chip.value}}</div>\n      <mat-icon (click)=\"onClickCloseChip(chip.key, $event)\" style=\"cursor: pointer !important;\">close</mat-icon>\n    </div>\n  </div>\n  <div fxFlex=\"20\" fxFlex.xs=\"30\" fxLayoutAlign=\"start center\" class=\"select-container\" (click)=\"onInputFocus()\">\n    <div fxFlex=\"50\" *ngIf=\"selectLabel\" [ngStyle.xs]=\"{'white-space': 'normal', 'line-height': '12px', 'text-align': 'center'}\" fxLayoutAlign=\"end center\" class=\"select-label\">{{selectLabel}}</div>\n    <div fxFlex=\"50\" class=\"select-select\">\n      <mat-select *ngIf=\"selectChoices.length\" [(ngModel)]=\"selectValue\" (click)=\"$event.stopPropagation();\" (selectionChange)=\"onSelectionChange()\">\n        <mat-option *ngFor=\"let choice of selectChoices\" [value]=\"choice.key\">\n          {{choice.value}}\n        </mat-option>\n      </mat-select>\n    </div>\n  </div>\n  <div fxFlex=\"5\" fxFlex.xs=\"10\" class=\"btn-container\" fxLayoutAlign=\"center center\">\n    <button fxLayoutAlign=\"center center\" class=\"btn\" (click)=\"onClickSearch()\">\n      <mat-icon>search</mat-icon>\n    </button>\n  </div>\n</div>",
                        styles: [":host{font-size:11px}.input-container{border-radius:5px 0 0 5px;border-left:1px solid silver;border-top:1px solid silver;border-bottom:1px solid silver}.input{background-color:transparent;height:100%;border:0;padding-left:10px;padding-right:10px;font-size:14px;outline-width:0!important}.chips-container{overflow-y:auto;border-top:1px solid silver;border-bottom:1px solid silver}.chip{white-space:nowrap;height:80%;border-radius:5px;background-color:#f3f4f6}.chip-value{padding-left:10px;padding-right:10px}.chip-btn{padding:0;margin:0;width:auto;height:auto}.select-container{border-top:1px solid silver;border-bottom:1px solid silver}.select-label{padding-right:2px;white-space:nowrap;font-weight:bolder}.select-select{padding-right:10px}.btn-container{cursor:pointer!important;border-radius:0 5px 5px 0;border:1px solid #007bfc;background-color:#007bfc}.btn{cursor:pointer!important;color:#fff;border:0;height:100%;width:100%;border-radius:0 5px 5px 0;background-color:transparent;box-shadow:none}"]
                    }] }
        ];
        GualibSearchChipsSelectComponent.propDecorators = {
            inputRef: [{ type: core$1.ViewChild, args: ['inputRef',] }],
            selectValue: [{ type: core$1.Input }],
            chips: [{ type: core$1.Input }],
            input: [{ type: core$1.Input }],
            inputChange: [{ type: core$1.Output }],
            selectLabel: [{ type: core$1.Input }],
            selectChoices: [{ type: core$1.Input }],
            onChangeSelect: [{ type: core$1.Output }],
            onCloseChip: [{ type: core$1.Output }],
            onSearch: [{ type: core$1.Output }]
        };
        return GualibSearchChipsSelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GualibSearchChipsSelectModule = /** @class */ (function () {
        function GualibSearchChipsSelectModule() {
        }
        GualibSearchChipsSelectModule.decorators = [
            { type: core$1.NgModule, args: [{
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
        return GualibSearchChipsSelectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template D
     */
    var CustomHeader = /** @class */ (function () {
        function CustomHeader(calendar, dateAdapter, dateFormats, cdr) {
            this.calendar = calendar;
            this.dateAdapter = dateAdapter;
            this.dateFormats = dateFormats;
            this.destroyed = new rxjs.Subject();
            calendar.stateChanges
                .pipe(operators.takeUntil(this.destroyed))
                .subscribe(( /**
         * @return {?}
         */function () { return cdr.markForCheck(); }));
        }
        /**
         * @return {?}
         */
        CustomHeader.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.destroyed.next();
                this.destroyed.complete();
            };
        Object.defineProperty(CustomHeader.prototype, "periodLabel", {
            get: /**
             * @return {?}
             */ function () {
                return this.dateAdapter
                    .format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel)
                    .toLocaleUpperCase();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} mode
         * @return {?}
         */
        CustomHeader.prototype.previousClicked = /**
         * @param {?} mode
         * @return {?}
         */
            function (mode) {
                this.calendar.activeDate = mode === 'month' ?
                    this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
                    this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);
            };
        /**
         * @param {?} mode
         * @return {?}
         */
        CustomHeader.prototype.nextClicked = /**
         * @param {?} mode
         * @return {?}
         */
            function (mode) {
                this.calendar.activeDate = mode === 'month' ?
                    this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
                    this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);
            };
        CustomHeader.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'custom-header',
                        template: "<div class=\"example-header\">\n    <button mat-icon-button  (click)=\"previousClicked('year')\">\n      <mat-icon aria-hidden=\"false\" >keyboard_arrow_left</mat-icon>\n    </button>\n    <span class=\"example-header-label\">{{periodLabel}}</span>\n    <button mat-icon-button  (click)=\"nextClicked('year')\">\n      <mat-icon aria-hidden=\"false\" >keyboard_arrow_right</mat-icon>\n    </button>\n  </div>",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: [".example-header{display:flex;align-items:center;padding:.5em}.example-header-label{flex:1;height:1em;font-weight:500;text-align:center}.example-double-arrow .mat-icon{margin:-22%}"]
                    }] }
        ];
        /** @nocollapse */
        CustomHeader.ctorParameters = function () {
            return [
                { type: material.MatCalendar },
                { type: material.DateAdapter },
                { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_DATE_FORMATS,] }] },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        return CustomHeader;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var momentAdpater = moment__default ? moment__default : moment;
    /** @type {?} */
    var MY_FORMATS$1 = {
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
    var RangeDatepickerComponent = /** @class */ (function () {
        function RangeDatepickerComponent() {
            this.returnDateEvent = new core$1.EventEmitter();
            this.exampleHeader = CustomHeader;
            this.displayButton = false;
            this.inicialDate = new forms.FormControl(momentAdpater());
            this.finalDate = new forms.FormControl(momentAdpater());
            this.validDate = true;
            this.errorMessage = null;
            this.INITIAL_DATE = "initial";
            this.FINAL_DATE = "final";
        }
        /**
         * @return {?}
         */
        RangeDatepickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.inicialDate.setValue(momentAdpater().startOf('month'));
                this.finalDate.setValue(momentAdpater().endOf('month'));
            };
        /**
         * @param {?} normalizedYear
         * @param {?} order
         * @return {?}
         */
        RangeDatepickerComponent.prototype.chosenYearHandler = /**
         * @param {?} normalizedYear
         * @param {?} order
         * @return {?}
         */
            function (normalizedYear, order) {
                this.disableClearButton();
                if (order === 'initial') {
                    /** @type {?} */
                    var ctrlValue = this.inicialDate.value;
                    ctrlValue.year(normalizedYear.year());
                    this.inicialDate.setValue(ctrlValue);
                }
                else {
                    /** @type {?} */
                    var ctrlValue = this.finalDate.value;
                    ctrlValue.year(normalizedYear.year());
                    this.finalDate.setValue(ctrlValue);
                }
            };
        /**
         * @param {?} normalizedMonth
         * @param {?} datepicker
         * @param {?} order
         * @return {?}
         */
        RangeDatepickerComponent.prototype.chosenMonthHandler = /**
         * @param {?} normalizedMonth
         * @param {?} datepicker
         * @param {?} order
         * @return {?}
         */
            function (normalizedMonth, datepicker, order) {
                this.disableClearButton();
                if (order === 'initial') {
                    /** @type {?} */
                    var ctrlValue = this.inicialDate.value;
                    ctrlValue.month(normalizedMonth.month());
                    ctrlValue.startOf('month');
                    this.inicialDate.setValue(ctrlValue);
                    datepicker.close();
                }
                else {
                    /** @type {?} */
                    var ctrlValue = this.finalDate.value;
                    ctrlValue.month(normalizedMonth.month());
                    ctrlValue.endOf('month');
                    this.finalDate.setValue(ctrlValue);
                    datepicker.close();
                }
                if (this.verifyValidDates()) {
                    this.returnDateEvent.emit({ "initialDate": this.inicialDate.value, "finalDate": this.finalDate.value });
                }
            };
        /**
         * @return {?}
         */
        RangeDatepickerComponent.prototype.verifyValidDates = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var initial = this.inicialDate.value;
                /** @type {?} */
                var final = this.finalDate.value;
                if (!initial.isBefore(final) && !initial.isSame(final)) {
                    this.initialAfterFinalDate();
                    this.validDate = false;
                }
                else {
                    this.validDate = true;
                }
                return initial.isBefore(final);
            };
        /**
         * @return {?}
         */
        RangeDatepickerComponent.prototype.disableClearButton = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var initial = this.inicialDate.value;
                /** @type {?} */
                var final = this.finalDate.value;
                this.validDate = true;
                this.displayButton = !initial.isSame(final);
            };
        /**
         * @return {?}
         */
        RangeDatepickerComponent.prototype.clear = /**
         * @return {?}
         */
            function () {
                this.inicialDate = new forms.FormControl(momentAdpater());
                this.finalDate = new forms.FormControl(momentAdpater());
                this.returnDateEvent.emit(null);
                this.disableClearButton();
            };
        /**
         * @return {?}
         */
        RangeDatepickerComponent.prototype.initialAfterFinalDate = /**
         * @return {?}
         */
            function () {
                this.errorMessage = 'A data inicial não pode ser superior a data final. ';
            };
        /**
         * @return {?}
         */
        RangeDatepickerComponent.prototype.invalidDate = /**
         * @return {?}
         */
            function () {
                this.errorMessage = 'Data inválida.';
            };
        /**
         * @param {?} input
         * @return {?}
         */
        RangeDatepickerComponent.prototype.getInputValue = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                if (input.inicialDate.value) {
                    /** @type {?} */
                    var initial = this.inicialDate.value;
                    if (this.verifyCorrectDates(initial)) {
                        this.inicialDate.setValue(initial);
                    }
                }
                if (input.finalDate.value) {
                    /** @type {?} */
                    var final = this.finalDate.value;
                    if (this.verifyCorrectDates(final)) {
                        this.finalDate.setValue(final);
                    }
                }
                if (this.verifyValidDates()) {
                    this.returnDateEvent.emit({ "initialDate": this.inicialDate.value, "finalDate": this.finalDate.value });
                }
            };
        /**
         * @return {?}
         */
        RangeDatepickerComponent.prototype.getErrorMessage = /**
         * @return {?}
         */
            function () {
                return this.errorMessage;
            };
        /**
         * @param {?} date
         * @return {?}
         */
        RangeDatepickerComponent.prototype.verifyCorrectDates = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                if (!date.isValid) {
                    this.invalidDate();
                    return false;
                }
                return true;
            };
        RangeDatepickerComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'gualib-range-datepicker',
                        template: "<div fxLayout=\"column\">\n  <div fxLayout=\"row\"  fxLayoutAlign=\"start center\" fxLayoutGap=\"5px\" s>\n\n    <div fxLayout=\"column\" >\n      <label style=\"font-size: 10px;\">Inicial</label>\n      <mat-form-field  [class.alert-error]=\"!validDate\" class=\"date-filter\" appearance=\"none\">\n        <input readonly matInput [min]=\"minDate\" [max]=\"maxDate\"  [matDatepicker]=\"dp\" [formControl]=\"inicialDate\" class=\"date-input\" (dateChange)=\"getInputValue(this)\">   \n        <mat-datepicker-toggle matSuffix [for]=\"dp\" class=\"date-input date-toggle\"></mat-datepicker-toggle>\n        <mat-datepicker #dp startView=\"multi-year\" \n          (yearSelected)=\"chosenYearHandler($event, INITIAL_DATE)\"\n          (monthSelected)=\"chosenMonthHandler($event, dp, INITIAL_DATE)\" \n          [calendarHeaderComponent]=\"exampleHeader\">\n        </mat-datepicker>\n      </mat-form-field>\n    </div>\n    \n    <div fxLayout=\"column\" >\n      <label style=\"font-size: 10px;\">Final</label>\n      <mat-form-field [class.alert-error]=\"!validDate\" class=\"date-filter\" appearance=\"none\">\n        <input readonly matInput [min]=\"minDate\"  [max]=\"maxDate\" [matDatepicker]=\"dp2\"  [formControl]=\"finalDate\" class=\"date-input\" (dateChange)=\"getInputValue(this)\">\n        <mat-datepicker-toggle matSuffix [for]=\"dp2\" class=\"date-input date-toggle\"></mat-datepicker-toggle>\n        <mat-datepicker #dp2 startView=\"multi-year\" \n          (yearSelected)=\"chosenYearHandler($event, FINAL_DATE)\"\n          (monthSelected)=\"chosenMonthHandler($event, dp2, FINAL_DATE)\" \n          [calendarHeaderComponent]=\"exampleHeader\">\n        </mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div fxLayout=\"column\"  *ngIf=\"displayButton\" \n      class=\"clear-span\" (click)=\"clear()\" >\n      &nbsp;\n        <mat-icon color=\"primary\" class=\"clear-icon\">highlight_off</mat-icon>\n    </div>\n    \n    \n   \n  </div>\n  <mat-error *ngIf=\"!validDate\"><p  style=\"font-size: 12px;\">{{getErrorMessage()}}</p></mat-error>\n</div>",
                        providers: [
                            {
                                provide: core.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [core.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                            },
                            { provide: core.MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                        ],
                        styles: [".date-filter{max-width:90px!important;border:1px solid!important;border-radius:5%;color:#e0e0e0;max-height:45px!important}.date-input{color:#000;font-size:12px;margin-bottom:5%}.date-toggle{font-size:12px}.clear-span{cursor:pointer}.alert-error{color:red!important}.material-icons{font-size:20px!important}"]
                    }] }
        ];
        /** @nocollapse */
        RangeDatepickerComponent.ctorParameters = function () { return []; };
        RangeDatepickerComponent.propDecorators = {
            returnDateEvent: [{ type: core$1.Output }],
            minDate: [{ type: core$1.Input }],
            maxDate: [{ type: core$1.Input }]
        };
        return RangeDatepickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GuaLibRangeDatepickerModule = /** @class */ (function () {
        function GuaLibRangeDatepickerModule() {
        }
        GuaLibRangeDatepickerModule.decorators = [
            { type: core$1.NgModule, args: [{
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
        return GuaLibRangeDatepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GuaThemeAngularModule = /** @class */ (function () {
        function GuaThemeAngularModule() {
        }
        GuaThemeAngularModule.decorators = [
            { type: core$1.NgModule, args: [{
                        exports: [
                            GualibLoadingOverlayModule,
                            GualibImageGalleryModule,
                            GualibSelectSearchModule,
                            GualibSearchChipsSelectModule,
                            GuaLibRangeDatepickerModule
                        ]
                    },] }
        ];
        return GuaThemeAngularModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.GuaThemeAngularModule = GuaThemeAngularModule;
    exports.LoadingOverlayService = LoadingOverlayService;
    exports.ɵg = ImageGalleryZoomComponent;
    exports.ɵf = ImageGalleryComponent;
    exports.ɵe = GualibImageGalleryModule;
    exports.ɵb = LoadingOverlayComponent;
    exports.ɵa = GualibLoadingOverlayModule;
    exports.ɵd = MaterialModule;
    exports.ɵo = CustomHeader;
    exports.ɵm = MY_FORMATS$1;
    exports.ɵn = RangeDatepickerComponent;
    exports.ɵl = GuaLibRangeDatepickerModule;
    exports.ɵk = GualibSearchChipsSelectComponent;
    exports.ɵj = GualibSearchChipsSelectModule;
    exports.ɵi = GualibSelectSearchComponent;
    exports.ɵh = GualibSelectSearchModule;
    exports.ɵc = SharedModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=theme-angular.umd.js.map