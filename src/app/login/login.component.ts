import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {ActivatedRoute, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  msg:string="";
  loginformgroup=new FormGroup({
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })

   constructor(public users:UserService,public route:Router) {


   }

   public login(){

     if(this.users.checkUser(this.loginformgroup.value)==true)
     {
       this.msg="login successfull";
       this.route.navigate(['dashboard']);
     }
     else{
       this.msg="wrong username or password";
     }

   }


}
