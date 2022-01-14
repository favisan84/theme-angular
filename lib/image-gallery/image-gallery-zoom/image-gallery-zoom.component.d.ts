import { MatDialogRef } from '@angular/material';
export declare class ImageGalleryZoomComponent {
    dialogRef: MatDialogRef<ImageGalleryZoomComponent>;
    data: any;
    constructor(dialogRef: MatDialogRef<ImageGalleryZoomComponent>, data: any);
    closeDialog(closeDialog: boolean): void;
}
