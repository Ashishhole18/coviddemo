import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AllcasesService {

  constructor(private http:HttpClient) { }

  getAllCases():Observable<any>
  {
    return this.http.get("https://corona.lmao.ninja/all").pipe(
      tap(cases=>{
        console.log(cases)
      }
      )
    );
  }
  getCoronaNews():Observable<any>
  {
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=574e1f4410f148f9a57188c3ed454cc1").pipe(
      tap(news=>{
        console.log(news)
      }
      )
    );
  }
}
