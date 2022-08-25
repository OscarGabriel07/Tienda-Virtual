import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosServicioService {

  private productosUrl = 'http://localhost:3000/productos';

  constructor(private httpClient: HttpClient) { }

  obtenerProductos(){
    return this.httpClient.get(this.productosUrl);
  }

}
