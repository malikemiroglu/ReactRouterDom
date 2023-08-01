import { useEffect, useState } from "react";
import ProductCard from "./ProductCard"

export default function Products() {
    const [ last10Products, setLast10Products] = useState([]);
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=10")
            .then(res => res.json())
            .then(res => setLast10Products(res))
    }, [])

    return (
    <>
        <h2>Ürünler:</h2>
        <div className="cardWrapper">
            {last10Products.map(item => <ProductCard key={item.id} item={item}/>)}
        </div>
    </>
    )
}
