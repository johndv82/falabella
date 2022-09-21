import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ToastrService } from 'ngx-toastr';
import { CarritoService } from 'src/app/services/carrito.service';
import { Carrito } from 'src/app/models/carrito';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listProductos: Producto[] = [];
  idClicked = 0;

  constructor(private _productoService: ProductoService, private _carritoService: CarritoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  agregarCarrito(id: any) {
    this.idClicked = id;
    const CARRITO: Carrito = {
      cliente_id: 1,
      producto_id: id,
      cantidad: 1,
      fecha: new Date()
    }
    this._carritoService.addCarrito(CARRITO).subscribe({
      complete: () => {
        this.idClicked = 0;
        this.toastr.success('Producto Agregado a Carrito!', 'Éxito!');
      }, error: (error) => {
        console.log(error);
      }
    });
  }
}
