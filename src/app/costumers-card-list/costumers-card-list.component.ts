import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Costumer} from "../model/costumer";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import {OrdersDialogComponent} from "../orders-dialog/orders-dialog.component";

@Component({
    selector: 'costumers-card-list',
    templateUrl: './costumers-card-list.component.html',
    styleUrls: ['./costumers-card-list.component.css']
})
export class CostumersCardListComponent implements OnInit {

    @Input()
    Costumers: Costumer[];

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {

    }

    ViewOrder({id,companyName,contactName}:Costumer) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id,
            companyName,
            contactName,
        };

        const dialogRef = this.dialog.open(OrdersDialogComponent,
            dialogConfig);


        dialogRef.afterClosed().subscribe(
            val => console.log("Dialog output:", val)
        );

    }

}









