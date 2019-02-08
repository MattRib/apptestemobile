import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Games } from "../model/games";

@Injectable()
export class GamesService{

    constructor(private http: HttpClient) {}

        getCategoria() : Observable<Games[]>{
            return this.http.get<Games[]>(
                `http://www.mocky.io/v2/5c5defad3200002a0040b31e`);

        }


} 