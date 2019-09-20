import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.entity';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit 
{
  Title="Delete product form";
  deleteProductForm:FormGroup;
  productid: any;
  constructor(private ps:AppService,private router:Router,private fb:FormBuilder,private route :ActivatedRoute) 
  {
   
  }
  prod:Product;
  
  deleteProduct(){
    this.route.params.subscribe((data)=>{
      this.ps.deleteProduct(data.id).subscribe(data=>{
      this.prod=data;
      console.log(this.prod);
    });
    })
    
    this.router.navigate(['home']);
  }
  Goback():void{
    this.router.navigate(['home'])
  }
  ngOnInit() 
  {
    this.deleteProductForm=new FormGroup({});
  }
}
