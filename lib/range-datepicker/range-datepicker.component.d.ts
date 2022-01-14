import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material';
import { Moment } from 'moment';
import { CustomHeader } from './custom-header/custom-header.component';
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
export declare class RangeDatepickerComponent implements OnInit {
    returnDateEvent: EventEmitter<{}>;
    exampleHeader: typeof CustomHeader;
    displayButton: boolean;
    inicialDate: FormControl;
    finalDate: FormControl;
    validDate: boolean;
    errorMessage: any;
    INITIAL_DATE: string;
    FINAL_DATE: string;
    minDate: any;
    maxDate: any;
    constructor();
    ngOnInit(): void;
    chosenYearHandler(normalizedYear: Moment, order: any): void;
    chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>, order: any): void;
    verifyValidDates(): boolean;
    disableClearButton(): void;
    clear(): void;
    initialAfterFinalDate(): void;
    invalidDate(): void;
    getInputValue(input: any): void;
    getErrorMessage(): any;
    verifyCorrectDates(date: Moment): boolean;
}
