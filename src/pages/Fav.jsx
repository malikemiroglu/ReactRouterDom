import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SiteContext } from "../context/SiteContext";

export default function Fav() {
    const [favs, setFavs] = useState([]);
    

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
                        <button >Sil</button>
                    </li>
                )
            }
        </ul>
    </>)
}