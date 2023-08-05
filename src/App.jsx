import Navbar from './components/Navbar'
import SiteRoutes from './SiteRoutes'
import './App.css'


function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <SiteRoutes />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
