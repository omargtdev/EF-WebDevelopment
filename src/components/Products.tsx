import { useEffect, useState } from "react";
import API from "../API";
import { Product as ProductEntity, ProductCart } from "../entity";
import { useLocalStorage } from "../utils/customHooks";
import Product from "./Product";
import SearchInput from "./SearchInput";


const Products = () => {

    const apiUrl: string = `${API.baseUrl}/servicioproductostodos.php`;
    const [products, setProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])
    const [productsCart, setProductsCart] = useLocalStorage("products", [])
    const [valueToSearch, setValueToSearch] = useState("");

    useEffect(() => {
       fetch(apiUrl).then(res => res.json())
        .then(res => {
            setProducts(res);
            setProductsFiltered(res);
        })
        .catch(err => console.error(err));
    }, []);

    const filterProducts = () => setProductsFiltered(products.filter((product: ProductEntity) => product.nombre.toUpperCase().includes(valueToSearch.toUpperCase())));

    const addProductToCart = (event: any, product: ProductEntity) => {
        event.preventDefault();

        const auxProductsCart = (productsCart as ProductCart[]);
        const productCartIndex = auxProductsCart.findIndex((productCart: ProductCart) => productCart.product.id === product.idproducto);
        if(productCartIndex !== -1){
            auxProductsCart[productCartIndex].count += 1;
        }else{
            auxProductsCart.push({ product: { id: product.idproducto, detail: product.detalle, name: product.nombre, price: product.precio, image: product.imagenchica }, count: 1})
        }
        setProductsCart(auxProductsCart);
    }

    return (
        <section id="products" className="my-5">
            <h3 className="text-4xl font-bold text-center mb-5">Productos</h3>
            <SearchInput valueToSearch={valueToSearch} setValueToSearch={setValueToSearch} filterProducts={filterProducts}/>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center">
                    {productsFiltered.map((product: ProductEntity) => <Product key={product.idproducto} product={product} addProductToCart={addProductToCart}/>)}
                </div>
            </div>
        </section>
    );
}

export default Products;