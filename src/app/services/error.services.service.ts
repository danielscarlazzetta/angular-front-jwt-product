import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorServicesService {

  constructor(private toastr : ToastrService) { }
  
  msjError(e: HttpErrorResponse) {
    const errorMessage = e.error.msg ? e.error.msg : 'Upss Error con el servidor!';
    this.toastr.error(errorMessage, 'Error');
  }
}
