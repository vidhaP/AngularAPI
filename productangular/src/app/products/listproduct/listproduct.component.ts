import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit,AfterViewInit
{
  ngAfterViewInit():void
  {
    setTimeout(()=>this.ps.getProducts().subscribe(data=>{
      this.products=data;
      console.log(data);
    }),200)
  }
  //[x: string]: any;
  imgWidth=50;
  imgMargin=2;
  Title="products";
  developerName="vidha paradkar";
  products: any=[];
  //producName: string;
  constructor(private ps:AppService,private router:Router) 
  {

  }
  ngOnInit()
  {

    this.getProducts();
    
  }
  getProducts()
  {
    this.ps.getProducts().subscribe(data=>{
      this.products=data
    })
  }
  editProduct(id): void
  {
    this.router.navigate(['editproduct',id]);
  }
  deleteProduct(id):void
  {
    this.router.navigate(['deleteproduct',id]);
  }
  DetailsProduct(id) : void
  {
    this.router.navigate(['product-details',id]);
  }

}
