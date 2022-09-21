import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Carrito } from 'src/app/models/carrito';
import { CarritoService } from 'src/app/services/carrito.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-carrito',
  templateUrl: './listar-carrito.component.html',
  styleUrls: ['./listar-carrito.component.css']
})
export class ListarCarritoComponent implements OnInit {
  listCarrito: Carrito[] = [];
  idClicked = 0;

  constructor(private _carritoService: CarritoService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerCarritoCliente(this.route.snapshot.paramMap.get('id'));
  }

  obtenerCarritoCliente(id:any) {
    this._carritoService.getCarritoCliente(id).subscribe({next: (data)=>{
      this.listCarrito = data;
      console.log(this.listCarrito);
    }, error:(error)=>{
      console.log(error)
    }})
  }

  getKeys(obj:any){
    return Object.keys(obj)
  }

  eliminarCarrito(id:any){
    this.idClicked = id;
    this._carritoService.deleteCarrito(id).subscribe({
      complete: () => {
        this.idClicked = 0;
        this.obtenerCarritoCliente(this.route.snapshot.paramMap.get('id'));
        this.toastr.success('Producto Eliminado de Carrito!', 'Éxito!');
      }, error: (error) => {
        console.log(error);
      }
    });
  }

}
