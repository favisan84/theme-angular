import { OnInit, EventEmitter } from '@angular/core';
import { SelectSearchItem } from './interface';
import { MatSelectChange } from '@angular/material';
export declare class GualibSelectSearchComponent implements OnInit {
    itens: Array<SelectSearchItem>;
    itensFiltrados: Array<SelectSearchItem>;
    initSelectedValue: number;
    selectionChange: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    onSelectionChange(event: MatSelectChange): void;
    filterElement(value: any): void;
}
