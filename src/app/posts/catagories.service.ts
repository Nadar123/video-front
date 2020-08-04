import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CatagoriesService {

  private catagories: any;
    
  constructor(private http: HttpClient) { }

  getCatagories(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/categories');
  }
}
