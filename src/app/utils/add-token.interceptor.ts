import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorServicesService } from '../services/error.services.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {


  constructor(  private router: Router,
                private _errorServices: ErrorServicesService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token : any = localStorage.getItem('token');
    console.warn('aqui va el token')
    console.warn(token)

    if(token) {
      request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    }

    //return next.handle(request);
     return next.handle(request).pipe(
       catchError((error: HttpErrorResponse) => {
         if (error.status === 401) {
           this._errorServices.msjError(error)
           this.router.navigate(['/login'])
         }
         return throwError(() => Error('Error'))
       })
       );
  }


}
