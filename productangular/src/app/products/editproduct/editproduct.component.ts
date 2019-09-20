import { Component, OnInit } from '@angular/core';
//import { ProductInMemDataService } from '../product-in-mem-data.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Product } from '../product.entity';
//import { Apappserviceice } from 'src/app/app.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './Editproduct.component.html',
  styleUrls: ['./Editproduct.component.css']
})
export class EditProductComponent implements OnInit {

  title = "Edit Product Form";
  productidtoedit: any;
  editProductForm: FormGroup;
  producttoedit: Product;

  constructor(private route: ActivatedRoute, private appservice: AppService, private fb: FormBuilder, private router: Router) 
  { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.productidtoedit = data.id;
    });
    console.log(this.productidtoedit);
    this.appservice.getProductById(this.productidtoedit).subscribe((data) => {
      this.producttoedit = data;

      this.editProductForm = new FormGroup({
        ProductID: new FormControl(this.producttoedit.ProductID),
        Title: new FormControl(this.producttoedit.Title),
        Price: new FormControl(this.producttoedit.Price),
        Color: new FormControl(this.producttoedit.Color),
        Quantity: new FormControl(this.producttoedit.Quantity),
        Description: new FormControl(this.producttoedit.Description),
        ExpiryDate: new FormControl(this.producttoedit.ExpiryDate),
        ImageUrl: new FormControl(this.producttoedit.ImageUrl),
        instock: new FormControl(this.producttoedit.instock),
        Rating: new FormControl(this.producttoedit.Rating)
      });
    });
  }

  updateProduct() {
    this.appservice.editProduct(this.productidtoedit, this.editProductForm.value).subscribe((data) => {

      console.log(this.productidtoedit,"Subscribed ",this.editProductForm.value);
    });
    alert("Data Updated");
    this.Goback();
  }

  setDefault() {
    this.editProductForm.setValue({
      ProductID: this.producttoedit.ProductID,
      Title: this.producttoedit.Title,
      Price: this.producttoedit.Price,
      Color: this.producttoedit.Color,
      Quantity: this.producttoedit.Quantity,
      Description: this.producttoedit.Description,
      ExpiryDate: this.producttoedit.ExpiryDate,
      ImageUrl: this.producttoedit.ImageUrl,
      instock: this.producttoedit.instock,
      Rating: this.producttoedit.Rating
    })
  }
  Goback(): void {
    this.router.navigate(['home'])
  }
}