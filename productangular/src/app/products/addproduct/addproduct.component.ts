import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Product } from '../product.entity';

@Component({
  selector: 'app-add-product',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddProductComponent implements OnInit {

  

  title="Add Product Form";
 
  addProductForm:FormGroup;
  constructor(private route :ActivatedRoute,private appservice:AppService, private fb:FormBuilder, private router:Router) {  }

  ngOnInit() 
  {
    this.addProductForm=new FormGroup({
      ProductID:new FormControl(),
      Title:new FormControl(),
      Price: new FormControl(),
      Color:new FormControl(),
      Quantity:new FormControl(),
      Description:new FormControl(),
      ExpiryDate:new FormControl(),
      ImageUrl:new FormControl(),
      instock:new FormControl(Boolean),
      Rating:new FormControl()
    })
    this.addProductForm.setValue({
      ProductID:"",
      Title:"",
      Price:"",
      Color:"",
      Quantity:"",
      Description:"",
      ExpiryDate:"",
      ImageUrl:"",
      instock:"",
      Rating:""
        })
  }

  setDefault(){
    this.addProductForm.setValue({
      ProductID:"",
      Title:"",
      Price:"",
      Color:"",
      Quantity:"",
      Description:"",
      ExpiryDate:"",
      ImageUrl:"",
      instock:"",
      Rating:""
        })

  }
  prod:Product;
  addProduct(){
    console.log(this.addProductForm.value);
    this.addProductForm.value
    this.appservice.addProduct(this.addProductForm.value).subscribe(data=>{
      this.prod=data;
      console.log(this.prod);
    });
    this.router.navigate(['home']);
  }
  Goback():void
  {
    this.router.navigate(['home'])
  }
}
