import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostumerService } from './services/costumer.service';
import { MaterialModule } from "./material.module";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CostumersCardListComponent } from './costumers-card-list/costumers-card-list.component';
import { OrdersDialogComponent} from './orders-dialog/orders-dialog.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CostumersCardListComponent,
    OrdersDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    ],
  providers: [CostumerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [OrdersDialogComponent]
})
export class AppModule { }
