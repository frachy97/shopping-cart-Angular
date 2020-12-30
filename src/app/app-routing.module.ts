import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { LoginComponent } from './components/login/login.component';
import { PayComponent } from './components/pay/pay.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { ProductListManagementComponent } from './components/product/product-list-management/product-list-management.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartDetailsComponent, canActivate: [AuthGuard] },
  { path: 'pay', component: PayComponent, canActivate: [AuthGuard] },
  { path: 'product', component: ProductListManagementComponent },
  { path: 'product/add', component: AddProductComponent },
  { path: 'product/edit/:id', component: EditProductComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/add', component: AddCategoryComponent },
  { path: 'categories/edit/:id', component: EditCategoryComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
