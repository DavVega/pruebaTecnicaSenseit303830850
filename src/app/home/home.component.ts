import {Component, OnInit} from '@angular/core';
import {Costumer} from "../model/costumer";
import {Observable} from "rxjs";
import { CostumerService } from '../services/costumer.service';
import {map} from "rxjs/operators";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    costumers$: Observable<Costumer[]>;

constructor(
    protected CostumerService: CostumerService
  ) {
  }

  ngOnInit() {
    this.CostumerService.getAllCostumers()
    .subscribe(
      (data) => { // Success
        this.costumers$ = data['results'];
        console.log(this.costumers$)
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
