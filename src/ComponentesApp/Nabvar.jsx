import React from "react";
import { Link } from "react-router-dom";



function Navbar (){

    return(
        <div className="Navegador">
            <nav className="navbar" >
            
            <div className="dropdown">
               <lu><Link  className = "dropdown-item"  to='/'>Inicio</Link></lu>
                </div>

             <div className="dropdown">
                <lu>  <Link className = "dropdown-item" to='/VerItem/Categorias/todos'>Productos Biblioteca</Link> </lu>
                </div>
 
                 <div className="dropdown">
                   <lu type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Productos</lu>
                     <ul className="dropdown-menu dropdown-menu-dark">
                      <Link  className = "dropdown-item"  to='/VerItem/Categorias/scott' >Scott</Link>  
                       <li><Link  className = "dropdown-item"  to='/VerItem/Categorias/Trek'>Trek</Link></li>
                        <li><Link  className = "dropdown-item"  to='/VerItem/Categorias/Colnago'>Colnago</Link></li>
                         <li> <Link  className = "dropdown-item"  to='/VerItem/Categorias/Giant'>Giant</Link></li>
                          </ul>
                    </div>

                  


                  <div className="dropdown">
                   <lu className="dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Accesorios FireBase</lu>
                     <ul className="dropdown-menu dropdown-menu-dark">
                      <Link  className = "dropdown-item"  to='/VerItemFire/Categorias/scott' >Scott</Link>  
                       <li><Link  className = "dropdown-item"  to='/VerItemFire/Categorias/Trek'>Trek</Link></li>
                        <li><Link  className = "dropdown-item"  to='/VerItemFire/Categorias/Colnago'>Colnago</Link></li>
                         <li> <Link  className = "dropdown-item"  to='/VerItemFire/Categorias/Giant'>Giant</Link></li>
                       </ul>
                        </div>

                   <div className="dropdown">
                      <lu> <Link className = "dropdown-item" to='/contenedorFetch/'>Productos Fetch</Link></lu>
                         </div>

               
                  <div className="dropdown">
                    <lu><Link className = "dropdown-item" to='/Formulario/'>Contacto</Link></lu>           
                      </div>

                      <div className="dropdown">
                         <lu><Link className = "dropdown-item" to='/CheckOut/'>Sign in</Link></lu>           
                          </div>

                       <div className="dropdown">
                        <lu><Link className = "botonCarrito1" type="button"  to='/Carrito'> <i className="bi bi-bag-check-fill">Carrito de compras</i></Link></lu>
                         </div>
                         <div className="dropdown">
                        <lu><Link className = ""  to='/BuscarPedido/' > Buscar Pedido</Link></lu>
                         </div>

             </nav> 
                
                  
        </div>
        
    )

}

export default Navbar;
