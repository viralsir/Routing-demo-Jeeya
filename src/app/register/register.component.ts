import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    RegisterFormGroup=new FormGroup({
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.email,Validators.required])
  })

   constructor(public users:UserService) {
   }
   msg:string="";
  savedata(){
      this.users.addUser(this.RegisterFormGroup.value);
      this.msg="Register successfully";
      this.RegisterFormGroup.reset();
  }


}
