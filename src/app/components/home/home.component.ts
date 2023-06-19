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
  // Creamos un array de elementos de tipo Producto para agregar los elementos que vengan del servicio
  products: Product[] = [];
  productsCart: ProductInCart[] = [];
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    // Obtenemos el array de elementos del servicio y lo asignamos en nuestra variable productos
    this.products = this.productService.getProductos();
    // Mostramos la lista de elementos por consola
    console.log(this.products);
    
  }

  
  addToCart(id: number) {
    const productToAdd = this.products.find(product => product.id === id);
  
    if (productToAdd && productToAdd.stock > 0) {
      const existingProduct = this.productsCart.find(product => product.id === id);
  
      const newProduct: ProductInCart = { ...productToAdd, cantidad: 1 };
      
      if (existingProduct) {
        existingProduct.cantidad += 1;
      } else {
        this.productsCart.push(newProduct);
      }
  
      productToAdd.stock -= 1;
    }
  
    console.log(this.productsCart);
  }
  

  deleteComponentCart(idProduct: number) {
    const index = this.productsCart.findIndex(el => el.id === idProduct);
    if (index !== -1) {
      this.productsCart.splice(index, 1);
    }
  }
  
  

}
