import API from "../API";
import { Product as ProductEntity } from "../entity";

interface PropTypes {
    product: ProductEntity,
    addProductToCart: (event: any, product: ProductEntity) => void;
}

const Product = ({ product, addProductToCart }: PropTypes) => {

    return (
        <div className={`w-full max-w-sm ${product.enoferta === "0" ? "bg-white" : "bg-yellow-200"} text-black rounded-lg shadow-lg shadow-black-500/50`}>
            <a href="#">
                <img className="p-8 rounded-t-lg" src={`${API.baseUrl}/${product.imagengrande}`} alt={product.nombre} />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{product.nombre}</h5>
                </a>
                <div className="flex items-center justify-between mt-5">
                    <span className="text-xl font-bold text-gray-900">S/. {product.precio}</span>
                    <a href="#" 
                    onClick={(e) => addProductToCart(e, product)} 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>
    );
}


export default Product;