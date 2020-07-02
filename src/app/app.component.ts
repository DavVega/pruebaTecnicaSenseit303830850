import { Component, OnInit } from '@angular/core';
import {Costumer} from "./model/costumer";
import {Observable} from "rxjs";
import { CostumerService } from './services/costumer.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.css']
})

export class AppComponent {
  title = 'Prueba tecnica Sense IT - Greivin David Vega Camacho';

  costumers$: Observable<Costumer[]>;

  constructor(
    private CostumerService: CostumerService
  ) {
  }

  ngOnInit() {
    this.CostumerService.getAllCostumers()
    .subscribe(
      (data) => { // Success
        this.costumers$ = data['results'];
        //console.log(this.costumers$)
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
