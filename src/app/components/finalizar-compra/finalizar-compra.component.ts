import { Component } from '@angular/core';
import { ProductInCart } from 'src/app/models/productInCart.interface';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css']
})


export class FinalizarCompraComponent {

  productsCart: ProductInCart[] = [];

  transferencia: boolean = true;
  mercadoPago: boolean = false;
  debito: boolean = false;

  precioTotal = this.productService.precioTotal

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productsCart = this.productService.productsCart;
  }



  transf() {
    this.transferencia = true;
    this.mercadoPago = false
    this.debito = false;
  }

  mp() {
    this.mercadoPago = true;
    this.transferencia = false;
    this.debito = false;
  }

  debit() {
    this.debito = true;
    this.transferencia = false
    this.mercadoPago = false
  }
}
