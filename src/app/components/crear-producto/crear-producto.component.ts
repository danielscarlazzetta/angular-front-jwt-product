import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product.interfaces';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router) {
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

    this._userService.createProducts(fieldsProduct).subscribe(data => {
      this.toastr.success(`El producto  ${this.name} se registro con exito!`, 'Registro');
      this.router.navigate(['/dashboard']);
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