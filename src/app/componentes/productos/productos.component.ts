import { Component, OnInit } from '@angular/core';
import { ProductosServicioService } from 'src/app/servicios/productos-servicio.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos:any = [];

  constructor(private servicioProducto: ProductosServicioService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(){
    this.servicioProducto.obtenerProductos()
    .subscribe(productosData => {
      this.productos = productosData;
    })
  }

}
