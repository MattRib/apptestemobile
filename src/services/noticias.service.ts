import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Categoria } from "../model/categoria";


@Injectable()
export class NoticiaService{

    constructor(private http: HttpClient) {}

        getNoticias() : Observable<Categoria[]>{
            return this.http.get<Categoria[]>(
                `http://www.mocky.io/v2/5c5e10683200004d0040b366`);

        }
} 