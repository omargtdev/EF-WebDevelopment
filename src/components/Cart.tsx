import { useState } from "react";
import API from "../API";
import { ProductCart } from "../entity";
import { useLocalStorage } from "../utils/customHooks";


const Cart = () => {

    const [productsCart, setProductsCart] = useLocalStorage("products", [])

    const handleClickDelete = () => setProductsCart([]);

    return (
        <div className="container mx-auto my-5">
            <table className="border-separate border-spacing-2 border border-slate-500">
                <thead>
                    <tr>
                        <th className="border border-slate-600">Imagen</th>
                        <th className="border border-slate-600">ID</th>
                        <th className="border border-slate-600">Nombre</th>
                        <th className="border border-slate-600">Precio (S/.)</th>
                        <th className="border border-slate-600">Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {productsCart.map((productCart: ProductCart) => (
                        <tr key={productCart.product.id}>
                            <td><img src={`${API.baseUrl}/${productCart.product.image}`} alt={productCart.product.name} /></td>
                            <td>{productCart.product.id}</td>
                            <td>{productCart.product.name}</td>
                            <td>{productCart.product.price}</td>
                            <td>{productCart.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleClickDelete} className="bg-red-500 rounded-md font-bold hover:bg-red-600 text-white mt-5 p-5">Borrar todos</button>
        </div>
    );
}

export default Cart;