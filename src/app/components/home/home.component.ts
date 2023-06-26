import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductInCart } from 'src/app/models/productInCart.interface';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  compraFinal: boolean = false;
  products: Product[] = [];
  productsCart: ProductInCart[] = [];
  precioTotal: string = "";

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productsCart = this.productService.productsCart;

    this.products = this.productService.getProductos();
    console.log(this.products);
  }

  compraFinalSwitch() {
    this.compraFinal = true;
  }

  calcularPrecioTotal(): string {

    let total = 0;
    for (const product of this.productService.productsCart) {
      const precioNumerico = parseFloat(product.precio);
      const subtotal = precioNumerico * product.cantidad;
      total += subtotal;
    }

    const precioTotalFormatted = total.toLocaleString();
    this.precioTotal = precioTotalFormatted;
    this.productService.precioTotal = precioTotalFormatted
    return precioTotalFormatted;
  }

  isProductInCart(productId: number): boolean {
    return this.productService.productsCart.some(product => product.id === productId);
  }

  increaseQuantity(product: ProductInCart) {
    if (product.cantidad < product.stock) {
      product.cantidad += 1;
    } else {
      alert("No hay stock suficiente");
    }
  }

  decreaseQuantity(product: ProductInCart) {
    if (product.cantidad > 1) {
      product.cantidad -= 1;
    } else {
      alert("No se puede restar más de 1");
    }
  }

  addToCart(id: number) {
    const productToAdd = this.products.find(product => product.id === id);

    if (productToAdd && productToAdd.stock > 0) {
      const existingProduct = this.productService.productsCart.find(product => product.id === id);

      const newProduct: ProductInCart = { ...productToAdd, cantidad: 1 };

      if (existingProduct) {
        existingProduct.cantidad += 1;
        alert(`El producto ya está en el carrito`);
      } else {
        this.productService.productsCart.push(newProduct);
        console.log(this.productService.productsCart);
        
      }
    } else {
      alert(`No hay stock suficiente`);
    }

    console.log(this.productService.productsCart);
  }

  deleteComponentCart(idProduct: number) {
    const index = this.productService.productsCart.findIndex(el => el.id === idProduct);
    if (index !== -1) {
      this.productService.productsCart.splice(index, 1);
    }
  }
}
