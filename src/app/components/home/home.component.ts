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

  compraFinal: boolean = false



  // Creamos un array de elementos de tipo Producto para agregar los elementos que vengan del servicio
  products: Product[] = [];
  productsCart: ProductInCart[] = [];

  precioTotal: string = "";

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    // Obtenemos el array de elementos del servicio y lo asignamos en nuestra variable productos
    this.products = this.productService.getProductos();
    // Mostramos la lista de elementos por consola
    console.log(this.products);
    
  }

  compraFinalSwitch() {
      this.compraFinal = true;
  }

  calcularPrecioTotal(): string {
    let total = 0;
    for (const product of this.productsCart) {
      const precioNumerico = parseFloat(product.precio);
      const subtotal = precioNumerico * product.cantidad;
      total += subtotal;
    }
  
    const precioTotalFormatted = total.toLocaleString();
    this.precioTotal = precioTotalFormatted;
    return precioTotalFormatted;
  }
  
  

  isProductInCart(productId: number): boolean {
    return this.productsCart.some(product => product.id === productId);
  }
  


  increaseQuantity(product: ProductInCart) {
    if (product.cantidad < product.stock) {
      product.cantidad += 1;
    }else {
      alert("No hay stock suficiente");
      
    }
  }
  
  decreaseQuantity(product: ProductInCart) {
    if (product.cantidad > 1) {
      product.cantidad -= 1;
    }else {
      console.log("No se puede restar mas de 1");
      
    }
  }


  precioPorCantidad(precio: number, cantidad: number): string {
    const total = precio * cantidad;
    return total.toLocaleString('es-ES');
  }
  
  addToCart(id: number) {
    const productToAdd = this.products.find(product => product.id === id);
  
    if (productToAdd && productToAdd.stock > 0) {
      const existingProduct = this.productsCart.find(product => product.id === id);
  
      const newProduct: ProductInCart = { ...productToAdd, cantidad: 1 };
      
      if (existingProduct) {
        existingProduct.cantidad += 1;
        alert(`el producto ya esta en el carrito`);
        
      } else {
        this.productsCart.push(newProduct);
      }
  
      // productToAdd.stock -= 1;
    }else {
      alert(`No hay stock suficiente`)
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
