import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Costumer} from "../model/costumer";
import {Order} from "../model/order";
import {OrderDetails} from "../model/orderDetails";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { OrderService } from '../services/order.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'orders-dialog',
    templateUrl: './orders-dialog.component.html',
    styleUrls: ['./orders-dialog.component.css']
})

export class OrdersDialogComponent implements OnInit {

    //form: FormGroup;
    customerId:string;
    companyName:string;
    contactName:string;
    address:string;
    orders: Order[];
    ordersByCustomerId$: Order[];
    ordersDetailsByCostumer$: OrderDetails[];
    displayedColumns: string[] = ["productId", "unitPrice", "quantity", "discount"];


    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<OrdersDialogComponent>,
        protected OrderService: OrderService,
        @Inject(MAT_DIALOG_DATA) {id,companyName,contactName}:Costumer ) {

        this.customerId = id;
        this.companyName = companyName;
        this.contactName = contactName;

    }



  ngOnInit() {
    this.OrderService.getAllOrders()
    .subscribe(
      (data) => { // Success
        this.orders = data['results'];
        console.log(this.orders)
        console.log(this.customerId);
        //console.log(this.orders['order'].customerId);
        
        this.ordersByCustomerId$ = this.orders.filter(t=>  t['order'].customerId === this.customerId ) 
        this.ordersDetailsByCostumer$ = this.ordersByCustomerId$[0]['orderDetails'];
        console.log(this.ordersByCustomerId$)
        console.log(this.ordersDetailsByCostumer$[0])

      },
      (error) => {
        console.error(error);
      }
    );
}



    close() {
        this.dialogRef.close();
    }

}
