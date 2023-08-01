import { Link } from "react-router-dom"

export default function PageNotFound() {
    return(
        <>
            <h1>404 - Sayfa Bulunamadı..</h1>
            <Link to="/" className="btn btn-info">Ana Sayfaya Gitmek İçin Tıklayınız..</Link>
        </>
    )
}