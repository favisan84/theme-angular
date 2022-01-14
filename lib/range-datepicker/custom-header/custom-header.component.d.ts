import { OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatCalendar, DateAdapter, MatDateFormats } from '@angular/material';
export declare const MY_FORMATS: {
    parse: {
        dateInput: string;
    };
    display: {
        dateInput: string;
        monthYearLabel: string;
        dateA11yLabel: string;
        monthYearA11yLabel: string;
    };
};
export declare class CustomHeader<D> implements OnDestroy {
    private calendar;
    private dateAdapter;
    private dateFormats;
    private destroyed;
    constructor(calendar: MatCalendar<D>, dateAdapter: DateAdapter<D>, dateFormats: MatDateFormats, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    readonly periodLabel: string;
    previousClicked(mode: 'month' | 'year'): void;
    nextClicked(mode: 'month' | 'year'): void;
}
