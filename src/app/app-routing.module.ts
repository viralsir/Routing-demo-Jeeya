import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactUsComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
