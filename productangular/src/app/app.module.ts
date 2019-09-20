import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import { ProductsModule } from './products/products.module';
import {HttpClientModule} from '@angular/common/http';
import { AppService } from './app.service';





@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
