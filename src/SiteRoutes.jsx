import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import { Category, Product, Products, ProductsLayout } from './products'
import Login from './pages/Login'
import Fav from './pages/Fav'
import PrivateRoute from './PrivateRoute'


export default function SiteRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<ProductsLayout />} >
                <Route index={true} element={<Products />}/>
                <Route path='category/:categoryName' element={<Category />} />
                <Route path='product/:productId' element={<Product />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route 
                path='/fav' 
                element={
                    <PrivateRoute>
                        <Fav />
                    </PrivateRoute>
                } 
            />

            <Route path='*' element={<PageNotFound />} />

        </Routes>
    )
} 