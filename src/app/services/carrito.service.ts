import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  url = 'http://localhost:8000';
  constructor(private http:HttpClient) { }

  addCarrito(carrito:Carrito): Observable<any>{
    return this.http.post(this.url+'/carrito', carrito);
  }

  getCarritoCliente(id:any):Observable<any>{
    return this.http.get(this.url+'/carrito_cliente/'+id);
  }

  deleteCarrito(id:any):Observable<any>{
    return this.http.delete(this.url+'/carrito/'+id);
  }
}
