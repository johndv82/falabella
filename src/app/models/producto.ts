export class Producto{
    id?:number;
    descripcion:string;
    codigo:string;
    foto:string;
    marca_id:number;
    valoracion:number;
    preciobase:number;
    preciooferta:number;
    preciocmr:number;
    stock:number;
    categoria_id:number;

    constructor(descripcion:string, codigo:string, foto:string, marca_id:number, valoracion:number, preciobase:number, preciooferta:number, preciocmr:number, stock:number, categoria_id: number){
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.foto = foto;
        this.marca_id = marca_id;
        this.valoracion = valoracion;
        this.preciobase = preciobase;
        this.preciooferta = preciooferta;
        this.preciocmr = preciocmr;
        this.stock = stock;
        this.categoria_id = categoria_id;
    }
}