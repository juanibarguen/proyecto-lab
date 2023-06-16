import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  // Definimos el array de elementos de tipo Producto
  products: Product[] = [
    {
      id: 1,
      nombre: "Producto 1",
      imagen: "imagen1.jpg",
      descripcion: "Descripción del producto 1",
      precio: 10.99,
      stock: 5
    },
    {
      id: 2,
      nombre: "Producto 2",
      imagen: "imagen2.jpg",
      descripcion: "Descripción del producto 2",
      precio: 15.99,
      stock: 10
    },
    {
      id: 3,
      nombre: "Producto 3",
      imagen: "imagen3.jpg",
      descripcion: "Descripción del producto 3",
      precio: 8.99,
      stock: 2
    },
    {
      id: 4,
      nombre: "Producto 4",
      imagen: "imagen4.jpg",
      descripcion: "Descripción del producto 4",
      precio: 12.99,
      stock: 0
    },
    {
      id: 5,
      nombre: "Producto 5",
      imagen: "imagen5.jpg",
      descripcion: "Descripción del producto 5",
      precio: 9.99,
      stock: 8
    },
    {
      id: 6,
      nombre: "Producto 6",
      imagen: "imagen6.jpg",
      descripcion: "Descripción del producto 6",
      precio: 6.99,
      stock: 3
    },
    {
      id: 7,
      nombre: "Producto 7",
      imagen: "imagen7.jpg",
      descripcion: "Descripción del producto 7",
      precio: 19.99,
      stock: 15
    },
    {
      id: 8,
      nombre: "Producto 8",
      imagen: "imagen8.jpg",
      descripcion: "Descripción del producto 8",
      precio: 14.99,
      stock: 6
    },
    {
      id: 9,
      nombre: "Producto 9",
      imagen: "imagen9.jpg",
      descripcion: "Descripción del producto 9",
      precio: 11.99,
      stock: 1
    },
    {
      id: 10,
      nombre: "Producto 10",
      imagen: "imagen10.jpg",
      descripcion: "Descripción del producto 10",
      precio: 17.99,
      stock: 4
    }
  ];

  getProductos(): Product[] {
    return this.products;
  }
  
}
