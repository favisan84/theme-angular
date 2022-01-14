import { EventEmitter, ElementRef } from '@angular/core';
export declare class GualibSearchChipsSelectComponent {
    inputRef: ElementRef;
    selectValue: any;
    chips: Array<{
        key: any;
        value: any;
    }>;
    inputValue: string;
    input: string;
    inputChange: EventEmitter<{}>;
    selectLabel: string;
    selectChoices: Array<{
        key: any;
        value: any;
    }>;
    onChangeSelect: EventEmitter<{}>;
    onCloseChip: EventEmitter<{}>;
    onSearch: EventEmitter<{}>;
    onClickCloseChip(chipKey: string, $event: MouseEvent): void;
    onInputFocus(): void;
    onClickSearch(): void;
    onSelectionChange(): void;
    onKeyUp($event: KeyboardEvent): void;
}
