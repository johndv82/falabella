import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**Componentes */
import { AppComponent } from './app.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ListarCarritoComponent } from './components/listar-carrito/listar-carrito.component';

/**Routing */
import { AppRoutingModule } from './app-routing.module';

/**Conexion Http (Service) */
import {HttpClientModule} from '@angular/common/http';

/**ngx-toastr */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    ListarCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
