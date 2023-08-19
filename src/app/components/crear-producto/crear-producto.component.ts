import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product.interfaces';
import { ErrorServicesService } from 'src/app/services/error.services.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['../../../styles.css']
})
export class CrearProductoComponent {

  name: string = '';
  description: string = '';
  price: number = 0;
  amount: number = 0;
  category: string = '';

  constructor(  private toastr: ToastrService,
                private _productService: ProductService,
                private router: Router,
                private _errorService : ErrorServicesService) {
  }

  addProduct() {
    const fields = [this.name, this.price, this.category];
    for (const field of fields) {
      if (field === '') {
        this.toastr.error('Los campos Username, Password, email y tipo de usuario son obligatorios', 'Error');
        return;
      }
    }
    const fieldsProduct : Product = {
      name: this.name,
      description: this.description,
      price: this.price,
      amount: this.amount,
      category: this.category,
    } 

    this._productService.createProducts(fieldsProduct).subscribe({
      next: (v) => {
        this.toastr.success(`El producto ${this.name} se registro con exito!`, 'Registro');
        this.router.navigate(['/dashboard']);
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
      },
      complete: () => console.info('complete')
    });
  }
}


/*

    name: string = '',

    description: string = '',
    price: number = '',
    amount: number = '',
    category: string = '',
*/