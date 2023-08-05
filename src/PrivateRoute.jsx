import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { SiteContext } from "./context/SiteContext";

export default function PrivateRoute({children}) {
    const { user } = useContext(SiteContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    },[user])

    if(loading) {
        return <h1>Loading...</h1>
    }
    
    if(!user?.id) {
        return <Navigate to="/login" replace />
    }

    return children
}