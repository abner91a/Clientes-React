import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
   Redirect 
  } from "react-router-dom";
  

import Home from './views/Home';
import ProductsVista from './views/ProductsVista';
import Registrarse from './views/Registrarse';
import Login from './views/Login';
import Carrito from './views/Carrito'

import {AppProvider} from './context/AppContext';
import {HomeProvider} from './context/home/HomeContext';
import {DescripcionProductoProvider} from './context/descripcionproducto/DescripcionProductoContext';
import Cargando from './components/cargando/Cargando'

const Logout = () => {
    window.localStorage.removeItem('token');
    return <Redirect to="/" />;
  }
function Routes() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
      }, [])

    return (
   
   
     <> {loading === false ? (
      <HomeProvider >
   
            <Router>
            <Switch>
        
     
                <Route exact path="/" component={Home}/>
           
           
                <Route exact path="/producto/:id" component={ProductsVista} />
                <Route exact path="/registrarse" component={Registrarse} />
                <Route exact path="/iniciar-sesion" component={Login}  />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/carrito" component={Carrito} />
        

            
                {/* <Route exact path="/registrarse" component={Registrarse}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/producto/:id" component={Descripcion} />
                <Route exact path="/agregar-producto" component={AgregarProducto}/>
                <Route exact path="/logout" component={Logout}/>
            */}
            </Switch>
            </Router>

            </HomeProvider>    
            )
            : (
                <Cargando />
            )}
        </>
    )
}

export default Routes
