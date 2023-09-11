import { Component } from '@angular/core';
import {PostrestserviceService} from "../postrestservice.service";
import {Post} from "../post";

@Component({
  selector: 'app-rest-component',
  templateUrl: './rest-component.component.html',
  styleUrls: ['./rest-component.component.css']
})
export class RestComponentComponent {

  constructor(public restservice:PostrestserviceService) {
  }
  postdata:Array<Post>=[]

  getPostRecord(){
     this.restservice.getAllPost().subscribe(data=>this.postdata=data,error => console.log(error),()=>{});
  }


}
