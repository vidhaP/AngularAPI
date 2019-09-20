import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {tap,catchError,map} from 'rxjs/operators';
import { Product } from './products/product.entity';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  apiurl='https://localhost:44309/api/products';
  headers= new HttpHeaders().set('content-type','application/json').set('accept','appliation/json');
  httpOptions={
    headers:this.headers
  };
  
  constructor(private http:HttpClient) { }
  private handleError (error:any)
  {
    console.log(error);
    return throwError(error);
  }
  getProducts() : Observable<Product[]>
  {
    return this.http.get<Product[]>(this.apiurl).pipe(
      tap(data=>console.log(data)),
      catchError(this.handleError)
    );
  }
  
  editProduct(id:string,prod:Product): Observable<null | Product>
  {
    const url=`${this.apiurl}/${id}`;
    return this.http.put<Product>(url,prod,this.httpOptions).pipe(
      tap(data=> console.log(data)),
      catchError(this.handleError)
    );
  }
  addProduct(pd:Product) :Observable<Product>
  {
    return this.http.post<Product>(this.apiurl,pd,this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  deleteProduct(id:string):Observable<Product>
  {
    const url=`${this.apiurl}/${id}`;
    return this.http.delete<Product>(url,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  
  getProductById(id : string): Observable<Product>{
    const url=`${this.apiurl}/${id}`;
    return this.http.get<Product>(url).pipe(
      catchError(this.handleError)
    );
  }
}
