import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Order} from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url: string = "http://northwind.netcore.io/orders.json";

  constructor(protected http: HttpClient) { } 

  getAllOrders()  {
    return this.http.get<Order[]>(this.url);
  }
}
