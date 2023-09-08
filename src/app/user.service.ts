import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public UserList=[];
  constructor() { }

  public addUser(user:any){

    // @ts-ignore
    this.UserList.push(user);

  }

  public checkUser(user:any):boolean{

  // @ts-ignore

   let check=this.UserList.find(element => (element.username==user.username && element.password==user.password));
    if(check==undefined)
    {
        return false;
    }
    else {
      return true;
    }

}


}
