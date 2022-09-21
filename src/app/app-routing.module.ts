import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ListarCarritoComponent } from './components/listar-carrito/listar-carrito.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes:Routes=[
  { path: '', component: ListarProductosComponent},
  { path: 'listar-carrito-cliente/:id', component: ListarCarritoComponent},
  { path: '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
