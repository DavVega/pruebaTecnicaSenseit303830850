import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Costumer} from '../model/costumer';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {
  private url: string = "http://northwind.netcore.io/query/customers.json";

  constructor(protected http: HttpClient) { } 

  getAllCostumers()  {
    return this.http.get<Costumer[]>(this.url);
  }
}
