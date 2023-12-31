import { useContext } from "react";
import { Link } from "react-router-dom";
import { SiteContext } from "../context/SiteContext";

export default function ProductCard({ item }) {
    const {user} = useContext(SiteContext);

    function handleClick(product) {
        let localFavs = JSON.parse(localStorage.getItem("favs")) ?? [];
    
        const itemIndex = localFavs.findIndex(localItem => product.id === localItem.id);
    
        if (itemIndex >= 0) {
            localFavs = localFavs.filter(item => item.id !== product.id);
        } else {
            localFavs.push({ id: product.id, title: product.title });
        }
    
        localStorage.setItem("favs", JSON.stringify(localFavs));
    
        const isFavorited = localFavs.some(item => item.id === product.id);
        const buttonText = isFavorited ? "Favorilerden Çıkar" : "Favorilere Ekle";
        document.querySelector(`#product-${product.id}-button`).textContent = buttonText;
    }
    
    return (
        <div className="card">
            <Link to={`/products/product/${item.id}`}>
                <img src={item.image} alt={item.title} />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description.substring(0, 31)}..</p>
                <p className="lead"><b>${item.price}</b></p>
                {user && (
                    <button
                        id={`product-${item.id}-button`}
                        className="btn btn-primary"
                        onClick={() => handleClick(item)}
                    >
                        {JSON.parse(localStorage.getItem("favs"))?.findIndex(localItem => item.id === localItem.id) >= 0 ? "Favorilerden Çıkar" : "Favorilere Ekle"}
                    </button>
                )}
            </div>
        </div>
    )
    
}