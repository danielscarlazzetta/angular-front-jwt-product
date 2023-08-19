import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../styles.css']
})
export class DashboardComponent {

  constructor( private _productService: ProductService){
  }

  ngOnInit(): void {
    this.getAllProducts
  }

  getAllProducts(){
    this._productService.getAllProduct().subscribe(data => {
      console.log(data)
    })
  }

}
