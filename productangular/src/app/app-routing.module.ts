import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
//import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListproductComponent } from './products/listproduct/listproduct.component';


const routes: Routes = [
{path:'home',component:ListproductComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
//{path:'login',component:LoginComponent},
{path:'**',component:ListproductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
