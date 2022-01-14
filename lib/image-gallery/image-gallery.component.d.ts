import { OnInit, EventEmitter, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
export declare class ImageGalleryComponent implements OnInit, OnChanges {
    dialog: MatDialog;
    images: string[];
    closeButtonColor: string;
    closeButtonBackground: string;
    panelClass: string;
    editMode: boolean;
    onAddImage: EventEmitter<{}>;
    onDeleteImage: EventEmitter<{}>;
    height: string;
    disableClose: boolean;
    emptyImagePath: string;
    isDisplayBtn: boolean;
    selectedImage: string;
    constructor(dialog: MatDialog);
    ngOnChanges(): void;
    ngOnInit(): void;
    openZoom(): void;
    onClick($event: any): void;
    onClickDelete($event: any): void;
}
