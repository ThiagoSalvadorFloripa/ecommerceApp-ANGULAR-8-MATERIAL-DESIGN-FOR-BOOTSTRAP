import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { ModalComponent } from './modal/modal.component';
import { MyShoppingComponent } from './my-shopping/my-shopping.component';

const routes: Routes = [
  {path: 'productList', component: ProductListComponent},
  {path: 'productRegister', component: ProductRegisterComponent},
  {path: 'detail', component: ModalComponent},
  {path: 'myShopping', component: MyShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
