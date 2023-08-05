import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Fav() {
    const [favs, setFavs] = useState([]);

    function deleteFav(id) {
        const updatedFavs = favs.filter(item => item.id !== id);
        setFavs(updatedFavs);
        localStorage.setItem('favs', JSON.stringify(updatedFavs));
    }

    useEffect(() => {
        setFavs(JSON.parse(localStorage.getItem("favs")) ?? []);
    },[])

    return(
    <>
        <h1>Favoriler</h1>
        <ul className="list-group">
            {
                favs.map(item => 
                    <li className="favList" key={item.id}>
                        <Link 
                            key={item.id} 
                            to={`/products/product/${item.id}`}
                            className="list-group-item list-group-item-action"
                            >
                            {item.title.toUpperCase()}
                        </Link>
                        <button className="btnFav" onClick={() => deleteFav(item.id)}>Sil</button>
                    </li>
                )
            }
        </ul>
    </>)
}