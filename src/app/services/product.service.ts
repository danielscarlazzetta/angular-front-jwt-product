import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Product } from '../interfaces/product.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private myAppUrl: string;
  private apiAllProduct: string;
  private apiProductCreate: string;

  constructor( private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.apiAllProduct = environment.apiGetAllProduct;
    this.apiProductCreate = environment.apiCreateProducts;
  }

  getAllProduct(): Observable<Product[]>{
    // const token = localStorage.getItem('token');
    // const header = new HttpHeaders().set('authorization', `Bearer ${token}`);
    // return  this.http.get<Product[]>(`${this.myAppUrl}${this.apiAllProduct}`, {header : header});
    return  this.http.get<Product[]>(`${this.myAppUrl}${this.apiAllProduct}`);
  }

  createProducts(product : Product): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.apiProductCreate}`, product);
  }
}
