import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard";

export default function Category() {
    const {categoryName} = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res => res.json())
            .then(res => setCategoryProducts(res))
            .catch(err => console.log(err))
    }, [categoryName])

    return(
        <>
            <h1>Kategori: {categoryName.toLocaleUpperCase()}</h1>
            <div className="cardWrapper">
                {categoryProducts.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>
        </>
    )
}