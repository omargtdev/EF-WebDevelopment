export interface Product {
    idproducto: string,
    nombre: string,
    idproveedor: string,
    idcategoria: string,
    detalle: string,
    precio: string,
    preciorebajado: string,
    unidadesenexistencia: string,
    unidadesenpedido: string,
    nivelnuevopedido: string,
    enoferta: string,
    imagenchica: string,
    imagengrande: string,
    habilitado: string,
    descripcion: string
}

export interface ProductCart {
    product: {
        id: string,
        name: string,
        detail: string,
        price: string,
        image: string,
    },
    count: number
}