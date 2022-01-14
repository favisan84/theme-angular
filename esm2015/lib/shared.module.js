/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const ɵ0 = {};
/** @type {?} */
const fakeActivatedRoute = (/** @type {?} */ ({
    snapshot: { data: ɵ0 }
}));
const ɵ1 = fakeActivatedRoute, ɵ2 = fakeActivatedRoute;
export class SharedModule {
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
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RoZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztXQUc1QyxFQUFFOztNQURsQixrQkFBa0IsR0FBRyxtQkFBQTtJQUN2QixRQUFRLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRTtDQUN6QixFQUFrQjtXQVkwQixrQkFBa0IsT0FDMUIsa0JBQWtCO0FBSXZELE1BQU0sT0FBTyxZQUFZOzs7WUFmeEIsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsdUJBQXVCO2lCQUMxQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsSUFBb0IsRUFBRTtvQkFDekQsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsSUFBb0IsRUFBRTtpQkFFcEQ7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmNvbnN0IGZha2VBY3RpdmF0ZWRSb3V0ZSA9IHtcbiAgICBzbmFwc2hvdDogeyBkYXRhOiB7fSB9XG59IGFzIEFjdGl2YXRlZFJvdXRlO1xuXG5ATmdNb2R1bGUoe1xuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE1hdGVyaWFsTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEFjdGl2YXRlZFJvdXRlLCB1c2VWYWx1ZTogZmFrZUFjdGl2YXRlZFJvdXRlIH0sXG4gICAgICAgIHsgcHJvdmlkZTogUm91dGVyLCB1c2VWYWx1ZTogZmFrZUFjdGl2YXRlZFJvdXRlIH0sXG5cbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XG4iXX0=