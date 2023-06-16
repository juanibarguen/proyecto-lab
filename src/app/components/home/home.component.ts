import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Creamos un array de elementos de tipo Producto para agregar los elementos que vengan del servicio
  products: Product[] = [];
  productsCart: Product[] = [];
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    // Obtenemos el array de elementos del servicio y lo asignamos en nuestra variable productos
    this.products = this.productService.getProductos();
    // Mostramos la lista de elementos por consola
    console.log(this.products);
    
  }


  addToCart(id: number) {

    const productToAdd = this.products.find(product => product.id === id);
    if (productToAdd) {
      this.productsCart.push(productToAdd);
    }
    console.log(this.productsCart);
    
  }

  
  

}
