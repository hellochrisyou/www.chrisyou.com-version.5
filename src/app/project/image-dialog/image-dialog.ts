import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DATINGTABS, FOOTBALLTABS, STOCKTABS, FOOTBALLIMAGES, STOCKIMAGES, DATINGIMAGES, DialogData } from './tab-data';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'image-dialog',
    templateUrl: 'image-dialog.html',
    styleUrls: ['image-dialog.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class ImageDialog {

    selectedIndex: number = 0;

    footballTabs = FOOTBALLTABS;
    stockTabs = STOCKTABS;
    datingTabs = DATINGTABS;

    footbalImages = FOOTBALLIMAGES;
    stockImages = STOCKIMAGES;
    datingImages = DATINGIMAGES;

    thisTabs: string[] = [];
    thisImages: string[] = [];
    constructor(
        public dialogRef: MatDialogRef<ImageDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        dialogRef.disableClose = false;
        switch (data.tab) {
            case 'football': {
                this.thisTabs = this.footballTabs;
                this.thisImages = this.footbalImages;
                break;
            }
            case 'stocks': {
                this.thisTabs = this.stockTabs;
                this.thisImages = this.stockImages;
                break;
            }
            case 'dating': {
                this.thisTabs = this.datingTabs;
                this.thisImages = this.datingImages;
                break;
            }
        }
    }

    nextStep() {
        if (this.selectedIndex !== this.thisTabs.length - 1) {
            this.selectedIndex = this.selectedIndex + 1;
        }
        console.log(this.selectedIndex);
    }

    previousStep() {
        if (this.selectedIndex != 0) {
            this.selectedIndex = this.selectedIndex - 1;
        }
        console.log(this.selectedIndex);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
