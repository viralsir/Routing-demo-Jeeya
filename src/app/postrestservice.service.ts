import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "./post";

@Injectable({
  providedIn: 'root'
})
export class PostrestserviceService {

  constructor(public httpclient:HttpClient) { }


   getAllPost():Observable<Post[]>{

    return this.httpclient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");

   }



}
