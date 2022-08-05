/*

import { Injectable } from "@angular/core";
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Book } from "./model/book";

export const books: Book = 
  { 
    title: ""
  }

@Injectable()

export class BookService{

    private url = `https://www.googleapis.com/books/v1/volumes/Py8u3Obs4f4C`;
    

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }

    constructor(private http: HttpClient){}

    getBooks(){
       return this.http.get(this.url);
       
    }
}

*/