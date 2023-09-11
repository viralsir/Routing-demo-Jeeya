import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RegisterComponent} from "./register/register.component";
import {RestComponentComponent} from "./rest-component/rest-component.component";

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactUsComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"register",component:RegisterComponent},
  {path:"restapi",component:RestComponentComponent},
  {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
