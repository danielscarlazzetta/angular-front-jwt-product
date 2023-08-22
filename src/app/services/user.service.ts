import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { User } from '../interfaces/user.interfaces';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private myAppUrl: string;
  private myApiUrl: string;
  private apiToken : string;

  constructor( private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = environment.apiUsers;
    this.apiToken = environment.apiToken;
  }

  signIn(user : User): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user);
  }
  
  
  login(user : User): Observable<string>{
    return this.http.post<string>(`${this.myAppUrl}${this.apiToken}`, user);
  }
}
