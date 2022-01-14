/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
export class GualibSelectSearchComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90aGVtZS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NlbGVjdC1zZWFyY2gvc2VsZWN0LXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBVXZCLE1BQU0sT0FBTywyQkFBMkI7SUFNdEM7UUFGVSxvQkFBZSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0lBRzdFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEtBQXNCO1FBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFLO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqRSxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyx5ZkFBNkM7Z0JBRTdDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7Ozs7b0JBRUUsS0FBSztnQ0FFTCxLQUFLOzhCQUNMLE1BQU07Ozs7SUFIUCw0Q0FBd0M7O0lBQ3hDLHFEQUF3Qzs7SUFDeEMsd0RBQW1DOztJQUNuQyxzREFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbGVjdFNlYXJjaEl0ZW0gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBNYXRTZWxlY3RDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2d1YWxpYi1zZWxlY3Qtc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3Qtc2VhcmNoLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3VhbGliU2VsZWN0U2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXRlbnM6IEFycmF5PFNlbGVjdFNlYXJjaEl0ZW0+O1xuICBpdGVuc0ZpbHRyYWRvczogQXJyYXk8U2VsZWN0U2VhcmNoSXRlbT47XG4gIEBJbnB1dCgpIGluaXRTZWxlY3RlZFZhbHVlOiBudW1iZXI7XG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpbHRlckVsZW1lbnQoJycpO1xuICB9XG5cbiAgb25TZWxlY3Rpb25DaGFuZ2UoZXZlbnQ6IE1hdFNlbGVjdENoYW5nZSkge1xuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoZXZlbnQudmFsdWUpO1xuICB9XG5cbiAgZmlsdGVyRWxlbWVudCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLml0ZW5zKSB7XG4gICAgICB0aGlzLml0ZW5zRmlsdHJhZG9zID0gdGhpcy5pdGVucy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUpID4gLTE7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==