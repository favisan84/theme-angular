/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
var GualibSelectSearchComponent = /** @class */ (function () {
    function GualibSelectSearchComponent() {
        this.selectionChange = new EventEmitter();
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
            this.itensFiltrados = this.itens.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return item.value.toString().toLowerCase().indexOf(value) > -1;
            }));
        }
    };
    GualibSelectSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gualib-select-search',
                    template: "<mat-select #select [(ngModel)]=\"initSelectedValue\" (selectionChange)=\"onSelectionChange($event)\">\n  <input #inputSearch matInput class=\"input-search-select\" placeholder=\"Pesquisar...\" type=\"text\"\n    (keyup)=\"filterElement($event.target.value)\">\n  <mat-option *ngFor=\"let item of itensFiltrados\" [value]=\"item.key\">\n    <div style=\"display: flex; flex-direction: row;align-items: center;\" *ngIf=\"item\">\n      {{item.value}}\n    </div>\n  </mat-option>\n</mat-select>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".input-search-select{padding-left:10px;border:none;border-bottom:1px solid #e5e2e2;width:100%;outline:0!important}.formfieldPadrao{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    GualibSelectSearchComponent.ctorParameters = function () { return []; };
    GualibSelectSearchComponent.propDecorators = {
        itens: [{ type: Input }],
        initSelectedValue: [{ type: Input }],
        selectionChange: [{ type: Output }]
    };
    return GualibSelectSearchComponent;
}());
export { GualibSelectSearchComponent };
if (false) {
    /** @type {?} */
    GualibSelectSearchComponent.prototype.itens;
    /** @type {?} */
    GualibSelectSearchComponent.prototype.itensFiltrados;
    /** @type {?} */
    GualibSelectSearchComponent.prototype.initSelectedValue;
    /** @type {?} */
    GualibSelectSearchComponent.prototype.selectionChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90aGVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlbGVjdC1zZWFyY2gvc2VsZWN0LXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBWUU7UUFGVSxvQkFBZSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0lBRzdFLENBQUM7Ozs7SUFFRCw4Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsdURBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQXNCO1FBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELG1EQUFhOzs7O0lBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQyxJQUFJO2dCQUMzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHlmQUE2QztvQkFFN0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7Ozs7d0JBRUUsS0FBSztvQ0FFTCxLQUFLO2tDQUNMLE1BQU07O0lBb0JULGtDQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0F4QlksMkJBQTJCOzs7SUFDdEMsNENBQXdDOztJQUN4QyxxREFBd0M7O0lBQ3hDLHdEQUFtQzs7SUFDbkMsc0RBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWxlY3RTZWFyY2hJdGVtIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTWF0U2VsZWN0Q2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdndWFsaWItc2VsZWN0LXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3Qtc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LXNlYXJjaC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEd1YWxpYlNlbGVjdFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW5zOiBBcnJheTxTZWxlY3RTZWFyY2hJdGVtPjtcbiAgaXRlbnNGaWx0cmFkb3M6IEFycmF5PFNlbGVjdFNlYXJjaEl0ZW0+O1xuICBASW5wdXQoKSBpbml0U2VsZWN0ZWRWYWx1ZTogbnVtYmVyO1xuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maWx0ZXJFbGVtZW50KCcnKTtcbiAgfVxuXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKGV2ZW50OiBNYXRTZWxlY3RDaGFuZ2UpIHtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KGV2ZW50LnZhbHVlKTtcbiAgfVxuXG4gIGZpbHRlckVsZW1lbnQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pdGVucykge1xuICAgICAgdGhpcy5pdGVuc0ZpbHRyYWRvcyA9IHRoaXMuaXRlbnMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLnZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlKSA+IC0xO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=