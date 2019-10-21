import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { ModalComponent } from './modal/modal.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { MyShoppingComponent } from './my-shopping/my-shopping.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ProductListComponent,
    ProductRegisterComponent,
    MyShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }
