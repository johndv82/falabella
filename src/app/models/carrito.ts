import { Producto } from "./producto";

export class Carrito {
    id?: number;
    cliente_id: number;
    producto_id: number;
    cantidad: number;
    fecha: Date;
    producto?: Producto[];

    constructor(cliente_id: number, producto_id: number, cantidad: number, fecha: Date) {
        this.cliente_id = cliente_id;
        this.producto_id = producto_id;
        this.cantidad = cantidad;
        this.fecha = fecha;
        this.producto = [];
    }
}