import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { EditProductComponent } from './editproduct/editproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './productfilter.pipe';
import { AddProductComponent } from './addproduct/addproduct.component';
import { EditProductComponent } from './editproduct/editproduct.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
//import { EditproductComponent } from './editproduct/editproduct.component';



const productroutes: Routes = [
  {path:'products',component:ListproductComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'editproduct/:id',component:EditProductComponent},
  {path:'deleteproduct/:id',component:DeleteproductComponent},
  {path:'product-details/:id',component:ProductDetailsComponent}
  ];

@NgModule({
  declarations: [AddProductComponent, 
    EditProductComponent, 
    DeleteproductComponent, 
    ProductDetailsComponent, 
    ProductFilterPipe,
    ListproductComponent,
    ProductDetailsComponent],
  
    imports: [
    CommonModule,
    RouterModule.forChild(productroutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
