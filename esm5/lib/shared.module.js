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
var ɵ0 = {};
/** @type {?} */
var fakeActivatedRoute = (/** @type {?} */ ({
    snapshot: { data: ɵ0 }
}));
var ɵ1 = fakeActivatedRoute, ɵ2 = fakeActivatedRoute;
var SharedModule = /** @class */ (function () {
    function SharedModule() {
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
    return SharedModule;
}());
export { SharedModule };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RoZW1lLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztTQUc1QyxFQUFFOztJQURsQixrQkFBa0IsR0FBRyxtQkFBQTtJQUN2QixRQUFRLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRTtDQUN6QixFQUFrQjtTQVkwQixrQkFBa0IsT0FDMUIsa0JBQWtCO0FBWHZEO0lBQUE7SUFlNEIsQ0FBQzs7Z0JBZjVCLFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLHVCQUF1QjtxQkFDMUI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLElBQW9CLEVBQUU7d0JBQ3pELEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLElBQW9CLEVBQUU7cUJBRXBEO2lCQUNKOztJQUMyQixtQkFBQztDQUFBLEFBZjdCLElBZTZCO1NBQWhCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwubW9kdWxlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBmYWtlQWN0aXZhdGVkUm91dGUgPSB7XG4gICAgc25hcHNob3Q6IHsgZGF0YToge30gfVxufSBhcyBBY3RpdmF0ZWRSb3V0ZTtcblxuQE5nTW9kdWxlKHtcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBBY3RpdmF0ZWRSb3V0ZSwgdXNlVmFsdWU6IGZha2VBY3RpdmF0ZWRSb3V0ZSB9LFxuICAgICAgICB7IHByb3ZpZGU6IFJvdXRlciwgdXNlVmFsdWU6IGZha2VBY3RpdmF0ZWRSb3V0ZSB9LFxuXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxuIl19